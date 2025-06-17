import Section from '@/components/ui/Section';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects - ElectronFlow',
  description: 'Explore a collection of electrical engineering projects by ElectronFlow.',
};

export default function ProjectsPage() {
  return (
    <Section title="All Projects" subtitle="A Comprehensive Showcase of My Work">
      {projects.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground">No projects to display at the moment. Check back soon!</p>
      )}
    </Section>
  );
}
