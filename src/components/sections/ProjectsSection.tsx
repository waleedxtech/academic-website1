import Section from '@/components/ui/Section';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const featuredProjects = projects.slice(0, 3); // Show first 3 projects

export default function ProjectsSection() {
  return (
    <Section id="projects" title="Featured Projects" subtitle="A Selection of My Work" className="bg-background">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      {projects.length > 3 && (
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="group transition-all duration-300 ease-in-out hover:shadow-md hover:bg-accent/10 hover:text-accent-foreground">
            <Link href="/projects">
              View All Projects <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      )}
    </Section>
  );
}
