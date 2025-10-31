"use client"

import { useState } from "react"

const projects = [
  {
    title: "Face Recognition Attendance System",
    description: "Created a CNN-based face recognition model to automate attendance in rural classrooms.",
    tags: ["Python", "CNN", "TensorFlow", "Computer Vision"],
    type: "AI/ML",
  },
  {
    title: "Pothole Detection System",
    description:
      "Developed an application using YOLO model to detect potholes in real-time and alert drivers automatically.",
    tags: ["Python", "YOLO", "OpenCV", "Real-time Detection"],
    type: "AI/ML",
  },
  {
    title: "Remote Control Car (Arduino)",
    description: "Built a phone-controlled car using Arduino hardware and Bluetooth modules during workshop.",
    tags: ["Arduino", "Bluetooth", "Hardware", "Robotics"],
    type: "Hardware",
  },
]

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-gradient-to-b from-background/40 via-background/50 to-background/60 relative z-0"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Projects & Hackathons
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 hover:border-accent/50 backdrop-blur-sm"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="p-6 relative z-10">
                <div className="mb-4 inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/30">
                  <span className="text-xs font-semibold text-accent">{project.type}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 group-hover:border-primary/50 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className={`absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 transition-opacity duration-300 ${hoveredIndex === index ? "opacity-100" : "opacity-0"}`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
