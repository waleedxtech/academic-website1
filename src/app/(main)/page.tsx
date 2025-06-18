import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import EducationSection from '@/components/sections/EducationSection';
import CourseworkSection from '@/components/sections/CourseworkSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import AwardsSection from '@/components/sections/AwardsSection';
import HobbiesSection from '@/components/sections/HobbiesSection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <CourseworkSection />
      <ExperienceSection />
      <ProjectsSection />
      <AwardsSection />
      <HobbiesSection />
      <ContactSection />
    </>
  );
}
