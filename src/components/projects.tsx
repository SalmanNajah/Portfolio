import React from 'react'
import Container from './container'
import Image from 'next/image'
import { motion } from 'motion/react'
import Link from 'next/link'
import SideHeaders from './sideheaders'

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website v2",
      description: "Modern portfolio with blog, dark mode, and animations. Built using Next.js and Tailwind.",
      link: "https://github.com/yourusername/portfolio-v2",
      image: "/image2.png",
      skills: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"]
    },
    {
      title: "E-commerce Storefront",
      description: "Scalable e-commerce site with Stripe payments and CMS. Mobile-first and SEO optimized.",
      link: "https://github.com/yourusername/ecommerce-storefront",
      image: "/image3.png",
      skills: ["React", "Next.js", "Stripe", "Sanity.io", "Redux Toolkit"]
    },
    {
      title: "Real-time Chat Application",
      description: "Chat app with groups, private messaging, and authentication. Built with React and Socket.io.",
      link: "https://github.com/Salman-in/skill-swap",
      image: "/image1.png",
      skills: ["React", "Node.js", "Socket.io", "Express", "MongoDB"]
    },
    {
      title: "Task Manager App",
      description: "Organize tasks, set deadlines, and track progress. Responsive and user-friendly interface.",
      link: "https://github.com/yourusername/task-manager-app",
      image: "/image3.png",
      skills: ["React", "Redux", "TypeScript", "Firebase"]
    },
    {
      title: "Weather Dashboard",
      description: "Weather dashboard with real-time data, forecasts, and location search. Built with APIs.",
      link: "https://github.com/yourusername/weather-dashboard",
      image: "/image1.png",
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

  return (
    <div>
      <Container className="md:pt-6 pt-3 border-b border-neutral-300 dark:border-neutral-700 md:pb-18 pb-6">
        <SideHeaders>
          Proof of Work
        </SideHeaders>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          {projects.map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
              <Link href={item.link}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={350}
                  height={200}
                  className="mb-4 rounded-md flex justify-self-center"
                />
              </Link>

              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-sm text-secondary">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Projects

//TODO
// 5. Add techstacks used (yt video)
// 9. Add blogs
// 10. Add a contact form
// 11. Add a footer with social links
// 12. add git graph
// 14. global.css not working properly
// built with love by salman najah

// DONE
// 1. Add links to the projects (make whole card clickable) using next/link - DONE
// 2. Add animations to the projects - DONE
// 3. style the cards properly  - justified to center DONE
// 4. Add hover effects to the cards (show border on hover only) - DONE
// 8. Add dark mode support - DONE
// 13. Made mobile responsive - DONE
