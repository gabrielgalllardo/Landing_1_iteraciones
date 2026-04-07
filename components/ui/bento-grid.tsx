import { cn } from "@/lib/utils"
import React from "react"

interface BentoGridProps {
  className?: string
  children?: React.ReactNode
}

interface BentoCardProps {
  className?: string
  name?: string
  description?: string
  icon?: React.ReactNode
  background?: React.ReactNode
  cta?: string
  href?: string
}

export function BentoGrid({ className, children }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  )
}

export function BentoCard({
  className,
  name,
  description,
  icon,
  background,
  cta,
  href,
}: BentoCardProps) {
  return (
    <div
      className={cn(
        "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
        "bg-white border border-black/5",
        "[box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05)]",
        "transition-all duration-300 hover:shadow-lg",
        className
      )}
    >
      <div>{background}</div>
      <div className="pointer-events-none z-10 flex flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
        <div className="text-[#A64B34]">{icon}</div>
        <h3 className="text-xl font-semibold text-[#0B0F0E]">{name}</h3>
        <p className="max-w-lg text-sm text-[#0B0F0E]/50">{description}</p>
      </div>
      {cta && href && (
        <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <a
            href={href}
            className="pointer-events-auto inline-flex items-center gap-1 text-sm font-semibold text-[#A64B34]"
          >
            {cta}
          </a>
        </div>
      )}
    </div>
  )
}
