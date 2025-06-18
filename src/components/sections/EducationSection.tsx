
import Section from '@/components/ui/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { GraduationCap, CalendarDays, ExternalLink, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const educationData = [
  {
    degree: "B.Sc., Electrical Engineering",
    institution: "University of Lahore",
    period: "Sep. 2016 – Jun. 2020",
    details: [
      "1st out of 200+ students",
      "GPA: 3.91/4.00",
      "Gold Medal for Highest Distinction",
    ],
    credentials: [
      { label: "WES Verified Credential", href: "https://badges.wes.org/Evidence?i=42a85685-e6a4-4bdf-8c06-e65acc8543c2&type=us" },
      { label: "PEC Registered (ELECT/86064)", href: "https://verification.pec.org.pk/v/eV/sED/i.aspx?eid=322F303836303634" }
    ],
    icon: GraduationCap,
  }
];

const trainingData = [
  {
    title: "Advanced Power System Protection",
    institution: "iMentors",
    date: "April 2025 (Expected)",
    icon: BookOpen,
  },
  {
    title: "Substation Design using DIgSILENT PowerFactory",
    institution: "iMentors",
    date: "May 2025 (Expected)",
    icon: BookOpen,
  },
  {
    title: "The Complete Electrical Power with ETAP & Manual Analysis",
    institution: "Udemy",
    date: "Ongoing - May 2025 (Expected)",
    icon: BookOpen,
  }
];

export default function EducationSection() {
  return (
    <Section id="education" title="Education" subtitle="">
      <div className="space-y-12">
        {educationData.map((edu, index) => (
          <Card 
            key={index} 
            className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-neutral-800 dark:to-blue-950 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105 animate-fade-in" 
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader className="flex flex-row items-start bg-muted/50 p-6 space-x-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <edu.icon className="h-8 w-8 text-primary" />
              </div>
              <div>
                <CardTitle className="text-xl font-bold font-headline text-card-foreground">{edu.degree}</CardTitle>
                <CardDescription className="text-lg text-muted-foreground">{edu.institution}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center text-muted-foreground">
                <CalendarDays className="h-5 w-5 mr-2 text-primary/70" />
                <span className="font-body">{edu.period}</span>
              </div>
              <ul className="space-y-2">
                {edu.details.map((detail, i) => (
                  <li key={i} className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-primary/70 rounded-full mr-3 mt-[0.45em]"></span>
                    <span className="font-body text-card-foreground/90">{detail}</span>
                  </li>
                ))}
              </ul>
              {edu.credentials && edu.credentials.length > 0 && (
                <div className="flex flex-wrap gap-3 mt-4">
                  {edu.credentials.map(cred => (
                    <Button key={cred.label} asChild variant="outline" size="sm" className="border-primary/50 text-primary hover:bg-primary/10 rounded-full">
                      <Link href={cred.href} target="_blank" rel="noopener noreferrer">
                        {cred.label} <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="text-3xl font-bold tracking-tight font-headline text-center mb-12 text-foreground">Trainings & Certifications</h3>
        <ul className="max-w-2xl mx-auto space-y-6">
          {trainingData.map((training, index) => (
            <li 
              key={index} 
              className="animate-fade-in" 
              style={{ animationDelay: `${(educationData.length + index) * 0.1}s` }}
            >
              <div className="flex items-start p-4 border rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-neutral-800 dark:to-blue-950 hover:border-primary group hover:scale-105 cursor-default">
                <div className="flex-shrink-0 p-3 bg-primary/10 rounded-full mr-4 group-hover:bg-primary/20 transition-colors">
                  <training.icon className="h-6 w-6 text-primary group-hover:text-primary/90 transition-colors" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-lg font-headline text-card-foreground group-hover:text-primary transition-colors">{training.title}</h4>
                  <p className="text-sm text-muted-foreground">{training.institution}</p>
                  <div className="mt-1 flex items-center text-xs text-muted-foreground">
                    <CalendarDays className="h-4 w-4 mr-1.5 text-primary/70" />
                    <span>{training.date}</span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
