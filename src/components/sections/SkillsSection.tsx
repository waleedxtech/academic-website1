import Section from '@/components/ui/Section';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CircuitBoard, Cpu, Code, Lightbulb, Settings, Activity, Users, TrendingUp } from 'lucide-react';

const skillsData = [
  {
    category: "Software",
    icon: <Code className="h-8 w-8 text-primary mb-2" />,
    skills: ["MATLAB", "Simulink", "ETAP", "DigSilent PowerFactory", "ANSYS Maxwell", "CST Studio", "AutoCAD", "Multisim", "Proteus"]
  },
  {
    category: "Technical Skills",
    icon: <CircuitBoard className="h-8 w-8 text-primary mb-2" />,
    skills: ["Power System Studies", "System Design", "Finite Element Analysis", "PCB Design and Fabrication", "LaTeX"]
  },
  {
    category: "Programming",
    icon: <Cpu className="h-8 w-8 text-primary mb-2" />,
    skills: ["C++", "MATLAB", "Embedded Systems", "Arduino"]
  },
  {
    category: "Soft Skills",
    icon: <Users className="h-8 w-8 text-primary mb-2" />,
    skills: ["Self-Motivation", "Problem Solving", "Critical Thinking", "Creativity", "Attention to Detail"]
  },
  {
    category: "Actively Enhancing",
    icon: <TrendingUp className="h-8 w-8 text-primary mb-2" />,
    skills: ["Python", "Machine Learning", "Optimization", "PSCAD", "Power System Studies (PSS/E)"]
  }
];

export default function SkillsSection() {
  return (
    <Section id="skills" title="Technical Skills & Abilities" subtitle="My Engineering Toolbox" className="bg-muted/50">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((skillCategory) => (
          <Card key={skillCategory.category} className="shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <CardHeader className="items-center text-center">
              {skillCategory.icon}
              <CardTitle className="font-headline text-xl">{skillCategory.category}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex flex-wrap justify-center gap-2">
                {skillCategory.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm px-3 py-1 bg-primary/10 text-primary-foreground hover:bg-primary/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
