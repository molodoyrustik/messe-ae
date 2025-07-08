import { Metadata } from 'next';
import CategoryClientPage from './client-page';
import { categoriesApi } from '@/lib/api/categories';
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
    
    return (
      <CategoryClientPage
        categorySlug={category}
        categoryData={{
          title: categoryData.title,
          description: categoryData.description,
        }}
      />
    );
  } catch (error) {
    console.error('Error loading category:', error);
    notFound();
  }
}