import Container from '@/components/container'
import React from 'react'
import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'
import { redirect } from 'next/navigation'

export const metadata = {
    title: 'Blog | Salman Najah',
    description: 'Explore my writings on web development, technology, and more.',
    keywords: 'blog, writings, web development, technology, Salman Najah',
}

type BlogFrontMatter = {
    title: string
    date: string
    readTime: string
    slug?: string // Added slug to the frontmatter type for consistency
}

// Ideally this should have been placed in a separate utility file, but for simplicity, it's included here.(Fetches single blog based on slug)
const fetchSingleBlog = (slug: string) => {
    const filePath = path.join(process.cwd(), 'src', 'data', `${slug}.mdx`)
    if (!fs.existsSync(filePath)) return null
    return fs.readFileSync(filePath, 'utf-8')
}

//Fetching all the  blog details
export const fetchAllBlogs = async () => {
    const blogDir = fs.readdirSync(path.join(process.cwd(), 'src/data'))

    const allBlogsbyFrontMatter = await Promise.all(blogDir.map(async (fileName) => {
        const slug = fileName.replace('.mdx', '')
        const FM = await getBlogFrontMatterBySlug(slug);

        return {
            slug,
            ...FM
        }
    }))

    return allBlogsbyFrontMatter
}

//Getting only the frontmatter of the blog based on slug
const getBlogFrontMatterBySlug = async ( slug: string ) => {
    const singleBlogData = fs.readFileSync(
        path.join(process.cwd(), 'src', 'data', `${slug}.mdx`),
        'utf-8'
    );

    if (!singleBlogData) {
        return null; 
    }

    // Using the below code we get the content and frontmatter of a blog separately
    const { frontmatter } = await compileMDX<BlogFrontMatter>({
        source: singleBlogData,
        options: { parseFrontmatter: true },
    })

     return frontmatter;
}




export async function SingleBlogPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const singleBlogData = fetchSingleBlog(slug);

    if (!singleBlogData) {
        redirect('/blog'); // Redirect to the blog index page if the blog post is not found
    }

    // Using the below code we get the content and frontmatter of a blog separately
    const { content, frontmatter } = await compileMDX<{ title: string, date: string, readTime: string }>({
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
