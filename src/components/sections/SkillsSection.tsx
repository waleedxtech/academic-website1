
import Section from '@/components/ui/Section';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CircuitBoard, Cpu, Code, Users, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface SkillCategory {
  category: string;
  icon: LucideIcon;
  skills: string[];
  gradient: string; 
}

const skillsData: SkillCategory[] = [
  {
    category: "Software",
    icon: Code,
    skills: ["MATLAB", "Simulink", "ETAP", "DigSilent PowerFactory", "ANSYS Maxwell", "CST Studio", "AutoCAD", "Multisim", "Proteus"],
    gradient: "from-blue-400 to-purple-500" 
  },
  {
    category: "Technical Skills",
    icon: CircuitBoard,
    skills: ["Power System Studies", "System Design", "Finite Element Analysis", "PCB Design and Fabrication", "LaTeX"],
    gradient: "from-green-400 to-teal-500"
  },
  {
    category: "Programming",
    icon: Cpu,
    skills: ["C++", "MATLAB", "Embedded Systems", "Arduino"],
    gradient: "from-purple-400 to-pink-500"
  },
  {
    category: "Soft Skills",
    icon: Users,
    skills: ["Self-Motivation", "Problem Solving", "Critical Thinking", "Creativity", "Attention to Detail"],
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    category: "Actively Enhancing",
    icon: TrendingUp,
    skills: ["Python", "Machine Learning", "Optimization", "PSCAD", "Power System Studies (PSS/E)"],
    gradient: "from-red-400 to-orange-500"
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
            <div className={`h-2 bg-gradient-to-r ${skillCategory.gradient}`}></div>
            <CardHeader className="items-center text-center p-6">
              <skillCategory.icon className="h-10 w-10 text-primary mb-3" />
              <CardTitle className="text-xl font-bold font-headline text-card-foreground">{skillCategory.category}</CardTitle>
            </CardHeader>
            <CardContent className="text-center p-6 pt-0">
              <div className="flex flex-wrap justify-center gap-2">
                {skillCategory.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">
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
