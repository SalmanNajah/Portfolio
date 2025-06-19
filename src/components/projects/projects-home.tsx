"use client"
import SideHeaders from '../sideheaders'
import Container from '../container'
import ProjectContent from './project-content'
import { Link } from 'next-view-transitions'

//Moved the content of the  Projects to ProjectContent component for better organization
const ProjectHome = () => {
  return (
    <div>
      <Container className="md:pt-6 pt-3 border-b border-neutral-300 dark:border-neutral-700 md:pb-8 pb-6">
        <SideHeaders>
          Proof of Work
        </SideHeaders>
        <ProjectContent limit={4}/>
        <div className="mt-6 flex justify-start pl-1">
          <Link href="/projects" className="text-sm text-neutral-600 dark:text-neutral-300 underline hover:no-underline transition">
            See All Projects →
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default ProjectHome;