import Container from '@/components/container'
import React from 'react'
import { compileMDX } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import { fetchAllBlogs, fetchSingleBlog } from '@/lib/mdx'

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

// Used SSG using generateStaticParams for this page to generate static paths for each blog post
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const allBlogs = await fetchAllBlogs();
  return allBlogs.map((blog) => ({
    slug: blog.slug,
  }));
}

// NextJs by default expects the params to be a Promise, so we define the type accordingly
interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function SingleBlogPage({ params }: PageProps) {
    const  slug = (await params).slug;
    // or directly destructure like this: const { slug } = await params;

    const singleBlogData = await fetchSingleBlog(slug);

    if (!singleBlogData) {
        notFound();
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
