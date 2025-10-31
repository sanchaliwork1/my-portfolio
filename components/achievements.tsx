export function Achievements() {
  const achievements = [
    { icon: "🎤", title: "Anchoring", description: "Anchored inter-school debate competition" },
    { icon: "🏆", title: "1st Place NSO", description: "Won 1st place in NSO (8th grade)" },
    { icon: "🎵", title: "Gold Medal Singing", description: "Gold medal in group singing" },
    { icon: "💃", title: "Kathak", description: "Completed 2 years of classical Kathak dance" },
    { icon: "🩰", title: "Bharatanatyam", description: "3 years of Bharatanatyam dance training" },
    { icon: "🥋", title: "Karate", description: "Trained till Orange Belt in Karate" },
  ]

  return (
    <section
      id="achievements"
      className="py-20 px-4 bg-gradient-to-b from-background/60 via-background/70 to-background/75 relative z-0"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Achievements & Beyond Academics
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-card to-card/50 border border-border rounded-lg p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 backdrop-blur-sm"
            >
              <div className="text-4xl mb-4">{achievement.icon}</div>
              <h3 className="text-lg font-bold text-foreground mb-2">{achievement.title}</h3>
              <p className="text-foreground/70">{achievement.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 border border-accent/30 rounded-lg p-8 text-center backdrop-blur-sm">
          <p className="text-lg text-foreground/80">
            I'm also an <span className="text-accent font-semibold">NCC Cadet</span> with 2 years of military training,
            demonstrating discipline, teamwork, and leadership skills.
          </p>
        </div>
      </div>
    </section>
  )
}
