import Projects from "@/components/ui/projects";
import LandingBlogs from "@/components/landing-blog/landing-blog";
import GithubWrapper from "@/components/github-wrapper/github-wrapper";
import MainLanding from "@/components/main-landing";

export default function Home() {
  return (
    <div>
      <MainLanding />
      <Projects />
      <GithubWrapper />
      <LandingBlogs />
    </div>
  );
}
