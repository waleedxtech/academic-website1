import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-background py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {/* Placeholder for a subtle background pattern, e.g. circuit lines */}
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight font-headline text-foreground">
              Innovate. Engineer. Inspire.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Welcome to ElectronFlow, my personal portfolio. Explore my journey through electrical engineering, innovative projects, and insightful articles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="group transition-all duration-300 ease-in-out hover:shadow-lg hover:bg-accent/90">
                <Link href="/#projects">
                  View Projects <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="group transition-all duration-300 ease-in-out hover:shadow-md">
                <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer"> {/* Replace with actual resume link */}
                  Download CV <Download className="ml-2 h-5 w-5 group-hover:animate-bounce" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl group">
            <Image
              src="https://placehold.co/800x600.png"
              alt="Hero Image - Abstract technology or engineering concept"
              data-ai-hint="abstract technology"
              layout="fill"
              objectFit="cover"
              className="transform transition-all duration-500 ease-in-out group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
       {/* Decorative elements */}
       <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
       <div className="absolute -top-16 -right-16 w-72 h-72 bg-accent/20 rounded-full filter blur-3xl opacity-50 animate-pulse animation-delay-2000"></div>
    </section>
  );
}
