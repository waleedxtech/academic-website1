import Section from '@/components/ui/Section';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const featuredProjects = projects.slice(0, 3);

export default function ProjectsSection() {
  return (
    <Section id="projects" title="Featured Projects" subtitle="A Selection of My Work">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProjects.map((project, index) => (
          <ProjectCard 
            key={project.slug} 
            project={project} 
            className="animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
            />
        ))}
      </div>
      {projects.length > 3 && (
        <div className="text-center mt-12 md:mt-16 animate-fade-in" style={{ animationDelay: `${featuredProjects.length * 0.1}s` }}>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 group">
            <Link href="/projects">
              View All Projects <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      )}
       {projects.length === 0 && (
        <p className="text-center text-muted-foreground text-lg">More projects coming soon!</p>
      )}
    </Section>
  );
}
