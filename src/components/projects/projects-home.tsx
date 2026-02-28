"use client";

import SideHeaders from "../sideheaders";
import Container from "../container";
import ProjectContent from "./project-content";

const ProjectHome = () => {
  return (
    <div id="projects">
      <SideHeaders>Things I've built</SideHeaders>
      <Container className="md:pt-6 pt-3 md:pb-8 pb-6 ">
        <ProjectContent />
      </Container>
    </div>
  );
};

export default ProjectHome;