import LandingBlogs from "@/components/landing-blog/landing-blog";
import GithubWrapper from "@/components/github-wrapper/github-wrapper";
import MainLanding from "@/components/main-landing";
import ProjectHome from "@/components/projects/projects-home";

export default function Home() {
  return (
    <div>
      <MainLanding />
      <ProjectHome />
      <GithubWrapper />
      <LandingBlogs />
    </div>
  );
}
