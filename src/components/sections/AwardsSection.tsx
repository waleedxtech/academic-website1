import Section from '@/components/ui/Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Trophy, Star } from 'lucide-react';

// Fallback icon if Users is not available - Define Users icon before it's used
const Users = ({className}: {className?: string}) => <Star className={className} />

const awardsData = [
  {
    title: "Gold Medal - B.Sc. Electrical Engineering",
    description: "Secured first position in the entire B.Sc. Electrical Engineering batch/cohort.",
    icon: <Trophy className="h-8 w-8 text-primary" />
  },
  {
    title: "Winner - Inquizitive'2018",
    description: "Gold Medal and prize money winner in a quiz competition among five engineering departments organized by IEEE UOL Student Branch.",
    icon: <Award className="h-8 w-8 text-primary" />
  },
  {
    title: "Academic Excellence Award",
    description: "Recognized at the UOL Annual Dinner & Excellence Awards Ceremony, 2019.",
    icon: <Star className="h-8 w-8 text-primary" />
  },
  {
    title: "Consistent Top Performer",
    description: "Ranked first in the batch in every semester of B.Sc. Electrical Engineering.",
    icon: <Award className="h-8 w-8 text-primary" />
  },
  {
    title: "Academic Excellence Scholarship",
    description: "Recipient for every semester at the University of Lahore.",
    icon: <Star className="h-8 w-8 text-primary" />
  },
  {
    title: "General Secretary - ECES",
    description: "Appointed General Secretary of the Electrical and Control Engineering Society, UOL.",
    icon: <Users className="h-8 w-8 text-primary" />
  }
];


export default function AwardsSection() {
  return (
    <Section id="awards" title="Awards & Achievements" subtitle="Recognitions of Dedication and Excellence">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {awardsData.map((award, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col h-full">
            <CardHeader className="items-center text-center pb-4">
              <div className="p-4 bg-primary/10 rounded-full inline-block mb-3">
                {award.icon}
              </div>
              <CardTitle className="font-headline text-xl leading-tight">{award.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center flex-grow">
              <p className="text-muted-foreground text-sm">{award.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
