import Container from '@/components/container';
import { IconBrandNextjs, IconBrandTwitter, IconBrandGithub, IconBrandLinkedin, IconBrandMedium } from '@tabler/icons-react';
import { Link } from 'next-view-transitions';
import React from 'react';

const links = [
    {
        title: "Website",
        url: "https://salmannajah.me",
        icon: IconBrandNextjs,
    },
    {
        title: "Twitter",
        url: "https://twitter.com/salmancodess",
        icon: IconBrandTwitter,
    },
    {
        title: "GitHub",
        url: "https://github.com/Salman-in",
        icon: IconBrandGithub,
    },
    {
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/salman-najah/",
        icon: IconBrandLinkedin,
    },
    {
        title: "Medium",
        url: "https://medium.com/@salmannajah",
        icon: IconBrandMedium,
    }
];

const LinksPage = () => {
    return (
        <div>
            <Container className="md:pt-24 pt-24 min-h-[100vh] border-b border-neutral-300 dark:border-neutral-700 pb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-primary dark:text-white tracking-tight">
                    Links
                </h1>
                <p className="text-neutral-500 dark:text-neutral-400 pt-4 text-sm md:text-base max-w-2xl pb-4">
                    Links to all my socials, projects, source codes and memes.
                </p>
                <div className="flex flex-col gap-4">
                    {links.map((link, idx) => {
                        const Icon = link.icon;
                        return (
                            <Link
                                key={idx}
                                href={link.url}
                                target="_blank"
                                className="bg-neutral-100 dark:bg-[#302730] p-4 rounded-md hover:shadow-derek transition-all duration-100 ease-in-out border-1 border-neutral-200 dark:border-neutral-700 dark:hover:shadow-[var(--shadow-derek)]"
                            >
                                <div className="flex justify-between items-center">
                                    <span className="font-bold flex items-center gap-2">
                                        {Icon && <Icon size={20} />}
                                        {link.title}
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </Container>
        </div>
    );
};

export default LinksPage;