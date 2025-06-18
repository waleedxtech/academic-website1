
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
            className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-neutral-800 dark:to-blue-950 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
            >
            <CardHeader className="flex flex-row items-start bg-slate-100/80 dark:bg-slate-800/80 p-6 space-x-4"> {/* Adjusted opacity of header for better gradient visibility */}
              <div className="p-3 bg-primary/10 rounded-full">
                <BookText className="h-8 w-8 text-primary" />
              </div>
              <div>
                <CardTitle className="text-xl font-bold font-headline text-foreground">{item.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-2">
              <CardDescription className="text-md text-muted-foreground font-body italic">
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
