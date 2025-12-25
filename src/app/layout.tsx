import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

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
    title: 'Neura - AI-Powered Portfolio Builder',
    description: 'Build stunning portfolio websites in minutes with AI. Upload your resume, choose from 40+ premium templates, and export a complete Next.js project.',
    keywords: ['portfolio', 'portfolio builder', 'website builder', 'react', 'nextjs', 'templates', 'AI', 'neura'],
    icons: {
        icon: '/logo.png',
        apple: '/logo.png',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
            <body className="font-sans antialiased">{children}</body>
        </html>
    );
}
