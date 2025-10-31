"use client"
import SideHeaders from '../sideheaders'
import Container from '../container'
import ProjectContent from './project-content'
import { Link } from 'next-view-transitions'

//Moved the content of the  Projects to ProjectContent component for better organization
const ProjectHome = () => {
  const limit = 4;
  return (
    <div>
      <SideHeaders>Projects</SideHeaders>
      <Container className="md:pt-6 pt-3 md:pb-8 pb-6 ">
        <ProjectContent limit={limit} />
        <div className="mt-6 flex justify-start pl-1">
          {limit > 4 && (
            <Link href="/projects" className="text-sm text-neutral-600 dark:text-neutral-300 underline hover:no-underline transition">
              See All Projects →
            </Link>
          )}
        </div>
      </Container>
    </div>
  );
}

export default ProjectHome;