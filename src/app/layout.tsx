import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/src/components/Header/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Manav | Personal Portfolio',
  description: 'Manav is a full-stack developer having experience in building web applications using React, Next.js, Node.js, and MongoDB.',
}
// bg-[#fbe2e3] instead of #FFF2D8

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className=''>
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36`}>
        <div className="-z-10  bg-[#FFF2D8] absolute h-[31rem] w-[31rem] top-[-6rem] right-[11rem] rounded-full blur-[10rem] sm:w-[68.75rem]" /> 
        <div className="-z-10 bg-[#dbd7fe] absolute h-[31rem] w-[50rem] top-[-1rem] left-[-35rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left[-5rem]" /> 

        <Header />
        {children}
      </body>
    </html>
  )
}
