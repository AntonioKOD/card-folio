"use client"

import { useState } from "react"
import Card from "@/components/Card"
import PageTransition from "@/components/PageTransition"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, Send } from "lucide-react"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
  }

  return (
    <Card>
      <PageTransition>
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
            <p className="text-lg text-slate-300">Have a question or want to work together? Feel free to reach out!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input id="name" type="text" placeholder="Your name" required className="glass-card" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="your@email.com" required className="glass-card" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message" required className="glass-card min-h-[150px]" />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>

            <div className="space-y-6">
              <div className="glass-card rounded-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Mail className="h-6 w-6 text-blue-400" />
                  <h2 className="text-xl font-semibold">Email</h2>
                </div>
                <p className="text-slate-300">john.doe@example.com</p>
              </div>

              <div className="glass-card rounded-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <MessageSquare className="h-6 w-6 text-green-400" />
                  <h2 className="text-xl font-semibold">Social Media</h2>
                </div>
                <div className="space-y-2 text-slate-300">
                  <p>Twitter: @johndoe</p>
                  <p>LinkedIn: /in/johndoe</p>
                  <p>GitHub: @johndoe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    </Card>
  )
}

