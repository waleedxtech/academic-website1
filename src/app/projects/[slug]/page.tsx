import { getProjectBySlug, projects } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Section from '@/components/ui/Section';
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
    openGraph: {
      images: [project.imageUrl],
    },
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

  return (
    <Section title={project.title} className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Button asChild variant="outline" className="group">
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </Link>
          </Button>
        </div>

        <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-xl mb-8">
          <Image
            src={project.imageUrl}
            alt={project.title}
            data-ai-hint={project.imageHint || "technology project detail"}
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
          <p className="lead text-xl text-muted-foreground">{project.longDescription}</p>
          {project.details && (
            <>
              <h3 className="font-headline text-2xl mt-8 mb-4">Technical Details</h3>
              <p>{project.details}</p>
            </>
          )}
        </div>
        
        <div className="mb-8">
          <h4 className="text-lg font-semibold font-headline mb-2">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="px-3 py-1 text-sm bg-primary/10 text-primary-foreground">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          {project.repoUrl && (
            <Button asChild className="group">
              <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                View Repository
              </Link>
            </Button>
          )}
          {project.liveUrl && (
            <Button asChild variant="outline" className="group">
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Live Demo
              </Link>
            </Button>
          )}
        </div>
      </div>
    </Section>
  );
}
