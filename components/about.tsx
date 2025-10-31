export function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-gradient-to-b from-background/30 via-background/40 to-background/50 relative z-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              I'm a first-year CSE student specializing in Artificial Intelligence and Machine Learning, passionate
              about creating smarter and simpler tech solutions. I love blending logic with creativity, building
              intelligent systems, leading teams, and exploring innovation through collaboration. My goal is to grow
              into a skilled AI developer who builds meaningful, real-world applications that make a difference.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 h-fit backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-primary mb-4">Quick Facts</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-accent font-semibold">Education</p>
                <p className="text-foreground/70">B.Tech CSE (AI & ML)</p>
                <p className="text-foreground/60 text-xs">VITU Chennai (2025-2029)</p>
              </div>
              <div>
                <p className="text-accent font-semibold">Languages</p>
                <p className="text-foreground/70">English, French, Bengali, Gujarati</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-accent/20 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-accent mb-4">Soft Skills</h3>
            <ul className="space-y-2 text-foreground/80">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                Communication
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                Leadership
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                Team Collaboration
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                Problem Solving
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-secondary/10 to-primary/10 border border-primary/20 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-primary mb-4">Interests</h3>
            <ul className="space-y-2 text-foreground/80">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Singing & Music
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Classical Dance
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Anchoring & Public Speaking
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Reading & Writing
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
