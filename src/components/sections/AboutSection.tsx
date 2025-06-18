import Image from 'next/image';
import Section from '@/components/ui/Section';

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
          <p className="text-lg leading-relaxed text-muted-foreground font-body">
            As a dedicated problem solver, I am committed to finding elegant solutions to challenging engineering puzzles, always striving for efficiency and effectiveness in my work.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground font-body">
            I am also a continuous learner, constantly exploring new technologies and methodologies in the electrical engineering field, and I embrace a mindset of continuous improvement in all my endeavors.
          </p>
        </div>
      </div>
    </Section>
  );
}
