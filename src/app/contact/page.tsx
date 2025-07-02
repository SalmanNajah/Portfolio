import ContactContent from "@/components/contact/contact-content";
import Container from "@/components/container";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Salman Najah | Contact",
    description: "Learn more about Salman Najah.",
};

export default async function ContactPage() {
    return (
        <div>
            <Container className="min-h-[calc(100vh-100px)] pt-56 border-color-new dark:border-color-new">
                <div className="rounded-lg p-6 shadow-derek dark:shadow-[var(--shadow-derek)]">
                <h1 className="text-xl md:text-2xl font-bold text-primary dark:text-white tracking-tight pb-3">
                    Want to work together? Let's connect.
                </h1>
                <ContactContent />
                </div>
            </Container>
        </div>
    );
}
