import React from 'react'
import Link from 'next/link'
import Container from '../container'

const Footer = () => {
    return (
        <footer>
            <Container className='pt-8 pb-6 text-neutral-500 space-y-8 border-t-1 border-neutral-200 dark:border-neutral-700 '>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-8">
                    <ul className="list-none space-y-3">
                        <li><Link href="/" className="hover:text-neutral-800 dark:hover:text-neutral-300">Home</Link></li>
                        <li><Link href="/blog" className="hover:text-neutral-800 dark:hover:text-neutral-300">Blog</Link></li>
                        <li><Link href="/projects" className="hover:text-neutral-800 dark:hover:text-neutral-300">Projects</Link></li>
                        <li><Link href="/links" className="hover:text-neutral-800 dark:hover:text-neutral-300">Links</Link></li>
                    </ul>
                    <ul className="list-none space-y-3">
                        <li><Link href="https://github.com/" className="hover:text-neutral-800 dark:hover:text-neutral-300" target="_blank" rel="noreferrer">GitHub</Link></li>
                        <li><Link href="https://twitter.com/" className="hover:text-neutral-800 dark:hover:text-neutral-300" target="_blank" rel="noreferrer">Twitter</Link></li>
                        <li><Link href="https://linkedin.com/" className="hover:text-neutral-800 dark:hover:text-neutral-300" target="_blank" rel="noreferrer">LinkedIn</Link></li>
                        <li><Link href="https://instagram.com/" className="hover:text-neutral-800 dark:hover:text-neutral-300" target="_blank" rel="noreferrer">Instagram</Link></li>
                    </ul>
                    <ul className="list-none space-y-3">
                        <li><Link href="/resources" className="hover:text-neutral-800 dark:hover:text-neutral-300">Resources</Link></li>
                        <li><Link href="/snippets" className="hover:text-neutral-800 dark:hover:text-neutral-300">Snippets</Link></li>
                        <li><Link href="/medium" className="hover:text-neutral-800 dark:hover:text-neutral-300">Medium</Link></li>
                    </ul>
                </div>
                <div className='text-sm'>
                    Built with love by <span className='font-bold'>Salman Najah</span>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
