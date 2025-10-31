export function Experience() {
  const experiences = [
    {
      title: "Management Team Member",
      organization: "Microsoft Innovations Club (VITC)",
      period: "Current",
      description: "Contributing to club initiatives and innovation projects",
    },
    {
      title: "Management Team Member",
      organization: "TEDx Club (VITC)",
      period: "Current",
      description: "Organizing events and managing club operations",
    },
    {
      title: "Codenexus Workshop",
      organization: "Full Stack Development by Nexus Club",
      period: "Completed",
      description: "Comprehensive training in modern web development stack",
    },
    {
      title: "Arduino Workshop",
      organization: "Robotics Club - RevUp 1.0 & 2.0",
      period: "Completed",
      description: "Hands-on experience with Arduino and hardware programming",
    },
    {
      title: "House of Open Source",
      organization: "Open Source Programming Club",
      period: "Completed",
      description: "Introduction to open source development and collaboration",
    },
    {
      title: "Hackatronics Hackathon",
      organization: "IEEE Photonics Society",
      period: "Participated",
      description: "Building innovative solutions under time constraints",
    },
  ]

  return (
    <section
      id="experience"
      className="py-20 px-4 bg-gradient-to-b from-background/50 via-background/60 to-background/70 relative z-0"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Experience & Workshops
        </h2>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent md:transform md:-translate-x-1/2"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex gap-6 md:gap-0 ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
              >
                <div className="flex-1 md:text-right md:pr-12">
                  <div className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors backdrop-blur-sm">
                    <h3 className="text-lg font-bold text-foreground mb-2">{exp.title}</h3>
                    <p className="text-accent font-semibold mb-1">{exp.organization}</p>
                    <p className="text-sm text-foreground/60 mb-3">{exp.period}</p>
                    <p className="text-foreground/70">{exp.description}</p>
                  </div>
                </div>
                <div className="hidden md:flex flex-none items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent border-4 border-background"></div>
                </div>
                <div className="flex-1 md:pl-12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
