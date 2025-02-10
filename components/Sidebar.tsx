"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Home, User, Briefcase, FileText, Mail, Github, Linkedin, Twitter, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface NavItem {
  icon: React.ElementType
  label: string
  href: string
}

const navItems: NavItem[] = [
  { icon: Home, label: "Home", href: "/" },
  { icon: User, label: "About", href: "/about" },
  { icon: Briefcase, label: "Portfolio", href: "/portfolio" },
  { icon: FileText, label: "Blog", href: "/blog" },
  { icon: Mail, label: "Contact", href: "/contact" },
]

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 right-4 z-50 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="h-6 w-6" />
      </Button>

      <aside
        className={cn(
          "fixed left-0 top-0 h-full w-64 bg-slate-900/90 backdrop-blur-md text-white p-6 flex flex-col transition-transform duration-300 ease-in-out z-40",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        )}
      >
        <div className="flex flex-col items-center mb-8">
          <Image
            src="/placeholder.svg?height=100&width=100"
            alt="Profile Picture"
            width={100}
            height={100}
            className="rounded-full border-4 border-slate-700 mb-4"
          />
          <h1 className="text-xl font-bold">John Doe</h1>
          <p className="text-slate-400">Web Developer</p>
        </div>

        <nav className="flex-1">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex justify-center space-x-4 pt-6 border-t border-slate-800">
          <Link href="https://github.com" target="_blank" className="hover:text-slate-300">
            <Github className="w-5 h-5" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="hover:text-slate-300">
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link href="https://twitter.com" target="_blank" className="hover:text-slate-300">
            <Twitter className="w-5 h-5" />
          </Link>
        </div>
      </aside>
    </>
  )
}

