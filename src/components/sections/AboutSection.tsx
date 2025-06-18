import Image from 'next/image';
import Section from '@/components/ui/Section';
import { Award, Brain } from 'lucide-react';

export default function AboutSection() {
  return (
    <Section id="about" title="About Me" subtitle="Driven by Curiosity and a Passion for Innovation">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-square rounded-lg overflow-hidden shadow-xl group">
          <Image
            src="https://placehold.co/500x500.png"
            alt="Profile Picture of W. Abdullah"
            data-ai-hint="professional portrait"
            layout="fill"
            objectFit="cover"
            className="transform transition-all duration-500 ease-in-out group-hover:scale-105"
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            A Gold Medalist Electrical Engineer with a strong academic background, complemented by professional and research experience. Highly motivated and driven by curiosity, I bring a passion for solving complex problems, along with energy, enthusiasm, innovative thinking, and a mindset of continuous improvement.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6 mt-8">
            <div className="flex items-start space-x-4 p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Brain className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold font-headline">Problem Solver</h3>
                <p className="text-muted-foreground">Dedicated to finding elegant solutions to challenging engineering puzzles.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Award className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold font-headline">Continuous Learner</h3>
                <p className="text-muted-foreground">Always exploring new technologies and embracing a mindset of continuous improvement.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
