import { Metadata } from 'next';
import ArticlePageClient from '@/components/ArticlePageClient';
import { Article } from '@/components/ArticleCard';

// Mock article data
const articleData = {
  slug: 'future-exhibition-design-middle-east',
  title: 'The Future of Exhibition Design in the Middle East',
  subtitle: 'Exploring innovative trends and technologies shaping the exhibition industry across the region',
  author: 'Sarah Johnson',
  authorRole: 'Senior Design Consultant',
  publishDate: '15 mar 2024',
  readTime: '5 min',
  category: 'Design',
  heroImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&h=800&fit=crop',
  content: `
    <p>The exhibition industry in the Middle East is experiencing a remarkable transformation, driven by technological innovation and changing visitor expectations. As we look towards the future, several key trends are emerging that will shape how exhibitions are designed, built, and experienced in the region.</p>

    <h2>Embracing Digital Integration</h2>
    <p>One of the most significant shifts in exhibition design is the seamless integration of digital technologies. From interactive touchscreens to augmented reality experiences, exhibitors are finding new ways to engage visitors and create memorable brand experiences. This digital transformation isn't just about adding screens to stands; it's about creating cohesive, immersive environments that blend physical and digital elements.</p>

    <p>Virtual reality (VR) and augmented reality (AR) are becoming increasingly popular tools for exhibitors to showcase products and services that might be difficult to bring to the show floor. Whether it's allowing visitors to take virtual factory tours or visualizing architectural projects in 3D, these technologies are opening up new possibilities for engagement.</p>

    <h2>Sustainable Design Practices</h2>
    <p>Sustainability is no longer just a buzzword in the exhibition industry – it's becoming a fundamental requirement. Exhibition designers in the Middle East are increasingly focusing on eco-friendly materials, modular designs that can be reused, and energy-efficient lighting solutions. This shift towards sustainability is driven both by environmental consciousness and practical considerations, as clients seek to reduce costs and minimize waste.</p>

    <p>Many exhibitions are now incorporating recycled materials, using LED lighting exclusively, and designing stands that can be easily disassembled and repurposed for future events. This approach not only reduces environmental impact but also offers cost savings for exhibitors who participate in multiple shows throughout the year.</p>

    <h2>Cultural Sensitivity and Local Relevance</h2>
    <p>As the Middle East continues to attract international exhibitions and events, there's a growing emphasis on designs that respect and celebrate local culture while maintaining global appeal. This means incorporating traditional design elements, considering local customs in spatial planning, and ensuring that exhibitions are accessible and welcoming to diverse audiences.</p>

    <p>Designers are increasingly working with local artists and craftspeople to create unique elements that reflect the host country's heritage. This approach not only adds authenticity to exhibitions but also supports local creative industries and creates more meaningful connections with regional visitors.</p>

    <h2>The Rise of Hybrid Events</h2>
    <p>The pandemic accelerated the adoption of hybrid event formats, and this trend is here to stay. Exhibition designers are now creating spaces that work equally well for in-person visitors and virtual attendees. This includes considerations for camera angles, lighting for live streaming, and interactive elements that can be accessed remotely.</p>

    <p>Hybrid exhibitions offer the opportunity to extend reach beyond geographical limitations, allowing exhibitors to connect with global audiences while maintaining the value of face-to-face interactions. This dual approach is particularly relevant in the Middle East, where exhibitions often attract both regional and international participants.</p>

    <h2>Looking Ahead</h2>
    <p>As we move forward, the future of exhibition design in the Middle East looks bright and innovative. The region's commitment to hosting world-class events, combined with investments in infrastructure and technology, creates an ideal environment for pushing the boundaries of what's possible in exhibition design.</p>

    <p>Success in this evolving landscape will require designers to stay agile, embrace new technologies, and maintain a deep understanding of both local and global trends. By balancing innovation with cultural sensitivity and sustainability, the Middle East's exhibition industry is poised to set new standards for the global events sector.</p>
  `,
};

// Related articles
const relatedArticles: Article[] = [
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
];

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  // In real app, fetch article data based on slug
  console.log('Fetching metadata for slug:', slug); // Will use slug when connecting to API
  return {
    title: articleData.title,
    description: articleData.subtitle,
  };
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  // In real app, fetch article data based on slug
  console.log('Loading article for slug:', slug); // Will use slug when connecting to API
  
  return <ArticlePageClient articleData={articleData} relatedArticles={relatedArticles} />;
}