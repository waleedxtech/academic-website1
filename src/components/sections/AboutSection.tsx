import Image from 'next/image';
import Section from '@/components/ui/Section';
import { Award, Brain, Target } from 'lucide-react';

export default function AboutSection() {
  return (
    <Section id="about" title="About Me" subtitle="A Glimpse into My Passion and Expertise">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-square rounded-lg overflow-hidden shadow-xl group">
          <Image
            src="https://placehold.co/500x500.png"
            alt="Profile Picture"
            data-ai-hint="professional portrait"
            layout="fill"
            objectFit="cover"
            className="transform transition-all duration-500 ease-in-out group-hover:scale-105"
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I am a passionate and results-driven Electrical Engineer with a strong foundation in analog and digital circuit design, embedded systems, and power electronics. My journey in engineering is fueled by an insatiable curiosity and a desire to solve complex problems with innovative solutions.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Beyond technical skills, I am a firm believer in continuous learning and collaborative teamwork. I thrive in dynamic environments where I can contribute my expertise while also learning from others.
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
                <p className="text-muted-foreground">Always exploring new technologies and methodologies in the EE field.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
