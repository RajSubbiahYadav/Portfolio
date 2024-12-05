import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
// import ContactPage from "./components/Contact";
import Footer from "./components/Footer";
import EmailSection from "./components/EmailSection";
import ContactPage from "./components/Contact";
import Achievements from "./components/Achivements";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <Achievements/>
        <AboutSection/>
        <ProjectSection/>
        {/* <EmailSection /> */}
        <ContactPage/>
        <Footer/>
      </div>
    </main>
  );
}