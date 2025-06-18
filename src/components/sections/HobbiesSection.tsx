import Section from '@/components/ui/Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Youtube, Cpu, Leaf, UserCheck, HeartPulse, Briefcase, DollarSign, Mountain, Users as NetworkingIcon, Sparkles, Puzzle } from 'lucide-react'; // Added Sparkles for LLMs, Puzzle for Agentic AI

const hobbiesData = [
  {
    name: "YouTube Channel",
    description: "Own and manage a YouTube channel with 38K+ subscribers.",
    icon: Youtube
  },
  {
    name: "Emerging Technologies",
    description: "Passionate about Agentic AI, LLMs, Blockchain, Smart Grids, IBRs, Grid-Forming Inverters.",
    icon: Cpu // Or Sparkles for AI/LLMs, Puzzle for Agentic AI
  },
  {
    name: "Sustainability",
    description: "Interested in sustainable solutions and green technologies.",
    icon: Leaf
  },
  {
    name: "Personal Development",
    description: "Focused on continuous learning and self-improvement.",
    icon: UserCheck
  },
  {
    name: "Fitness",
    description: "Maintaining an active lifestyle through regular exercise.",
    icon: HeartPulse
  },
  {
    name: "Entrepreneurship",
    description: "Exploring innovative business ideas and ventures.",
    icon: Briefcase
  },
  {
    name: "Financial Literacy",
    description: "Keen on understanding and managing personal finances.",
    icon: DollarSign
  },
  {
    name: "Outdoor Exploration",
    description: "Enjoying nature and discovering new places.",
    icon: Mountain
  },
  {
    name: "Professional Networking",
    description: "Building connections and engaging with professionals in various fields.",
    icon: NetworkingIcon
  }
];

export default function HobbiesSection() {
  return (
    <Section id="hobbies" title="Hobbies & Interests" subtitle="What I Do Outside of Engineering">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8"> {/* Adjusted grid for possibly better fit */}
        {hobbiesData.map((hobby, index) => (
          <Card 
            key={hobby.name} 
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105 text-center flex flex-col animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader className="items-center p-6 pb-3">
              <div className="p-4 bg-brand-blue/10 rounded-full inline-block mb-3">
                <hobby.icon className="h-10 w-10 text-brand-blue" />
              </div>
              <CardTitle className="text-xl font-bold font-headline text-foreground">{hobby.name}</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0 flex-grow">
              <p className="text-muted-foreground text-sm font-body">{hobby.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
