import React from 'react'

type SectionHeadingProps = {
  children: React.ReactNode
}

const SectionHeading = (props: SectionHeadingProps) => {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8 text-center">{props.children}</h2>
  )
}

export default SectionHeading
