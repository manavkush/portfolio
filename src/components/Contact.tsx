"use client"
import React from 'react'
import SectionHeading from './SectionHeading'
import { FaPaperPlane } from 'react-icons/fa'
import { useSetActiveSection } from '../lib/hooks'
import { motion } from 'framer-motion'
import { sendMail } from '../lib/actions'
import { useFormStatus } from 'react-dom'

const Contact = () => {
  const ref = useSetActiveSection('Contact')
  const {pending} = useFormStatus()

  return (
    <motion.section ref={ref} id="contact"
      className='scroll-mt-28 mb-20 sm:mb-28 w-[min(100%, 38rem)]'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className='text-gray-700 text-center -mt-5'>
        Please Contact me at{" "}
        <a className='underline' href='mailto:manavkush@gmail.com'>
          manavkush@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form action={sendMail} className='mt-10 flex flex-col'>
        <input type='email'
          name='senderEmail'
          className='h-14 rounded-lg borderBlack px-4'
          placeholder='Your email' 
          required
          maxLength={500}
        />
        <textarea 
          name='message'
          className='h-52 my-3 rounded-lg borderBlack p-4' 
          placeholder='Your message' 
          required
        />
        <button type='submit' className='h-[3rem] w-[8rem] 
          bg-gray-900 text-white rounded-full 
          outline-none transition-all 
          flex items-center justify-center gap-2
          group hover:scale-110 focus:scale-110 active:scale-105 hover:bg-gray-950
          '>
          Submit <FaPaperPlane className="text-xs opacity-60 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </button>
      </form>

    </motion.section>
  )
}

export default Contact
