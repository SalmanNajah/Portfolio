import React from 'react'
import Container from './container'
import SideHeaders from './sideheaders'

const Blog = () => {
  return (
    <div>
        <Container className='min-h-[200px] md:pb-18 pb-6 md:pt-6 pt-3'>
            <SideHeaders>Some of my writings</SideHeaders>
        </Container>
    </div>
  )
}

export default Blog