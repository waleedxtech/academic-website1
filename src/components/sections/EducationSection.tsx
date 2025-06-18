import Section from '@/components/ui/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { GraduationCap, CalendarDays, ExternalLink, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button'; // Added import

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
    <Section id="education" title="Education & Certifications" subtitle="My Academic Background and Professional Development">
      <div className="space-y-12">
        {educationData.map((edu, index) => (
          <Card 
            key={index} 
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105 animate-fade-in" 
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader className="flex flex-row items-start bg-slate-50 dark:bg-slate-800/50 p-6 space-x-4">
              <div className="p-3 bg-brand-blue/10 rounded-full">
                <edu.icon className="h-8 w-8 text-brand-blue" />
              </div>
              <div>
                <CardTitle className="text-xl font-bold font-headline text-foreground">{edu.degree}</CardTitle>
                <CardDescription className="text-lg text-muted-foreground">{edu.institution}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center text-muted-foreground">
                <CalendarDays className="h-5 w-5 mr-2 text-brand-blue-400" />
                <span className="font-body">{edu.period}</span>
              </div>
              <ul className="space-y-2">
                {edu.details.map((detail, i) => (
                  <li key={i} className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-brand-blue-400 rounded-full mr-3 mt-[0.45em]"></span>
                    <span className="font-body text-foreground/90">{detail}</span>
                  </li>
                ))}
              </ul>
              {edu.credentials && edu.credentials.length > 0 && (
                <div className="flex flex-wrap gap-3 mt-4">
                  {edu.credentials.map(cred => (
                    <Button key={cred.label} asChild variant="outline" size="sm" className="border-brand-blue/50 text-brand-blue hover:bg-brand-blue/10 rounded-full">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainingData.map((training, index) => (
            <Card 
              key={index} 
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105 flex flex-col animate-fade-in" 
              style={{ animationDelay: `${(educationData.length + index) * 0.1}s` }}
            >
              <CardHeader className="flex flex-row items-start bg-slate-50 dark:bg-slate-800/50 p-6 space-x-3">
                <div className="p-2.5 bg-brand-purple/10 rounded-full">
                  <training.icon className="h-6 w-6 text-brand-purple" />
                </div>
                <div>
                  <CardTitle className="text-lg font-bold font-headline leading-tight text-foreground">{training.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">{training.institution}</CardDescription>
                </div>
              </CardHeader>
              <CardFooter className="p-6 pt-2 mt-auto">
                <div className="flex items-center text-xs text-muted-foreground">
                  <CalendarDays className="h-4 w-4 mr-1.5 text-brand-blue-400" />
                  <span className="font-body">{training.date}</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
