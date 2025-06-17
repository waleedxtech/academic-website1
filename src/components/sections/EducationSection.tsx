import Section from '@/components/ui/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, BookOpen, CalendarDays } from 'lucide-react';

const educationData = [
  {
    degree: "Master of Science in Electrical Engineering",
    institution: "Tech University",
    period: "2020 - 2022",
    details: "Specialized in Embedded Systems and VLSI Design. Thesis on low-power IoT device architecture.",
    icon: <GraduationCap className="h-8 w-8 text-primary" />
  },
  {
    degree: "Bachelor of Science in Electrical Engineering",
    institution: "State College of Engineering",
    period: "2016 - 2020",
    details: "Graduated with honors. Capstone project on a renewable energy microgrid system.",
    icon: <BookOpen className="h-8 w-8 text-primary" />
  }
];

export default function EducationSection() {
  return (
    <Section id="education" title="Education" subtitle="My Academic Background">
      <div className="space-y-8">
        {educationData.map((edu, index) => (
          <Card key={index} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-start bg-muted/50 p-6 space-x-4">
              <div className="p-3 bg-primary/10 rounded-full">
                {edu.icon}
              </div>
              <div>
                <CardTitle className="text-2xl font-headline">{edu.degree}</CardTitle>
                <CardDescription className="text-lg text-foreground">{edu.institution}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-3">
              <div className="flex items-center text-muted-foreground">
                <CalendarDays className="h-5 w-5 mr-2" />
                <span>{edu.period}</span>
              </div>
              <p className="text-foreground/90 leading-relaxed">{edu.details}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
