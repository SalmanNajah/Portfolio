import React from 'react'
import Container from '../container'
import { Link } from 'next-view-transitions'

const Footer = () => {
    return (
        <footer>
            <Container className='pt-8 pb-6 text-neutral-500 space-y-8 border-t-1 border-color-new dark:border-color-new'>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-5">
                    <ul className="list-none space-y-3">
                        <li><Link href="/" className="hover:text-neutral-800 dark:hover:text-neutral-300">Home</Link></li>
                        <li><Link href="/blog" className="hover:text-neutral-800 dark:hover:text-neutral-300">Blog</Link></li>
                        <li><Link href="/projects" className="hover:text-neutral-800 dark:hover:text-neutral-300">Projects</Link></li>
                        <li><Link href="/links" className="hover:text-neutral-800 dark:hover:text-neutral-300">Links</Link></li>
                    </ul>
                    <ul className="list-none space-y-3">
                        <li><a href="https://github.com/Salman-in" className="hover:text-neutral-800 dark:hover:text-neutral-300" target="_blank" rel="noreferrer">GitHub</a></li>
                        <li><a href="https://twitter.com/salmancodess" className="hover:text-neutral-800 dark:hover:text-neutral-300" target="_blank" rel="noreferrer">Twitter</a></li>
                        <li><a href="https://linkedin.com/in/salman-najah" className="hover:text-neutral-800 dark:hover:text-neutral-300" target="_blank" rel="noreferrer">LinkedIn</a></li>
                        <li><a href="https://instagram.com/salmaan.in" className="hover:text-neutral-800 dark:hover:text-neutral-300" target="_blank" rel="noreferrer">Instagram</a></li>
                    </ul>
                    <ul className="list-none space-y-3">
                        <li><Link href="/contact" className="hover:text-neutral-800 dark:hover:text-neutral-300">Contact</Link></li>
                        <li><Link href="/resources" className="hover:text-neutral-800 dark:hover:text-neutral-300">Resources</Link></li>
                        <li><Link href="/snippets" className="hover:text-neutral-800 dark:hover:text-neutral-300">Snippets</Link></li>
                        <li><Link href="https://medium.com/@salmannajah123" className="hover:text-neutral-800 dark:hover:text-neutral-300">Medium</Link></li>
                    </ul>
                </div>
                <div className='text-sm'>
                    Designed and Developed by <Link href="/"><span className='font-bold'>Salman Najah</span></Link>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
