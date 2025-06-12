import Container from "@/components/container";
import { Metadata } from "next";
import { fetchAllBlogs } from "./[slug]/page";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Salman Najah | All Blogs",
    description: "All blogs by Salman Najah.",
};

//Slug page not working, recreate tom
export default async function AllBlogsPage() {
    const allBlogs = await fetchAllBlogs();
    console.log("All Blogs:", allBlogs);
    console.log("All Blogs titles:", allBlogs.map(blog => blog?.title));
    //added slug as return value in getBlogFrontMatterBySlug and fetchAllBlogs function, so that it can be used in the link (might not be needed later)
    return (
        <div>
            <Container className="min-h-screen pt-24 pb-8 border-neutral-200 dark:border-neutral-700 ">
                <h1 className="text-3xl md:text-5xl font-bold text-primary dark:text-white tracking-tight">
                    All Blogs
                </h1>
                <div className="flex flex-col gap-4 mt-8">
                    {allBlogs.map((blog, idx) => (
                        <Link key={idx} href={`/blog/${blog?.slug}`} className=" bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg font-semibold">
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
