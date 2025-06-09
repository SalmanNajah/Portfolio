import React from 'react'
import Container from '../container'
import Image from 'next/image'
import Link from 'next/link'
import { title } from 'process'

const Navbar = () => {
  const navItems = [
    {
      title: 'About',
      href: '/about'
    },
    {
      title: 'Projects',
      href: '/projects'
    },
    {
      title: 'Blog',
      href: '/blog'
    },
    {
      title: 'Contact',
      href: '/contact'
    }
  ]
  return (
    <Container className="flex items-center justify-between py-4">
      <Link href="/">
        <Image src="/avatar.png" alt="Logo" width={40} height={40} className='rounded-full object-cover' />
      </Link>
      <nav className="flex space-x-4 text-sm md:text-base items-center text-black dark:text-white">
        {navItems.map((item, idx) => (
          <Link href={item.href} key={idx}>
            {item.title}
          </Link>
        ))}
      </nav>
    </Container>
  )
}

export default Navbar