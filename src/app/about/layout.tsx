import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Messe.ae - a leading exhibition stand builder with 20+ years of expertise in creating innovative exhibition solutions worldwide.',
  openGraph: {
    title: 'About Messe.ae - Exhibition Stand Builder & Designer',
    description: 'Discover our story, expertise, and commitment to creating exceptional exhibition experiences. Part of ExpoGlobal group.',
    url: 'https://messe.ae/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Messe.ae - Exhibition Stand Builder & Designer',
    description: 'Discover our story, expertise, and commitment to creating exceptional exhibition experiences.',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}