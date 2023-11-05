"use client"
import { motion } from 'framer-motion'
import React from 'react'

const Section = () => {
  return (
    <motion.div className="bg-gray-200 h-16 w-1 my-20" 
    initial={{opacity: 0, y: 100}}
    animate={{opacity: 1, y: 0}}
    transition={{delay: 0.2}}
    ></motion.div>
  )
}

export default Section
