import "./globals.css"
import { Inter } from "next/font/google"
import ParticleBackground from "@/components/ParticleBackground"
import Sidebar from "@/components/Sidebar"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Modern Cardfolio",
  description: "A modern card-style portfolio template",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900 text-slate-100`}>
        <ParticleBackground />
        <Sidebar />
        {children}
      </body>
    </html>
  )
}

