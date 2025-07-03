import { Metadata } from 'next';
import ArticlePageClient from '@/components/ArticlePageClient';
import { Article } from '@/components/ArticleCard';
import { articlesApi } from '@/lib/api/articles';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    const response = await articlesApi.getArticleBySlug(slug);
    const article = response.data;
    
    return {
      title: article.title,
      description: article.text.substring(0, 160) + '...',
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
    
    // Transform article data to match expected format
    const articleData = {
      slug: article.slug,
      title: article.title,
      subtitle: article.text.substring(0, 200) + '...',
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