
import Section from '@/components/ui/Section';

interface LifePhilosophySectionProps {
  className?: string;
}

export default function LifePhilosophySection({ className }: LifePhilosophySectionProps) {
  return (
    <Section 
      id="life-philosophy" 
      title="Life Philosophy" 
      className={className} 
      showDivider={false} 
      titleClassName="text-center" 
      contentClassName="flex justify-center"
    >
      <div className="max-w-3xl text-center bg-background/80 dark:bg-card/70 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-xl border border-border/30">
        <p className="text-lg md:text-xl leading-relaxed text-foreground/90 font-body">
          I believe in continuous learning and maintaining a balance between technical expertise and personal interests.
          My diverse passions not only provide personal fulfillment but also inspire innovative approaches to engineering
          challenges. Whether I'm creating YouTube content, exploring emerging technologies, or engaging with the
          professional community, each experience contributes to my growth as both an engineer and an individual.
        </p>
      </div>
    </Section>
  );
}
