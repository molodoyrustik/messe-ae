import { Metadata } from 'next';
import CategoryPageClient from '@/components/CategoryPageClient';
import { Article } from '@/components/ArticleCard';

// Mock categories data
const categoriesData: Record<string, {
  name: string;
  description: string;
  articles: Article[];
}> = {
  design: {
    name: 'Design',
    description: 'Explore the latest trends and innovations in exhibition design, from creative concepts to practical implementation.',
    articles: [
      {
        id: 1,
        slug: 'future-exhibition-design-middle-east',
        title: 'The Future of Exhibition Design',
        excerpt: 'Exploring innovative trends and technologies shaping the exhibition industry across the region.',
        publishDate: '15 mar 2024',
        readTime: '5 min',
        category: 'Design',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
      },
    ],
  },
  sustainability: {
    name: 'Sustainability',
    description: 'Learn about eco-friendly practices and sustainable approaches to event planning and exhibition management.',
    articles: [
      {
        id: 2,
        slug: 'sustainable-event-management',
        title: 'Sustainable Event Management',
        excerpt: 'How to create environmentally responsible events without compromising on quality or impact.',
        publishDate: '10 mar 2024',
        readTime: '7 min',
        category: 'Sustainability',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop',
      },
    ],
  },
  technology: {
    name: 'Technology',
    description: 'Discover how digital innovations are transforming the exhibition and events industry.',
    articles: [
      {
        id: 3,
        slug: 'digital-integration-exhibitions',
        title: 'Digital Integration in Exhibitions',
        excerpt: 'Leveraging technology to enhance visitor experience and engagement at trade shows.',
        publishDate: '05 mar 2024',
        readTime: '6 min',
        category: 'Technology',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      },
    ],
  },
  business: {
    name: 'Business',
    description: 'Insights and strategies for maximizing business opportunities through exhibitions and events.',
    articles: [
      {
        id: 4,
        slug: 'business-networking-events',
        title: 'Building Business Networks',
        excerpt: 'Strategies for creating meaningful connections and lasting partnerships at industry events.',
        publishDate: '28 feb 2024',
        readTime: '4 min',
        category: 'Business',
        image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop',
      },
    ],
  },
  trends: {
    name: 'Trends',
    description: 'Stay ahead with the latest trends and developments in the global exhibition industry.',
    articles: [
      {
        id: 5,
        slug: 'hybrid-events-post-pandemic',
        title: 'The Rise of Hybrid Events',
        excerpt: 'How the events industry has adapted to combine physical and virtual experiences.',
        publishDate: '20 feb 2024',
        readTime: '8 min',
        category: 'Trends',
        image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop',
      },
    ],
  },
  culture: {
    name: 'Culture',
    description: 'Understanding cultural nuances and local considerations in international exhibitions.',
    articles: [
      {
        id: 6,
        slug: 'cultural-considerations-events',
        title: 'Cultural Considerations in Events',
        excerpt: 'Understanding and respecting local customs when organizing international exhibitions.',
        publishDate: '15 feb 2024',
        readTime: '5 min',
        category: 'Culture',
        image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&h=600&fit=crop',
      },
    ],
  },
};

// All categories for filter chips
const allCategories = Object.keys(categoriesData).map(key => ({
  id: key,
  name: categoriesData[key].name,
}));

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const categoryData = categoriesData[category.toLowerCase()];
  
  if (!categoryData) {
    return {
      title: 'Category Not Found',
      description: 'The requested category could not be found.',
    };
  }
  
  return {
    title: `${categoryData.name} Articles - Messe.ae`,
    description: categoryData.description,
  };
}

interface PageProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const categoryKey = category.toLowerCase();
  const categoryData = categoriesData[categoryKey];

  return (
    <CategoryPageClient
      categoryKey={categoryKey}
      categoryData={categoryData}
      allCategories={allCategories}
    />
  );
}