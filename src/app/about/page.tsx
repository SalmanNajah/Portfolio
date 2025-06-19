import Container from "@/components/container";
import Resume from "@/components/resume";
import SideHeaders from "@/components/sideheaders";
import Timeline from "@/components/timeline/timeline";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Salman Najah | About",
    description: "Learn more about Salman Najah.",
};

export default async function AboutPage() {
    return (
        <div>
            <Container className="min-h-full pt-24 pb-8 border-neutral-200 dark:border-neutral-700 ">
                <h1 className="text-3xl md:text-4xl font-bold text-primary dark:text-white tracking-tight">
                    About Me
                </h1>
                <div className="md:justify-between mt-6 md:flex ">
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm md:text-base max-w-[40rem] pb-4">
                            I'm a second-year engineering student with a deep interest in building for the web. I enjoy working across the full stack, diving into how systems function behind the scenes, and constantly experimenting with new technologies. Most of my learning comes from hands-on exploration - trying, failing, and building again. Recently, I’ve been exploring how AI can intersect with the web to create meaningful tools. I'm also actively contributing to open source and working on digital products of my own.
                    </p>
                    <Resume />
                </div>
                <SideHeaders className="md:mt-4 mt-8">Here&#39;s a timeline of my journey so far</SideHeaders>
                <Timeline />
            </Container>
        </div>
    );
}
