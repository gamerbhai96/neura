import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { WebsiteStructuredData } from '@/components/StructuredData';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-poppins',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Neura Studio - AI-Powered Portfolio Builder | Create Stunning Portfolios',
    description: 'Neura is the #1 AI portfolio maker. Build stunning developer, designer & creative portfolios in minutes. Upload your resume, choose from 50+ premium templates, and export a complete Next.js project. Free to try!',
    keywords: [
        'neura',
        'neura studio',
        'neura portfolio maker',
        'neura portfolio',
        'AI portfolio builder',
        'portfolio website builder',
        'developer portfolio maker',
        'designer portfolio template',
        'free portfolio builder',
        'portfolio generator',
        'nextjs portfolio',
        'react portfolio template',
        'professional portfolio',
        'creative portfolio maker',
        'resume to portfolio',
        'portfolio website generator',
    ],
    icons: {
        icon: '/logo.png',
        apple: '/logo.png',
    },
    metadataBase: new URL('https://neura-studio.vercel.app'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Neura Studio - AI-Powered Portfolio Builder',
        description: 'Build stunning developer & designer portfolios in minutes with AI. 50+ premium templates, instant export to Next.js.',
        url: 'https://neura-studio.vercel.app',
        siteName: 'Neura Studio',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Neura Studio - AI Portfolio Builder',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Neura Studio - AI-Powered Portfolio Builder',
        description: 'Build stunning portfolios in minutes with AI. 50+ premium templates!',
        images: ['/og-image.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'googlee3bed376b12c367d',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
            <body className="font-sans antialiased">
                <WebsiteStructuredData />
                {children}
            </body>
        </html>
    );
}
