import { Metadata } from 'next';
import CategoryPageClient from '@/components/CategoryPageClient';
import { Article } from '@/components/ArticleCard';

// Mock categories data
const categoriesData: Record<string, {
  name: string;
  description: string;
  articles: Article[];
}> = {
  'expert-insights': {
    name: 'Expert insights',
    description: 'Gain valuable knowledge from industry experts and thought leaders in exhibition and event management.',
    articles: [
      {
        id: 1,
        slug: 'exhibition-stand-design-adapting',
        title: 'Exhibition Stand Design: Adapting to Different Industries',
        excerpt: 'Exploring innovative trends and technologies shaping the exhibition industry across the region.',
        publishDate: 'Few days ago',
        readTime: '5 min',
        category: 'Expert insights',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
      },
      {
        id: 2,
        slug: 'digital-integration-exhibitions',
        title: 'Digital Integration in Modern Exhibition Design',
        excerpt: 'Leveraging technology to enhance visitor experience and engagement at trade shows.',
        publishDate: '3 February 2025',
        readTime: '6 min',
        category: 'Expert insights',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      },
    ],
  },
  'exhibition-trends': {
    name: 'Exhibition stands trends',
    description: 'Stay updated with the latest trends and innovations in exhibition stand design and technology.',
    articles: [
      {
        id: 3,
        slug: 'lighting-exhibition-stands',
        title: 'Lighting of Exhibition Stands: How to Make Your Brand Shine',
        excerpt: 'How to create environmentally responsible events without compromising on quality or impact.',
        publishDate: '5 February 2025',
        readTime: '7 min',
        category: 'Exhibition trends',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop',
      },
      {
        id: 4,
        slug: 'future-of-trade-shows',
        title: 'The Future of Trade Shows in Post-Pandemic Era',
        excerpt: 'How the events industry has adapted to combine physical and virtual experiences.',
        publishDate: '20 January 2025',
        readTime: '8 min',
        category: 'Exhibition trends',
        image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop',
      },
    ],
  },
  'about-messe': {
    name: 'About messe.ae',
    description: 'Learn more about Messe.ae, our services, team, and commitment to excellence in exhibition solutions.',
    articles: [
      {
        id: 5,
        slug: 'sustainable-exhibition-practices',
        title: 'Sustainable Practices in Exhibition Industry',
        excerpt: 'Strategies for creating meaningful connections and lasting partnerships at industry events.',
        publishDate: '28 January 2025',
        readTime: '4 min',
        category: 'About messe.ae',
        image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop',
      },
      {
        id: 6,
        slug: 'exhibition-budget-optimization',
        title: 'Optimizing Your Exhibition Budget for Maximum Impact',
        excerpt: 'Understanding and respecting local customs when organizing international exhibitions.',
        publishDate: '15 January 2025',
        readTime: '5 min',
        category: 'About messe.ae',
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
    title: `${categoryData.name} - Messe.ae Blog`,
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