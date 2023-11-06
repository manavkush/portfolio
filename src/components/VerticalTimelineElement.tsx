import React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import { experiencesData } from '../lib/data'
import { useInView } from 'react-intersection-observer'

type TimeLineElementProps = typeof experiencesData[number]

const TimeLineElement = ({ experience }: { experience: TimeLineElementProps }) => {
  const { ref, inView } = useInView({
    threshold: 0.9,
    triggerOnce: true
  })
  return (
    <div ref={ref} className='vertical-timeline-element'>
      <VerticalTimelineElement
        visible={inView}
        contentStyle={{
          background: "#f3f4f6",
          boxShadow: "none",
          border: "1px solid rgba(0, 0, 0, 0.1)",
          padding: "1.3rem 2rem"

        }}
        contentArrowStyle={{
          borderRight: "0.4rem solid #9ca3af"
        }}
        date={experience.date}
        icon={experience.icon}
        iconStyle={{
          background: "white",
          fontSize: "1.5rem",
        }}
      >
        <h3 className='font-semibold capitalize'>{experience.title}</h3>
        <p className='font-normal !mt-0'>{experience.location}</p>
        <p className='!mt-1 !font-normal text-gray-700'>{experience.description}</p>
      </VerticalTimelineElement>
    </div>

  )
}

export default TimeLineElement
