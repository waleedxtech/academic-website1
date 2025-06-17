import Section from '@/components/ui/Section';
import BlogPostSnippet from '@/components/BlogPostSnippet';
import { blogPosts } from '@/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - ElectronFlow',
  description: 'Read articles and insights on electrical engineering topics from ElectronFlow.',
};

export default function BlogPage() {
  return (
    <Section title="Engineering Insights" subtitle="My Thoughts and Learnings on Electrical Engineering">
      {blogPosts.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogPostSnippet key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground">No blog posts available yet. Stay tuned!</p>
      )}
    </Section>
  );
}
