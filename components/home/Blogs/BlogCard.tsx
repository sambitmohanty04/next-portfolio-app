import React from 'react'
import Image from 'next/image'

type Props = {
  image : string,
  title : string
}

const BlogCard = ({image, title} : Props) => {
  return (
    <>
      <div className='py-2'>
        <Image src={image} alt='blog' width={500} height={500} className='object-cover' />
        <p className='text-base mt-4 text-gray-500 font-medium sm:text-lg'>16th Mar 2026</p>
        <h1 className='mt-2 text-lg sm:text-xl font-bold text-white hover:underline hover:text-cyan-300 
        transition-all duration-300 cursor-pointer'>{title}</h1>
        <div className='mt-4 flex gap-2 items-center'>
          <p className='px-3 py-1 bg-blue-950 text-white text-sm sm:text-base font-semibold rounded-full'>
            React
          </p>
          <p className='px-3 py-1 bg-blue-950 text-white text-sm sm:text-base font-semibold rounded-full'>
            Javascript
          </p>
          <p className='px-3 py-1 bg-blue-950 text-white text-sm sm:text-base font-semibold rounded-full'>
            TypeScript
          </p>
        </div>
      </div>
    </>
  )
}

export default BlogCard