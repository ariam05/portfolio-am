import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
// import AchievementsSection from "./components/AchievementsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col" style={{backgroundImage: `url('/images/projects/2.jpg')`}}>
      <Navbar />
      <div className="container mt-24 mx-auto mb-0">
        <HeroSection />
        {/* <br></br>
        <br></br> */}
        {/* <AchievementsSection /> */}
        <AboutSection />
        <ProjectSection />
        {/* <br></br> */}
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}