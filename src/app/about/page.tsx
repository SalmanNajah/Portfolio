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
            <Container className="min-h-full pt-24 pb-8 border-color-new dark:border-color-new ">
                <h1 className="text-3xl md:text-4xl font-bold text-primary dark:text-white tracking-tight">
                    About Me
                </h1>
                <div className="md:justify-between mt-6 md:flex ">
                    <p className="text-neutral-500 md:text-base max-w-[40rem] pb-4 text-base">
                        I’m a second-year engineering student deeply interested in building for the web.
                        I love exploring the full stack - especially how systems work behind the scenes.
                        Most of what I’ve learned comes from trying, failing, and building again.
                        Lately, I’ve been curious about how AI can intersect with the web to create meaningful tools.
                        I’m also contributing to open source and building digital products on the side.
                    </p>
                    <Resume />
                </div>
            </Container>
            <Container className="border-t border-color-new dark:border-color-new md:pt-6 pt-3 pb-6 shadow-inset-all dark:shadow-inset-all">
                <div>
                    <SideHeaders className="md:mt-4 mt-8">Here&#39;s a timeline of my journey so far</SideHeaders>
                    <Timeline />
                </div>
            </Container>
        </div>
    );
}
