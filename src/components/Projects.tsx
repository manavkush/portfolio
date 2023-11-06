"use client"
import React from 'react'
import SectionHeading from './SectionHeading'
import { projectsData } from '@/src/lib/data'
import Project from "./Project"
import { useSetActiveSection } from '../lib/hooks'

const Projects = () => {
  const ref = useSetActiveSection("Projects")

  return (
    <section 
      ref={ref}
      id='projects' 
      className='scroll-mt-28 mx-8 mb-28'>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, idx) => (
          <React.Fragment key={idx}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}

export default Projects

