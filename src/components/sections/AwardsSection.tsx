
import Section from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Trophy, Star, Users as UsersIcon, Medal } from 'lucide-react'; 

interface AwardItem {
  description: string;
  icon: React.ElementType;
}

const awardsData: AwardItem[] = [
  {
    description: "Gold Medal for securing first position in the entire B.Sc. Electrical Engineering batch/cohort.",
    icon: Medal 
  },
  {
    description: "Gold Medal and prize money winner in Inquizitive'2018, a quiz competition among five engineering departments organized by IEEE UOL Student Branch.",
    icon: Trophy 
  },
  {
    description: "Academic Excellence Award at the UOL Annual Dinner & Excellence Awards Ceremony, 2019.",
    icon: Star
  },
  {
    description: "Ranked first in the batch in every semester of B.Sc. Electrical Engineering.",
    icon: Award 
  },
  {
    description: "Academic Excellence Scholarship recipient for every semester at the University of Lahore.",
    icon: Star
  },
  {
    description: "Appointed General Secretary of the Electrical and Control Engineering Society, UOL.",
    icon: UsersIcon 
  }
];

export default function AwardsSection() {
  return (
    <Section id="awards" title="Awards & Achievements" subtitle="">
      <Card className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-neutral-800 dark:to-blue-950 rounded-xl shadow-lg">
        <CardContent className="p-6 md:p-8">
          <ul className="space-y-4">
            {awardsData.map((award, index) => (
              <li 
                key={index} 
                className="flex items-start animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <award.icon className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-foreground/90 font-body">{award.description}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </Section>
  );
}
