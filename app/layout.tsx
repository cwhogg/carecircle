import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: `CareCircle — AI support for sandwich generation caregivers`,
  description: `CareCircle helps sandwich generation caregiver burnout with AI-powered emotional support and family care coordination. Get the help you deserve as an adult child caregiver.`,
  openGraph: {
    title: `CareCircle — AI support for sandwich generation caregivers`,
    description: `CareCircle helps sandwich generation caregiver burnout with AI-powered emotional support and family care coordination. Get the help you deserve as an adult child caregiver.`,
    type: 'website',
    siteName: `CareCircle`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `CareCircle — AI support for sandwich generation caregivers`,
    description: `CareCircle helps sandwich generation caregiver burnout with AI-powered emotional support and family care coordination. Get the help you deserve as an adult child caregiver.`,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Sans+Pro:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-text min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
