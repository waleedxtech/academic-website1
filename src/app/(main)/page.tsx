import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import EducationSection from '@/components/sections/EducationSection';
import CourseworkSection from '@/components/sections/CourseworkSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import BlogSection from '@/components/sections/BlogSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import HobbiesSection from '@/components/sections/HobbiesSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <CourseworkSection />
      <ProjectsSection />
      <ExperienceSection />
      <BlogSection />
      <HobbiesSection />
    </>
  );
}
