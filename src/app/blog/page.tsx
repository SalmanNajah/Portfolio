import Container from "@/components/container";
import { fetchAllBlogs } from "@/lib/mdx";
import { Metadata } from "next";
import { Link } from 'next-view-transitions'

export const metadata: Metadata = {
    title: "Salman Najah | Blog",
    description: "A blog by Salman Najah.",
};

export const dynamic = 'error';

export default async function AllBlogsPage() {
    const allBlogs = await fetchAllBlogs();
    console.log("All Blogs:", allBlogs);

    return (
        <div>
            <Container className="min-h-full pt-24 pb-8 border-color-new dark:border-color-new">
                <h1 className="text-3xl md:text-4xl font-bold text-primary dark:text-white tracking-tight">
                    All Blogs
                </h1>
                <p className="text-neutral-500 pt-4 text-sm md:text-base max-w-2xl">I&#39;ve been programming for almost two years. Over the past year, I explored different technologies and built real-world projects. This blog is where I share what I&#39;ve learned and the challenges I&#39;ve faced along the way.</p>
            </Container>
            <Container className=" shadow-inset-all dark:shadow-inset-all">
                <div className="flex flex-col gap-4 py-8">
                    {allBlogs.map((blog, idx) => (
                        <Link key={idx} href={`/blog/${blog?.slug}`} className="bg-neutral-100 dark:bg-[#302730] p-4 rounded-lg hover:shadow-derek transition-all duration-100 ease-in-out  border-1 border-neutral-300 dark:border-neutral-700 dark:hover:shadow-[var(--shadow-standard)]">
                            <div className="flex justify-between items-center">
                                <span className="font-bold">{blog?.title}</span>
                                <span className="text-sm text-neutral-500 dark:text-neutral-400">{blog?.readTime}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </Container>
        </div>
    );
}

// shadow inset here might delete later