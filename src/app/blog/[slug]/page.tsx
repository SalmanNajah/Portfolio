import Container from '@/components/container'
import React from 'react'
import { compileMDX } from 'next-mdx-remote/rsc'
import { redirect } from 'next/navigation'
import { fetchSingleBlog } from '@/lib/mdx'

export const metadata = {
    title: 'Blog | Salman Najah',
    description: 'Explore my writings on web development, technology, and more.',
    keywords: 'blog, writings, web development, technology, Salman Najah',
}

type BlogFrontMatter = {
    title: string
    date: string
    readTime: string
    slug?: string
}

export default async function SingleBlogPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const singleBlogData = fetchSingleBlog(slug);

    if (!singleBlogData) {
        redirect('/blog'); // Redirect to the blog index page if the blog post is not found
    }

    // Using the below code we get the content and frontmatter of a blog separately
    const { content, frontmatter } = await compileMDX<BlogFrontMatter>({
        source: singleBlogData,
        options: { parseFrontmatter: true },
    })

    // Formatting the date
    let formattedDate = ''
    formattedDate = frontmatter.date
        ? new Date(frontmatter.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })
        : ''


    return (
        <Container className='md:pt-24 pt-20 prose dark:prose-invert pb-8 min-h-screen'>
            <div className='flex justify-between mb-4 text-sm text-neutral-500 dark:text-neutral-400'>
                <div>
                    {frontmatter.readTime}
                </div>
                <div>
                    {formattedDate}
                </div>
            </div>
            {content}
        </Container>
    )
}
