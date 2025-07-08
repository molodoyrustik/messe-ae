import { Metadata } from 'next';
import ArticlePageClient from '@/components/ArticlePageClient';
import { Article } from '@/components/ArticleCard';
import { articlesApi } from '@/lib/api/articles';
import { notFound } from 'next/navigation';

// Generate static params for all articles (SSG)
export async function generateStaticParams() {
  try {
    const response = await articlesApi.getArticles({ pageSize: 100 });
    return response.data.map((article) => ({
      slug: article.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

// Helper function to strip markdown and get plain text
function stripMarkdown(markdown: string): string {
  // Remove headers
  let text = markdown.replace(/#{1,6}\s+/g, '');
  // Remove bold/italic
  text = text.replace(/\*{1,3}([^*]+)\*{1,3}/g, '$1');
  text = text.replace(/_{1,3}([^_]+)_{1,3}/g, '$1');
  // Remove links
  text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
  // Remove images
  text = text.replace(/!\[([^\]]*)\]\([^)]+\)/g, '');
  // Remove code blocks
  text = text.replace(/```[^`]*```/g, '');
  text = text.replace(/`([^`]+)`/g, '$1');
  // Remove blockquotes
  text = text.replace(/^>\s+/gm, '');
  // Remove lists
  text = text.replace(/^[*+-]\s+/gm, '');
  text = text.replace(/^\d+\.\s+/gm, '');
  // Remove horizontal rules
  text = text.replace(/^-{3,}$/gm, '');
  // Clean up extra whitespace
  text = text.replace(/\n{3,}/g, '\n\n');
  text = text.trim();
  return text;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    const response = await articlesApi.getArticleBySlug(slug);
    const article = response.data;
    
    // Strip markdown from title and use subtitle for description
    const plainTitle = stripMarkdown(article.title);
    const plainDescription = article.subtitle || stripMarkdown(article.text).substring(0, 160) + '...';
    
    return {
      title: plainTitle,
      description: plainDescription,
    };
  } catch (error) {
    console.error('Error fetching article metadata:', error);
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.',
    };
  }
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  
  try {
    // Fetch the current article
    const articleResponse = await articlesApi.getArticleBySlug(slug);
    const article = articleResponse.data;
    
    // Fetch related articles (latest 3 excluding current)
    const relatedResponse = await articlesApi.getArticles({ pageSize: 4 });
    const relatedArticles: Article[] = relatedResponse.data
      .filter(a => a.slug !== slug)
      .slice(0, 3)
      .map(a => ({
        id: a.id,
        slug: a.slug,
        title: a.title,
        excerpt: a.text.substring(0, 150) + '...',
        publishDate: new Date(a.createDate).toLocaleDateString('en-US', { 
          day: 'numeric', 
          month: 'long', 
          year: 'numeric' 
        }),
        readTime: '5 min',
        category: 'Design',
        image: a.image?.url || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
      }));
    
    const articleData = {
      slug: article.slug,
      title: article.title,
      subtitle: article.subtitle, // Now using subtitle from API
      author: 'Messe.ae Team',
      authorRole: 'Exhibition Experts',
      publishDate: new Date(article.createDate).toLocaleDateString('en-US', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
      }),
      readTime: '5 min',
      category: 'Design',
      heroImage: article.image?.url || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&h=800&fit=crop',
      content: article.text,
    };
    
    return <ArticlePageClient articleData={articleData} relatedArticles={relatedArticles} />;
  } catch (error) {
    console.error('Error loading article:', error);
    notFound();
  }
}