import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
  hasBottomBorder?: boolean;
}

export default function Section({
  id,
  title,
  subtitle,
  children,
  className,
  titleClassName,
  contentClassName,
  hasBottomBorder = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-12 md:py-20",
        hasBottomBorder && "border-b",
        className
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        {title && (
          <div className="mb-8 md:mb-12 text-center">
            <h2 className={cn("text-3xl md:text-4xl font-bold tracking-tight font-headline", titleClassName)}>
              {title}
            </h2>
            {subtitle && (
              <p className="mt-2 text-lg text-muted-foreground">
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div className={cn(contentClassName)}>
          {children}
        </div>
      </div>
    </section>
  );
}
