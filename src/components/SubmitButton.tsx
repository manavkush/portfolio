import React from 'react'

const SubmitButton = () => {
  return (
    <button type='submit' className='h-[3rem] w-[8rem] 
      bg-gray-900 text-white rounded-full 
      outline-none transition-all 
      flex items-center justify-center gap-2
      group hover:scale-110 focus:scale-110 active:scale-105 hover:bg-gray-950
      '>
      Submit <FaPaperPlane className="text-xs opacity-60 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
    </button>
  )
}

export default SubmitButton
