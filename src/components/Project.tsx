import { projectsData } from "@/src/lib/data"
import Image from "next/image"

type ProjectProps = typeof projectsData[number]

const Project = (props: ProjectProps) => {
  return (
    <div className='group relative flex max-w-[45rem] 
      bg-gray-100 border border-black/5 
      sm:pr-8 overflow-hidden mb:3 sm:mb-8 last:mb-0 even:pl-8
      hover:bg-gray-200 transition-all'
    >
      <div className='flex flex-col project-data py-4 px-5 sm:pt-10 sm:w-1/2 sm:h-[20rem] group-even:ml-[22rem]'>
        <h3 className='font-semibold text-2xl'>{props.title}</h3>
        <p className='leading-relaxed mt-2 text-gray-700'>
          {props.description}
        </p> 
        <ul className="flex flex-wrap mt-4 gap-2"> 
          {props.tags.map((tag, idx) => (
            <li className='bg-black/70 text-white 
              px-3 py-1 text-[0.7rem] 
              uppercase tracking-wider 
              rounded-full' key={idx} > 
            {tag} 
          </li>))} 
        </ul>
      </div> <Image src={props.imageUrl} alt={props.title + " project image"} className='absolute top-8 -right-[8rem] 
        hidden sm:block
        w-[28.25rem] rounded-t-lg shadow-2xl  
        group-even:-right-[initial] 
        group-even:-left-[8rem]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2
        group-hover:scale-105

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        transition
        ' />
    </div>

  )
}

export default Project
