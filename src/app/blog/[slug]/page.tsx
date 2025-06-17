import { getBlogPostBySlug, blogPosts } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Section from '@/components/ui/Section';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, CalendarDays } from 'lucide-react';
import { format } from 'date-fns';
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found - ElectronFlow',
    };
  }

  return {
    title: `${post.title} - ElectronFlow Blog`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: 'article',
      publishedTime: post.date,
      authors: ['ElectronFlow'], // Replace with actual author name
      tags: post.tags,
      images: post.imageUrl ? [post.imageUrl] : [],
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <Section className="py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Button asChild variant="outline" className="group">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>
          </Button>
        </div>

        <article>
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-foreground mb-4">{post.title}</h1>
            <div className="flex items-center text-muted-foreground text-sm">
              <CalendarDays className="mr-2 h-5 w-5" />
              <span>Published on {format(new Date(post.date), 'MMMM d, yyyy')}</span>
            </div>
            {post.tags && post.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-accent/10 text-accent-foreground hover:bg-accent/20">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </header>

          {post.imageUrl && (
            <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-lg mb-8">
              <Image
                src={post.imageUrl}
                alt={post.title}
                data-ai-hint={post.imageHint || "blog post image"}
                layout="fill"
                objectFit="cover"
              />
            </div>
          )}
          
          <div 
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </article>
      </div>
    </Section>
  );
}
