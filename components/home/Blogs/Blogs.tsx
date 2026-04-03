"use client"
import React, { useState, useEffect } from 'react'
import BlogCard from './BlogCard'

// async function getBlogs() {
//   const res = await fetch('/api/blogs', {
//     cache: "no-store",
//   })
//   return res.json();
// }

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const res = await fetch("/api/blogs");
    const data = await res.json();
    setBlogs(data.blogs);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
        <div className='py-16'>
            <h1 className='text-center text-2xl md:text-4xl xl:text-4xl font-bold text-white'>
                My latest <span className='text-cyan-300'>Blogs</span>
            </h1>
            <div className='w-[90%] sm:[w-70%] mx-auto grid grid-cols-1 xl:grid-cols-3 xl:gap-6 gap-10 
            items-center mt-16'>
              {
                blogs?.map((blog:any) => (
                  <BlogCard 
                    
                    key = {blog._id}
                    image = {blog.image}
                    title = {blog.title}
                    date = {blog.date}
                    tags = {blog.tags}
                  />
                ))
              }              
            </div>
        </div>
    </>
  )
}

export default Blogs