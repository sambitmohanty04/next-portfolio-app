import React from 'react'
import BlogCard from './BlogCard'

const Blogs = () => {
  return (
    <>
        <div className='py-16'>
            <h1 className='text-center text-2xl md:text-4xl xl:text-4xl font-bold text-white'>
                My latest <span className='text-cyan-300'>Blogs</span>
            </h1>
            <div className='w-[90%] sm:[w-70%] mx-auto grid grid-cols-1 xl:grid-cols-4 xl:gap-4 gap-10 
            items-center mt-16'>
              <BlogCard 
                image = '/images/p1.jpg'
                title = 'Lorem Ipsum is simply dummy text of the printing. '
              />
              <BlogCard 
                image = '/images/p1.jpg'
                title = 'Lorem Ipsum is simply dummy text of the printing. '
              />
              <BlogCard 
                image = '/images/p1.jpg'
                title = 'Lorem Ipsum is simply dummy text of the printing. '
              />
              <BlogCard 
                image = '/images/p1.jpg'
                title = 'Lorem Ipsum is simply dummy text of the printing. '
              />
            </div>
        </div>
    </>
  )
}

export default Blogs