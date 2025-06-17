import { Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-8 bg-background">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <Zap className="h-5 w-5 text-primary" />
          <span className="font-semibold font-headline">ElectronFlow</span>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} ElectronFlow. All rights reserved.
        </p>
        <div className="text-sm text-muted-foreground mt-4 md:mt-0">
          Designed with <span className="text-red-500">⚡</span> by an AI.
        </div>
      </div>
    </footer>
  );
}
