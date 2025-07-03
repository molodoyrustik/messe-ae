import { Metadata } from 'next';
import CategoryPageClient from '@/components/CategoryPageClient';
import { Article } from '@/components/ArticleCard';
import { categoriesApi } from '@/lib/api/categories';
import { articlesApi } from '@/lib/api/articles';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  
  try {
    const categoryResponse = await categoriesApi.getCategoryBySlug(category);
    const categoryData = categoryResponse.data;
    
    return {
      title: `${categoryData.title} - Messe.ae Blog`,
      description: categoryData.description,
    };
  } catch (error) {
    console.error('Error fetching category metadata:', error);
    return {
      title: 'Category Not Found',
      description: 'The requested category could not be found.',
    };
  }
}

interface PageProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  
  try {
    // Fetch the category
    const categoryResponse = await categoriesApi.getCategoryBySlug(category);
    const categoryData = categoryResponse.data;
    
    // Fetch all categories for the filter
    const categoriesResponse = await categoriesApi.getCategories({ pageSize: 100 });
    const allCategories = categoriesResponse.data.map(cat => ({
      id: cat.slug,
      name: cat.title,
    }));
    
    // Fetch articles for this category
    const articlesResponse = await articlesApi.getArticles({ 
      categorySlug: category,
      pageSize: 100 
    });
    
    const articles: Article[] = articlesResponse.data.map(article => ({
      id: article.id,
      slug: article.slug,
      title: article.title,
      excerpt: article.text.substring(0, 150) + '...',
      publishDate: new Date(article.createDate).toLocaleDateString('en-US', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
      }),
      readTime: '5 min',
      category: article.category?.title || categoryData.title,
      image: article.image?.url || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
    }));
    
    return (
      <CategoryPageClient
        categoryKey={category}
        categoryData={{
          name: categoryData.title,
          description: categoryData.description,
          articles,
        }}
        allCategories={allCategories}
      />
    );
  } catch (error) {
    console.error('Error loading category:', error);
    notFound();
  }
}