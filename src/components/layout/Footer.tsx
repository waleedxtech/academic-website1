import Link from 'next/link';
import { Zap, Mail, Linkedin, Github, GraduationCap, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactMethods = [
  {
    name: 'Email',
    icon: Mail,
    value: 'waleed.abdullah910@gmail.com',
    href: 'mailto:waleed.abdullah910@gmail.com',
    ariaLabel: 'Email Waleed Abdullah at waleed.abdullah910@gmail.com',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    value: 'linkedin.com/in/waleedabdullah',
    href: 'https://www.linkedin.com/in/waleedabdullah/',
    ariaLabel: 'View Waleed Abdullah\'s LinkedIn Profile',
  },
  {
    name: 'GitHub',
    icon: Github,
    value: 'github.com/waleedx1',
    href: 'https://github.com/waleedx1',
    ariaLabel: 'View Waleed Abdullah\'s GitHub Profile',
  },
  {
    name: 'Scholar',
    icon: GraduationCap,
    value: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=YOUR_USER_ID', // Placeholder
    ariaLabel: 'View Waleed Abdullah\'s Google Scholar Profile',
  },
  {
    name: 'Location',
    icon: MapPin,
    value: 'Your City, Country', // Placeholder
    href: 'https://maps.google.com/?q=YourCity,YourCountry', // Placeholder
    ariaLabel: 'View Waleed Abdullah\'s Location',
  },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-accent via-purple-700 to-indigo-800 dark:from-accent/80 dark:via-purple-800/80 dark:to-indigo-900/80 text-primary-foreground py-12 md:py-16">
      <div className="container max-w-6xl mx-auto flex flex-col items-center space-y-8">
        <div className="text-center">
          <h3 className="text-3xl font-bold font-headline mb-2">Let's connect</h3>
          <p className="text-primary-foreground/80 font-body">
            Feel free to reach out for collaborations or inquiries.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {contactMethods.map((method) => (
            <Button
              key={method.name}
              asChild
              variant="outline"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-primary-foreground border-primary-foreground/30 hover:border-primary-foreground/50 rounded-full px-6 py-3 group transition-all duration-300 hover:scale-105"
            >
              <Link href={method.href} target={method.href.startsWith('http') ? '_blank' : undefined} rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined} aria-label={method.ariaLabel}>
                <method.icon className="mr-2 h-5 w-5" />
                {method.name === 'Email' ? method.value : `View ${method.name}`}
              </Link>
            </Button>
          ))}
        </div>
        
        <div className="w-full border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            {/* The Zap icon and "ElectronFlow" name are removed based on previous request for Navbar */}
            {/* If you want branding here, we can add your name or another logo */}
             <span className="font-semibold font-headline text-primary-foreground">Waleed Abdullah</span>
          </div>
          <p className="text-sm text-primary-foreground/80 font-body">
            &copy; {new Date().getFullYear()} Waleed Abdullah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
