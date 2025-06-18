import Section from '@/components/ui/Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Youtube, Cpu, Leaf, UserCheck, HeartPulse, Briefcase, DollarSign, Mountain, Users } from 'lucide-react';

const hobbiesData = [
  {
    name: "YouTube Channel",
    description: "Own and manage a YouTube channel with 38K+ subscribers.",
    icon: <Youtube className="h-10 w-10 text-primary" />
  },
  {
    name: "Emerging Technologies",
    description: "Passionate about Agentic AI, LLMs, Blockchain, Smart Grids, IBRs, Grid-Forming Inverters.",
    icon: <Cpu className="h-10 w-10 text-primary" />
  },
  {
    name: "Sustainability",
    description: "Interested in sustainable solutions and green technologies.",
    icon: <Leaf className="h-10 w-10 text-primary" />
  },
  {
    name: "Personal Development",
    description: "Focused on continuous learning and self-improvement.",
    icon: <UserCheck className="h-10 w-10 text-primary" />
  },
  {
    name: "Fitness",
    description: "Maintaining an active lifestyle through regular exercise.",
    icon: <HeartPulse className="h-10 w-10 text-primary" />
  },
  {
    name: "Entrepreneurship",
    description: "Exploring innovative business ideas and ventures.",
    icon: <Briefcase className="h-10 w-10 text-primary" />
  },
  {
    name: "Financial Literacy",
    description: "Keen on understanding and managing personal finances.",
    icon: <DollarSign className="h-10 w-10 text-primary" />
  },
  {
    name: "Outdoor Exploration",
    description: "Enjoying nature and discovering new places.",
    icon: <Mountain className="h-10 w-10 text-primary" />
  },
  {
    name: "Professional Networking",
    description: "Building connections and engaging with professionals in various fields.",
    icon: <Users className="h-10 w-10 text-primary" />
  }
];

export default function HobbiesSection() {
  return (
    <Section id="hobbies" title="Hobbies & Interests" subtitle="What I Do Outside of Engineering" className="bg-muted/50">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8"> {/* Adjusted grid for better fit */}
        {hobbiesData.map((hobby) => (
          <Card key={hobby.name} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col">
            <CardHeader className="items-center">
              <div className="p-4 bg-primary/10 rounded-full inline-block mb-3">
                {hobby.icon}
              </div>
              <CardTitle className="font-headline text-xl">{hobby.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground text-sm">{hobby.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
