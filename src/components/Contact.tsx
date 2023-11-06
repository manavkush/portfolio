"use client"
import React from 'react'
import SectionHeading from './SectionHeading'
import { FaPaperPlane } from 'react-icons/fa'
import { useSetActiveSection } from '../lib/hooks'
import { motion } from 'framer-motion'
import { sendMail } from '../lib/actions'
import { useFormStatus } from 'react-dom'
import FormSubmitButton from './SubmitButton'
import { toast } from 'react-toastify'
import { stringifyError } from 'next/dist/shared/lib/utils'

const Contact = () => {
  const ref = useSetActiveSection('Contact')
  const { pending } = useFormStatus()

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

      <form className='mt-10 flex flex-col'
        action={async (formData) => {
          console.log("1Data:")
          console.log("1Error: ")

          const response = await sendMail(formData);

          if (response.error) {
            toast.error('Error in sending mail.', {
              position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, 
              pauseOnHover: true, draggable: true, progress: undefined, theme: "light",
            });
            return;
          }

          console.log("Toast success")
          toast.success("Mail sent successfully", {
              position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, 
              pauseOnHover: true, draggable: true, progress: undefined, theme: "light",
          })
        }}
      >
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
        <FormSubmitButton />
      </form>

    </motion.section>
  )
}

export default Contact
