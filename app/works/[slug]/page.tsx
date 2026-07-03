import Link from 'next/link'
import { notFound } from 'next/navigation'
import blocksData from '@/lib/case_blocks.json'

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
}

interface CaseData {
  title: string
  blocks: Block[]
}

const catalog: Record<string, CaseData> = blocksData as any

// Generate static routes for Next.js build
export async function generateStaticParams() {
  return Object.keys(catalog).map((slug) => ({
    slug,
  }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function CaseDetailPage({ params }: PageProps) {
  const { slug } = await params
  const caseData = catalog[slug]

  if (!caseData) {
    notFound()
  }

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
        {groupedBlocks.map((block, idx) => {
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
            
            // Always use a 3-column grid to maintain uniform column widths and spacing across all rows
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
      </footer>
      </div>
    </main>
  )
}
