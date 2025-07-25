"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ModeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const currentTheme = theme === "system" ? systemTheme : theme

  return (
    <button
      onClick={() => {
        const newTheme = currentTheme === "dark" ? "light" : "dark"
        setTheme(newTheme)
        localStorage.setItem("theme", newTheme)
      }}
      aria-label="Toggle Theme"
      className="text-xl"
    >
      {currentTheme === "dark" ? "🌞" : "🌙"}
    </button>
  )
}
