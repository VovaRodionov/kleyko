'use client'

import { useState } from 'react'

interface CopyEmailButtonProps {
  className?: string
}

export default function CopyEmailButton({ className = '' }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('vskleyko@gmail.com')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy email: ', err)
    }
  }

  return (
    <span className="relative inline-block">
      <button
        onClick={handleCopy}
        className={`cursor-pointer transition-all focus:outline-none ${className}`}
        type="button"
      >
        copy my email
      </button>
      
      {/* Tooltip */}
      <span
        className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 text-xs text-white bg-[#282828] rounded shadow-lg pointer-events-none transition-all duration-200 whitespace-nowrap z-50 ${
          copied 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-1 scale-95'
        }`}
      >
        copied that
        {/* Tooltip Arrow */}
        <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#282828]" />
      </span>
    </span>
  )
}
