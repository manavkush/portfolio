"use client"
import React from 'react'
import SectionHeading from './SectionHeading'
import { skillsData } from '../lib/data'
import { useSetActiveSection } from '../lib/hooks'
import { motion } from 'framer-motion'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: (idx: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * idx
    }
  }),
}

const Skills = () => {
  const ref = useSetActiveSection("Skills")

  return (
    <section
      id="skills"
      ref={ref} className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'>
      <SectionHeading>My Skills</SectionHeading>
      <ul
        className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
        {skillsData.map((skill, idx) => (
          <motion.li
            key={idx}
            className='bg-white borderBlack rounded-xl px-5 py-3'
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true
            }}
            custom={idx}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default Skills 
