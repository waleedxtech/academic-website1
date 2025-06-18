import Image from 'next/image';
import Section from '@/components/ui/Section';
import { Award, Brain } from 'lucide-react';

export default function AboutSection() {
  return (
    <Section id="about" title="About Me" subtitle="Driven by Curiosity and a Passion for Innovation">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg group transition-all duration-300 hover:scale-105">
          <Image
            src="https://placehold.co/500x500.png"
            alt="Profile Picture of W. Abdullah"
            data-ai-hint="professional portrait"
            layout="fill"
            objectFit="cover"
            className="transform transition-all duration-500 ease-in-out group-hover:scale-105"
          />
        </div>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-muted-foreground font-body">
            A Gold Medalist Electrical Engineer with a strong academic background, complemented by professional and research experience. Highly motivated and driven by curiosity, I bring a passion for solving complex problems, along with energy, enthusiasm, innovative thinking, and a mindset of continuous improvement.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6 mt-8">
            <div className="bg-card rounded-xl shadow-lg hover:shadow-xl p-6 transition-all duration-300 group hover:scale-105">
              <div className="flex items-start space-x-4">
                <Brain className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold font-headline text-card-foreground">Problem Solver</h3>
                  <p className="text-muted-foreground mt-1">Dedicated to finding elegant solutions to challenging engineering puzzles.</p>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-xl shadow-lg hover:shadow-xl p-6 transition-all duration-300 group hover:scale-105">
              <div className="flex items-start space-x-4">
                <Award className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold font-headline text-card-foreground">Continuous Learner</h3>
                  <p className="text-muted-foreground mt-1">Always exploring new technologies and embracing a mindset of continuous improvement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
