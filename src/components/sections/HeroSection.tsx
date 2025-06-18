import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-background py-20 md:py-32 overflow-hidden">
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
              ElectronFlow
            </h1>
            <p className="text-2xl md:text-3xl font-light text-primary font-headline">
              Gold Medalist Electrical Engineer
            </p>
            <p className="text-lg md:text-xl text-muted-foreground font-body">
              A Gold Medalist Electrical Engineer with a strong academic background, complemented by professional and research experience. Highly motivated and driven by curiosity, I bring a passion for solving complex problems, along with energy, enthusiasm, innovative thinking, and a mindset of continuous improvement.
            </p>
            <div className="flex flex-row gap-4 justify-center md:justify-start pt-4">
              <Button asChild variant="outline" size="icon" className="group transition-all duration-300 ease-in-out hover:shadow-md rounded-full hover:bg-accent hover:text-accent-foreground">
                <Link href="mailto:w.abdullah.ee@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="icon" className="group transition-all duration-300 ease-in-out hover:shadow-md rounded-full hover:bg-accent hover:text-accent-foreground">
                <Link href="https://linkedin.com/in/wabdullah-ee" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="icon" className="group transition-all duration-300 ease-in-out hover:shadow-md rounded-full hover:bg-accent hover:text-accent-foreground">
                <Link href="https://github.com/wahab-abdullah" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
       <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
       <div className="absolute -top-16 -right-16 w-72 h-72 bg-accent/10 rounded-full filter blur-3xl opacity-50 animate-pulse animation-delay-2000"></div>
    </section>
  );
}
