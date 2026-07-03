'use client'

import Link from 'next/link'
import Image from 'next/image'
import CopyEmailButton from './CopyEmailButton'

export default function ReadymagHome() {
  return (
    <div className="w-full min-h-screen bg-white text-black font-sans selection:bg-[#B8B8B8] overflow-x-hidden">
      {/* Desktop Layout (1024px absolute grid within full-width sections) */}
      <div className="hidden lg:block w-full">
        
        {/* SECTION 1: HERO (White Background, Height 1434px) */}
        <section className="w-full bg-white relative h-[1434px]">
          <div className="relative mx-auto w-[1024px] h-full">
            {/* Rectangle Hero Image */}
            <div className="absolute left-[401px] top-[183px] w-[256px] h-[360px] z-10 animate-[fadeInDown_1.2s_ease-out]">
              <div className="relative w-full h-full overflow-hidden border border-black/10">
                <Image
                  src="/images/hero_image.webp"
                  alt="Lera Kleyko"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Name LERA KLEYKO (Black color) */}
            <div className="absolute left-0 top-[243px] w-[1024px] text-center z-20 pointer-events-none">
              <h1 className="text-[69px] font-bold tracking-normal uppercase font-mono leading-none text-black">
                LERA KLEYKO
              </h1>
            </div>

            {/* Subtitle head of imagineering */}
            <div className="absolute left-[371px] top-[318px] w-[330px] text-center z-20 pointer-events-none">
              <p className="text-[22px] font-normal uppercase font-mono tracking-wider text-black/60">
                head of imagineering
              </p>
            </div>

            {/* THE REASON YOU ARE HERE Heading */}
            <div className="absolute left-[109px] top-[818px] w-[738px]">
              <h2 className="text-[40px] font-bold uppercase tracking-wide font-mono leading-tight">
                THE REASON YOU ARE HERE
              </h2>
            </div>

            {/* Hero Paragraphs */}
            <div className="absolute left-[109px] top-[901px] w-[471px] space-y-4 text-base leading-relaxed text-black/90 font-serif">
              <p>Tomorrow the world will change again.</p>
              <p>I don't know exactly how, but I do know how to make these changes work for your business.</p>
              <p>So if you need fast &amp; efficient solution, creative strategy, concepts, copy lines, videos, workshops or even in-house creative team — I'm your gal.</p>
            </div>

            {/* Metrics Grid */}
            <div className="absolute left-[109px] top-[1110px] w-[432px] h-[100px]">
              {/* Numbers */}
              <div className="absolute left-0 top-0 text-[40px] font-bold font-mono">2013</div>
              <div className="absolute left-[152px] top-0 text-[40px] font-bold font-mono">$100M</div>
              <div className="absolute left-[334px] top-0 text-[40px] font-bold font-mono">12</div>

              {/* Labels */}
              <div className="absolute left-0 top-[46px] w-[116px] text-sm leading-snug text-black/60">
                start of creative career
              </div>
              <div className="absolute left-[152px] top-[46px] w-[171px] text-sm leading-snug text-black/60">
                revenue brought by my ideas to brands
              </div>
              <div className="absolute left-[334px] top-[46px] w-[86px] text-sm leading-snug text-black/60">
                people were led
              </div>
            </div>

            {/* Also Teaching & Courses */}
            <div className="absolute left-[109px] top-[1275px] w-[743px] h-[186px]">
              <div className="absolute left-0 top-0 text-[40px] font-bold font-mono">also teaching</div>
              
              {/* HSE University */}
              <div className="absolute left-0 top-[73px] flex items-center gap-4">
                <div className="relative w-[60px] h-[59px] rounded-full overflow-hidden border border-black/10">
                  <Image src="/images/img_9b5ea99812d16937ecfe1d7c3dfc9181.png" alt="HSE" fill className="object-cover" />
                </div>
                <div>
                  <div className="font-bold text-sm">HSE University</div>
                  <div className="text-xs text-black/50">Russia</div>
                  <div className="text-xs text-black/50 font-serif italic">Creativity in digital</div>
                </div>
              </div>

              {/* Skillbox */}
              <div className="absolute left-[265px] top-[73px] flex items-center gap-4">
                <div className="relative w-[59px] h-[59px] rounded-full overflow-hidden border border-black/10">
                  <Image src="/images/img_613c0a7e8cdf6012e127c04b3213bb2d.png" alt="Skillbox" fill className="object-cover" />
                </div>
                <div>
                  <div className="font-bold text-sm">Skillbox</div>
                  <div className="text-xs text-black/50">Russia</div>
                  <div className="text-xs text-black/50 font-serif italic">Creativity in SMM</div>
                </div>
              </div>

              {/* TikTok */}
              <div className="absolute left-[509px] top-[73px] flex items-center gap-4">
                <div className="relative w-[59px] h-[59px] rounded-full overflow-hidden border border-black/10">
                  <Image src="/images/img_9449e2fdddca37290ee5d2fda9cbe284.png" alt="TikTok" fill className="object-cover" />
                </div>
                <div>
                  <div className="font-bold text-sm">TikTok for Business</div>
                  <div className="text-xs text-black/50">Eastern Europe</div>
                  <div className="text-xs text-black/50 font-serif italic">Creativity for business</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: CASES (100% Width Yellow Background, Height 1367px) */}
        <section className="w-full bg-[#ffe11e] relative h-[1367px]">
          <div className="relative mx-auto w-[1024px] h-full z-10">
            {/* CASES Heading */}
            <div className="absolute left-[115px] top-[78px] w-[738px]">
              <h2 className="text-[40px] font-bold uppercase tracking-normal font-mono leading-none">
                CASES
              </h2>
            </div>

            {/* Case 1: Wink UFC */}
            <div className="absolute left-[115px] top-[200px] w-[450px] h-[278px] flex items-center gap-8">
              <Link href="/works/winkufc" className="relative w-[262px] h-[278px] group hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-full overflow-hidden border border-black/10">
                  <Image
                    src="/images/main-works-wink.webp"
                    alt="Wink UFC"
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
              <div className="w-[180px]">
                <Link href="/works/winkufc" className="group">
                  <h3 className="text-lg font-bold uppercase group-hover:underline">Wink UFC</h3>
                  <p className="text-sm font-serif italic text-black/60 mt-1">TV-ad</p>
                </Link>
              </div>
            </div>

            {/* Dashed Line Wink -> Center */}
            <div className="absolute left-[555px] top-[307px] w-[167px] h-0 border-t border-dashed border-black"></div>
            <div className="absolute left-[638px] top-[307px] w-0 h-[200px] border-l border-dashed border-black"></div>

            {/* Case 2: Disney (Right Aligned Circle, Left Aligned Text) */}
            <div className="absolute left-[200px] top-[521px] w-[637px] h-[278px] flex items-center justify-end gap-8">
              <div className="w-[200px] text-right">
                <Link href="/works/thosebugs" className="group">
                  <h3 className="text-lg font-bold uppercase group-hover:underline">Disney</h3>
                  <p className="text-sm font-serif italic text-black/60 mt-1 font-normal">Festival case</p>
                </Link>
              </div>
              <Link href="/works/thosebugs" className="relative w-[262px] h-[278px] group hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-full overflow-hidden border border-black/10">
                  <Image
                    src="/images/main-works-disney.webp"
                    alt="Disney"
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
            </div>

            {/* Dashed Line Center -> Beauty Bomb */}
            <div className="absolute left-[246px] top-[633px] w-[167px] h-0 border-t border-dashed border-black"></div>
            <div className="absolute left-[246px] top-[633px] w-0 h-[220px] border-l border-dashed border-black"></div>

            {/* Case 3: Beauty Bomb */}
            <div className="absolute left-[116px] top-[852px] w-[450px] h-[278px] flex items-center gap-8">
              <Link href="/works/beautybomb" className="relative w-[262px] h-[278px] group hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-full overflow-hidden border border-black/10">
                  <Image
                    src="/images/main-works-beauty_bomb.webp"
                    alt="Beauty Bomb"
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
              <div className="w-[180px]">
                <Link href="/works/beautybomb" className="group">
                  <h3 className="text-lg font-bold uppercase group-hover:underline">Beauty Bomb</h3>
                  <p className="text-sm font-serif italic text-black/60 mt-1">Digital concept</p>
                </Link>
              </div>
            </div>

            {/* Dashed Line Beauty Bomb -> Button */}
            <div className="absolute left-[591px] top-[973px] w-[131px] h-0 border-t border-dashed border-black"></div>
            <div className="absolute left-[722px] top-[973px] w-0 h-[220px] border-l border-dashed border-black"></div>

            {/* Load more button */}
            <div className="absolute left-[656px] top-[1193px] w-[134px] h-[56px]">
              <Link
                href="/works"
                className="flex items-center justify-center w-full h-full bg-[#282828] hover:bg-black text-white font-bold font-sans text-sm uppercase tracking-wider transition-colors border border-transparent rounded-[2px]"
              >
                Load more
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 3: CONTACTS (White background, Yellow bottom block, height 1200px) */}
        <section className="w-full bg-white relative h-[1200px]">
          {/* Yellow triangle decoration (100% width) */}
          <div className="absolute left-0 top-0 w-full h-[154px] z-0 overflow-hidden">
            <svg viewBox="0 0 1446 154" fill="none" className="w-full h-full transform scale-x-[-1] scale-y-[-1] preserve-3d">
              <path d="M723 0 L0 154 L1446 154 Z" fill="#ffe11e" />
            </svg>
          </div>

          <div className="relative mx-auto w-[1024px] h-full z-10">
            {/* CONTACTS Heading */}
            <div className="absolute left-[130px] top-[202px] w-[738px]">
              <h2 className="text-[40px] font-bold uppercase tracking-normal font-mono leading-none">
                CONTACTS
              </h2>
            </div>

            {/* Email */}
            <div className="absolute left-[268px] top-[285px] w-[480px] text-center">
              <CopyEmailButton className="text-[18px] font-normal font-sans hover:opacity-70 underline" />
            </div>

            {/* Social Icons */}
            <div className="absolute left-[401px] top-[337px] w-[222px] h-[42px] flex items-center justify-between">
              <a href="https://www.facebook.com/profile.php?id=100012842322079" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
                <img src="https://d3n32ilufxuvd1.cloudfront.net/55b79532b899cd6950ac7b14/5c0eae23a1ae084a13ae5e0f/upload-81f2622b-9cf3-4715-b628-6eca09fcdda6.png" alt="FB" className="w-5 h-10 object-contain" />
              </a>
              <a href="https://www.linkedin.com/in/lera-%D0%BAleyko-6ba3a21a0" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
                <img src="/images/img_6b65f6095c67605102f8159e0fbd5212.png" alt="LinkedIn" className="w-[42px] h-[42px] object-contain" />
              </a>
              <a href="http://www.t.me/lerakleyko" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
                <img src="https://d3n32ilufxuvd1.cloudfront.net/55b79532b899cd6950ac7b14/5c0eae23a1ae084a13ae5e0f/upload-0a029fed-fdde-48d7-8d14-7221a105bc8a.png" alt="TG" className="w-12 h-10 object-contain" />
              </a>
            </div>
          </div>

          {/* Yellow block bottom footer (100% width) */}
          <div className="absolute left-0 bottom-0 w-full h-[536px] bg-[#ffe11e] z-0"></div>
        </section>
      </div>

      {/* Mobile Layout (Responsive Fallback) */}
      <div className="block lg:hidden px-6 py-12 max-w-xl mx-auto space-y-16">
        {/* Hero */}
        <div className="text-center space-y-6">
          <div className="relative w-48 h-64 mx-auto overflow-hidden border border-black/10">
            <Image src="/images/hero_image.webp" alt="Lera Kleyko" fill className="object-cover" />
          </div>
          <div>
            <h1 className="text-4xl font-bold font-mono tracking-tight text-black">LERA KLEYKO</h1>
            <p className="text-lg font-mono italic text-black/60 mt-1">head of imagineering</p>
          </div>
        </div>

        {/* Bio */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold font-mono uppercase">THE REASON YOU ARE HERE</h2>
          <div className="space-y-4 font-serif text-lg leading-relaxed text-black/90">
            <p>Tomorrow the world will change again.</p>
            <p>I don't know exactly how, but I do know how to make these changes work for your business.</p>
            <p>So if you need fast &amp; efficient solution, creative strategy, concepts, copy lines, videos, workshops or even in-house creative team — I'm your gal.</p>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4 border-y border-black/10 py-8 text-center">
          <div>
            <div className="text-2xl font-bold font-mono">2013</div>
            <div className="text-[10px] uppercase text-black/50 mt-1">career start</div>
          </div>
          <div>
            <div className="text-2xl font-bold font-mono">$100M</div>
            <div className="text-[10px] uppercase text-black/50 mt-1">revenue</div>
          </div>
          <div>
            <div className="text-2xl font-bold font-mono">12</div>
            <div className="text-[10px] uppercase text-black/50 mt-1">led people</div>
          </div>
        </div>

        {/* Teaching */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold font-mono uppercase text-black/40">also teaching</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-black/10 flex-shrink-0">
                <Image src="/images/img_9b5ea99812d16937ecfe1d7c3dfc9181.png" alt="HSE" fill className="object-cover" />
              </div>
              <div>
                <div className="font-bold text-sm">HSE University</div>
                <div className="text-xs text-black/50">Russia • Creativity in digital</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-black/10 flex-shrink-0">
                <Image src="/images/img_613c0a7e8cdf6012e127c04b3213bb2d.png" alt="Skillbox" fill className="object-cover" />
              </div>
              <div>
                <div className="font-bold text-sm">Skillbox</div>
                <div className="text-xs text-black/50">Russia • Creativity in SMM</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-black/10 flex-shrink-0">
                <Image src="/images/img_9449e2fdddca37290ee5d2fda9cbe284.png" alt="TikTok" fill className="object-cover" />
              </div>
              <div>
                <div className="font-bold text-sm">TikTok for Business</div>
                <div className="text-xs text-black/50">Eastern Europe • Creativity for business</div>
              </div>
            </div>
          </div>
        </div>

        {/* Cases */}
        <div className="bg-[#ffe11e] -mx-6 px-6 py-12 space-y-8">
          <h2 className="text-2xl font-bold font-mono uppercase">CASES</h2>
          <div className="space-y-8">
            <Link href="/works/winkufc" className="flex items-center gap-4 group">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border border-black/10 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                <Image src="/images/main-works-wink.webp" alt="Wink" fill className="object-cover" />
              </div>
              <div>
                <h3 className="font-bold uppercase group-hover:underline">Wink UFC</h3>
                <p className="text-xs font-serif italic text-black/60">TV-ad</p>
              </div>
            </Link>

            <Link href="/works/thosebugs" className="flex items-center gap-4 group">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border border-black/10 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                <Image src="/images/main-works-disney.webp" alt="Disney" fill className="object-cover" />
              </div>
              <div>
                <h3 className="font-bold uppercase group-hover:underline">Disney</h3>
                <p className="text-xs font-serif italic text-black/60">Festival case</p>
              </div>
            </Link>

            <Link href="/works/beautybomb" className="flex items-center gap-4 group">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border border-black/10 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                <Image src="/images/main-works-beauty_bomb.webp" alt="Beauty Bomb" fill className="object-cover" />
              </div>
              <div>
                <h3 className="font-bold uppercase group-hover:underline">Beauty Bomb</h3>
                <p className="text-xs font-serif italic text-black/60">Digital concept</p>
              </div>
            </Link>
          </div>

          <div className="pt-4 text-center">
            <Link
              href="/works"
              className="inline-block bg-[#282828] text-white hover:bg-black font-bold uppercase text-sm tracking-wider px-8 py-3 rounded-[2px]"
            >
              Load more
            </Link>
          </div>
        </div>

        {/* Contacts */}
        <div className="text-center space-y-6 pt-8 border-t border-black/10">
          <h2 className="text-2xl font-bold font-mono uppercase">CONTACTS</h2>
          <div>
            <CopyEmailButton className="text-lg hover:opacity-70 underline" />
          </div>
          <div className="flex justify-center gap-8">
            <a href="https://www.facebook.com/profile.php?id=100012842322079" target="_blank" rel="noopener noreferrer">
              <img src="https://d3n32ilufxuvd1.cloudfront.net/55b79532b899cd6950ac7b14/5c0eae23a1ae084a13ae5e0f/upload-81f2622b-9cf3-4715-b628-6eca09fcdda6.png" alt="FB" className="h-8 object-contain" />
            </a>
            <a href="https://www.linkedin.com/in/lera-%D0%BAleyko-6ba3a21a0" target="_blank" rel="noopener noreferrer">
              <img src="/images/img_6b65f6095c67605102f8159e0fbd5212.png" alt="LinkedIn" className="h-8 object-contain" />
            </a>
            <a href="http://www.t.me/lerakleyko" target="_blank" rel="noopener noreferrer">
              <img src="https://d3n32ilufxuvd1.cloudfront.net/55b79532b899cd6950ac7b14/5c0eae23a1ae084a13ae5e0f/upload-0a029fed-fdde-48d7-8d14-7221a105bc8a.png" alt="TG" className="h-8 object-contain" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
