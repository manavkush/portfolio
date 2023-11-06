"use client"
import React from 'react'
import SectionHeading from './SectionHeading'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/src/lib/data'
import TimeLineElement from './VerticalTimelineElement';
import { useSetActiveSection } from '../lib/hooks';

const Experience = () => {
  const ref = useSetActiveSection("Experience", 0.4)
  return (
    <section ref={ref} id="experience" className='scroll-mt-28'>
      <SectionHeading>My Experience</SectionHeading>

      <VerticalTimeline lineColor=''>
        {experiencesData.map((experience, idx) => (
          <React.Fragment key={idx}>
            <TimeLineElement experience={experience} />
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section> 
  )
}
// <VerticalTimelineElement 
//               visible={true}
//               contentStyle={{
//                 background: "#f3f4f6",
//                 boxShadow: "none",
//                 border: "1px solid rgba(0, 0, 0, 0.1)",
//                 padding: "1.3rem 2rem"
//
//               }}
//               contentArrowStyle={{
//                 borderRight: "0.4rem solid #9ca3af"
//               }}
//               date={experience.date}
//               icon={experience.icon}
//               iconStyle={{
//                 background: "white",
//                 fontSize: "1.5rem",
//               }}
//             >
//               <h3 className='font-semibold capitalize'>{experience.title}</h3>
//               <p className='font-normal !mt-0'>{experience.location}</p>
//               <p className='!mt-1 !font-normal text-gray-700'>{experience.description}</p>
//             </VerticalTimelineElement>
export default Experience
