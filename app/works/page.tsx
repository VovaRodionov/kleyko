import Link from 'next/link'
import Image from 'next/image'
import { activeCases } from '@/lib/works-data'

export default function WorksPage() {
  return (
    <main className="min-h-screen w-full bg-[#ffe11e] text-[#282828] selection:bg-[#B8B8B8]">
      <div className="max-w-5xl mx-auto px-6 py-12 md:px-16 md:py-20 min-h-screen flex flex-col justify-between">
        {/* Header */}
      <header className="flex justify-between items-baseline border-b border-[#282828]/20 pb-8 mb-16">
        <div>
          <Link href="/">
            <span className="text-xl font-bold tracking-tight uppercase hover:opacity-75">LERA KLEYKO</span>
          </Link>
          <span className="text-xs uppercase px-2 py-1 bg-[#282828]/5 rounded font-mono text-[#282828]/60 ml-2">works</span>
        </div>
        <div>
          <Link href="/" className="rm-link text-lg font-bold uppercase tracking-wider">
            Back to main
          </Link>
        </div>
      </header>

      {/* Title */}
      <section className="mb-16 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter uppercase mb-4 leading-none">
          CASES
        </h2>
        <p className="text-lg italic font-serif text-[#282828]/70">
          A selection of projects from B2B, digital, and social media comms.
        </p>
      </section>

      {/* Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 mb-20">
        {activeCases.map((c) => (
          <Link key={c.slug} href={`/works/${c.slug}`} className="group block">
            <div 
              className="w-full aspect-[356/232] overflow-hidden relative card-hover-effect flex items-center justify-center"
              style={{ backgroundColor: c.bgColor || '#ffffff' }}
            >
              {c.thumbnail ? (
                <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                  <img 
                    src={c.thumbnail} 
                    alt={c.title}
                    className={`w-full h-full block ${c.fit === 'contain' ? 'object-contain' : 'object-cover'}`}
                  />
                </div>
              ) : (
                <span className="text-2xl font-extrabold uppercase" style={{ color: c.textColor || '#282828' }}>
                  {c.brand}
                </span>
              )}
            </div>
            <div className="mt-4">
              <h4 className="font-bold text-lg leading-tight uppercase group-hover:underline">{c.brand}</h4>
              <p className="text-sm text-[#282828]/60 mt-1 font-serif">{c.title}</p>
            </div>
          </Link>
        ))}
      </section>

      {/* Footer */}
      <footer className="border-t border-[#282828]/20 pt-12 mt-16 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-[#282828]/50 uppercase tracking-widest font-mono">
          &copy; {new Date().getFullYear()} Valeria Kleyko. All rights reserved.
        </p>
        <div className="flex gap-8 text-lg font-bold uppercase tracking-wider">
          <Link href="/" className="rm-link">
            Main page
          </Link>
          <a href="mailto:vskleyko@gmail.com" className="rm-link">
            Email
          </a>
        </div>
      </footer>
      </div>
    </main>
  )
}
