
import { getProjectBySlug, projects } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: 'Project Not Found - ElectronFlow',
    };
  }

  return {
    title: `${project.title} - ElectronFlow`,
    description: project.shortDescription,
    // openGraph: {
    //   images: [project.imageUrl],
    // },
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const gradientBackground = "bg-gradient-to-br from-gray-50 to-blue-50 dark:from-neutral-900 dark:to-sky-950/60";

  return (
    <section className={`py-16 md:py-20 ${gradientBackground}`}>
      <div className="container max-w-4xl mx-auto">

        <div className="mb-8">
          <Button 
            asChild 
            variant="outline" 
            className="group rounded-full text-foreground hover:bg-muted hover:text-muted-foreground focus-visible:ring-primary/70"
          >
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to All Projects
            </Link>
          </Button>
        </div>

        <div className="mb-12 md:mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-headline">
              {project.title}
            </h2>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none mb-8 md:mb-12 font-body text-foreground">
          {project.longDescription.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-foreground/90">{paragraph}</p>
          ))}
        </div>
        
        <div className="mb-8 md:mb-12">
          <h4 className="text-lg font-bold font-headline mb-3 text-foreground">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge 
                key={tech} 
                className="bg-blue-100/70 dark:bg-sky-900/40 text-primary dark:text-sky-300 px-3 py-1.5 text-sm rounded-full font-medium border-transparent hover:bg-blue-200/70 dark:hover:bg-sky-800/60 transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          {project.repoUrl && (
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full shadow-lg group transition-all duration-300">
              <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View Repository
              </Link>
            </Button>
          )}
          {project.liveUrl && (
            <Button asChild variant="outline" className="rounded-full group hover:bg-accent dark:hover:bg-accent px-6 py-3">
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-5 w-5" />
                Live Demo
              </Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
