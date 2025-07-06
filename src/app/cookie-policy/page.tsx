import { Metadata } from 'next';
import CookiePolicyPage from '@/components/CookiePolicyPage';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Learn about how Messe.ae uses cookies and similar technologies on our website.',
};

export default function CookiePolicy() {
  return <CookiePolicyPage />;
}