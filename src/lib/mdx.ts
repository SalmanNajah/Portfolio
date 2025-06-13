//put all those functions in a single file(blogs - page.tsx) and export them
// which will solve the build error

import path from "path"
import fs from "fs"
import { compileMDX } from "next-mdx-remote/rsc"


type BlogFrontMatter = {
    title: string
    date: string
    readTime: string
    slug?: string // Added slug to the frontmatter type for consistency
}

// Ideally this should have been placed in a separate utility file, but for simplicity, it's included here.(Fetches single blog based on slug)
export const fetchSingleBlog = (slug: string) => {
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
