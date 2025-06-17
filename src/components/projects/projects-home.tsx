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
          <Link href="/blog" className="text-sm text-neutral-600 dark:text-neutral-300 underline hover:no-underline transition">
            See All Projects →
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default ProjectHome;

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
