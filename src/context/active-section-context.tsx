"use client"
import React, { useState } from 'react'
import { links } from '../lib/data'

type SectionType = typeof links[number]["name"]
type ActiveSectionContextType = {
  activeSection: SectionType,
  setActiveSection: React.Dispatch<React.SetStateAction<SectionType>>
  timeOfLastClick: number,
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

// Context creation
const ActiveSectionContext = React.createContext<ActiveSectionContextType | null>(null)
const ActiveSectionContextProvider = ({children}: {children: React.ReactNode}) => {
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0)
  const [activeSection, setActiveSection] = useState<SectionType>("Home") // We need to keep track of this state in order to disable observer when user clicks

  return <ActiveSectionContext.Provider value={{
    activeSection,
    setActiveSection,
    timeOfLastClick,
    setTimeOfLastClick
  }}>{children}</ActiveSectionContext.Provider>
}
export default ActiveSectionContextProvider


// Exporting context
export function useActiveSectionContext() {
  const context = React.useContext(ActiveSectionContext)
  if (context === null) {
    throw new Error('useActiveSectionContext must be used within a ActiveSectionContextProvider')
  }
  return context
}

