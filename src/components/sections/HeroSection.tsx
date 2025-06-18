import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, GraduationCap, MapPin } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950 py-20 md:py-32 overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square md:aspect-[3/4] rounded-xl overflow-hidden shadow-2xl group order-first md:order-first animate-fade-in">
            <Image
              src="https://placehold.co/400x500.png"
              alt="W. Abdullah - Electrical Engineer"
              data-ai-hint="professional engineer"
              layout="fill"
              objectFit="cover"
              className="transform transition-all duration-500 ease-in-out group-hover:scale-105"
              priority
            />
          </div>
          <div className="space-y-6 text-center md:text-left animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight font-headline text-foreground">
              Waleed Abdullah
            </h1>
            <p className="text-2xl md:text-3xl font-light text-primary font-headline">
              Gold Medalist Electrical Engineer
            </p>
            <p className="text-lg md:text-xl text-muted-foreground font-body">
              A Gold Medalist Electrical Engineer with a strong academic background, complemented by professional and research experience. Highly motivated and driven by curiosity, I bring a passion for solving complex problems, along with energy, enthusiasm, innovative thinking, and a mindset of continuous improvement.
            </p>
            <div className="flex flex-col items-center md:items-start gap-3 pt-4">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:waleed.abdullah910@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors font-body" aria-label="Email waleed.abdullah910@gmail.com">
                  waleed.abdullah910@gmail.com
                </a>
              </div>
              <div 
                className="flex items-center gap-1.5 p-2 px-3 rounded-full border border-input bg-background text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground hover:cursor-default group transition-all duration-300 ease-in-out hover:shadow-md"
                aria-label="Location: Lahore, Pakistan"
              >
                <MapPin className="h-5 w-5 text-primary group-hover:text-accent-foreground transition-colors" />
                <span className="font-body group-hover:text-accent-foreground transition-colors">Lahore, Pakistan</span>
              </div>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <Button asChild variant="outline" size="icon" className="group transition-all duration-300 ease-in-out hover:shadow-md rounded-full hover:bg-accent hover:text-accent-foreground">
                  <Link href="https://www.linkedin.com/in/waleedabdullah/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile of Waleed Abdullah">
                    <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="icon" className="group transition-all duration-300 ease-in-out hover:shadow-md rounded-full hover:bg-accent hover:text-accent-foreground">
                  <Link href="https://github.com/waleedx1" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile of Waleed Abdullah">
                    <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="icon" className="group transition-all duration-300 ease-in-out hover:shadow-md rounded-full hover:bg-accent hover:text-accent-foreground">
                  <Link href="https://scholar.google.com/citations?user=Ald38KsAAAAJ" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar Profile of Waleed Abdullah">
                    <GraduationCap className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
       <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
       <div className="absolute -top-16 -right-16 w-72 h-72 bg-accent/10 rounded-full filter blur-3xl opacity-50 animate-pulse animation-delay-2000"></div>
    </section>
  );
}
