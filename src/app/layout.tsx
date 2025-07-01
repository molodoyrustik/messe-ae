import ThemeProvider from '@/components/ThemeProvider';
import QueryProvider from '@/components/QueryProvider';
import EmotionRegistry from '@/lib/emotion-registry';
import { MobileMenuProvider } from '@/contexts/MobileMenuContext';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ 
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Messe.ae',
  description: 'Exhibition Stand Builder & Designer in UAE',
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
      <body className={roboto.className}>
        <EmotionRegistry>
          <QueryProvider>
            <ThemeProvider>
              <MobileMenuProvider>
                {children}
              </MobileMenuProvider>
            </ThemeProvider>
          </QueryProvider>
        </EmotionRegistry>
      </body>
    </html>
  );
}
