"use client"
import Container from '@/components/container'
import ProjectContent from '@/components/projects/project-content';

const Projects = () => {
  return (
    <div>
      <Container className="md:pt-24 pt-24 min-h-full">
        <h1 className="text-3xl md:text-4xl font-bold text-primary dark:text-white tracking-tight">
          Projects
        </h1>
        <ProjectContent />
      </Container>
    </div>
  );
}

export default Projects