"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Sign() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains("dark"))
    }

    checkDarkMode()

    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [])

  const strokeColor = isDark ? "#ffffff" : "#000000"

  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <motion.svg
        viewBox="0 0 600 200"
        className="w-full max-w-3xl"
      >
        <motion.text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="120"
            fontFamily="'Allura', cursive"
            fill="transparent"
            stroke={strokeColor}
            strokeWidth="2"
            style={{ textTransform: "none" }}
            initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            >
            Aryan
            </motion.text>
      </motion.svg>
    </div>
  )
}