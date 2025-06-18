
import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  className?: string;
  style?: React.CSSProperties;
}

export default function ProjectCard({ project, className, style }: ProjectCardProps) {
  return (
    <Card 
      className={cn(
        "bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col h-full",
        className
      )}
      style={style}
    >
      <CardHeader className="p-0">
        <div className="relative aspect-video w-full">
          <Image
            src={project.imageUrl}
            alt={project.title}
            data-ai-hint={project.imageHint || "technology project"}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105" // Retain image scale on hover for visual feedback within card
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow space-y-3">
        <CardTitle className="text-xl font-bold font-headline text-card-foreground mb-1">{project.title}</CardTitle>
        <CardDescription className="text-muted-foreground text-sm leading-relaxed font-body">
          {project.shortDescription}
        </CardDescription>
        <div>
          <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-1.5 font-headline">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge 
                key={tech} 
                className="bg-blue-100/70 dark:bg-sky-900/40 text-primary dark:text-sky-300 px-3 py-1 text-xs rounded-full font-medium border-transparent hover:bg-blue-200/70 dark:hover:bg-sky-800/60 transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex flex-col sm:flex-row items-stretch sm:items-center sm:justify-between gap-3">
        <Button asChild className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 text-sm rounded-full shadow-md hover:shadow-lg transition-all duration-300 group">
          <Link href={`/projects/${project.slug}`}>
            Read More <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </Button>
        <div className="flex gap-2 w-full sm:w-auto justify-center">
          {project.repoUrl && (
            <Button asChild variant="outline" size="icon" className="rounded-full border-border hover:bg-accent group" aria-label="GitHub Repository">
              <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 text-muted-foreground group-hover:text-accent-foreground transition-colors" />
              </Link>
            </Button>
          )}
          {project.liveUrl && (
            <Button asChild variant="outline" size="icon" className="rounded-full border-border hover:bg-accent group" aria-label="Live Demo">
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-accent-foreground transition-colors" />
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
