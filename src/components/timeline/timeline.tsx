import React from 'react';
import BlackTick from '../ui/blue-tick';

type Data = {
  title: string;
  content: {
    title: string | React.ReactNode;
    description: string | React.ReactNode;
  }[];
};

const Timeline = () => {
  const data: Data[] = [
    {
      title: '2025',
      content: [
        {
          title: 'Learning, Exploring & Aiming High 🎯',
          description:
            'Focused on growing every day - actively looking for great internships and freelance opportunities.',
        },
        {
          title: 'Open Source Contribution to p5.js Web Editor 🧑‍🔧',
          description:
            'Made my first open-source contribution - contributed to a creative coding platform I love.',
        },
        {
          title: 'Attended First 24hr College Hackathon 🌙',
          description:
            'Survived and thrived through my first overnight hackathon - built, broke, fixed, and built again!',
        },
        {
          title: 'Joined Sahyadri Open Source Community (SOSC) 🌱',
          description:
            'Became part of an inspiring tech community - learning, contributing, and collaborating.',
        },
        {
          title: 'Deep Dive into Next.js and TypeScript 🧠',
          description:
            'Deep dived into modern frontend development with Next.js and TypeScript - refining skills for production-level applications.',
        }
      ],
    },
    {
      title: '2024',
      content: [
        {
          title: 'Started Building Full Stack Projects 🚀',
          description:
            'Put knowledge to practice - built and deployed complete MERN stack applications.',
        },
        {
          title: 'Started Learning New Tech Stacks 🧱',
          description:
            'Began exploring full-stack development in depth, learning Node.js, Express, React, and MongoDB.',
        },
        {
          title: 'Joined a Full Stack + DevOps Cohort 👨‍🏫',
          description:
            'Hands-on learning with a mentor community - building and deploying real-world apps.',
        },
        {
          title: 'Introduction to Open Source 🌍',
          description:
            'First exposure to the world of contributions and collaboration.',
        },
        {
          title: 'Built Strong Fundamentals in C & C++ 💡',
          description:
            'Solidified programming logic and data structures - writing efficient, clean code.',
        },
      ],
    },
    {
      title: '2023',
      content: [
        {
          title: 'Started College - CSE Journey Begins 🎓',
          description:
            'Began my formal education in Computer Science & Engineering - the path became clearer.',
        },
        {
          title: 'Programming Became Serious 🧑‍💻',
          description:
            'Started coding daily and diving deeper into algorithms and real-world problems.',
        },
        {
          title: 'Exploring Computer Science Fields 🌐',
          description:
            'Ventured into different domains - from web to devops, and a bit of AI too.',
        },
        {
          title: 'Learnt Git & GitHub 🛠',
          description:
            'Understood the power of version control. Also, created my first GitHub account!',
        },
      ],
    },
    {
      title: '2022',
      content: [
        {
          title: 'Completed 12th Grade with 93.1% 🧠',
          description:
            'Cracked it again - strong academic finish and clearer focus on Computer Science.',
        },
        {
          title: 'Began JEE Prep ⚙️',
          description:
            'Dedicated the year to cracking one of the toughest engineering entrance exams in India.',
        },
      ],
    },
    {
      title: '2020',
      content: [
        {
          title: 'Completed 10th Grade with 91.3% 📜',
          description:
            'A major academic milestone achieved with flying colors.',
        },
        {
          title: 'Pandemic Times 😷',
          description:
            'Covid changed the world - spent time indoors exploring what really excites me.',
        },
        {
          title: 'Started Learning Programming & Python 💻👨‍💻',
          description:
            'First steps into the world of programming - Python, HTML, and web development basics.',
        },
      ],
    },
    {
      title: '2015',
      content: [
        {
          title: 'Discovered Computers 💻',
          description:
            'Got introduced to computers at school - was instantly fascinated and couldn’t stop exploring.',
        },
      ],
    },
    {
      title: '2008',
      content: [
        {
          title: 'Started School 🎒',
          description:
            'Officially entered the world of books, blackboards, and big dreams.',
        },
      ],
    },
    {
      title: '2004',
      content: [
        {
          title: 'An Engineer Was Born in India 👶🍼',
          description:
            'Born in a small town in India - the journey of curiosity and creation began here.',
        },
      ],
    },
  ];

  return (
    <div className="relative flex flex-col items-start ml-4 mt-4">
      <div className="absolute left-0 top-0 h-full w-0.5 bg-neutral-500 dark:bg-neutral-400" />
      {data.map((item, idx) => (
        <div key={idx} className="relative flex items-start mb-10">
          <div className="absolute left-[-5px] top-1 w-3 h-3 rounded-full bg-neutral-500 dark:bg-neutral-400 border-2 border-white dark:border-neutral-900 z-10" />
          <div className="ml-6">
            <h2 className="text-lg font-bold text-neutral-800 dark:text-white">{item.title}</h2>
            <div className="mt-2 space-y-4">
              {item.content.map((entry, i) => (
                <div key={i}>
                  <h3 className="text-base font-semibold text-neutral-800 dark:text-white">
                    <div className='flex '>
                      <BlackTick />
                      <span className='ml-2'>{entry.title}</span>
                    </div>
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 ml-7 pt-2">
                    {entry.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
