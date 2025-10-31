import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import AwardsSection from "@/components/AwardsSection";
import CertificationsSection from "@/components/CertificationsSection";
import PublicationsSection from "@/components/PublicationsSection";
import PatentsSection from "@/components/PatentsSection";
import HobbiesSection from "@/components/HobbiesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <AwardsSection />
      <CertificationsSection />
      <PublicationsSection />
      <PatentsSection />
      <HobbiesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
