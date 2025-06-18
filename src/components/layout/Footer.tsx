import { Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-8 bg-slate-50 dark:bg-gray-900">
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
        <div className="flex items-center space-x-2">
          <Zap className="h-5 w-5 text-brand-blue" />
          <span className="font-semibold font-headline text-foreground">ElectronFlow</span>
        </div>
        <p className="text-sm text-muted-foreground font-body">
          &copy; {new Date().getFullYear()} ElectronFlow. All rights reserved.
        </p>
        {/* <div className="text-sm text-muted-foreground font-body">
          Designed with <span className="text-brand-purple">⚡</span> by an AI.
        </div> */}
      </div>
    </footer>
  );
}
