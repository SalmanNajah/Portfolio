import Container from "@/components/container";
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
                <p className="text-neutral-500 dark:text-neutral-400 pt-4 text-sm md:text-base">
                    I am a passionate web developer with a love for creating dynamic and user-friendly web applications. My journey in tech has been fueled by curiosity and a desire to learn. I enjoy tackling challenges and finding innovative solutions to problems.
                </p>

                <p className="text-neutral-500 dark:text-neutral-400 pt-4 text-sm md:text-base">
                    Timeline coming soon
                </p>
            </Container>
        </div>
    );
}
