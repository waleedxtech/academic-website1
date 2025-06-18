
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, GraduationCap, MapPin } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-background py-20 md:py-32 overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-10 items-center"> {/* Changed md:gap-16 to md:gap-10 */}
          <div className="flex justify-center md:justify-start animate-fade-in order-1 md:order-none">
            <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-2xl group">
              <Image
                src="https://placehold.co/400x400.png"
                alt="W. Abdullah - Electrical Engineer"
                data-ai-hint="professional engineer"
                layout="fill"
                objectFit="cover"
                className="transform transition-all duration-500 ease-in-out group-hover:scale-105"
                priority
              />
            </div>
          </div>
          <div className="space-y-6 text-center md:text-left animate-fade-in order-2 md:order-none" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight font-headline text-foreground">
              Waleed <span className="text-primary">Abdullah</span>
            </h1>
            <p className="text-2xl md:text-3xl font-light text-primary font-headline">
              Electrical Engineer
            </p>
            <p className="text-lg md:text-xl text-muted-foreground font-body">
              A Gold Medalist Electrical Engineer with a strong academic background, complemented by professional and research experience. Highly motivated and driven by curiosity, I bring a passion for solving complex problems, along with energy, enthusiasm, innovative thinking, and a mindset of continuous improvement.
            </p>
            <div className="flex flex-col items-center md:items-start gap-3 pt-4">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:waleedabdullah.ee@gmail.com" className="text-sm text-primary font-bold hover:text-primary/80 transition-colors font-body" aria-label="Email waleedabdullah.ee@gmail.com">
                  waleedabdullah.ee@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-sm text-primary font-bold font-body">Lahore, Pakistan</span>
              </div>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
                <Button asChild variant="outline" className="group transition-all duration-300 ease-in-out hover:shadow-md rounded-full hover:bg-accent hover:text-accent-foreground px-4 py-2 text-sm border-2 border-primary/60 hover:border-accent">
                  <Link href="https://www.linkedin.com/in/waleedabdullah/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile of Waleed Abdullah">
                    <Linkedin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    LinkedIn
                  </Link>
                </Button>
                <Button asChild variant="outline" className="group transition-all duration-300 ease-in-out hover:shadow-md rounded-full hover:bg-accent hover:text-accent-foreground px-4 py-2 text-sm border-2 border-primary/60 hover:border-accent">
                  <Link href="https://github.com/waleedx1" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile of Waleed Abdullah">
                    <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    GitHub
                  </Link>
                </Button>
                <Button asChild variant="outline" className="group transition-all duration-300 ease-in-out hover:shadow-md rounded-full hover:bg-accent hover:text-accent-foreground px-4 py-2 text-sm border-2 border-primary/60 hover:border-accent">
                  <Link href="https://scholar.google.com/citations?user=Ald38KsAAAAJ" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar Profile of Waleed Abdullah">
                    <GraduationCap className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Google Scholar
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
       <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
       <div className="absolute -top-16 -right-16 w-80 h-80 bg-accent/10 rounded-full filter blur-3xl opacity-50 animate-pulse animation-delay-2000"></div>
    </section>
  );
}
