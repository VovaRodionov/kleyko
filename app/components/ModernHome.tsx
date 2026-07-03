'use client'

import Link from 'next/link'
import Image from 'next/image'
import CopyEmailButton from './CopyEmailButton'

export default function ModernHome() {
  return (
    <div className="min-h-screen bg-white text-[#282828] selection:bg-[#B8B8B8] px-6 py-12 md:px-16 md:py-20 max-w-5xl mx-auto flex flex-col justify-between">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:justify-between md:items-baseline border-b border-[#282828]/10 pb-8 mb-16">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight uppercase">LERA KLEYKO</h1>
          <p className="text-xl italic font-serif text-[#282828]/70 mt-1">head of imagineering</p>
        </div>
        <div className="mt-4 md:mt-0">
          <CopyEmailButton className="rm-link text-lg font-medium font-mono" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="mb-20 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter uppercase mb-6 leading-none">
            THE REASON YOU ARE HERE
          </h2>
          <p className="text-lg md:text-2xl font-serif leading-relaxed text-[#282828]/95">
            Tomorrow the world will change again. I don't know exactly how, but I do know how to make these changes work for your business. So if you need fast &amp; efficient solution, creative strategy, concepts, copy lines, videos, workshops or even in-house creative team — I'm your gal.
          </p>
        </div>
        <div className="md:col-span-4 flex justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border border-black/10">
            <Image
              src="/images/hero_image.webp"
              alt="Lera Kleyko"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 border-y border-[#282828]/10 py-12">
        <div className="flex flex-col">
          <span className="text-5xl md:text-7xl font-extrabold tracking-tight">2013</span>
          <span className="text-sm uppercase tracking-wider text-[#282828]/60 mt-2">start of creative career</span>
        </div>
        <div className="flex flex-col">
          <span className="text-5xl md:text-7xl font-extrabold tracking-tight">$100M</span>
          <span className="text-sm uppercase tracking-wider text-[#282828]/60 mt-2">revenue brought by my ideas to brands</span>
        </div>
        <div className="flex flex-col">
          <span className="text-5xl md:text-7xl font-extrabold tracking-tight">12</span>
          <span className="text-sm uppercase tracking-wider text-[#282828]/60 mt-2">people were led</span>
        </div>
      </section>

      {/* Teaching & Courses */}
      <section className="mb-20">
        <h3 className="text-xl font-bold uppercase tracking-wider mb-8 text-[#282828]/50">teaching &amp; courses</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* HSE */}
          <div className="flex gap-4 items-start">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-black/10 flex-shrink-0 mt-0.5">
              <Image
                src="/images/img_9b5ea99812d16937ecfe1d7c3dfc9181.png"
                alt="HSE University"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-baseline gap-2 flex-wrap">
                <h4 className="font-bold text-lg leading-tight">HSE</h4>
                <span className="text-[10px] uppercase font-sans tracking-wide px-2 py-0.5 bg-[#282828]/5 text-[#282828]/60 rounded">Russia</span>
              </div>
              <p className="text-sm font-serif italic text-[#282828]/70 mt-1">"Creativity in digital"</p>
            </div>
          </div>

          {/* Skillbox */}
          <div className="flex gap-4 items-start">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-black/10 flex-shrink-0 mt-0.5">
              <Image
                src="/images/img_613c0a7e8cdf6012e127c04b3213bb2d.png"
                alt="Skillbox"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-baseline gap-2 flex-wrap">
                <h4 className="font-bold text-lg leading-tight">Skillbox</h4>
                <span className="text-[10px] uppercase font-sans tracking-wide px-2 py-0.5 bg-[#282828]/5 text-[#282828]/60 rounded">Russia</span>
              </div>
              <p className="text-sm font-serif italic text-[#282828]/70 mt-1">"Creativity in SMM"</p>
            </div>
          </div>

          {/* TikTok */}
          <div className="flex gap-4 items-start">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-black/10 flex-shrink-0 mt-0.5">
              <Image
                src="/images/img_9449e2fdddca37290ee5d2fda9cbe284.png"
                alt="TikTok for Business"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-baseline gap-2 flex-wrap">
                <h4 className="font-bold text-lg leading-tight">TikTok</h4>
                <span className="text-[10px] uppercase font-sans tracking-wide px-2 py-0.5 bg-[#282828]/5 text-[#282828]/60 rounded">Europe</span>
              </div>
              <p className="text-sm font-serif italic text-[#282828]/70 mt-1">"Creativity for business"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Cases */}
      <section className="mb-20">
        <div className="flex justify-between items-baseline mb-10">
          <h3 className="text-2xl font-extrabold uppercase tracking-tight">SELECTED CASES</h3>
          <Link href="/works" className="rm-link text-lg font-bold uppercase tracking-wider">
            View all
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Case 1: Wink UFC */}
          <Link href="/works/winkufc" className="group block">
            <div className="aspect-[4/3] bg-[#ffe11e] flex items-center justify-center p-6 border border-[#282828]/10 overflow-hidden relative card-hover-effect">
              <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-500">
                <Image 
                  src="/images/img_5317c3f449076ab5dd6d7a0fc9aaf9c6.png" 
                  alt="Wink UFC"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="mt-4">
              <h4 className="font-bold text-lg leading-tight uppercase group-hover:underline">Wink UFC</h4>
              <p className="text-sm text-[#282828]/60 mt-1 font-serif">TV-ad case</p>
            </div>
          </Link>

          {/* Case 2: Disney */}
          <Link href="/works/thosebugs" className="group block">
            <div className="aspect-[4/3] bg-[#ffe11e] flex items-center justify-center p-6 border border-[#282828]/10 overflow-hidden relative card-hover-effect">
              <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-500">
                <Image 
                  src="/images/img_9dd634012b019cd6a57220ac8a8ac1c8.jpg" 
                  alt="Disney"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="mt-4">
              <h4 className="font-bold text-lg leading-tight uppercase group-hover:underline">Disney</h4>
              <p className="text-sm text-[#282828]/60 mt-1 font-serif">Festival case</p>
            </div>
          </Link>

          {/* Case 3: Beauty Bomb */}
          <Link href="/works/beautybomb" className="group block">
            <div className="aspect-[4/3] bg-[#ffe11e] flex items-center justify-center p-6 border border-[#282828]/10 overflow-hidden relative card-hover-effect">
              <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-500">
                <Image 
                  src="/images/img_b68015975ec95fa58db691e53aa33067.png" 
                  alt="Beauty Bomb"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="mt-4">
              <h4 className="font-bold text-lg leading-tight uppercase group-hover:underline">Beauty Bomb</h4>
              <p className="text-sm text-[#282828]/60 mt-1 font-serif">Digital concept</p>
            </div>
          </Link>
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/works" 
            className="inline-block bg-[#ffe11e] hover:bg-[#ffe11e]/90 text-[#282828] font-bold text-lg uppercase tracking-wider px-10 py-4 border border-[#282828] shadow-[4px_4px_0px_0px_rgba(40,40,40,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            Load more cases
          </Link>
        </div>
      </section>

      {/* Footer / Contacts */}
      <footer className="border-t border-[#282828]/10 pt-12 mt-16 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-[#282828]/50 uppercase tracking-widest font-mono">
          &copy; {new Date().getFullYear()} Valeria Kleyko. All rights reserved.
        </p>
        <div className="flex gap-8 text-lg font-bold uppercase tracking-wider">
          <a href="https://www.facebook.com/profile.php?id=100012842322079" target="_blank" rel="noopener noreferrer" className="rm-link">
            Facebook
          </a>
          <a href="https://www.linkedin.com/in/lera-%D0%BAleyko-6ba3a21a0" target="_blank" rel="noopener noreferrer" className="rm-link">
            LinkedIn
          </a>
          <a href="http://www.t.me/lerakleyko" target="_blank" rel="noopener noreferrer" className="rm-link">
            Telegram
          </a>
        </div>
      </footer>
    </div>
  )
}
