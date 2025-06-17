import Section from '@/components/ui/Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const courseworkData = [
  "Advanced Analog Circuit Design",
  "Digital VLSI Design",
  "Real-Time Operating Systems",
  "Power Electronics Converters",
  "Control Systems Engineering",
  "Digital Signal Processing",
  "Electromagnetics",
  "Communication Systems"
];

export default function CourseworkSection() {
  return (
    <Section id="coursework" title="Relevant Coursework" subtitle="Key Academic Areas of Study" className="bg-muted/50">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-center text-2xl">Core Electrical Engineering Topics</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4">
            {courseworkData.map((course) => (
              <li key={course} className="flex items-center text-foreground/90">
                <CheckCircle className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                <span>{course}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </Section>
  );
}
