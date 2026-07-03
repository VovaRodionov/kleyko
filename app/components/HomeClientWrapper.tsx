'use client'

import { useState } from 'react'
import ModernHome from './ModernHome'
import ReadymagHome from './ReadymagHome'

export default function HomeClientWrapper() {
  const [isModern, setIsModern] = useState(true)

  return (
    <div className="relative min-h-screen">
      {/* Version Switcher (Fixed in Top Right, No Labels) */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={() => setIsModern(!isModern)}
          className="relative inline-flex h-7 w-12 items-center rounded-full bg-[#282828] border border-[#282828] cursor-pointer transition-colors duration-300 focus:outline-none shadow-[2px_2px_0px_0px_rgba(40,40,40,0.15)]"
          aria-label="Toggle design version"
        >
          <span
            className={`${
              isModern ? 'translate-x-6 bg-[#ffe11e]' : 'translate-x-1 bg-white'
            } inline-block h-4 w-4 transform rounded-full transition-transform duration-300 ease-in-out`}
          />
        </button>
      </div>

      {/* Render selected version */}
      {isModern ? <ModernHome /> : <ReadymagHome />}
    </div>
  )
}
