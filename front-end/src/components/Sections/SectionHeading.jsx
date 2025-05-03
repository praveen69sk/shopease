import React from 'react'

const SectionHeading = ({title}) => {
  return (
    <div className='flex flex-wrap px-10 my-5 items-center gap-2'>
        <div className='rounded bg-pink-500 w-1 h-9'></div>
        <p className='text-3xl'>{title}</p>
    </div>
  )
}

export default SectionHeading