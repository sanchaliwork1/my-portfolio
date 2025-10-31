"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, Github, Linkedin } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-background/70 to-background/85 relative z-0">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <p className="text-lg text-foreground/80 mb-8">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center backdrop-blur-sm">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60">Phone</p>
                  <a
                    href="tel:+918220441735"
                    className="text-foreground font-semibold hover:text-accent transition-colors"
                  >
                    +91 82204 41735
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center backdrop-blur-sm">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60">Email</p>
                  <a
                    href="mailto:sanchali.work1@gmail.com"
                    className="text-foreground font-semibold hover:text-accent transition-colors"
                  >
                    sanchali.work1@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 mt-8 pt-8 border-t border-border">
                <a
                  href="https://github.com/sanchaliwork1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center hover:bg-primary/20 transition-colors backdrop-blur-sm"
                >
                  <Github className="w-5 h-5 text-primary" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sanchali-sarkar-a0019834b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center hover:bg-accent/20 transition-colors backdrop-blur-sm"
                >
                  <Linkedin className="w-5 h-5 text-accent" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-card border border-border text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all backdrop-blur-sm"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-card border border-border text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all backdrop-blur-sm"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-card border border-border text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none backdrop-blur-sm"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:shadow-lg transition-all duration-300 glow"
              >
                {submitted ? "Message Sent!" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
