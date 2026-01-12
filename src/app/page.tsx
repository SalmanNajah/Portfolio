// import LandingBlogs from "@/components/blog/landing-blog";
import GithubWrapper from "@/components/github-wrapper/github-wrapper";
import MainLanding from "@/components/main-landing";
import ProjectHome from "@/components/projects/projects-home";
// import UpcomingProjects from "@/components/projects/upcoming-projects";

export default function Home() {
  return (
    <div>
      <MainLanding />
      <GithubWrapper />
      <ProjectHome />
      {/* <UpcomingProjects limit={2} /> */}
      {/* <LandingBlogs /> */}
    </div>
  );
}
