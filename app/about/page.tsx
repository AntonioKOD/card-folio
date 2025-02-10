import Card from "@/components/Card"
import PageTransition from "@/components/PageTransition"
import { Badge } from "@/components/ui/badge"

export default function About() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "GraphQL",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Git",
  ]

  return (
    <Card>
      <PageTransition>
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold mb-4">About Me</h1>
            <div className="prose prose-invert">
              <p className="text-lg text-slate-300">
                I&apos;m a full-stack developer with over 5 years of experience in building web applications. I specialize in
                React and Node.js, with a strong focus on creating performant and user-friendly applications.
              </p>
              <p className="text-lg text-slate-300 mt-4">
                When I&apos;m not coding, you can find me contributing to open-source projects, writing technical articles,
                or exploring new technologies. I&apos;m passionate about creating clean, maintainable code and sharing
                knowledge with the developer community.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Skills & Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Experience</h2>
            <div className="space-y-6">
              <div className="glass-card rounded-lg p-4">
                <h3 className="text-xl font-semibold">Senior Frontend Developer</h3>
                <p className="text-slate-400">Tech Corp • 2021 - Present</p>
                <p className="mt-2 text-slate-300">
                  Led the development of multiple React applications, improving performance and user experience.
                </p>
              </div>
              <div className="glass-card rounded-lg p-4">
                <h3 className="text-xl font-semibold">Full Stack Developer</h3>
                <p className="text-slate-400">Digital Solutions Inc • 2019 - 2021</p>
                <p className="mt-2 text-slate-300">
                  Developed and maintained various web applications using React and Node.js.
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    </Card>
  )
}

