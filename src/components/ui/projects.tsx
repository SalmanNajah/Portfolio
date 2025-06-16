import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import Link from 'next/link'
import SideHeaders from '../sideheaders'
import Container from '../container'
//Imp TODO:
//Change the layout in landing to only 3 and more in projects page
// also adjust the spacing of the text description and image properly

const ProjectComponent = () => {
  const projects = [
    {
      title: "Portfolio Website Template",
      description: "Modern portfolio template built using HTML, CSS and JS.",
      href: "https://github.com/Salman-in/portfolio-v1",
      image: "/image2.png",
      skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "GitHub Pages"]
    },
    {
      title: "BrainSpace",
      description: "A place to store all your brain dumps. A modern, responsive web app for managing notes and ideas.",
      href: "https://github.com/Salman-in/brainspace",
      image: "/image3.png",
      skills: ["React", "Next.js", "Stripe", "Sanity.io", "Redux Toolkit"]
    },
    {
      title: "Real-time Chat Application",
      description: "Chat app with groups, private messaging, and authentication. Built with React and Socket.io.",
      href: "https://github.com/Salman-in/skill-swap",
      image: "/image1.png",
      skills: ["React", "Node.js", "Socket.io", "Express", "MongoDB"]
    },
    {
      title: "Task Manager App",
      description: "Organize tasks, set deadlines, and track progress. Responsive and user-friendly interface.",
      href: "https://github.com/yourusername/task-manager-app",
      image: "/image3.png",
      skills: ["React", "Redux", "TypeScript", "Firebase"]
    },
    {
      title: "Weather Dashboard",
      description: "Weather dashboard with real-time data, forecasts, and location search. Built with APIs.",
      href: "https://github.com/yourusername/weather-dashboard",
      image: "/image1.png",
      skills: ["React", "OpenWeatherMap API", "Tailwind CSS"]
    },
    {
      title: "Blog Platform",
      description: "Full-featured blog platform with markdown support and user authentication.",
      href: "https://github.com/yourusername/blog-platform",
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {projects.map((item, idx) => (
            <motion.div key={idx} className="bg-white dark:bg-[#1b1b1b] p-2 rounded-lg shadow-md hover:scale-102 transition-transform duration-300"
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

export default ProjectComponent;

//TODO
// 5. Add techstacks used (yt video)
// 9. Add blogs
// 10. Add a contact form
// 11. Add a footer with social hrefs
// 12. add git graph
// 14. global.css not working properly
// built with love by salman najah

// DONE
// 1. Add hrefs to the projects (make whole card clickable) using next/href - DONE
// 2. Add animations to the projects - DONE
// 3. style the cards properly  - justified to center DONE
// 4. Add hover effects to the cards (show border on hover only) - DONE
// 8. Add dark mode support - DONE
// 13. Made mobile responsive - DONE
