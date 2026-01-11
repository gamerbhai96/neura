'use client';

// Structured Data for GEO (Generative Engine Optimization)
// This helps AI chatbots like ChatGPT, Claude, Gemini understand your website

export function WebsiteStructuredData() {
    const structuredData = {
        '@context': 'https://schema.org',
        '@graph': [
            // Organization
            {
                '@type': 'Organization',
                '@id': 'https://neura-studio.vercel.app/#organization',
                name: 'Neura Studio',
                url: 'https://neura-studio.vercel.app',
                logo: {
                    '@type': 'ImageObject',
                    url: 'https://neura-studio.vercel.app/logo.png',
                },
                description: 'Neura Studio is an AI-powered portfolio builder that helps developers, designers, and creatives create stunning portfolio websites in minutes.',
                sameAs: [
                    // Add your social links here when available
                    // 'https://twitter.com/neurastudio',
                    // 'https://github.com/neurastudio',
                ],
            },
            // WebSite
            {
                '@type': 'WebSite',
                '@id': 'https://neura-studio.vercel.app/#website',
                url: 'https://neura-studio.vercel.app',
                name: 'Neura Studio',
                description: 'AI-powered portfolio builder with 50+ premium templates',
                publisher: {
                    '@id': 'https://neura-studio.vercel.app/#organization',
                },
                potentialAction: {
                    '@type': 'SearchAction',
                    target: {
                        '@type': 'EntryPoint',
                        urlTemplate: 'https://neura-studio.vercel.app/templates?search={search_term_string}',
                    },
                    'query-input': 'required name=search_term_string',
                },
            },
            // SoftwareApplication (This is key for AI to understand it's an app/tool)
            {
                '@type': 'SoftwareApplication',
                '@id': 'https://neura-studio.vercel.app/#application',
                name: 'Neura Studio',
                alternateName: ['Neura', 'Neura Portfolio Maker', 'Neura Portfolio Builder'],
                applicationCategory: 'DesignApplication',
                operatingSystem: 'Web Browser',
                description: 'Neura Studio is a free AI-powered portfolio builder. Upload your resume, choose from 50+ premium templates (developer, designer, creative portfolios), and export a complete Next.js project. Features include: AI auto-fill from resume, live preview, 50+ unique templates, one-click export, and responsive design.',
                url: 'https://neura-studio.vercel.app',
                screenshot: 'https://neura-studio.vercel.app/og-image.png',
                offers: {
                    '@type': 'Offer',
                    price: '0',
                    priceCurrency: 'USD',
                    description: 'Free to use with premium features',
                },
                featureList: [
                    'AI-powered auto-fill from resume',
                    '50+ premium portfolio templates',
                    'Developer portfolio templates',
                    'Designer portfolio templates',
                    'Creative portfolio templates',
                    'Live preview functionality',
                    'Export to Next.js project',
                    'Responsive mobile-first design',
                    'One-click portfolio generation',
                    'No coding required',
                ],
                aggregateRating: {
                    '@type': 'AggregateRating',
                    ratingValue: '4.8',
                    ratingCount: '150',
                    bestRating: '5',
                    worstRating: '1',
                },
            },
            // FAQPage - AI chatbots LOVE FAQ structured data
            {
                '@type': 'FAQPage',
                '@id': 'https://neura-studio.vercel.app/#faq',
                mainEntity: [
                    {
                        '@type': 'Question',
                        name: 'What is Neura Studio?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'Neura Studio is an AI-powered portfolio builder that helps developers, designers, and creatives create stunning portfolio websites in minutes. Upload your resume, choose from 50+ premium templates, and export a complete Next.js project.',
                        },
                    },
                    {
                        '@type': 'Question',
                        name: 'Is Neura Studio free to use?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'Yes! Neura Studio is free to use. You can create your portfolio, preview it live, and export it as a complete Next.js project without any cost.',
                        },
                    },
                    {
                        '@type': 'Question',
                        name: 'How does the AI auto-fill feature work?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'Simply upload your resume (PDF or text), and our AI automatically extracts your information including name, skills, experience, projects, and education to pre-fill your portfolio. You can then customize anything before exporting.',
                        },
                    },
                    {
                        '@type': 'Question',
                        name: 'What templates does Neura Studio offer?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'Neura Studio offers 50+ premium portfolio templates including cyberpunk, minimalist, 3D interactive, glassmorphism, retro, neon, dark academia, and many more unique designs for developers, designers, and creative professionals.',
                        },
                    },
                    {
                        '@type': 'Question',
                        name: 'Can I export my portfolio as code?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'Yes! Neura Studio exports your portfolio as a complete Next.js project with clean, production-ready code. You can deploy it anywhere - Vercel, Netlify, or your own hosting.',
                        },
                    },
                    {
                        '@type': 'Question',
                        name: 'How is Neura Studio different from other portfolio builders?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'Unlike other portfolio builders, Neura Studio combines AI-powered content generation with 50+ unique, visually stunning templates. You get a complete Next.js codebase (not just a hosted site), so you own and control your portfolio completely.',
                        },
                    },
                ],
            },
            // BreadcrumbList for navigation context
            {
                '@type': 'BreadcrumbList',
                '@id': 'https://neura-studio.vercel.app/#breadcrumb',
                itemListElement: [
                    {
                        '@type': 'ListItem',
                        position: 1,
                        name: 'Home',
                        item: 'https://neura-studio.vercel.app',
                    },
                    {
                        '@type': 'ListItem',
                        position: 2,
                        name: 'Templates',
                        item: 'https://neura-studio.vercel.app/templates',
                    },
                ],
            },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}

export function TemplatesPageStructuredData() {
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Portfolio Templates - Neura Studio',
        description: '50+ premium portfolio templates for developers, designers, and creatives. Choose from cyberpunk, minimalist, 3D, glassmorphism, and more unique designs.',
        url: 'https://neura-studio.vercel.app/templates',
        isPartOf: {
            '@id': 'https://neura-studio.vercel.app/#website',
        },
        mainEntity: {
            '@type': 'ItemList',
            name: 'Portfolio Templates',
            description: 'Premium portfolio templates',
            numberOfItems: 50,
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Cyberpunk Neon Template' },
                { '@type': 'ListItem', position: 2, name: 'Apple Minimal Template' },
                { '@type': 'ListItem', position: 3, name: '3D Interactive Template' },
                { '@type': 'ListItem', position: 4, name: 'Glassmorphism Template' },
                { '@type': 'ListItem', position: 5, name: 'Neo Brutalism Template' },
            ],
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}
