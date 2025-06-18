import Section from '@/components/ui/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { GraduationCap, CalendarDays, Award, ExternalLink, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

const educationData = [
  {
    degree: "B.Sc., Electrical Engineering",
    institution: "University of Lahore",
    period: "Sep. 2016 – Jun. 2020",
    details: [
      "1st out of 200+ students",
      "GPA: 3.91/4.00",
      "Gold Medal for Highest Distinction",
      "WES Verified Credential",
      "Registered Engineer with PEC (ELECT/86064) under Washington Accord"
    ],
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    wesLink: "https://badges.wes.org/Evidence?i=42a85685-e6a4-4bdf-8c06-e65acc8543c2&type=us",
    pecLink: "https://verification.pec.org.pk/v/eV/sED/i.aspx?eid=322F303836303634"
  }
];

const trainingData = [
  {
    title: "Advanced Power System Protection",
    institution: "iMentors",
    date: "April 2025 (Expected)",
    icon: <BookOpen className="h-6 w-6 text-primary" />
  },
  {
    title: "Substation Design using DIgSILENT PowerFactory",
    institution: "iMentors",
    date: "May 2025 (Expected)",
    icon: <BookOpen className="h-6 w-6 text-primary" />
  },
  {
    title: "The Complete Electrical Power with ETAP & Manual Analysis",
    institution: "Udemy",
    date: "Ongoing - May 2025 (Expected)",
    icon: <BookOpen className="h-6 w-6 text-primary" />
  }
];

export default function EducationSection() {
  return (
    <Section id="education" title="Education & Certifications" subtitle="My Academic Background and Professional Development">
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
              <div className="flex items-center text-muted-foreground mb-3">
                <CalendarDays className="h-5 w-5 mr-2" />
                <span>{edu.period}</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-foreground/90">
                {edu.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {edu.wesLink && (
                  <Link href={edu.wesLink} target="_blank" rel="noopener noreferrer">
                    <Badge variant="outline" className="cursor-pointer hover:bg-accent/10">
                      WES Verified <ExternalLink className="ml-1 h-3 w-3" />
                    </Badge>
                  </Link>
                )}
                {edu.pecLink && (
                  <Link href={edu.pecLink} target="_blank" rel="noopener noreferrer">
                    <Badge variant="outline" className="cursor-pointer hover:bg-accent/10">
                      PEC Registered <ExternalLink className="ml-1 h-3 w-3" />
                    </Badge>
                  </Link>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="text-2xl md:text-3xl font-bold tracking-tight font-headline text-center mb-8">Trainings & Certifications</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainingData.map((training, index) => (
            <Card key={index} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-row items-start bg-muted/30 p-4 space-x-3">
                <div className="p-2 bg-primary/10 rounded-full">
                  {training.icon}
                </div>
                <div>
                  <CardTitle className="text-lg font-headline leading-tight">{training.title}</CardTitle>
                  <CardDescription className="text-sm text-foreground">{training.institution}</CardDescription>
                </div>
              </CardHeader>
              <CardFooter className="p-4 pt-0">
                <div className="flex items-center text-xs text-muted-foreground">
                  <CalendarDays className="h-4 w-4 mr-1.5" />
                  <span>{training.date}</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
