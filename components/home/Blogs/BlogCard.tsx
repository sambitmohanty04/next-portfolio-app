import React from 'react'
import Image from 'next/image'

type Props = {
  image : string,
  title : string,
  date : string,
  tags : string[]
}

const BlogCard = ({image, title, date, tags} : Props) => {

  const formatDate = (date: string) => {
    const d = new Date(date);

    const day = d.getDate();
    const year = d.getFullYear();

    const month = d.toLocaleString("default", { month: "long" });

    const getOrdinal = (n: number) => {
      if (n > 3 && n < 21) return "th";
      switch (n % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
      }
    };

    return `${day}${getOrdinal(day)} ${month} ${year}`;
  };

  return (
    <>
      <div className='py-3 bg-white/5 p-3 rounded-xl'>
        <Image src={image} alt={title} width={500} height={500} className='object-cover' />
        <p className='text-base mt-4 text-gray-500 font-medium sm:text-lg'>
          {formatDate(date)}
        </p>
        <h1 className='mt-2 text-lg sm:text-xl font-semibold text-white hover:underline hover:text-cyan-300 
        transition-all duration-300 cursor-pointer'>{title}</h1>
        <div className='mt-4 flex gap-2 items-center'>
          {
            tags?.map((tag, i) => (
              <p 
                key = {i}
                className='px-3 py-1 bg-blue-950 text-white text-sm sm:text-base font-semibold rounded-full'>
                {tag}
              </p>
            ))
          }
          
        </div>
      </div>
    </>
  )
}

export default BlogCard