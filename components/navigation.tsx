"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"

export function Navigation() {
  const [isDark, setIsDark] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    // Set initial dark mode
    const isDarkMode = localStorage.getItem("darkMode") === "true"
    setIsDark(isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    }

    // Track scroll position
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !isDark
    setIsDark(newDarkMode)
    localStorage.setItem("darkMode", String(newDarkMode))
    if (newDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div
          className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          SS
        </div>

        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "About", id: "about" },
            { label: "Projects", id: "projects" },
            { label: "Experience", id: "experience" },
            { label: "Contact", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-foreground/70 hover:text-accent transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        <button onClick={toggleDarkMode} className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  )
}
