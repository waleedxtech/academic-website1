
import Section from '@/components/ui/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, CalendarDays } from 'lucide-react'; 

interface InternshipItem {
  type: 'Internship';
  title: string;
  organization: string; 
  period: string; 
  location: string;
  description: string | string[];
}

const internshipData: InternshipItem[] = [
  {
    type: 'Internship',
    title: 'Internship – LESCO, 132kV Substation',
    organization: 'LESCO (Lahore Electric Supply Company)',
    period: 'Jun. 2019 – Jul. 2019',
    location: 'New Garden Town, Lahore',
    description: 'Expanded prior knowledge through in-depth exposure to substation protection systems, including relay coordination and fault isolation strategies; observed execution of shutdown procedures and real-time maintenance operations.',
  },
  {
    type: 'Internship',
    title: 'Internship – NTDC, 220kV Substation',
    organization: 'NTDC (National Transmission & Despatch Company)',
    period: 'Jun. 2018 – Sep. 2018',
    location: 'New Kot Lakhpat, Lahore',
    description: 'Gained foundational exposure to high-voltage power transmission systems, including transformers, circuit breakers, and busbars, with hands-on observation of real-time grid operations and maintenance practices.',
  },
];

export default function ExperienceSection() {
  return (
    <Section id="experience" title="Work Experience" subtitle="">
      <div className="space-y-12">
        {internshipData.map((item, index) => (
          <Card 
            key={index} 
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
            >
            <CardHeader className="flex flex-row items-start bg-slate-100 dark:bg-slate-800 p-6 space-x-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <div>
                <CardTitle className="text-xl font-bold font-headline text-foreground">{item.title}</CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  {item.organization} - <span className="italic">{item.location}</span>
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-3">
              <div className="flex items-center text-muted-foreground font-body">
                <CalendarDays className="h-5 w-5 mr-2 text-primary/70" />
                <span>{item.period}</span>
              </div>
              {Array.isArray(item.description) ? (
                <ul className="space-y-2">
                  {item.description.map((descItem, i) => (
                    <li key={i} className="flex items-start">
                      <span className="flex-shrink-0 w-2 h-2 bg-primary/70 rounded-full mr-3 mt-[0.45em]"></span>
                      <span className="font-body text-foreground/90 leading-relaxed">{descItem}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="font-body text-foreground/90 leading-relaxed">{item.description}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
