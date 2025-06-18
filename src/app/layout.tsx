import ThemeProvider from '@/components/ThemeProvider';
import EmotionRegistry from '@/lib/emotion-registry';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Messe AI',
  description: 'Messe AI Application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="emotion-insertion-point" content="" />
      </head>
      <body className={inter.className}>
        <EmotionRegistry>
          <ThemeProvider>{children}</ThemeProvider>
        </EmotionRegistry>
      </body>
    </html>
  );
}
