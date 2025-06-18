
import Section from '@/components/ui/Section';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CircuitBoard, Cpu, Code, Users, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface SkillCategory {
  category: string;
  icon: LucideIcon;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    category: "Software",
    icon: Code,
    skills: ["MATLAB", "Simulink", "ETAP", "DigSilent PowerFactory", "ANSYS Maxwell", "CST Studio", "AutoCAD", "Multisim", "Proteus"],
  },
  {
    category: "Technical Skills",
    icon: CircuitBoard,
    skills: ["Power System Studies", "System Design", "Finite Element Analysis", "PCB Design and Fabrication", "LaTeX"],
  },
  {
    category: "Programming",
    icon: Cpu,
    skills: ["C++", "MATLAB", "Embedded Systems", "Arduino"],
  },
  {
    category: "Soft Skills",
    icon: Users,
    skills: ["Self-Motivation", "Problem Solving", "Critical Thinking", "Creativity", "Attention to Detail"],
  },
  {
    category: "Actively Enhancing",
    icon: TrendingUp,
    skills: ["Python", "Machine Learning", "Optimization", "PSCAD", "Power System Studies (PSS/E)"],
  }
];

export default function SkillsSection() {
  return (
    <Section id="skills" title="Technical Skills & Abilities" subtitle="">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((skillCategory, index) => (
          <Card 
            key={skillCategory.category} 
            className="bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="h-2 bg-gradient-to-tr from-primary to-accent"></div>
            <CardHeader className="items-center text-center p-6">
              <skillCategory.icon className="h-10 w-10 text-primary mb-3" />
              <CardTitle className="text-xl font-bold font-headline text-card-foreground">{skillCategory.category}</CardTitle>
            </CardHeader>
            <CardContent className="text-center p-6 pt-0">
              <div className="flex flex-wrap justify-center gap-2">
                {skillCategory.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="outline" 
                    className="border-black text-black bg-transparent px-3 py-1 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  >
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
