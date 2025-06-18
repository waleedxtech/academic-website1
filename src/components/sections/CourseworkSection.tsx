import Section from '@/components/ui/Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const courseworkData = [
  "Power Distribution and Utilization",
  "Power System Protection",
  "Power System Analysis",
  "Power Electronics",
  "Electrical Power Transmission",
  "Control Systems",
  "Control of DC and AC Drives",
  "Embedded Systems"
];

export default function CourseworkSection() {
  return (
    <Section id="coursework" title="Relevant Coursework" subtitle="Key Academic Areas of Study">
      <Card className="bg-card rounded-xl shadow-lg overflow-hidden">
        <CardHeader className="p-6">
          <CardTitle className="text-xl font-bold font-headline text-center text-card-foreground">Core Electrical Engineering Topics</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4">
            {courseworkData.map((course, index) => (
              <li 
                key={course} 
                className="flex items-start animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="flex-shrink-0 w-2 h-2 bg-muted rounded-full mr-3 mt-[0.45em]"></span>
                <span className="text-card-foreground/90 font-body">{course}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </Section>
  );
}
