"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedTextCycleProps {
  words: string[]
  interval?: number
  className?: string
}

export default function AnimatedTextCycle({
  words,
  interval = 2500,
  className,
}: AnimatedTextCycleProps) {
  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState<"visible" | "exit" | "enter">("visible")

  useEffect(() => {
    const cycle = setInterval(() => {
      // Exit phase
      setPhase("exit")
      setTimeout(() => {
        setIndex((i) => (i + 1) % words.length)
        setPhase("enter")
        // Small delay then settle to visible
        setTimeout(() => setPhase("visible"), 50)
      }, 280)
    }, interval)

    return () => clearInterval(cycle)
  }, [interval, words.length])

  return (
    <span
      className={cn(
        "inline-block transition-all duration-280",
        phase === "visible" && "opacity-100 translate-y-0 blur-none",
        phase === "exit" && "opacity-0 -translate-y-3 blur-sm",
        phase === "enter" && "opacity-0 translate-y-3 blur-sm",
        className
      )}
      style={{ transitionDuration: "280ms" }}
    >
      {words[index]}
    </span>
  )
}
