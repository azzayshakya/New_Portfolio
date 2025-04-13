import AboutSection from "./components/AboutSection";
import CommentsSection from "./components/CommentsSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import RecentProjectsSection from "./components/ProjectsSection";
import ContactForm from "./components/UserForm";
import WorkExperience from "./components/WorkExperience";

export default function Home() {
  return (
    <div className="">
      <HeroSection/>
      <AboutSection/>
      <RecentProjectsSection/>
      <CommentsSection/>
      <WorkExperience/>
      <ContactForm/>
      <Footer/>
    </div>
    
  );
}
