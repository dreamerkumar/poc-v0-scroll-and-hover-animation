"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface AppIcon {
  name: string
  icon: JSX.Element
}

const apps: AppIcon[] = [
  {
    name: "Finder",
    icon: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect width="100" height="100" rx="20" fill="#F5F5F5" />
      </svg>
    ),
  },
  {
    name: "Safari",
    icon: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect width="100" height="100" rx="20" fill="#F5F5F5" />
      </svg>
    ),
  },
  {
    name: "Siri",
    icon: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect width="100" height="100" rx="20" fill="#F5F5F5" />
      </svg>
    ),
  },
  {
    name: "Messages",
    icon: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect width="100" height="100" rx="20" fill="#F5F5F5" />
      </svg>
    ),
  },
  {
    name: "Mail",
    icon: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect width="100" height="100" rx="20" fill="#F5F5F5" />
      </svg>
    ),
  },
]

export default function AppIcons() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  return (
    <TooltipProvider delayDuration={0}>
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex justify-center space-x-8 p-4">
          {apps.map((app, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <motion.div
                  className="relative"
                  onHoverStart={() => setHoveredIdx(index)}
                  onHoverEnd={() => setHoveredIdx(null)}
                  animate={{
                    scale: hoveredIdx === index ? 1.4 : hoveredIdx === index - 1 || hoveredIdx === index + 1 ? 1.25 : 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                    mass: 0.8,
                    duration: 0.3,
                  }}
                >
                  <motion.div
                    className={cn(
                      "w-16 h-16 rounded-2xl overflow-hidden flex items-center justify-center",
                      "bg-[#F5F5F5]",
                      "transition-all duration-300 ease-in-out",
                    )}
                    animate={{
                      border: hoveredIdx === index ? "2px solid #E5E5E5" : "2px solid transparent",
                    }}
                  >
                    <span className="text-gray-600">{app.icon}</span>
                  </motion.div>
                  <AnimatePresence>
                    {hoveredIdx === index && (
                      <motion.span
                        className="absolute inset-0 bg-white rounded-2xl"
                        layoutId="appHoverEffect"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.15 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>{app.name}</TooltipContent>
            </Tooltip>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </TooltipProvider>
  )
}

