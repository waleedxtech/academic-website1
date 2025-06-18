
import Section from '@/components/ui/Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, ExternalLink, Award, FileText } from 'lucide-react';
import Link from 'next/link';

interface EducationInfo {
  degree: string;
  institution: string;
  period: string;
  gpa: string;
  classRank: string;
  honors: string;
  wesCredential?: {
    label: string;
    href: string;
  };
}

const educationEntries: EducationInfo[] = [
  {
    degree: "Bachelor of Science in Electrical Engineering",
    institution: "University of Lahore",
    period: "Sep 2016 - Jun 2020",
    gpa: "3.91/4.00",
    classRank: "1st out of 200+",
    honors: "Gold Medal • Highest Distinction",
    wesCredential: {
      label: "WES Verified Credential",
      href: "https://badges.wes.org/Evidence?i=42a85685-e6a4-4bdf-8c06-e65acc8543c2&type=us",
    },
  },
];

interface CertificationInfo {
  title: string;
  details?: string;
  href?: string;
  icon: React.ElementType;
}

const certificationsAndTrainingData: CertificationInfo[] = [
  {
    title: "Registered Engineer with PEC under Washington Accord",
    details: "(ELECT/86064)",
    href: "https://verification.pec.org.pk/v/eV/sED/i.aspx?eid=322F303836303634",
    icon: FileText,
  },
  {
    title: "Advanced Power System Protection",
    details: "iMentors (April 2025)",
    icon: FileText,
  },
  {
    title: "Substation Design using DIgSILENT PowerFactory",
    details: "iMentors (May 2025)",
    icon: FileText,
  },
  {
    title: "The Complete Electrical Power with ETAP & Manual Analysis",
    details: "Udemy (Ongoing)",
    icon: FileText,
  },
];

export default function EducationSection() {
  return (
    <Section id="education" showDivider={true} title="Education & Certifications" subtitle="My Academic and Professional Qualifications">
      <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
        {/* Left Column: Education */}
        <div>
          <h3 className="text-2xl font-bold font-headline mb-6 flex items-center gap-2 text-foreground">
            <GraduationCap className="h-6 w-6 text-primary" />
            Education
          </h3>
          {educationEntries.map((edu, index) => (
            <Card 
              key={index} 
              className="bg-violet-100 dark:bg-violet-950/50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader className="p-0 mb-3">
                <CardTitle className="text-xl font-bold font-headline text-foreground">{edu.degree}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-2">
                <p className="text-primary font-medium font-body">{edu.institution}</p>
                <div className="flex justify-between items-center text-sm text-muted-foreground font-body">
                  <span>{edu.period}</span>
                  <span>GPA: {edu.gpa}</span>
                </div>
                <p className="text-sm text-foreground/90 font-body">
                  <strong className="font-semibold text-foreground">Class Rank:</strong> {edu.classRank}
                </p>
                <p className="text-sm text-foreground/90 font-body">
                  <strong className="font-semibold text-foreground">Honors:</strong> {edu.honors}
                </p>
                {edu.wesCredential && (
                  <div className="pt-2">
                    <Link
                      href={edu.wesCredential.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors font-medium group"
                    >
                      <ExternalLink className="h-4 w-4 mr-1.5 group-hover:scale-105 transition-transform" />
                      {edu.wesCredential.label}
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Right Column: Certifications & Training */}
        <div>
          <h3 className="text-2xl font-bold font-headline mb-6 flex items-center gap-2 text-foreground">
            <Award className="h-6 w-6 text-primary" />
            Certifications & Training
          </h3>
          <div className="space-y-4">
            {certificationsAndTrainingData.map((cert, index) => (
              <div
                key={index}
                className="bg-emerald-50 dark:bg-emerald-950/40 rounded-lg p-4 shadow-sm flex items-start gap-3 hover:shadow-md transition-shadow duration-300"
              >
                <cert.icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground/90 font-body">
                    {cert.href ? (
                      <Link href={cert.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:underline">
                        {cert.title}
                      </Link>
                    ) : (
                      cert.title
                    )}
                  </h4>
                  {cert.details && <p className="text-sm text-muted-foreground font-body">{cert.details}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
