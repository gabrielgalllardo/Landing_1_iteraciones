"use client"

import { useEffect, useRef } from "react"

interface ShaderLine {
  x: number
  y: number
  angle: number
  speed: number
  length: number
  alpha: number
  width: number
  hue: number
}

export function ShaderAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animId: number
    const lines: ShaderLine[] = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      initLines()
    }

    function initLines() {
      lines.length = 0
      const count = Math.floor((canvas.width * canvas.height) / 14000)
      for (let i = 0; i < Math.max(count, 40); i++) {
        lines.push(createLine())
      }
    }

    function createLine(): ShaderLine {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.8,
        speed: 0.25 + Math.random() * 0.6,
        length: 60 + Math.random() * 220,
        alpha: 0.04 + Math.random() * 0.28,
        width: 0.4 + Math.random() * 1.4,
        hue: Math.random() > 0.65 ? 1 : 0, // 0 = lacre accent, 1 = subtle white
      }
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const line of lines) {
        ctx.save()
        ctx.translate(line.x, line.y)
        ctx.rotate(line.angle)

        const grad = ctx.createLinearGradient(0, 0, line.length, 0)

        if (line.hue === 0) {
          // Lacre / warm accent lines
          grad.addColorStop(0, `rgba(166, 75, 52, 0)`)
          grad.addColorStop(0.45, `rgba(166, 75, 52, ${line.alpha})`)
          grad.addColorStop(1, `rgba(212, 115, 94, 0)`)
        } else {
          // Subtle off-white structural lines
          grad.addColorStop(0, `rgba(245, 240, 232, 0)`)
          grad.addColorStop(0.5, `rgba(245, 240, 232, ${line.alpha * 0.5})`)
          grad.addColorStop(1, `rgba(245, 240, 232, 0)`)
        }

        ctx.strokeStyle = grad
        ctx.lineWidth = line.width
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.lineTo(line.length, 0)
        ctx.stroke()
        ctx.restore()

        // Advance position
        line.x += Math.cos(line.angle) * line.speed
        line.y += Math.sin(line.angle) * line.speed

        // Wrap around edges
        const margin = line.length
        if (line.x > canvas.width + margin) line.x = -margin
        if (line.y > canvas.height + margin) line.y = -margin
        if (line.x < -margin) line.x = canvas.width + margin
        if (line.y < -margin) line.y = canvas.height + margin
      }

      animId = requestAnimationFrame(render)
    }

    resize()
    render()

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: "block" }}
      aria-hidden="true"
    />
  )
}
