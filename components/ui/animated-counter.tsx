"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedCounterProps {
  target: number
  suffix?: string
  className?: string
  duration?: number
}

export function AnimatedCounter({
  target,
  suffix = "",
  className,
  duration = 2000,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const elRef = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true
          const startTime = performance.now()

          const tick = (now: number) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(tick)
          }

          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.4 }
    )

    if (elRef.current) observer.observe(elRef.current)
    return () => observer.disconnect()
  }, [target, duration])

  return (
    <span ref={elRef} className={cn(className)}>
      {count}
      {suffix}
    </span>
  )
}
