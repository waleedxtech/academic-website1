
import Section from '@/components/ui/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, CalendarDays, ExternalLink, BookOpen, Trophy } from 'lucide-react';
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
            className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 animate-fade-in relative overflow-hidden"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <edu.icon className="h-8 w-8 text-primary absolute top-6 right-6" />
            <CardHeader className="pr-16">
              <CardTitle className="text-2xl font-bold font-headline text-foreground">{edu.degree}</CardTitle>
              <CardDescription className="text-md text-primary font-medium">{edu.institution}</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center text-muted-foreground text-sm mb-4 font-body">
                <CalendarDays className="h-4 w-4 mr-2 text-primary/80" />
                <span>{edu.period}</span>
              </div>
              
              {edu.details.length > 0 && (
                <>
                  <div className="flex items-center gap-2 text-lg font-semibold text-foreground mb-3 mt-4 font-headline">
                    <Trophy className="h-5 w-5 text-amber-500" />
                    Key Highlights:
                  </div>
                  <ul className="space-y-2">
                    {edu.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></div>
                        <span className="font-body text-foreground/90 leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              
              {edu.credentials && edu.credentials.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-md font-semibold text-foreground mb-3 font-headline">Credentials:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.credentials.map(cred => (
                      <Button 
                        key={cred.label} 
                        asChild 
                        variant="outline" 
                        size="sm" 
                        className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20 hover:border-primary/30 rounded-full font-medium"
                      >
                        <Link href={cred.href} target="_blank" rel="noopener noreferrer">
                          {cred.label} <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                        </Link>
                      </Button>
                    ))}
                  </div>
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
              <div className="flex items-start p-4 border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 hover:border-primary/30 group hover:scale-[1.02] cursor-default">
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
