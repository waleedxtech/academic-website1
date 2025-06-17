import Link from 'next/link';
import type { BlogPost } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { format } from 'date-fns';

interface BlogPostSnippetProps {
  post: BlogPost;
}

export default function BlogPostSnippet({ post }: BlogPostSnippetProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col h-full">
      {post.imageUrl && (
        <CardHeader className="p-0">
          <div className="relative aspect-video w-full">
            <Image
              src={post.imageUrl}
              alt={post.title}
              data-ai-hint={post.imageHint || "blog abstract"}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </CardHeader>
      )}
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-xl font-headline mb-2 leading-tight">
          <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
            {post.title}
          </Link>
        </CardTitle>
        <div className="flex items-center text-xs text-muted-foreground mb-3">
          <CalendarDays className="h-4 w-4 mr-1.5" />
          {format(new Date(post.date), 'MMMM d, yyyy')}
        </div>
        <CardDescription className="text-muted-foreground mb-4 text-sm leading-relaxed">
          {post.summary}
        </CardDescription>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="link" className="p-0 h-auto group text-primary hover:text-accent">
          <Link href={`/blog/${post.slug}`}>
            Read More <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
