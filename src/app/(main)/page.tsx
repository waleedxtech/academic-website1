
import AboutSection from '@/components/sections/AboutSection';
import AwardsSection from '@/components/sections/AwardsSection';
import ContactSection from '@/components/sections/ContactSection';
import CourseworkSection from '@/components/sections/CourseworkSection';
import EducationSection from '@/components/sections/EducationSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import HeroSection from '@/components/sections/HeroSection';
import HobbiesSection from '@/components/sections/HobbiesSection';
import LeadershipExperienceSection from '@/components/sections/LeadershipExperienceSection';
import LifePhilosophySection from '@/components/sections/LifePhilosophySection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import PublicationsSection from '@/components/sections/PublicationsSection';
import ResearchSection from '@/components/sections/ResearchSection';
import SkillsSection from '@/components/sections/SkillsSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="space-y-16 md:space-y-20 lg:space-y-24">
        <AboutSection />
        <SkillsSection className="pt-0" />
        <EducationSection className="pt-0" />
        <CourseworkSection className="pt-0" />
        <ResearchSection className="pt-0" />
        <PublicationsSection className="pt-0" />
        <ExperienceSection className="pt-0" />
        <LeadershipExperienceSection className="pt-0" />
        <ProjectsSection className="pt-0" />
        <AwardsSection className="pt-0" />
        <HobbiesSection className="pt-0" />
        <LifePhilosophySection className="pt-0" />
        <ContactSection />
      </div>
    </>
  );
}
