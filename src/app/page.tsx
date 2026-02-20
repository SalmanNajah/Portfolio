// import LandingBlogs from "@/components/blog/landing-blog";
import GithubGraph from "@/components/ui/github";
import MainLanding from "@/components/main-landing";
import ProjectHome from "@/components/projects/projects-home";
// import UpcomingProjects from "@/components/projects/upcoming-projects";

export default function Home() {
  return (
    <div>
      <MainLanding />
      <GithubGraph />
      <ProjectHome />
      {/* <UpcomingProjects limit={2} /> */}
      {/* <LandingBlogs /> */}
    </div>
  );
}
