import type React from "react"

interface CardProps {
  children: React.ReactNode
}

export default function Card({ children }: CardProps) {
  return (
    <div className="relative ml-0 md:ml-64 min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Card glow effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-20 blur" />

          {/* Card content */}
          <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-6 md:p-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

