import Section from '@/components/ui/Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Trophy, Star, Users } from 'lucide-react'; // Users icon is available

const awardsData = [
  {
    title: "Gold Medal - B.Sc. Electrical Engineering",
    description: "Secured first position in the entire B.Sc. Electrical Engineering batch/cohort.",
    icon: Trophy
  },
  {
    title: "Winner - Inquizitive'2018",
    description: "Gold Medal and prize money winner in a quiz competition among five engineering departments organized by IEEE UOL Student Branch.",
    icon: Award
  },
  {
    title: "Academic Excellence Award",
    description: "Recognized at the UOL Annual Dinner & Excellence Awards Ceremony, 2019.",
    icon: Star
  },
  {
    title: "Consistent Top Performer",
    description: "Ranked first in the batch in every semester of B.Sc. Electrical Engineering.",
    icon: Award // Using Award again, consider a different one if available/desired like Zap or ShieldCheck
  },
  {
    title: "Academic Excellence Scholarship",
    description: "Recipient for every semester at the University of Lahore.",
    icon: Star // Using Star again
  },
  {
    title: "General Secretary - ECES",
    description: "Appointed General Secretary of the Electrical and Control Engineering Society, UOL.",
    icon: Users 
  }
];

export default function AwardsSection() {
  return (
    <Section id="awards" title="Awards & Achievements" subtitle="Recognitions of Dedication and Excellence">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {awardsData.map((award, index) => (
          <Card 
            key={index} 
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105 flex flex-col h-full animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader className="items-center text-center p-6 pb-4">
              <div className="p-4 bg-brand-purple/10 rounded-full inline-block mb-3">
                <award.icon className="h-10 w-10 text-brand-purple" />
              </div>
              <CardTitle className="text-xl font-bold font-headline text-foreground leading-tight">{award.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center p-6 pt-0 flex-grow">
              <p className="text-muted-foreground text-sm font-body">{award.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
