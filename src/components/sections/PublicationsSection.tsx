
import Section from '@/components/ui/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookText } from 'lucide-react'; 

interface PublicationItem {
  title: string;
  journal: string; 
  authors: string;
}

const publicationData: PublicationItem[] = [
  {
    title: 'Design and Development of Improved Micro Butt Welding Power Plant',
    journal: '2022 International Conference on Electrical Engineering and Sustainable Technologies (ICEEST), Lahore, Pakistan, 2022',
    authors: 'W. Abdullah, M. Barkat, M. Ijaz, R. Khan, R. Muzammel and A. Raza',
  },
  {
    title: 'Design and Development of Solid-state DC Circuit Breaker',
    journal: '2022 International Conference on Electrical Engineering and Sustainable Technologies (ICEEST), Lahore, Pakistan, 2022',
    authors: 'U. Tahir, W. Abdullah and L. Ali',
  },
];

export default function PublicationsSection() {
  return (
    <Section id="publications" title="Publications" subtitle="">
      <div className="space-y-8">
        {publicationData.map((item, index) => (
          <Card 
            key={index} 
            className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 animate-fade-in relative overflow-hidden"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <BookText className="h-8 w-8 text-primary absolute top-6 right-6" />
            <CardHeader className="pr-16">
              <CardTitle className="text-2xl font-bold font-headline text-foreground">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <CardDescription className="text-md text-muted-foreground font-body italic mb-2">
                {item.journal}
              </CardDescription>
              <p className="font-body text-sm text-foreground/80">
                Authors: {item.authors}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
