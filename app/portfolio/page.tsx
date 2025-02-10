"use client"

import { useState } from "react"
import Card from "@/components/Card"
import PageTransition from "@/components/PageTransition"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce platform built with Next.js and Stripe",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "React", "Stripe", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Firebase", "Material-UI"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Blog Platform",
    description: "A full-featured blog platform with markdown support",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "MDX", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <Card>
      <PageTransition>
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold mb-4">Portfolio</h1>
            <p className="text-lg text-slate-300">
              Here are some of my recent projects. Each one was carefully crafted with attention to detail and
              performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="glass-card rounded-lg overflow-hidden"
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <div className="relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                  />
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-black/60 flex items-center justify-center space-x-4"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink className="w-6 h-6" />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Github className="w-6 h-6" />
                      </a>
                    </motion.div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-slate-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </PageTransition>
    </Card>
  )
}

