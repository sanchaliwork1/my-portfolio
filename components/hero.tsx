"use client"

import { useState, useEffect } from "react"

export function Hero() {
  const [text, setText] = useState("")
  const fullText = "Aspiring CS Engineer | AI & ML Enthusiast | Builder of Intelligent, Real-World Solutions."

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(interval)
      }
    }, 30)
    return () => clearInterval(interval)
  }, [])

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 bg-gradient-to-br from-background/30 via-background/20 to-background/10 relative z-0"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 border-2 border-accent/50 flex items-center justify-center shadow-2xl overflow-hidden">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-30%20at%2000.29.18_127f94d0-GhE348aTelRyYChhdVqgZIeTzBn8it.jpg"
              alt="Sanchali Sarkar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
          Sanchali Sarkar
        </h1>

        <p className="text-xl md:text-2xl text-primary font-semibold mb-6">Blending logic and creativity through AI</p>

        <p className="text-lg text-foreground/70 mb-12 min-h-12 font-mono">
          {text}
          <span className="animate-pulse">|</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToProjects}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 glow"
          >
            View My Work
          </button>
          <a
            href="#"
            className="px-8 py-3 rounded-full border-2 border-accent text-accent hover:bg-accent/10 font-semibold transition-all duration-300"
          >
            Download Resume
          </a>
        </div>

        <div className="mt-16 flex justify-center gap-8">
          <a
            href="https://github.com/sanchaliwork1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/50 hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/sanchali-sarkar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/50 hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a href="mailto:sanchali.work1@gmail.com" className="text-foreground/50 hover:text-accent transition-colors">
            Email
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-accent"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}
