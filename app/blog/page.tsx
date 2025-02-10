import Card from "@/components/Card"
import PageTransition from "@/components/PageTransition"
import { Badge } from "@/components/ui/badge"
import { formatDistance } from "date-fns"

const posts = [
  {
    title: "Building a Modern Web Application with Next.js",
    excerpt: "Learn how to create a full-stack application using Next.js 13 with App Router and Server Components.",
    date: "2023-12-01",
    tags: ["Next.js", "React", "Tutorial"],
    readTime: "5 min read",
  },
  {
    title: "Understanding TypeScript Generics",
    excerpt: "A comprehensive guide to using generics in TypeScript to write more reusable code.",
    date: "2023-11-15",
    tags: ["TypeScript", "Programming"],
    readTime: "4 min read",
  },
  {
    title: "Mastering CSS Grid Layout",
    excerpt: "Everything you need to know about CSS Grid Layout to create complex web layouts with ease.",
    date: "2023-11-01",
    tags: ["CSS", "Web Design"],
    readTime: "6 min read",
  },
]

export default function Blog() {
  return (
    <Card>
      <PageTransition>
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold mb-4">Blog</h1>
            <p className="text-lg text-slate-300">Thoughts, tutorials and insights about web development and design.</p>
          </div>

          <div className="space-y-6">
            {posts.map((post, index) => (
              <article key={index} className="glass-card rounded-lg p-6 transition-transform hover:scale-[1.02]">
                <div className="flex items-center gap-2 text-sm text-slate-400 mb-2">
                  <time>{formatDistance(new Date(post.date), new Date(), { addSuffix: true })}</time>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-slate-300 mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </PageTransition>
    </Card>
  )
}

