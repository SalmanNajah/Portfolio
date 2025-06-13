"use client"
import Container from '@/components/container'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { motion } from 'motion/react';

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website v2",
      description: "Modern portfolio with blog, dark mode, and animations. Built using Next.js and Tailwind.",
      link: "https://github.com/yourusername/portfolio-v2",
      image: "/image6.png",
      skills: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"]
    },
    {
      title: "E-commerce Storefront",
      description: "Scalable e-commerce site with Stripe payments and CMS. Mobile-first and SEO optimized.",
      link: "https://github.com/yourusername/ecommerce-storefront",
      image: "/image2.png",
      skills: ["React", "Next.js", "Stripe", "Sanity.io", "Redux Toolkit"]
    },
    {
      title: "Real-time Chat Application",
      description: "Chat app with groups, private messaging, and authentication. Built with React and Socket.io.",
      link: "https://github.com/yourusername/realtime-chat-app",
      image: "/image3.png",
      skills: ["React", "Node.js", "Socket.io", "Express", "MongoDB"]
    },
    {
      title: "Task Manager App",
      description: "Organize tasks, set deadlines, and track progress. Responsive and user-friendly interface.",
      link: "https://github.com/yourusername/task-manager-app",
      image: "/image4.png",
      skills: ["React", "Redux", "TypeScript", "Firebase"]
    },
    {
      title: "Weather Dashboard",
      description: "Weather dashboard with real-time data, forecasts, and location search. Built with APIs.",
      link: "https://github.com/yourusername/weather-dashboard",
      image: "/image5.png",
      skills: ["React", "OpenWeatherMap API", "Tailwind CSS"]
    },
    {
      title: "Blog Platform",
      description: "Full-featured blog platform with markdown support and user authentication.",
      link: "https://github.com/yourusername/blog-platform",
      image: "/image2.png",
      skills: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"]
    }
  ]

  // some tweaking in the side heading is required
  return (
    <div>
      <Container className="md:pt-24 pt-24 min-h-[200vh]">
        <h1 className="text-3xl md:text-4xl font-bold text-primary dark:text-white tracking-tight">
          Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {projects.map((item, idx) => (
            <motion.div key={idx} className="bg-white dark:bg-[#1b1b1b] p-2 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.3 * (idx + 1) }}
            >
              <Link href={item.link}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={350}
                  height={200}
                  className="mb-4 rounded-md flex justify-self-center mx-auto mt-4"
                />
              </Link>
              <div className='mx-auto px-4 pb-6'>
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-sm text-secondary">{item.description}</p>
              </div>

            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Projects