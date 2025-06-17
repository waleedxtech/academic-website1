import Section from '@/components/ui/Section';
import BlogPostSnippet from '@/components/BlogPostSnippet';
import { blogPosts } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const recentPosts = blogPosts.slice(0, 2); // Show first 2 posts

export default function BlogSection() {
  return (
    <Section id="blog" title="Latest Insights" subtitle="From My Engineering Blog" className="bg-muted/50">
      <div className="grid md:grid-cols-2 gap-8">
        {recentPosts.map((post) => (
          <BlogPostSnippet key={post.slug} post={post} />
        ))}
      </div>
      {blogPosts.length > 2 && (
         <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="group transition-all duration-300 ease-in-out hover:shadow-md hover:bg-accent/10 hover:text-accent-foreground">
            <Link href="/blog">
              Visit Blog <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      )}
    </Section>
  );
}
