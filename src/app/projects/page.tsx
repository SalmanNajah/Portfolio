"use client"
import Container from '@/components/container'
import ProjectContent from '@/components/projects/project-content';
import UpcomingProjects from '@/components/projects/upcoming-projects';

const Projects = () => {
  return (
    <div>
      <Container className="md:pt-24 pt-24 min-h-full  border-b border-color-new dark:border-color-new pb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-primary dark:text-white tracking-tight">
          Projects
        </h1>
        <ProjectContent />
      </Container>
      <UpcomingProjects />
    </div>
  );
}

export default Projects