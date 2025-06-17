import Section from '@/components/ui/Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Camera, Mountain, Music, Book } from 'lucide-react';

const hobbiesData = [
  {
    name: "Photography",
    description: "Capturing moments and landscapes, exploring compositions and light.",
    icon: <Camera className="h-10 w-10 text-primary" />
  },
  {
    name: "Hiking & Outdoors",
    description: "Exploring nature trails and challenging myself with new peaks.",
    icon: <Mountain className="h-10 w-10 text-primary" />
  },
  {
    name: "Playing Guitar",
    description: "Strumming melodies and learning new songs in my free time.",
    icon: <Music className="h-10 w-10 text-primary" />
  },
  {
    name: "Reading Tech Blogs",
    description: "Staying updated with the latest advancements in technology and engineering.",
    icon: <Book className="h-10 w-10 text-primary" />
  }
];

export default function HobbiesSection() {
  return (
    <Section id="hobbies" title="Hobbies & Interests" subtitle="What I Do Outside of Engineering" className="bg-muted/50">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {hobbiesData.map((hobby) => (
          <Card key={hobby.name} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <CardHeader className="items-center">
              <div className="p-4 bg-primary/10 rounded-full inline-block mb-3">
                {hobby.icon}
              </div>
              <CardTitle className="font-headline text-xl">{hobby.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">{hobby.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
