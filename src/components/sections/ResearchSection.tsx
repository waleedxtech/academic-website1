
import Section from '@/components/ui/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FlaskConical, CalendarDays } from 'lucide-react'; 

interface ResearchItem {
  title: string;
  period: string; 
  description: string[];
}

const researchData: ResearchItem[] = [
  {
    title: 'Design and Development of Resistance Butt Welding Machine',
    period: 'During B.Sc. (2016-2020)',
    description: [
      'Introduced a simplified and economical butt welding machine design suitable for local bulk production, targeting cost-sensitive manufacturing environments.',
      'Conducted market research and literature review to assess existing technologies.',
      'Designed a high current transformer, validated through computer simulations including Finite Element Analysis, and developed a working prototype.',
      'Designed and developed the mechanical structure of the machine, including the mechanism for welding operation.',
      'Presented the work at a conference, handling manuscript writing, submission, revisions, and final presentation.'
    ],
  },
  {
    title: 'Design and Development of Solid-State DC Circuit Breaker',
    period: 'During B.Sc. (2016-2020)',
    description: [
      'Proposed a solid-state DC circuit breaker with low conduction loss, quick reclosing, and rebreaking capability to address control and stability challenges in DC power systems.',
      'Verified operating modes and performance through Simulink/MATLAB simulations.',
      'Designed the breaker to interrupt and clear faults within approximately 200 µs, significantly reducing potential damage compared to mechanical breakers.',
      'Incorporated a recharging mechanism for the commutation capacitor, enabling rebreaking capability absent in conventional DC circuit breakers.',
      'Improved system protection by enabling fast operation, allowing use of lower-specification components and minimizing electrical losses.',
      'Presented the work at a conference, handling manuscript writing, submission, revisions, and final presentation.'
    ],
  },
];

export default function ResearchSection() {
  return (
    <Section id="research" title="Research Experience" subtitle="">
      <div className="space-y-12">
        {researchData.map((item, index) => (
          <Card 
            key={index} 
            className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
            >
            <CardHeader className="flex flex-row items-start bg-slate-100/80 dark:bg-slate-800/80 p-6 space-x-4"> {/* Adjusted opacity of header for better gradient visibility */}
              <div className="p-3 bg-primary/10 rounded-full">
                <FlaskConical className="h-8 w-8 text-primary" />
              </div>
              <div>
                <CardTitle className="text-xl font-bold font-headline text-foreground">{item.title}</CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  Academic Research Project
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-3">
              <div className="flex items-center text-muted-foreground font-body">
                <CalendarDays className="h-5 w-5 mr-2 text-primary/70" />
                <span>{item.period}</span>
              </div>
              <ul className="space-y-2">
                {item.description.map((descItem, i) => (
                  <li key={i} className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-primary/70 rounded-full mr-3 mt-[0.45em]"></span>
                    <span className="font-body text-foreground/90 leading-relaxed">{descItem}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

