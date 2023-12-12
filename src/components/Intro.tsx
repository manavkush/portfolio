"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { useSetActiveSection } from '../lib/hooks'
import { useActiveSectionContext } from '../context/active-section-context'


const Intro = () => {

  const ref = useSetActiveSection("Home")
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

  return (
    <section ref={ref} id="home" className='mb-20 max-w-[50rem] text-center sm:mb-0 scroll-mt-36'>  {/* Image Area*/}
      <div className='flex items-center justify-center flex-col'>
        <div className='relative'>
          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2, type: "tween" }}>
            <Image width="192" height="192" quality="95" className='h-24 w-24 object-cover border-white border-[0.35rem] shadow-xl rounded-full' priority={true} src="https://avatars.githubusercontent.com/u/64668859?v=4" alt="Profile Pic" />
          </motion.div>

          <motion.span className='text-2xl absolute bottom-0 right-0'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 0.7, delay: 0.2, stiffness: 225 }}>
            👋
          </motion.span>
        </div>
      </div>


      {/* About Me Text Area*/}
      <motion.h1 className='mb-10 mt-10 px-4 text-2xl font-medium sm:text-2xl !leading-[1.5]'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className='text font-bold'>Hey, I&apos;m Manav.</span> I&apos;m a <b>Software engineer</b> and I&apos;ve been programming for 5 years.
        <span> I love learning new things.
          <br />Currently exploring and learning <b>Golang</b></span>
      </motion.h1>

      {/* Contact Me Area*/}
      <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-xl font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Link href="#contact"
          className='bg-gray-900 text-white px-7 py-3 flex items-center gap-2 
          rounded-full shadow-md outline-none focus:scale-110 
          hover:bg-gray-950 hover:scale-110 active:scale-105 transition-all'
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now())
          }}>

          Contact me here<BsArrowRight className='opacity-70' />
        </Link>

        <a className='bg-white px-7 py-3 flex items-center rounded-full shadow-md outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-all cursor-pointer' href='/ManavK_Resume_SWE.pdf' download>Download Resume <HiDownload className="opacity-60 translation" /></a>

        <a className='bg-white px-7 py-3 text-gray-700 flex items-center rounded-full shadow-md focus:scale-110 hover:text-gray-950 hover:scale-[1.15] active:scale-105 transition-all cursor-pointer' href='https://www.linkedin.com/in/manav-kushwaha/' target='_blank'><BsLinkedin /></a>

        <a className='bg-white px-7 py-3 text-gray-700 flex items-center rounded-full shadow-md focus:scale-110 hover:text-gray-950 hover:scale-[1.15] active:scale-105 transition-all cursor-pointer' href='https://www.github.com/manavkush' target='_blank'><BsGithub /></a>
      </motion.div>

    </section>
  )
}

export default Intro
