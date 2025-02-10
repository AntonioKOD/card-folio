import Card from "@/components/Card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <Card>
      <div className="space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
          Hello, I&apos;m John Doe
        </h1>
        <p className="text-xl text-slate-300">
          A passionate web developer crafting beautiful and functional digital experiences.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button size="lg" className="group">
            View Portfolio
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline">
            Contact Me
          </Button>
        </div>
      </div>
    </Card>
  )
}

