import Container from "@/components/container";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Salman Najah | Resources",
    description: "Some of my resources and writings.",
};

//change to min full after adding content

export default async function AllBlogsPage() {

    return (
        <div>
            <Container className="min-h-full pt-24 pb-8 border-color-new dark:border-color-new">
                <h1 className="text-3xl md:text-4xl font-bold text-primary dark:text-white tracking-tight">
                    Resources
                </h1>
                <p className="text-neutral-500 dark:text-neutral-400 pt-4 text-sm md:text-base">Some of the resources I used and are helpful for learning and building things.</p>
            </Container>
            <Container className="min-h-[50vh] ">
                coming soon!!!
            </Container>
        </div>
    );
}
