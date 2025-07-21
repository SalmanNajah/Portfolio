import LandingBlogs from "@/components/blog/landing-blog";
import GithubWrapper from "@/components/github-wrapper/github-wrapper";
import MainLanding from "@/components/main-landing";
import ProjectHome from "@/components/projects/projects-home";
import UpcomingProjects from "@/components/projects/upcoming-projects";
import ContactSection from "@/components/contact/contact-section";

export default function Home() {
  return (
    <div>
      <MainLanding />
      <ProjectHome />
      <UpcomingProjects limit={2} />
      <GithubWrapper />
      <LandingBlogs />
      <ContactSection />
    </div>
  );
}
