import Container from '@/components/container'
import Image from 'next/image';
import React from 'react'

const Projects = () => {
    const projects = [
        {
            title: "Portfolio Website v2",
            description: "Modern portfolio with blog, dark mode, and animations. Built using Next.js and Tailwind.",
            link: "https://github.com/yourusername/portfolio-v2",
            image: "/image1.png",
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

    // some tweaking in the side heading is required
 return (
  <div>
    <Container className="md:pt-24 pt-3 min-h-[200vh]">
      <div className="relative inline-block text-base mb-6 bg-neutral-200 dark:bg-neutral-800 text-secondary px-2 py-1">
        Proof of Work - coming soooooon
        <div className="absolute -top-0.5 -left-0.5 w-1 h-1 rounded-full bg-secondary"></div>
        <div className="absolute -top-0.5 -right-0.5 w-1 h-1 rounded-full bg-secondary"></div>
        <div className="absolute -bottom-0.5 -left-0.5 w-1 h-1 rounded-full bg-secondary"></div>
        <div className="absolute -bottom-0.5 -right-0.5 w-1 h-1 rounded-full bg-secondary"></div>
      </div>
    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
        {projects.map((item, idx) => (
          <div key={idx} className="bg-white p-4 rounded-lg shadow-md">
            <Image
              src={item.image}
              alt={item.title}
              width={300}
              height={200}
              className="mb-4 rounded-md"
            />
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