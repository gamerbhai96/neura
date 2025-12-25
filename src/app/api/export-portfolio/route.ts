import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { getSession } from '@/lib/auth';
import archiver from 'archiver';
import fs from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
  try {
    console.log('📥 Export API - Starting export');

    // Check authentication with custom auth
    const user = await getSession();

    if (!user) {
      console.log('❌ Export API - Not authenticated');
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    console.log('✅ Export API - User:', user.id);

    const supabase = await createClient();
    const siteId = request.nextUrl.searchParams.get('siteId');
    if (!siteId) {
      console.log('❌ Export API - No siteId');
      return NextResponse.json({ error: 'Site ID required' }, { status: 400 });
    }

    console.log('📥 Export API - Fetching site:', siteId);

    const { data: site, error: fetchError } = await supabase
      .from('user_sites')
      .select('*, templates(name, id)')
      .eq('id', siteId)
      .eq('user_id', user.id)
      .single();

    if (fetchError || !site) {
      console.log('❌ Export API - Fetch error:', fetchError);
      return NextResponse.json({ error: 'Portfolio not found' }, { status: 404 });
    }

    const templateId = site.template_id || 'cyberpunk-neon';
    console.log('✅ Export API - Found site, template:', templateId);

    const portfolioData = site.data_json as any;

    // Try to read the actual template file
    let templateContent = '';
    try {
      const templatePath = path.join(process.cwd(), 'src', 'components', 'templates', 'developer', templateId, 'Page.tsx');
      templateContent = fs.readFileSync(templatePath, 'utf-8');
      console.log('✅ Export API - Read template file');
    } catch (e) {
      console.log('⚠️ Export API - Could not read template, using fallback');
    }

    // Create ZIP archive
    const archive = archiver('zip', { zlib: { level: 9 } });

    const zipBuffer = await new Promise<Buffer>((resolve, reject) => {
      const chunks: Buffer[] = [];

      archive.on('data', (chunk) => chunks.push(chunk));
      archive.on('end', () => {
        console.log('✅ Export API - Archive complete');
        resolve(Buffer.concat(chunks));
      });
      archive.on('error', (err) => {
        console.error('❌ Export API - Archive error:', err);
        reject(err);
      });

      // Add package.json
      const packageJson = {
        name: `${portfolioData.name?.toLowerCase().replace(/\s+/g, '-') || 'my'}-portfolio`,
        version: "1.0.0",
        private: true,
        scripts: {
          dev: "next dev",
          build: "next build",
          start: "next start",
          lint: "next lint"
        },
        dependencies: {
          "next": "14.2.33",
          "react": "^18",
          "react-dom": "^18",
          "framer-motion": "^11.0.0",
          "lucide-react": "^0.294.0",
          "tailwindcss": "^3.4.1"
        },
        devDependencies: {
          "typescript": "^5",
          "@types/node": "^20",
          "@types/react": "^18",
          "@types/react-dom": "^18",
          "autoprefixer": "^10.0.1",
          "postcss": "^8",
          "eslint": "^8",
          "eslint-config-next": "14.2.33"
        }
      };
      archive.append(JSON.stringify(packageJson, null, 2), { name: 'package.json' });

      // Add README
      const readme = `# ${portfolioData.name || 'My'} Portfolio

This is a Next.js portfolio website generated with Portfolio.ai

## Getting Started

\`\`\`bash
npm install
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploy

Deploy easily on Vercel, Netlify, or any Next.js hosting platform.
`;
      archive.append(readme, { name: 'README.md' });

      // Add data file with user's portfolio data
      const dataFile = `import { PortfolioData } from './types';

export const portfolioData: PortfolioData = ${JSON.stringify(portfolioData, null, 2)};
`;
      archive.append(dataFile, { name: 'app/data.ts' });

      // Add types file
      const typesFile = `export interface PortfolioData {
    name: string;
    email: string;
    phone: string;
    location: string;
    bio: string;
    role: string;
    skills: string[];
    experience: ExperienceItem[];
    education: EducationItem[];
    projects: ProjectItem[];
    certifications?: CertificationItem[];
    links: SocialLinks;
}

export interface ExperienceItem {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
    highlights: string[];
}

export interface EducationItem {
    school: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
}

export interface ProjectItem {
    name: string;
    description: string;
    technologies: string[];
    url?: string;
    github?: string;
}

export interface CertificationItem {
    name: string;
    issuer: string;
    date: string;
}

export interface SocialLinks {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
}
`;
      archive.append(typesFile, { name: 'app/types.ts' });

      // Process template content if we have it
      let mainPage = '';
      if (templateContent) {
        // Modify imports in the template
        mainPage = templateContent
          // Remove the original import from '../../types'
          .replace(/import\s*{\s*PortfolioData\s*}\s*from\s*['"]\.\.\/\.\.\/types['"];?/g, "import { PortfolioData } from './types';")
          // Add data import at the beginning
          .replace(/'use client';/, "'use client';\n\nimport { portfolioData } from './data';")
          // Change the component to use portfolioData instead of props
          .replace(/export default function \w+\(\s*{\s*data\s*}\s*:\s*{\s*data\?:\s*PortfolioData\s*}\s*\)/g, 'export default function Page()')
          // Remove mockData and displayData logic, just use portfolioData
          .replace(/const\s+displayData\s*=\s*data\s*\|\|\s*mockData;?/g, 'const displayData = portfolioData;')
          // Remove mockData declaration
          .replace(/const\s+mockData:\s*PortfolioData\s*=\s*{[\s\S]*?};/g, '')
          // Also handle patterns with default data
          .replace(/const\s+displayData\s*=\s*data\s*\?\?\s*mockData;?/g, 'const displayData = portfolioData;');
      } else {
        // Fallback generic page
        mainPage = `'use client';

import { portfolioData } from './data';

export default function Page() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl font-bold mb-4">{portfolioData.name}</h1>
                <p className="text-2xl text-gray-300 mb-2">{portfolioData.role}</p>
                <p className="text-gray-400 mb-8">{portfolioData.bio}</p>

                <section className="mb-8">
                    <h2 className="text-3xl font-bold mb-4">Skills</h2>
                    <div className="flex flex-wrap gap-2">
                        {portfolioData.skills?.map((skill, i) => (
                            <span key={i} className="px-3 py-1 bg-indigo-600 rounded-full text-sm">
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-bold mb-4">Experience</h2>
                    {portfolioData.experience?.map((exp, i) => (
                        <div key={i} className="mb-6 bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold">{exp.position}</h3>
                            <p className="text-indigo-400">{exp.company}</p>
                            <p className="text-gray-400 text-sm">{exp.startDate} - {exp.endDate}</p>
                        </div>
                    ))}
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-bold mb-4">Projects</h2>
                    {portfolioData.projects?.map((project, i) => (
                        <div key={i} className="mb-6 bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold">{project.name}</h3>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-bold mb-4">Education</h2>
                    {portfolioData.education?.map((edu, i) => (
                        <div key={i} className="mb-4 bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold">{edu.degree} - {edu.field}</h3>
                            <p className="text-indigo-400">{edu.school}</p>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
}
`;
      }
      archive.append(mainPage, { name: 'app/page.tsx' });

      // Add layout
      const layout = `import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '${portfolioData.name || 'My'} Portfolio',
    description: '${portfolioData.bio?.substring(0, 150) || 'My professional portfolio'}',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
`;
      archive.append(layout, { name: 'app/layout.tsx' });

      // Add globals.css
      const globalsCss = `@tailwind base;
@tailwind components;
@tailwind utilities;

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}
`;
      archive.append(globalsCss, { name: 'app/globals.css' });

      // Add tailwind.config
      const tailwindConfig = `/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}'],
    theme: { extend: {} },
    plugins: [],
};
`;
      archive.append(tailwindConfig, { name: 'tailwind.config.js' });

      // Add postcss config
      const postcssConfig = `module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
    },
};
`;
      archive.append(postcssConfig, { name: 'postcss.config.js' });

      // Add tsconfig
      const tsconfig = `{
    "compilerOptions": {
        "target": "es5",
        "lib": ["dom", "dom.iterable", "esnext"],
        "allowJs": true,
        "skipLibCheck": true,
        "strict": false,
        "noEmit": true,
        "esModuleInterop": true,
        "module": "esnext",
        "moduleResolution": "bundler",
        "resolveJsonModule": true,
        "isolatedModules": true,
        "jsx": "preserve",
        "incremental": true,
        "plugins": [{ "name": "next" }],
        "paths": { "@/*": ["./*"] }
    },
    "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
    "exclude": ["node_modules"]
}
`;
      archive.append(tsconfig, { name: 'tsconfig.json' });

      // Add next.config
      const nextConfig = `/** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = nextConfig;
`;
      archive.append(nextConfig, { name: 'next.config.js' });

      // Finalize
      archive.finalize();
    });

    console.log('📤 Export API - Sending ZIP, size:', zipBuffer.length);

    return new NextResponse(zipBuffer, {
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': `attachment; filename="${portfolioData.name?.replace(/\s+/g, '-') || 'portfolio'}.zip"`,
      },
    });

  } catch (error) {
    console.error('❌ Export API - Error:', error);
    return NextResponse.json(
      { error: 'Failed to export portfolio' },
      { status: 500 }
    );
  }
}
