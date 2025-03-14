"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"

// Company data with multiple sets of logos
const companySets = [
  [
    { name: "Perplexity", logo: "/perplexity.svg" },
    { name: "Supercell", logo: "/supercell.svg" },
    { name: "Monzo", logo: "/monzo.svg" },
    { name: "Raycast", logo: "/raycast.svg" },
    { name: "Retool", logo: "/retool.svg" },
    { name: "Mercury", logo: "/mercury.svg" },
  ],
  [
    { name: "Vercel", logo: "/vercel.svg" },
    { name: "Stripe", logo: "/stripe.svg" },
    { name: "Discord", logo: "/discord.svg" },
    { name: "Linear", logo: "/linear.svg" },
    { name: "Notion", logo: "/notion.svg" },
    { name: "GitHub", logo: "/github.svg" },
  ],
  // Add more sets as needed
]

export default function CompanySection() {
  const [currentSetIndex, setCurrentSetIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentSetIndex((prev) => (prev + 1) % companySets.length)
        setIsVisible(true)
      }, 500) // Wait for fade out animation to complete
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="bg-black text-white w-full py-24 md:py-32 relative overflow-hidden border-0 rounded-none shadow-none">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powering the world's best product teams.</h2>
          <p className="text-lg md:text-xl text-gray-400">From next-gen startups to established enterprises.</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            {isVisible && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-16"
              >
                {companySets[currentSetIndex].map((company) => (
                  <motion.div
                    key={company.name}
                    className="flex items-center justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* For demo purposes, showing company names in styled text */}
                    {/* Replace with actual company logos in production */}
                    <div className="text-2xl font-bold text-white/80 hover:text-white transition-colors">
                      {company.name}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Card>
  )
}

