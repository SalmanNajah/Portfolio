import Container from "@/components/container";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Salman Najah | Contact",
    description: "Learn more about Salman Najah.",
};

export default async function ContactPage() {
    return (
        <div>
            <Container className="min-h-full pt-24 pb-8 border-color-new dark:border-color-new ">
                <h1 className="text-3xl md:text-4xl font-bold text-primary dark:text-white tracking-tight">
                    Contact Me
                </h1>
                <p className="text-neutral-500">Coming soooon</p>
            </Container>
        </div>
    );
}
