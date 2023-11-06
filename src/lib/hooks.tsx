import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "../context/active-section-context";
import { links } from "./data";

export function useSetActiveSection(sectionName: typeof links[number]["name"], threshold = 0.5) {
  const {ref, inView} = useInView({threshold})
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName)
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName])

  return ref;
}
