"use client"
import React from 'react'
import { motion } from 'motion/react'
import SideHeaders from '../sideheaders'
import Container from '../container'

const projects = [
    {
        title: "BrainSpace",
        description: "Building an app for storing all your brain dumps. A modern, responsive web app for managing notes and ideas.",
        image: "/image3.png",
        skills: ["React", "Next.js", "Stripe", "Sanity.io", "Redux Toolkit"]
    },
    {
        title: "Real-time Chat Application",
        description: "Building a Chat app with groups, private messaging, and authentication. Built with React and Socket.io.",
        image: "/image1.png",
        skills: ["React", "Node.js", "Socket.io", "Express", "MongoDB"]
    },
    {
        title: "Snippets AI",
        description: "Building an AI-powered code snippet manager for developers. Organize, search, and generate code snippets with AI assistance.",
        image: "/image4.png",
        skills: ["React", "Next.js", "OpenAI API", "TypeScript", "Prisma"]
    },
    {
        title: "Expense Tracker",
        description: "Building an app to track your expenses and visualize spending habits. Simple, intuitive, and privacy-focused.",
        image: "/image5.png",
        skills: ["React", "TypeScript", "Chart.js", "Firebase", "Tailwind CSS"]
    }
]

const UpcomingProjects = ({ limit }: { limit?: number }) => {
    const displayedProjects = limit ? projects.slice(0, limit) : projects;

    return (
        <Container className='pt-4 pb-8 border-b border-neutral-300 dark:border-neutral-700'>
            <div>
                <SideHeaders>
                    Upcoming works
                </SideHeaders>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                {displayedProjects.map((item, idx) => (
                    <motion.div
                        key={idx}
                        className="bg-white dark:bg-[#1b1b1a] p-2 rounded-lg shadow-standard hover:shadow-derek"
                        initial={{ opacity: 0, filter: "blur(6px)", y: 10 }}
                        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        transition={{ duration: 0.1 * (idx + 1), ease: "easeInOut" }}
                    >
                        <div className="mx-auto px-4 pb-2">
                            <h2 className="text-xl font-semibold my-2">{item.title}</h2>
                            <p className="text-sm text-secondary">{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Container>
    );
};

export default UpcomingProjects