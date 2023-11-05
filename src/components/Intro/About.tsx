"use client"
import { motion } from 'framer-motion'
import React from 'react'

const About = () => {
  return <motion.section 
    className='mb-28 max-w-[45rem] flex flex-col items-center leading-8 sm:mb-40 text-center'
    initial={{opacity: 0, y: 100}}
    animate={{opacity: 1, y: 0}}
    transition={{delay: 0.25}}
  >
    <h2 className="text-3xl font-medium capitalize mb-8">About Me</h2>
    <div className='px-8'>
      <p>
       I am a passionate software engineer currently working at a startup AmuseLabs. My journey in programming started during my school days and has continued throughout my college years. I have gained skills in various technologies such as <strong>ReactJs</strong>, <strong>NextJs</strong>, <strong>NodeJs</strong>, <strong>Typescript</strong>, <strong>Java</strong>, <strong>Python</strong>, <strong>C++</strong>, <strong>SQL</strong>, and <strong>Docker</strong>. Most of my projects have been built using the <strong>MERN</strong> stack.
      </p>
      <p>
      I have a strong inclination towards continuous learning. I try to dedicate time to expand my knowledge, whether it involves mastering tools and technologies relevant to my work or exploring new advancements in tech. This passion led me to switch to <strong>Neovim</strong> as my primary text editor some time back. Recently, I have delved into learning <strong>Golang</strong> and <strong>Svelte</strong>. I also recently self-hosted my own cloud server at home using <strong>Docker</strong>, <strong>NextCloud</strong>, <strong>Nginx</strong>.
      </p>
      <p>
      Feel free to reach out to me if you are interested in discussing any of these exciting technologies and ideas. I am always up for an engaging conversation.
      </p>
    </div>
  </motion.section>
}

export default About
