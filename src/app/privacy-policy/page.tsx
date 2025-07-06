import { Metadata } from 'next';
import PrivacyPolicyPage from '@/components/PrivacyPolicyPage';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn about how Messe.ae collects, uses, and protects your personal information.',
};

export default function PrivacyPolicy() {
  return <PrivacyPolicyPage />;
}