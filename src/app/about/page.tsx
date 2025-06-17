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
            <Container className="min-h-[120vh] pt-24 pb-8 border-neutral-200 dark:border-neutral-700 ">
                <h1 className="text-3xl md:text-4xl font-bold text-primary dark:text-white tracking-tight">
                    About Me
                </h1>
                <div className="md:justify-between mt-6 md:flex ">
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm md:text-base max-w-xl pb-4">
                        I am a passionate web developer with a love for creating dynamic and user-friendly web applications. My journey in tech has been fueled by curiosity and a desire to learn. I enjoy tackling challenges and finding innovative solutions to problems.
                    </p>
                    <Resume />
                </div>
                <SideHeaders className="md:mt-4 mt-8">Here&#39;s a timeline of my journey so far</SideHeaders>
                <Timeline />
            </Container>
        </div>
    );
}
