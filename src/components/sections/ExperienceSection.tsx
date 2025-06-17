import Section from '@/components/ui/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, FlaskConical, BookText, CalendarDays, ArrowRight } from 'lucide-react'; //FlaskConical for research, BookText for publications

interface ExperienceItem {
  type: 'Internship' | 'Research' | 'Publication';
  title: string;
  organization?: string; // For internships/research
  journal?: string; // For publications
  period?: string; // For internships/research
  date?: string; // For publications
  description: string;
  link?: string;
}

const experienceData: ExperienceItem[] = [
  {
    type: 'Internship',
    title: 'Hardware Engineering Intern',
    organization: 'Innovatech Solutions Inc.',
    period: 'Summer 2021',
    description: 'Assisted in the design and testing of new IoT devices. Developed firmware for sensor modules and participated in PCB layout reviews. Gained hands-on experience with rapid prototyping and debugging hardware issues.',
    link: 'https://innovatech.example.com'
  },
  {
    type: 'Research',
    title: 'Research Assistant - Low Power Wireless Communication',
    organization: 'Tech University Wireless Lab',
    period: '2020 - 2021',
    description: 'Contributed to research on energy-efficient communication protocols for sensor networks. Simulated and analyzed performance of various MAC layer protocols. Co-authored a conference paper on the findings.',
  },
  {
    type: 'Publication',
    title: 'A Novel Approach to Energy Harvesting for Wearable Devices',
    journal: 'Journal of Low Power Electronics and Applications',
    date: 'March 2022',
    description: 'Presented a new technique for harvesting ambient RF energy to power wearable sensors, improving device longevity and reducing battery dependence.',
    link: 'https://doi.org/example.12345'
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
                  {item.organization || item.journal} - <span className="text-sm text-muted-foreground">{item.type}</span>
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
              <p className="text-foreground/90 leading-relaxed">{item.description}</p>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-primary hover:text-accent font-medium transition-colors"
                >
                  Learn More / View Publication <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
