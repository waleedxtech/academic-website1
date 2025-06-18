import Section from '@/components/ui/Section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

const contactMethods = [
  {
    name: 'Email',
    icon: <Mail className="h-8 w-8 text-primary" />,
    value: 'youremail@example.com',
    href: 'mailto:youremail@example.com',
    ariaLabel: 'Send an Email',
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin className="h-8 w-8 text-primary" />,
    value: 'linkedin.com/in/yourprofile',
    href: 'https://linkedin.com/in/yourprofile',
    ariaLabel: 'View LinkedIn Profile',
  },
  {
    name: 'GitHub',
    icon: <Github className="h-8 w-8 text-primary" />,
    value: 'github.com/yourusername',
    href: 'https://github.com/yourusername',
    ariaLabel: 'View GitHub Profile',
  },
  // {
  //   name: 'Phone',
  //   icon: <Phone className="h-8 w-8 text-primary" />,
  //   value: '(123) 456-7890',
  //   href: 'tel:+11234567890',
  //   ariaLabel: 'Call me'
  // },
];

export default function ContactSection() {
  return (
    <Section id="contact" title="Get In Touch" subtitle="Let's Connect and Discuss Opportunities">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {contactMethods.map((method) => (
          <Card key={method.name} className="shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <CardHeader className="items-center text-center pb-2">
              <div className="p-3 bg-primary/10 rounded-full mb-2">
                {method.icon}
              </div>
              <CardTitle className="font-headline text-xl">{method.name}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4 break-words">{method.value}</p>
              <Button asChild className="w-full sm:w-auto group">
                <Link href={method.href} target={method.href.startsWith('http') ? '_blank' : undefined} rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined} aria-label={method.ariaLabel}>
                  {method.name === 'Email' ? 'Send Email' : `View ${method.name}`}
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
        <p className="text-lg text-muted-foreground">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
      </div>
    </Section>
  );
}
