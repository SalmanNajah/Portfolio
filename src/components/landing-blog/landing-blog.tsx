import React from 'react'
import Container from '../container'
import SideHeaders from '../sideheaders'
import { fetchAllBlogs } from '@/lib/mdx';
import { Link } from 'next-view-transitions';

const LandingBlogs = async () => {
  const allBlogs = await fetchAllBlogs();
  return (
    <div>
      <Container className='min-h-[200px] md:pb-18 pb-6 md:pt-6 pt-3'>
        <SideHeaders>Some of my writings</SideHeaders>
        <div className="flex flex-col gap-4 mt-8">
          {allBlogs.map((blog, idx) => (
            <Link key={idx} href={`/blog/${blog?.slug}`} className="bg-neutral-100 dark:bg-[#302730] p-4 rounded-lg hover:shadow-standard hover:scale-101 transition-all duration-100 ease-in-out border-1 border-neutral-200 dark:border-neutral-700">
              <div className="flex justify-between items-center">
                <span className="font-bold">{blog?.title}</span>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">{blog?.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default LandingBlogs