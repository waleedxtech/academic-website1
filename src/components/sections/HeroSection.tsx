import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-background py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {/* Placeholder for a subtle background pattern, e.g. circuit lines */}
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square md:aspect-[3/4] rounded-lg overflow-hidden shadow-2xl group order-first md:order-last">
            <Image
              src="https://placehold.co/400x500.png" 
              alt="ElectronFlow - Electrical Engineer"
              data-ai-hint="professional engineer"
              layout="fill"
              objectFit="cover"
              className="transform transition-all duration-500 ease-in-out group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight font-headline text-foreground">
              ElectronFlow
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-primary font-headline">
              Electrical Engineer
            </p>
            <p className="text-lg md:text-xl text-muted-foreground">
              Passionate about designing innovative electrical systems and pushing the boundaries of technology. Welcome to my personal portfolio where I showcase my projects, skills, and professional journey.
            </p>
            <div className="flex flex-row gap-4 justify-center md:justify-start pt-4">
              <Button asChild variant="outline" size="icon" className="group transition-all duration-300 ease-in-out hover:shadow-md rounded-full">
                <Link href="mailto:youremail@example.com" aria-label="Email">
                  <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="icon" className="group transition-all duration-300 ease-in-out hover:shadow-md rounded-full">
                <Link href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="icon" className="group transition-all duration-300 ease-in-out hover:shadow-md rounded-full">
                <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
       {/* Decorative elements */}
       <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
       <div className="absolute -top-16 -right-16 w-72 h-72 bg-accent/20 rounded-full filter blur-3xl opacity-50 animate-pulse animation-delay-2000"></div>
    </section>
  );
}
