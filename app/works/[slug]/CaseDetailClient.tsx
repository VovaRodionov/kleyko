'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Block {
  type: 'text' | 'image' | 'video'
  top: number
  left: number
  html?: string
  text?: string
  align?: 'left' | 'center' | 'right' | 'justify'
  src?: string
  width?: number
  height?: number
  youtube_id?: string
  photo?: string
}

interface CaseData {
  title: string
  blocks: Block[]
}

interface CaseDetailClientProps {
  slug: string
  caseData: CaseData
}

const translationMap: Record<string, string> = {
  // Manifesto 1 (B2B)
  "Они говорили, вести дела без офиса — невозможно.": "They said doing business without an office was impossible.",
  "Предугадывать желания каждого клиента — невозможно.": "Predicting the desires of every client was impossible.",
  "Принимать тысячи звонков разом — невозможно.": "Taking thousands of calls at once was impossible.",
  "Но пока одни говорят, другие делают невозможное вместе с технологиями.": "But while some are talking, others are doing the impossible together with technology.",
  "Ростелеком. Технологии возможностей.": "Rostelecom. Technologies of opportunity.",

  // Manifesto 2 (HR)
  "В Ростелекоме всё начинается с вызова.": "In Rostelecom, everything begins with a challenge.",
  "А каждый вызов – это возможность.": "And every challenge is an opportunity.",
  "Возможность заменить паспорт лицом": "An opportunity to replace a passport with a face",
  "Наделить интеллектом наши квартиры": "To give intelligence to our apartments",
  "Перенести целое село на век вперед": "To transport a whole village a century ahead",
  "А затем и всю страну!": "And then the whole country!",
  "В Ростелекоме – 120 000 сотрудников.": "There are 120,000 employees in Rostelecom.",
  "И возможности открываются перед каждым.": "And opportunities open up for everyone.",
  "Возможность однажды найти себя заново": "An opportunity to one day find yourself anew",
  "И понять, что не можешь остановиться.": "And realize that you cannot stop.",
  "Возможность пойти на работу из школы": "An opportunity to go to work straight from school",
  "Или вовсе перестать ходить в офис.": "Or stop going to the office altogether.",
  "Возможность за 3 года поменять 6 визиток": "An opportunity to change 6 business cards in 3 years",
  "И экспериментировать в самой передовой песочнице в стране": "And experiment in the most advanced sandbox in the country",
  "Но главное – это возможность быть первым, чем бы вы не занимались.": "But the main thing is the opportunity to be first, whatever you do.",
  "Создавать будущее, а не ждать, когда оно наступит.": "Creating the future, not waiting for it to arrive.",
  "Подумайте, какой вызов – у вас?": "Think, what challenge is yours?",
  "В Ростелекоме он станет новой возможностью.": "In Rostelecom, it will become a new opportunity.",

  // Manifesto 3 (IT)
  "Мы закрылись в своих квартирах, но мир остался открытым для нас.": "We shut ourselves in our apartments, but the world remained open to us.",
  "Полным новых возможностей благодаря технологиям.": "Full of new opportunities thanks to technology.",
  "Мы можем видеться с близкими": "We can see our loved ones",
  "Смотреть спектакли": "Watch theater plays",
  "Вести бизнес": "Run businesses",
  "И учиться, не выходя из дома.": "And study without leaving home.",
  "Да, мы не знаем, каким станет мир завтра.": "Yes, we don't know what the world will be like tomorrow.",
  "Но уверены, что всегда найдется человек, готовый сделать его лучше.": "But we are sure there will always be someone ready to make it better.",
  "И этим человеком можешь стать ты.": "And that person could be you.",
  "Участвуй в VirusHack от Ростелекома, чтобы создать цифровой проект, который откроет новые возможности для миллионов людей.": "Participate in VirusHack by Rostelecom to create a digital project that will open new opportunities for millions of people."
}

export default function CaseDetailClient({ slug, caseData }: CaseDetailClientProps) {
  const [translated, setTranslated] = useState(false)

  // Group consecutive images that share the exact same top position, and comments as well
  const rawBlocks = caseData.blocks || []
  const groupedBlocks: any[] = []
  
  let i = 0
  while (i < rawBlocks.length) {
    const block = rawBlocks[i]
    
    if (block.type === 'image') {
      const imgGroup = [block]
      let j = i + 1
      while (j < rawBlocks.length && rawBlocks[j].type === 'image' && Math.abs(rawBlocks[j].top - block.top) <= 5) {
        imgGroup.push(rawBlocks[j])
        j++
      }
      
      groupedBlocks.push({
        type: 'image_group',
        top: block.top,
        images: imgGroup
      })
      i = j
    } else {
      const isCommentBlock = (b: any) => 
         b.type === 'text' && 
        b.photo !== undefined;
        
      if (isCommentBlock(block)) {
        const commentGroup = [block]
        let j = i + 1
        while (j < rawBlocks.length && isCommentBlock(rawBlocks[j]) && Math.abs(rawBlocks[j].top - block.top) <= 10) {
          commentGroup.push(rawBlocks[j])
          j++
        }
        
        groupedBlocks.push({
          type: 'comment_group',
          top: block.top,
          comments: commentGroup
        })
        i = j
      } else {
        groupedBlocks.push(block)
        i++
      }
    }
  }

  const isHeading = (text: string) => {
    const clean = text.trim()
    return (
      clean.endsWith(':') || 
      clean === 'TASK' || 
      clean === 'SOLUTION' || 
      clean === 'MY ROLE' || 
      clean === 'RESULTS' || 
      clean === 'SCREENSHOTS' || 
      clean === 'COMMENTS' ||
      (clean.length < 30 && clean === clean.toUpperCase() && !clean.includes(' '))
    )
  }

  const cleanText = (txt: string) => {
    return txt.replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim()
  }

  const getPlainText = (html: string) => {
    return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim()
  }

  let caseTitle = ''
  let caseSubtitle = ''
  const blocksToRender = [...groupedBlocks]

  // Find the first text block
  const firstTextIdx = blocksToRender.findIndex((b) => b.type === 'text')
  if (firstTextIdx !== -1) {
    caseTitle = cleanText(blocksToRender[firstTextIdx].text)
    blocksToRender.splice(firstTextIdx, 1)

    // Check if the next block is also a text block (subtitle)
    if (firstTextIdx < blocksToRender.length && blocksToRender[firstTextIdx].type === 'text') {
      const nextBlockText = cleanText(blocksToRender[firstTextIdx].text)
      if (!nextBlockText.endsWith(':') && nextBlockText.length < 150) {
        caseSubtitle = nextBlockText
        blocksToRender.splice(firstTextIdx, 1)
      }
    }
  }

  return (
    <main className="min-h-screen w-full bg-[#ffe11e] text-[#282828] selection:bg-[#B8B8B8]">
      <div className="max-w-4xl mx-auto px-6 py-12 md:px-16 md:py-20 min-h-screen flex flex-col justify-between">
        {/* Header */}
        <header className="flex justify-between items-baseline border-b border-[#282828]/20 pb-8 mb-12">
          <div>
            <Link href="/">
              <span className="text-xl font-bold tracking-tight uppercase hover:opacity-75">LERA KLEYKO</span>
            </Link>
            <span className="text-xs uppercase px-2 py-1 bg-[#282828]/5 rounded font-mono text-[#282828]/60 ml-2">case</span>
          </div>
          <div>
            <Link href="/works" className="rm-link text-lg font-bold uppercase tracking-wider">
              Back to cases
            </Link>
          </div>
        </header>

        {/* Dynamic Content Stream */}
        <article className="flex-grow space-y-6 flex flex-col items-center">
          {caseTitle && (
            <div className="w-full text-center mb-12">
              <h1 className="text-3xl md:text-[40px] font-bold uppercase tracking-wide leading-tight font-mono mb-4 text-[#282828]">
                {caseTitle}
              </h1>
              {caseSubtitle && (
                <p className="text-lg md:text-[21px] font-normal tracking-wide text-[#282828]/70 font-mono mt-2">
                  {caseSubtitle}
                </p>
              )}
            </div>
          )}

          {blocksToRender.map((block, idx) => {
            if (block.type === 'text') {
              const isHead = isHeading(block.text)
              
              if (isHead) {
                return (
                  <h3 
                    key={idx} 
                    className="w-full text-xl md:text-2xl font-extrabold uppercase tracking-wider text-[#282828]/60 mt-16 mb-4 font-mono text-left"
                  >
                    {block.text.replace(/:$/, '')}
                  </h3>
                )
              }
              
              if (slug === 'rostelecom') {
                const paragraphs = block.html.split('</p>')
                  .map(p => p.trim())
                  .filter(Boolean)
                  .map(p => p.startsWith('<p>') ? p + '</p>' : '<p>' + p + '</p>')

                // Separate intro (English context) from the manifesto lines (Russian)
                const introParas: string[] = []
                const manifestoParas: string[] = []
                let manifestoStarted = false

                for (const p of paragraphs) {
                  const t = getPlainText(p)
                  if (!manifestoStarted && /[а-яА-ЯёЁ]/.test(t)) {
                    manifestoStarted = true
                  }
                  if (manifestoStarted) {
                    manifestoParas.push(p)
                  } else {
                    introParas.push(p)
                  }
                }

                const hasManifesto = manifestoParas.length > 0

                // Only apply Inter treatment to blocks with Russian manifesto text
                // Pure-English blocks fall through to standard rendering below
                if (!hasManifesto) {
                  // fall through to standard rendering
                } else {
                  const interStyle = { fontFamily: "'Inter', sans-serif" }

                  return (
                    <>
                      {/* Intro text — standard Courier styles */}
                      {introParas.length > 0 && (
                        <div
                          key={`${idx}-intro`}
                          className="w-full font-serif text-lg md:text-xl text-[#282828]/95 leading-relaxed flex text-left"
                        >
                          <div
                            className="max-w-2xl w-full"
                            dangerouslySetInnerHTML={{ __html: introParas.join('') }}
                          />
                        </div>
                      )}

                      {/* Manifesto — Inter, with toggle */}
                      <div key={`${idx}-manifesto`} className="w-full text-left flex justify-start">
                        <div className="max-w-2xl w-full space-y-2">
                          {manifestoParas.map((pHtml, pIdx) => {
                            const pText = getPlainText(pHtml)
                            const isRussian = /[а-яА-ЯёЁ]/.test(pText)
                            const translatedText = isRussian
                              ? (translationMap[pText] || translationMap[pText.replace(/\s+/g, ' ')] || pText)
                              : pText

                            const displayText = translated ? pText : translatedText

                            return (
                              <div
                                key={pIdx}
                                style={interStyle}
                                className="text-[14px] text-[#282828]/85 leading-relaxed"
                              >
                                {displayText}
                              </div>
                            )
                          })}

                          {/* Toggle button after manifesto */}
                          <div className="pt-4">
                            <button
                              onClick={() => setTranslated(!translated)}
                              style={interStyle}
                              className="text-[11px] uppercase font-semibold tracking-wider px-3 py-1 bg-[#282828]/10 hover:bg-[#282828]/20 text-[#282828] rounded cursor-pointer transition-colors"
                            >
                              {translated ? 'back to english' : 'show original'}
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                }
              }

              const alignClass = 
                block.align === 'center' ? 'text-center justify-center' :
                block.align === 'right' ? 'text-right justify-end' :
                block.align === 'justify' ? 'text-justify' : 'text-left';
                
              return (
                <div 
                  key={idx} 
                  className={`w-full font-serif text-lg md:text-xl text-[#282828]/95 leading-relaxed whitespace-pre-line flex ${alignClass}`}
                >
                  <div 
                    className="max-w-2xl w-full"
                    dangerouslySetInnerHTML={{ __html: block.html || '' }}
                  />
                </div>
              )
            }

            if (block.type === 'comment_group') {
              const cols = block.comments.length
              const isCentered = cols >= 3
              
              const gridClass = 'grid-cols-1 md:grid-cols-3';
                
              const alignClass = isCentered ? 'items-center text-center' : 'items-start text-left';
              const commentContentClass = isCentered ? 'comment-content-center' : 'comment-content-left';
                
              return (
                <div key={idx} className={`w-full grid ${gridClass} gap-8 my-8 pt-8 border-t border-[#282828]/15`}>
                  {block.comments.map((comment: any, cIdx: number) => (
                    <div key={cIdx} className={`w-full flex flex-col ${alignClass}`}>
                      {comment.photo && (
                        <div className="w-[80px] h-[80px] rounded-full overflow-hidden mb-4 border border-[#282828]/10 bg-white shadow-sm">
                          <img 
                            src={comment.photo} 
                            alt="Expert portrait"
                            className="w-full h-full object-cover block"
                          />
                        </div>
                      )}
                      <div 
                        className={`font-sans text-lg text-[#282828] leading-relaxed comment-content ${commentContentClass}`}
                        dangerouslySetInnerHTML={{ __html: comment.html || '' }}
                      />
                    </div>
                  ))}
                </div>
              )
            }

            if (block.type === 'video') {
              return (
                <div 
                  key={idx} 
                  className="w-full aspect-video bg-black border border-[#282828]/15 shadow-[8px_8px_0px_0px_rgba(40,40,40,1)] my-10 relative overflow-hidden"
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${block.youtube_id}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  />
                </div>
              )
            }

            if (block.type === 'image_group') {
              if (block.images.length === 1) {
                const img = block.images[0]
                return (
                  <div 
                    key={idx} 
                    className="w-full bg-white border border-[#282828]/10 shadow-[8px_8px_0px_0px_rgba(40,40,40,1)] my-6 overflow-hidden"
                  >
                    <img 
                      src={img.src} 
                      alt="Case screenshot"
                      className="w-full h-auto object-contain block"
                    />
                  </div>
                )
              } else {
                const cols = block.images.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3';
                return (
                  <div key={idx} className={`w-full grid grid-cols-1 ${cols} gap-6 my-6`}>
                    {block.images.map((img: any, sIdx: number) => (
                      <div 
                        key={sIdx} 
                        className="w-full bg-white border border-[#282828]/10 shadow-[6px_6px_0px_0px_rgba(40,40,40,1)] overflow-hidden flex items-center justify-center"
                      >
                        <img 
                          src={img.src} 
                          alt={`Case screenshot ${sIdx + 1}`}
                          className="w-full h-auto object-contain block"
                        />
                      </div>
                    ))}
                  </div>
                )
              }
            }

            return null
          })}
        </article>

        {/* Footer */}
        <footer className="border-t border-[#282828]/20 pt-12 mt-20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-[#282828]/50 uppercase tracking-widest font-mono">
            &copy; {new Date().getFullYear()} Valeria Kleyko. All rights reserved.
          </p>
          <div className="flex gap-8 text-lg font-bold uppercase tracking-wider">
            <Link href="/works" className="rm-link">
              All cases
            </Link>
            <Link href="/" className="rm-link">
              Main page
            </Link>
          </div>
        </footer >
      </div>
    </main >
  )
}
