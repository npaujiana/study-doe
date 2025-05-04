import './globals.css';
import type { Metadata } from 'next';
import { inter, outfit } from '@/lib/theme';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Doe | AI Study Assistant',
  description: 'Snap your homework, learn smarter, finish faster with the AI study assistant that guides you step-by-step.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(
        inter.className,
        inter.variable,
        outfit.variable,
        "antialiased"
      )}>
        {children}
      </body>
    </html>
  );
}