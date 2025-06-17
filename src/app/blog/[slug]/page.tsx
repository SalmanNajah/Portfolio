import Container from '@/components/container'
import { compileMDX } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import { fetchAllBlogs, fetchSingleBlog, getBlogFrontMatterBySlug } from '@/lib/mdx'

// export const metadata = {
//     title: 'Blog | Salman Najah',
//     description: 'Explore my writings on web development, technology, and more.',
//     keywords: 'blog, writings, web development, technology, Salman Najah',
// }

interface BlogProps {
  params: Promise<{ slug: string }>
}

// Dynamically generating metadata for each blog post based on its frontmatter

export async function generateMetadata({ params }: BlogProps) {
    const frontmatter = await getBlogFrontMatterBySlug((await params).slug);

    if (!frontmatter) {
        notFound();
    }

    return {
        title: frontmatter?.title + ' | Salman Najah',
        description: frontmatter?.description || 'Read my latest blog posts on web development and technology.',
        keywords: frontmatter?.keywords || 'blog, web development, technology, Salman Najah',
    };
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

// NextJs by default expects the params to be passed directly as an object
export default async function SingleBlogPage({ params }: BlogProps) {
  const { slug } = await params;
  const singleBlogData = await fetchSingleBlog(slug);
  if (!singleBlogData) {
    notFound();
  }

  const { content, frontmatter } = await compileMDX<BlogFrontMatter>({
    source: singleBlogData,
    options: { parseFrontmatter: true },
  });

  const formattedDate = frontmatter.date
    ? new Date(frontmatter.date).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '';

  return (
    <Container className="md:pt-24 pt-20 prose dark:prose-invert pb-8 min-h-screen">
      <div className="flex justify-between mb-4 text-sm text-neutral-500 dark:text-neutral-400">
        <div>{frontmatter.readTime}</div>
        <div>{formattedDate}</div>
      </div>
      {content}
    </Container>
  );
}
