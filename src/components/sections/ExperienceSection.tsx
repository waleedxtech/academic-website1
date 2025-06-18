import Section from '@/components/ui/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, FlaskConical, BookText, CalendarDays, ExternalLink, ArrowRight } from 'lucide-react'; 
import Link from 'next/link';

interface ExperienceItem {
  type: 'Internship' | 'Research' | 'Publication';
  title: string;
  organization?: string; 
  journal?: string; 
  period?: string; 
  date?: string; 
  description: string | string[]; // Allow for string array for bullet points
  link?: string;
  authors?: string;
}

const experienceData: ExperienceItem[] = [
  {
    type: 'Research',
    title: 'Design and Development of Resistance Butt Welding Machine',
    organization: 'Academic Research Project',
    period: 'During B.Sc. (2016-2020)',
    description: [
      'Introduced a simplified and economical butt welding machine design suitable for local bulk production.',
      'Conducted market research and literature review.',
      'Designed a high current transformer, validated through FEA, and developed a working prototype.',
      'Designed and developed the mechanical structure of the machine.',
      'Presented at a conference (handled manuscript, revisions, presentation).'
    ],
  },
  {
    type: 'Research',
    title: 'Design and Development of Solid-State DC Circuit Breaker',
    organization: 'Academic Research Project',
    period: 'During B.Sc. (2016-2020)',
    description: [
      'Proposed a solid-state DC circuit breaker with low conduction loss, quick reclosing, and rebreaking capability.',
      'Verified operating modes and performance through Simulink/MATLAB simulations.',
      'Designed to interrupt faults within ~200 µs.',
      'Incorporated a recharging mechanism for rebreaking capability.',
      'Improved system protection and minimized electrical losses.',
      'Presented at a conference (handled manuscript, revisions, presentation).'
    ],
  },
  {
    type: 'Publication',
    title: 'Design and Development of Improved Micro Butt Welding Power Plant',
    journal: '2022 International Conference on Electrical Engineering and Sustainable Technologies (ICEEST), Lahore, Pakistan, 2022',
    authors: 'W. Abdullah, M. Barkat, M. Ijaz, R. Khan, R. Muzammel and A. Raza',
    description: 'Conference publication detailing the research on the micro butt welding power plant.',
    // link: 'DOI_OR_CONFERENCE_LINK_HERE' // Add actual link if available
  },
  {
    type: 'Publication',
    title: 'Design and Development of Solid-state DC Circuit Breaker',
    journal: '2022 International Conference on Electrical Engineering and Sustainable Technologies (ICEEST), Lahore, Pakistan, 2022',
    authors: 'U. Tahir, W. Abdullah and L. Ali',
    description: 'Conference publication detailing the research on the solid-state DC circuit breaker.',
    // link: 'DOI_OR_CONFERENCE_LINK_HERE' // Add actual link if available
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
      return <FlaskConical className="h-8 w-8 text-primary" />;
    case 'Publication':
      return <BookText className="h-8 w-8 text-primary" />;
    default:
      return <Briefcase className="h-8 w-8 text-primary" />;
  }
};

export default function ExperienceSection() {
  return (
    <Section id="experience" title="Experience & Publications" subtitle="My Professional Journey and Contributions">
      <div className="space-y-8">
        {experienceData.map((item, index) => (
          <Card key={index} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-start bg-muted/50 p-6 space-x-4">
              <div className="p-3 bg-primary/10 rounded-full">
                {getIcon(item.type)}
              </div>
              <div>
                <CardTitle className="text-2xl font-headline">{item.title}</CardTitle>
                <CardDescription className="text-lg text-foreground">
                  {item.organization || item.journal}
                  {item.type === 'Publication' && item.authors && <span className="block text-sm text-muted-foreground">Authors: {item.authors}</span>}
                  <span className="text-sm text-muted-foreground ml-2">({item.type})</span>
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-3">
              {(item.period || item.date) && (
                <div className="flex items-center text-muted-foreground">
                  <CalendarDays className="h-5 w-5 mr-2" />
                  <span>{item.period || item.date}</span>
                </div>
              )}
              {Array.isArray(item.description) ? (
                <ul className="list-disc list-inside space-y-1 text-foreground/90 leading-relaxed">
                  {item.description.map((descItem, i) => <li key={i}>{descItem}</li>)}
                </ul>
              ) : (
                <p className="text-foreground/90 leading-relaxed">{item.description}</p>
              )}
              {item.link && (
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-primary hover:text-accent font-medium transition-colors mt-2"
                >
                  Learn More / View Publication <ExternalLink className="ml-1 h-4 w-4" />
                </Link>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
