"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import Link from 'next/link'
//Imp TODO:
//Change the layout in landing to only 3 and more in projects page
// also adjust the spacing of the text description and image properly

const projects = [
  {
    title: "Snippets",
    description: "A web app to save and organize your favorite code snippets.",
    href: "https://github.com/Salman-in/Snippet-App",
    image: "/snippets.png",
    skills: ["NextJS", "TypeScript", "Tailwind CSS", "PostgreSQL"]
  },
  {
    title: "Portfolio Website Template",
    description: "A modern, responsive portfolio template built with HTML, CSS, and JavaScript.",
    href: "https://github.com/Salman-in/portfolio-v1",
    image: "/portfolio.png",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design"]
  },
  {
    title: "BrainSpace",
    description: "A app to store all your extra information in one place, like a digital brain.",
    href: "https://brainspace.salmannajah.me",
    image: "/brainspace.png",
    skills: ["NextJS", "TailwindCSS", "TypeScript", "PostgreSQL", "Prisma"]
  },
  {
    title: "Weather Dashboard",
    description: "A dashboard providing real-time weather data, forecasts, and location search using APIs.",
    href: "https://github.com/Salman-in/Weather-App",
    image: "/weather.png",
    skills: ["ReactJS", "TypeScript", "OpenWeatherMap API", "Tailwind CSS"]
  },
  {
    title: "Earn Easy",
    description: "A marketplace to buy, sell, or rent items locally with real-time communication.",
    href: "https://github.com/so-sc/EarnEasy",
    image: "/image1.png",
    skills: ["React", "Node.js", "Express", "MongoDB"]
  },
  {
    title: "Blog Platform",
    description: "A full-featured blog platform with markdown support and secure user authentication.",
    href: "https://github.com/yourusername/blog-platform",
    image: "/image2.png",
    skills: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"]
  }
];

const ProjectContent = ({ limit }: { limit?: number }) => {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {displayedProjects.map((item, idx) => (
        <motion.div
          key={idx}
          className="bg-white dark:bg-[#1b1b1a] p-2 rounded-lg shadow-standard dark:shadow-[var(--shadow-standard)] hover:shadow-derek dark:hover:shadow-[var(--shadow-derek)]"
          initial={{ opacity: 0, filter: "blur(6px)", y: 10 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.1 * (idx + 1), ease: "easeInOut" }}
        >
          <Link href={item.href}>
            <Image
              src={item.image}
              alt={item.title}
              width={350}
              height={200}
              className="mb-4 rounded-md flex justify-self-center mx-auto mt-4"
            />
          </Link>
          <div className="mx-auto px-4 pb-6">
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-sm text-secondary">{item.description}</p>
            <p className='italic pt-4 text-xs text-neutral-700 dark:text-neutral-400'>{item.skills.join(", ")}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectContent;
