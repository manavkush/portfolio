import React from 'react'

const Footer = () => {
  return (
    <footer className='mb-10 px-4 text-gray-500 text-center'>
      <small className='mb-2 text-xs'>
        &copy; 2023 by Manav Kushwaha. All rights reserved.
      </small>
      <p className='text-xs'>
        <span className='font-semibold'>About this website:</span> built with React and Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, Resend hosted on Vercel.
      </p>
    </footer>
  )
}

export default Footer
