"use client"

import { useEffect, useState } from "react"

export function BackgroundTransitions() {
  const [currentSection, setCurrentSection] = useState("home")

  const sectionBackgrounds: Record<string, string> = {
    home: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/360_F_237463960_ZZ1MZInq5Tsh4EKEAimFZ0qDgpYiQWsp-OkLHOYy1mOB49z0obF7D1QsKjv71kJ.jpg",
    about:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/360_F_222074985_CwcuLMkQ0NBU2Qv1lqHD5XpHYtkY8mAB-OFW5ZdddCUtS14GH0IqrmF3i5H5rVh.jpg",
    projects:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo-1478760329108-5c3ed9d495a0-Mv7M8XGP4BBdfO7rR9R0VBlXzW27lO.jpeg",
    experience:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/360_F_462681022_kKv7FqMJD3ouD6LUYdDDkpKyZoh843P1-8169EPF6rLjFLnBOxizrR61vSO4Yox.jpg",
    achievements:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abstract-glowing-wave-green-lines-on-dark-background-technology-concept-free-vector-cQbz7S9zbsUR6vQxx8yeW03fy4sINw.jpg",
    contact:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_oa2x2coa2x2coa2x-3iKLyFulo5KtZYAB5Iyn5ZcwnfJjVu.png",
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "experience", "achievements", "contact"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
            setCurrentSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className="fixed inset-0 -z-10 transition-all duration-1000"
      style={{
        backgroundImage: `url('${sectionBackgrounds[currentSection]}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/85 to-background/90 dark:from-background/85 dark:via-background/88 dark:to-background/92"></div>
    </div>
  )
}
