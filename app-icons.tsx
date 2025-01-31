"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
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
  return (
    <div className="w-full max-w-3xl mx-auto p-8 bg-white">
      <TooltipProvider delayDuration={0}>
        <ScrollArea className="w-full whitespace-nowrap rounded-md">
          <div className="flex justify-center space-x-4 p-4">
            {apps.map((app, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <motion.div
                    className="relative group"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <motion.div
                      className="w-16 h-16 rounded-2xl overflow-hidden flex items-center justify-center"
                      whileHover={{
                        border: "2px solid #E5E5E5",
                      }}
                    >
                      {app.icon}
                    </motion.div>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent sideOffset={5} className="bg-black text-white px-3 py-1 text-sm rounded-md">
                  <p>{app.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </TooltipProvider>
    </div>
  )
}

