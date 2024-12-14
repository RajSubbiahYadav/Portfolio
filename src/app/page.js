import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import ContactPage from "./components/Contact";
// import Achievements from "./components/Achivements";
import ProjectsSection from "./components/Project";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
      <div className="container mt-24 mx-auto mb-10 px-12 py-4">
       <section id="home">
        <HeroSection />
        </section>
        {/* <Achievements/> */}
        <section id="about">
        <AboutSection/>
        </section>
        <section id="projects">
        <ProjectsSection/>
        </section>
        <section id="contact">
        <ContactPage/>
        </section>
        <Footer/>
      </div>
    </main>
  );
}