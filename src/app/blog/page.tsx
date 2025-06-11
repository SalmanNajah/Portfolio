import Container from '@/components/container'
import SideHeaders from '@/components/sideheaders'
import React from 'react'

const BlogPage = () => {
  return (
    <div>
        <Container className='md:pt-6 pt-3 min-h-[200px] md:pb-18 pb-6'>
            <SideHeaders>Some of my writings</SideHeaders>
        </Container>
    </div>
  )
}

export default BlogPage