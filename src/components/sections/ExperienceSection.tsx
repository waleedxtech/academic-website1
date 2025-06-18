import Section from '@/components/ui/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, FlaskConical, BookText, CalendarDays, ExternalLink, ArrowRight } from 'lucide-react'; 
import Link from 'next/link';
import { Button } from '../ui/button';

interface ExperienceItem {
  type: 'Internship' | 'Research' | 'Publication';
  title: string;
  organization?: string; 
  journal?: string; 
  period?: string; 
  date?: string; 
  description: string | string[];
  link?: string;
  authors?: string;
  doi?: string;
}

const experienceData: ExperienceItem[] = [
  {
    type: 'Research',
    title: 'Design and Development of Resistance Butt Welding Machine',
    organization: 'Academic Research Project',
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
    type: 'Research',
    title: 'Design and Development of Solid-State DC Circuit Breaker',
    organization: 'Academic Research Project',
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
  {
    type: 'Publication',
    title: 'Design and Development of Improved Micro Butt Welding Power Plant',
    journal: '2022 International Conference on Electrical Engineering and Sustainable Technologies (ICEEST), Lahore, Pakistan, 2022',
    authors: 'W. Abdullah, M. Barkat, M. Ijaz, R. Khan, R. Muzammel and A. Raza',
    description: 'Conference publication detailing the research on the micro butt welding power plant.',
  },
  {
    type: 'Publication',
    title: 'Design and Development of Solid-state DC Circuit Breaker',
    journal: '2022 International Conference on Electrical Engineering and Sustainable Technologies (ICEEST), Lahore, Pakistan, 2022',
    authors: 'U. Tahir, W. Abdullah and L. Ali',
    description: 'Conference publication detailing the research on the solid-state DC circuit breaker.',
  },
  {
    type: 'Internship',
    title: 'Internship – LESCO, 132kV Substation',
    organization: 'LESCO (Lahore Electric Supply Company)',
    period: 'Jun. 2019 – Jul. 2019',
    description: 'New Garden Town, Lahore. Expanded prior knowledge through in-depth exposure to substation protection systems, including relay coordination and fault isolation strategies; observed execution of shutdown procedures and real-time maintenance operations.',
  },
  {
    type: 'Internship',
    title: 'Internship – NTDC, 220kV Substation',
    organization: 'NTDC (National Transmission & Despatch Company)',
    period: 'Jun. 2018 – Sep. 2018',
    description: 'New Kot Lakhpat, Lahore. Gained foundational exposure to high-voltage power transmission systems, including transformers, circuit breakers, and busbars, with hands-on observation of real-time grid operations and maintenance practices.',
  },
];

const getIcon = (type: ExperienceItem['type']) => {
  switch (type) {
    case 'Internship':
      return <Briefcase className="h-8 w-8 text-primary" />;
    case 'Research':
      return <FlaskConical className="h-8 w-8 text-primary" />; // Using primary, as new accent is light gray
    case 'Publication':
      return <BookText className="h-8 w-8 text-primary" />;
    default:
      return <Briefcase className="h-8 w-8 text-primary" />;
  }
};

export default function ExperienceSection() {
  return (
    <Section id="experience" title="Experience & Publications" subtitle="My Professional Journey and Contributions">
      <div className="space-y-12">
        {experienceData.map((item, index) => (
          <Card 
            key={index} 
            className="bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
            >
            <CardHeader className="flex flex-row items-start bg-muted/50 p-6 space-x-4">
              <div className="p-3 bg-primary/10 rounded-full">
                {getIcon(item.type)}
              </div>
              <div>
                <CardTitle className="text-xl font-bold font-headline text-card-foreground">{item.title}</CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  {item.organization || item.journal}
                  {item.type === 'Publication' && item.authors && <span className="block text-sm text-muted-foreground mt-1">Authors: {item.authors}</span>}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-3">
              {(item.period || item.date) && (
                <div className="flex items-center text-muted-foreground font-body">
                  <CalendarDays className="h-5 w-5 mr-2 text-primary/70" />
                  <span>{item.period || item.date}</span>
                </div>
              )}
              {Array.isArray(item.description) ? (
                <ul className="space-y-2">
                  {item.description.map((descItem, i) => (
                    <li key={i} className="flex items-start">
                      <span className="flex-shrink-0 w-2 h-2 bg-muted rounded-full mr-3 mt-[0.45em]"></span>
                      <span className="font-body text-card-foreground/90 leading-relaxed">{descItem}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="font-body text-card-foreground/90 leading-relaxed">{item.description}</p>
              )}
              {(item.link || item.doi) && (
                <Button asChild variant="link" className="text-primary hover:text-primary/80 p-0 h-auto mt-3">
                  <Link
                    href={item.link || item.doi || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium transition-colors"
                  >
                    {item.doi ? 'View Publication (DOI)' : 'Learn More'} <ExternalLink className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
