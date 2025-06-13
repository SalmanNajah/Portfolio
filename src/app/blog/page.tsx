import Container from "@/components/container";
import { fetchAllBlogs } from "@/lib/mdx";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Salman Najah | Blog",
    description: "A blog by Salman Najah.",
};

export default async function AllBlogsPage() {
    const allBlogs = await fetchAllBlogs();
    console.log("All Blogs:", allBlogs);  

    return (
        <div>
            <Container className="min-h-[120vh] pt-24 pb-8 border-neutral-200 dark:border-neutral-700">
                <h1 className="text-3xl md:text-4xl font-bold text-primary dark:text-white tracking-tight">
                    All Blogs
                </h1>
                <div className="flex flex-col gap-4 mt-8">
                    {allBlogs.map((blog, idx) => (
                        <Link key={idx} href={`/blog/${blog?.slug}`} className="bg-neutral-100 dark:bg-[#302730] p-4 rounded-lg font-semibold hover:shadow-standard hover:scale-101 transition-all duration-100 ease-in-out">
                            <div className="flex justify-between items-center">
                            <span className="font-medium">{blog?.title}</span>  
                                <span className="text-sm text-neutral-500 dark:text-neutral-400">{blog?.readTime}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </Container>
        </div>
    );
}
