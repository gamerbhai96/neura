import { NextRequest, NextResponse } from 'next/server';
import pdf from 'pdf-parse/lib/pdf-parse';
import { extractTextWithOcrSpace } from '@/lib/ocr-space/client';
import fs from 'fs';
import path from 'path';
import { rateLimit, getClientIP, RATE_LIMITS } from '@/lib/rate-limit';

// Common programming languages and technologies for skill detection
const TECH_KEYWORDS = new Set([
    // Languages
    'javascript', 'typescript', 'python', 'java', 'c++', 'c#', 'c', 'ruby', 'go', 'golang', 'rust', 'php', 'swift', 'kotlin', 'scala', 'r', 'matlab', 'perl', 'bash', 'shell', 'powershell', 'sql', 'nosql', 'html', 'html5', 'css', 'css3', 'sass', 'scss', 'less', 'xml', 'json', 'yaml',
    // Frontend
    'react', 'reactjs', 'react.js', 'react native', 'angular', 'angularjs', 'vue', 'vuejs', 'vue.js', 'svelte', 'next.js', 'nextjs', 'nuxt', 'nuxtjs', 'gatsby', 'redux', 'zustand', 'mobx', 'recoil', 'jquery', 'bootstrap', 'tailwind', 'tailwindcss', 'material ui', 'mui', 'chakra ui', 'ant design', 'styled components', 'emotion', 'framer motion', 'three.js', 'threejs', 'd3', 'd3.js', 'chart.js', 'webpack', 'vite', 'parcel', 'rollup', 'babel', 'eslint', 'prettier',
    // Backend
    'node', 'nodejs', 'node.js', 'express', 'expressjs', 'express.js', 'fastify', 'koa', 'hapi', 'nest', 'nestjs', 'nest.js', 'django', 'flask', 'fastapi', 'tornado', 'spring', 'spring boot', 'springboot', 'hibernate', 'rails', 'ruby on rails', 'laravel', 'symfony', 'codeigniter', 'asp.net', '.net', 'dotnet', '.net core', 'entity framework', 'gin', 'echo', 'fiber',
    // Databases
    'mysql', 'postgresql', 'postgres', 'mariadb', 'mongodb', 'mongo', 'redis', 'memcached', 'elasticsearch', 'elastic', 'sqlite', 'oracle', 'sql server', 'mssql', 'dynamodb', 'cassandra', 'couchdb', 'neo4j', 'firebase', 'firestore', 'supabase', 'planetscale', 'prisma', 'sequelize', 'typeorm', 'mongoose', 'knex', 'drizzle',
    // Cloud & DevOps
    'aws', 'amazon web services', 'ec2', 's3', 'lambda', 'cloudfront', 'route53', 'rds', 'azure', 'microsoft azure', 'gcp', 'google cloud', 'google cloud platform', 'heroku', 'vercel', 'netlify', 'digitalocean', 'linode', 'docker', 'podman', 'kubernetes', 'k8s', 'helm', 'istio', 'jenkins', 'travis ci', 'circle ci', 'github actions', 'gitlab ci', 'bitbucket pipelines', 'ci/cd', 'cicd', 'terraform', 'pulumi', 'cloudformation', 'ansible', 'puppet', 'chef', 'vagrant', 'nginx', 'apache', 'caddy', 'haproxy', 'linux', 'ubuntu', 'debian', 'centos', 'rhel', 'arch', 'windows server',
    // Mobile
    'react native', 'flutter', 'dart', 'ios', 'android', 'swift', 'swiftui', 'uikit', 'objective-c', 'kotlin', 'jetpack compose', 'xamarin', 'ionic', 'cordova', 'capacitor', 'expo',
    // AI/ML/Data
    'machine learning', 'deep learning', 'neural networks', 'tensorflow', 'tf', 'pytorch', 'torch', 'keras', 'scikit-learn', 'sklearn', 'pandas', 'numpy', 'scipy', 'matplotlib', 'seaborn', 'plotly', 'opencv', 'cv2', 'nlp', 'natural language processing', 'computer vision', 'data science', 'data analysis', 'data engineering', 'etl', 'apache spark', 'spark', 'hadoop', 'hive', 'kafka', 'airflow', 'dbt', 'tableau', 'power bi', 'looker', 'jupyter', 'colab', 'hugging face', 'transformers', 'bert', 'gpt', 'llm', 'langchain', 'openai', 'artificial intelligence', 'ai', 'ml',
    // Testing
    'jest', 'mocha', 'chai', 'jasmine', 'karma', 'cypress', 'playwright', 'puppeteer', 'selenium', 'webdriver', 'testing library', 'react testing library', 'enzyme', 'vitest', 'pytest', 'unittest', 'junit', 'testng', 'rspec', 'minitest',
    // Tools & Others
    'git', 'github', 'gitlab', 'bitbucket', 'svn', 'mercurial', 'jira', 'confluence', 'trello', 'asana', 'notion', 'linear', 'slack', 'discord', 'teams', 'figma', 'sketch', 'adobe xd', 'photoshop', 'illustrator', 'after effects', 'premiere', 'vs code', 'vscode', 'visual studio', 'intellij', 'webstorm', 'pycharm', 'eclipse', 'vim', 'neovim', 'emacs', 'postman', 'insomnia', 'swagger', 'openapi', 'graphql', 'apollo', 'hasura', 'strapi', 'contentful', 'sanity', 'wordpress', 'shopify', 'magento', 'salesforce',
    // Concepts & Methodologies
    'rest', 'restful', 'rest api', 'graphql', 'grpc', 'websockets', 'socket.io', 'api', 'apis', 'microservices', 'monolith', 'serverless', 'jamstack', 'agile', 'scrum', 'kanban', 'waterfall', 'tdd', 'bdd', 'ddd', 'clean code', 'solid', 'design patterns', 'mvc', 'mvvm', 'oop', 'functional programming', 'ci/cd', 'devops', 'devsecops', 'sre', 'seo', 'responsive design', 'mobile first', 'accessibility', 'a11y', 'wcag', 'oauth', 'oauth2', 'jwt', 'saml', 'sso', 'ldap', 'rbac', 'encryption', 'security', 'penetration testing', 'web scraping', 'automation', 'rpa'
]);

// Improved fallback parser with better text extraction
function fallbackParseResume(text: string) {
    // Normalize text - fix common PDF/OCR extraction issues
    let normalizedText = text
        .replace(/\r\n/g, '\n')
        .replace(/\r/g, '\n')
        .replace(/\t/g, ' ')
        .replace(/\u00A0/g, ' '); // non-breaking space

    // If text has very few newlines, try to intelligently add line breaks
    const newlineCount = (normalizedText.match(/\n/g) || []).length;
    const textLength = normalizedText.length;

    if (newlineCount < textLength / 100) {
        // OCR text likely missing line breaks - add them before common section headers
        normalizedText = normalizedText
            // Add line breaks before section headers
            .replace(/\s+(Experience|Education|Projects?|Skills?|Summary|Objective|Work History|Employment|Qualifications?|Certifications?|Technical Skills?|Core Competencies|Professional Experience|Academic|Achievements?|Awards?)/gi, '\n$1')
            // Add line breaks before bullet points
            .replace(/\s+([•\-\*\u2022\u2023\u25E6\u2043\u2219])\s+/g, '\n$1 ')
            // Add line breaks before dates that look like job/education entries
            .replace(/\s+((?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+\d{4})/gi, '\n$1')
            .replace(/\s+(\d{4}\s*[-–—]\s*(?:\d{4}|Present|Current))/gi, '\n$1')
            // Add line breaks before email (usually starts new line)
            .replace(/\s+([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g, '\n$1')
            // Add line breaks before phone numbers
            .replace(/\s+(\+?\d{1,4}[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4})/g, '\n$1');
    }

    // Clean up multiple spaces but preserve newlines
    normalizedText = normalizedText
        .replace(/[^\S\n]+/g, ' ')  // Replace multiple spaces (not newlines) with single space
        .replace(/\n +/g, '\n')
        .replace(/ +\n/g, '\n')
        .replace(/\n{3,}/g, '\n\n'); // Max 2 consecutive newlines

    const lines = normalizedText.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    const fullText = lines.join('\n');
    const lowerText = fullText.toLowerCase();

    console.log('📋 Processing resume with', lines.length, 'lines');

    // ============= BASIC INFO EXTRACTION =============

    // Extract email - more robust pattern
    const emailMatch = fullText.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/);
    const email = emailMatch ? emailMatch[0].toLowerCase() : '';

    // Extract phone (various international formats)
    const phonePatterns = [
        /\+?\d{1,4}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
        /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/,
        /\d{10,12}/
    ];
    let phone = '';
    for (const pattern of phonePatterns) {
        const match = fullText.match(pattern);
        if (match && match[0].replace(/\D/g, '').length >= 10) {
            phone = match[0].trim();
            break;
        }
    }

    // Extract name - multiple strategies for different resume formats
    let name = '';

    // Strategy 1: Check if first line looks like a name (most common in resumes)
    if (lines.length > 0) {
        const firstLine = lines[0].replace(/[^\w\s'-]/g, '').trim();
        const firstWords = firstLine.split(/\s+/).filter(w => w.length > 1);
        if (firstWords.length >= 2 && firstWords.length <= 4 && firstLine.length < 40) {
            const allAreNames = firstWords.every(w => /^[A-Z][a-zA-Z'-]*$/.test(w));
            if (allAreNames) {
                name = firstLine;
            }
        }
    }

    // Strategy 2: Look for "Name:" label
    if (!name) {
        const nameMatch = fullText.match(/(?:name|full\s*name)[:\s]+([A-Z][a-zA-Z]+(?:\s+[A-Z][a-zA-Z]+){1,3})/i);
        if (nameMatch) {
            name = nameMatch[1].trim();
        }
    }

    // Strategy 3: Scan first 10 lines for name-like patterns
    if (!name) {
        for (let i = 0; i < Math.min(10, lines.length); i++) {
            const line = lines[i];
            // Skip lines with email, phone, URLs, or common header words
            if (line.includes('@') ||
                /\d{3}/.test(line) ||
                line.includes('://') ||
                /^(resume|cv|curriculum|portfolio|address|email|phone|mobile|contact|experience|education|skills|objective|summary)/i.test(line)) {
                continue;
            }

            // Clean and check if it looks like a name
            const cleanLine = line.replace(/[^\w\s'-]/g, '').trim();
            const words = cleanLine.split(/\s+/).filter(w => w.length > 1);

            if (words.length >= 2 && words.length <= 5 && cleanLine.length < 50) {
                // Check if words look like names
                const looksLikeName = words.every(w => /^[A-Z][a-zA-Z'-]*$/.test(w));
                if (looksLikeName) {
                    name = cleanLine;
                    break;
                }
            }
        }
    }

    // Strategy 4: If line has "FirstName LastName" followed by job title, extract just the name part
    if (!name && lines.length > 0) {
        const firstLineMatch = lines[0].match(/^([A-Z][a-z]+(?:\s+[A-Z][a-z]+){1,2})/);
        if (firstLineMatch) {
            name = firstLineMatch[1].trim();
        }
    }

    // Extract location - look for city/state/country patterns
    let location = '';
    const locationPatterns = [
        /(?:location|address|city|based in|residing|lives in)[:\s]+([^\n,]+(?:,\s*[^\n]+)?)/i,
        /([A-Z][a-zA-Z\s]+,\s*[A-Z]{2}\s*\d{5})/,  // City, ST 12345
        /([A-Z][a-zA-Z\s]+,\s*[A-Z]{2}(?:\s|$))/,   // City, ST
        /([A-Z][a-zA-Z]+(?:\s+[A-Z][a-zA-Z]+)*,\s*[A-Z][a-zA-Z]+)/,  // City, Country
    ];
    for (const pattern of locationPatterns) {
        const match = fullText.match(pattern);
        if (match) {
            location = (match[1] || match[0]).trim().replace(/\s+/g, ' ');
            if (location.length > 5 && location.length < 60) break;
            location = '';
        }
    }

    // Extract URLs
    const linkedinMatch = fullText.match(/(?:linkedin\.com\/in\/|linkedin:\s*)([a-zA-Z0-9_-]+)/i);
    const linkedin = linkedinMatch ? `https://linkedin.com/in/${linkedinMatch[1]}` : '';

    const githubMatch = fullText.match(/(?:github\.com\/|github:\s*)([a-zA-Z0-9_-]+)/i);
    const github = githubMatch ? `https://github.com/${githubMatch[1]}` : '';

    const websiteMatch = fullText.match(/(?:website|portfolio|site|web)[:\s]*(https?:\/\/[^\s]+)/i);
    const website = websiteMatch ? websiteMatch[1] : '';

    // ============= SECTION DETECTION =============

    const sectionKeywords = {
        skills: /^(?:skills?|technical\s*skills?|core\s*competenc|technical\s*proficienc|expertise|programming\s*languages)/i,
        experience: /^(?:experience|work\s*experience|professional\s*experience|employment|work\s*history|career)/i,
        education: /^(?:education|academic|qualification|degree|university|college|school)/i,
        projects: /^(?:projects?|personal\s*projects?|side\s*projects?|portfolio\s*projects?)/i,
        summary: /^(?:summary|objective|profile|about\s*me?|introduction|overview)/i,
        certifications: /^(?:certifications?|certificates?|licenses?|credentials?)/i
    };

    interface Section {
        type: string;
        startIdx: number;
        endIdx: number;
        lines: string[];
    }

    const sections: Section[] = [];
    let currentSection: Section | null = null;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const isShortLine = line.length < 50;

        let matchedType = '';
        for (const [type, pattern] of Object.entries(sectionKeywords)) {
            if (pattern.test(line) && isShortLine) {
                matchedType = type;
                break;
            }
        }

        if (matchedType) {
            if (currentSection) {
                currentSection.endIdx = i - 1;
                sections.push(currentSection);
            }
            currentSection = { type: matchedType, startIdx: i + 1, endIdx: lines.length - 1, lines: [] };
        } else if (currentSection) {
            currentSection.lines.push(line);
        }
    }
    if (currentSection && currentSection.lines.length > 0) {
        sections.push(currentSection);
    }

    console.log('📑 Detected sections:', sections.map(s => `${s.type}(${s.lines.length} lines)`).join(', '));

    // ============= SKILLS EXTRACTION =============

    const skills: string[] = [];
    const skillSection = sections.find(s => s.type === 'skills');

    if (skillSection) {
        const skillText = skillSection.lines.join(' ');
        // Split by common delimiters
        const candidates = skillText.split(/[,•|·\n\t]+/)
            .map(s => s.replace(/[^\w\s.#+\/-]/g, '').trim())
            .filter(s => s.length >= 2 && s.length <= 35 && !/^\d+$/.test(s));
        skills.push(...candidates);
    }

    // Also scan full text for known technologies
    const foundTech = new Set<string>();
    for (const keyword of Array.from(TECH_KEYWORDS)) {
        const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`\\b${escapedKeyword}\\b`, 'i');
        if (regex.test(fullText)) {
            // Proper casing
            let properCase = keyword;
            const upperKeywords = ['sql', 'css', 'html', 'api', 'aws', 'gcp', 'ci/cd', 'jwt', 'oauth', 'tdd', 'bdd', 'seo', 'ai', 'ml', 'nlp', 'ui', 'ux', 'mvc', 'mvvm', 'oop', 'ddd', 'sso', 'rbac', 'etl', 'rpa', 'llm', 'grpc'];
            if (upperKeywords.includes(keyword.toLowerCase())) {
                properCase = keyword.toUpperCase();
            } else {
                properCase = keyword.split(/[\s-]/).map((w: string) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
            }
            foundTech.add(properCase);
        }
    }

    // Merge skills, remove duplicates
    const allSkills = Array.from(new Set([...skills.map(s => s.toLowerCase()), ...Array.from(foundTech).map(s => s.toLowerCase())]));
    const finalSkills = allSkills.map(s => {
        const found = Array.from(foundTech).find((t: string) => t.toLowerCase() === s);
        return found || s.split(' ').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    }).slice(0, 60);

    // ============= EXPERIENCE EXTRACTION =============

    const experience: any[] = [];
    const expSection = sections.find(s => s.type === 'experience');

    if (expSection && expSection.lines.length > 0) {
        const expLines = expSection.lines;
        let currentExp: any = null;
        let lookingForPosition = false;

        console.log('💼 Experience section lines:', expLines.length);
        expLines.forEach((line, i) => console.log(`  ${i}: "${line.substring(0, 60)}..."`));

        for (let i = 0; i < expLines.length; i++) {
            const line = expLines[i];
            const isMainBullet = /^[•\u2022\u2023\u25E6\u2043\u2219]/.test(line);
            const cleanLine = line.replace(/^[•\-\*\u2022\u2023\u25E6\u2043\u2219]\s*/, '').trim();

            if (cleanLine.length < 3) continue;

            // Extract dates from line
            const dateMatch = cleanLine.match(/((?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s*\d{4})\s*[-–—to]+\s*((?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s*\d{4}|present|current)/i) ||
                cleanLine.match(/(\b(?:19|20)\d{2}\b)\s*[-–—to]+\s*(\b(?:19|20)\d{2}\b|present|current)/i);

            // Is this a new experience entry?
            // Non-bullet line that is short and looks like a company/position header
            const looksLikeHeader = !isMainBullet && cleanLine.length < 80 && /^[A-Z]/.test(cleanLine);

            if (looksLikeHeader && (!currentExp || currentExp.highlights.length > 0 || lookingForPosition)) {
                // Check if this is just a position line for the current company
                if (lookingForPosition && currentExp && !currentExp.position) {
                    // This line is the position
                    currentExp.position = cleanLine.replace(/[-–—].*$/, '').trim();
                    if (dateMatch) {
                        currentExp.startDate = dateMatch[1];
                        currentExp.endDate = dateMatch[2];
                    }
                    lookingForPosition = false;
                    continue;
                }

                // Save previous entry
                if (currentExp && (currentExp.company || currentExp.position)) {
                    experience.push(currentExp);
                }

                // This is a company line - look for "Company - Description" pattern
                const companyMatch = cleanLine.match(/^([^-–—]+)\s*[-–—]\s*(.+)/);
                const company = companyMatch ? companyMatch[1].trim() : cleanLine;
                const companyDesc = companyMatch ? companyMatch[2].trim() : '';

                currentExp = {
                    company: company,
                    position: '',
                    startDate: dateMatch ? dateMatch[1] : '',
                    endDate: dateMatch ? dateMatch[2] : '',
                    description: companyDesc,
                    highlights: []
                };

                lookingForPosition = true;
            } else if (isMainBullet && currentExp) {
                // This is a bullet point - could be position or highlight
                if (!currentExp.position && /intern|developer|engineer|manager|analyst|designer|lead|associate|consultant|specialist/i.test(cleanLine)) {
                    // This looks like a position
                    currentExp.position = cleanLine.replace(/:.*$/, '').trim();
                } else {
                    // This is a highlight
                    // Extract the main content (handle "Project Name: Description" format)
                    const highlightMatch = cleanLine.match(/^([^:]+):\s*(.+)/);
                    if (highlightMatch) {
                        currentExp.highlights.push(cleanLine);
                    } else {
                        currentExp.highlights.push(cleanLine);
                    }
                }

                // Check for dates in this line
                if (dateMatch && !currentExp.startDate) {
                    currentExp.startDate = dateMatch[1];
                    currentExp.endDate = dateMatch[2];
                }

                lookingForPosition = false;
            } else if (currentExp) {
                // Non-bullet, non-header line - could be date or location
                if (dateMatch && !currentExp.startDate) {
                    currentExp.startDate = dateMatch[1];
                    currentExp.endDate = dateMatch[2];
                }
                // Skip "Remote" or location lines
            }
        }

        // Don't forget last entry
        if (currentExp && (currentExp.company || currentExp.position)) {
            experience.push(currentExp);
        }

        console.log('💼 Experience extracted:', experience.length, 'entries');
        experience.forEach((e, i) => console.log(`  ${i + 1}. ${e.company} - ${e.position}`));
    }

    // ============= EDUCATION EXTRACTION =============

    const education: any[] = [];
    const eduSection = sections.find(s => s.type === 'education');

    if (eduSection && eduSection.lines.length > 0) {
        const eduLines = eduSection.lines;

        console.log('🎓 Education section lines:', eduLines.length);
        eduLines.forEach((line, i) => console.log(`  ${i}: "${line.substring(0, 60)}..."`));

        // ULTRA-SIMPLE APPROACH: Each main entry (bullet or first line) = one education
        // Treat all lines between bullets as part of the same entry

        let currentEdu: any = null;

        for (let i = 0; i < eduLines.length; i++) {
            const line = eduLines[i];
            const cleanLine = line.replace(/^[•\-\*\u2022]\s*/, '').trim();

            if (cleanLine.length < 3) continue;

            // SKIP lines that are clearly NOT education data
            if (/^(email|mobile|phone|contact|tel):/i.test(cleanLine) ||
                cleanLine.includes('@') ||
                /^https?:\/\//.test(cleanLine) ||
                /^\+?\d{10,}/.test(cleanLine.replace(/[\s\-()]/g, ''))) {
                continue;
            }

            // Is this a new entry? 
            // ONLY main bullets (•) start new entries, NOT dashes (-) which are sub-bullets
            const isMainBullet = /^[•\u2022\u2023\u25E6\u2043\u2219]/.test(line);
            const isDash = /^\s*[-\*]/.test(line);
            const isFirstLine = i === 0;

            // Start new entry ONLY on main bullets or first line, NOT on dashes
            if ((isMainBullet || isFirstLine) && !isDash) {
                // Save previous entry
                if (currentEdu) {
                    education.push(currentEdu);
                }

                // Extract all info from this line
                // STRICTER YEAR REGEX: Only match 19xx or 20xx to avoid phone numbers
                const years = cleanLine.match(/\b(?:19|20)\d{2}\b/g);

                // Try to identify degree keywords
                const degreeKeywords = /\b(diploma|bachelor'?s?|master'?s?|ph\.?d\.?|doctorate?|associate'?s?|b\.?tech|m\.?tech|b\.?e|m\.?e|b\.?sc|m\.?sc|b\.?a|m\.?a|b\.?com|m\.?com|bca|mca|bba|mba|puc|hsc|sslc|12th|10th|high\s+school|higher\s+secondary)\b/i;
                const degreeMatch = cleanLine.match(degreeKeywords);

                // Try to identify school
                const schoolKeywords = /\b(university|college|institute|school|academy|polytechnic)\b/i;
                const hasSchool = schoolKeywords.test(cleanLine);

                // Build the education entry
                currentEdu = {
                    school: '',
                    degree: degreeMatch ? degreeMatch[1] : '',
                    field: '',
                    startDate: years && years.length > 1 ? years[0] : '',
                    endDate: years ? years[years.length - 1] : '',
                    _rawText: cleanLine // Keep raw text for debugging
                };

                // Extract school name
                if (hasSchool) {
                    // Find the part containing the school
                    const schoolMatch = cleanLine.match(/([A-Za-z\s]+(?:university|college|institute|school|academy|polytechnic)[A-Za-z\s]*)/i);
                    if (schoolMatch) {
                        currentEdu.school = schoolMatch[1].trim();
                    }
                } else {
                    // Use the whole line minus degree and years as school
                    let schoolName = cleanLine;
                    if (degreeMatch) schoolName = schoolName.replace(degreeMatch[0], '');
                    schoolName = schoolName.replace(/\d{4}/g, '').replace(/[-–—,|:]/g, ' ').replace(/\s+/g, ' ').trim();
                    if (schoolName.length > 3) currentEdu.school = schoolName;
                }

                // Extract field of study
                const fieldMatch = cleanLine.match(/(?:\s+in\s+|\s+of\s+)([A-Za-z\s]+?)(?:\s*[-–,]|\s*\d{4}|\s*$)/i);
                if (fieldMatch) currentEdu.field = fieldMatch[1].trim();

            } else if (currentEdu) {
                // This is a continuation line - add missing info
                // Skip email/phone lines
                if (/^(email|mobile|phone|contact):/i.test(cleanLine) || cleanLine.includes('@')) continue;

                const years = cleanLine.match(/\b(?:19|20)\d{2}\b/g);
                if (years && !currentEdu.endDate) {
                    currentEdu.endDate = years[years.length - 1];
                    if (years.length > 1 && !currentEdu.startDate) currentEdu.startDate = years[0];
                }

                // Check for school
                if (!currentEdu.school) {
                    const schoolMatch = cleanLine.match(/([A-Za-z\s]+(?:university|college|institute|school|academy|polytechnic)[A-Za-z\s]*)/i);
                    if (schoolMatch) currentEdu.school = schoolMatch[1].trim();
                }

                // Check for field
                if (!currentEdu.field) {
                    const fieldMatch = cleanLine.match(/(?:in|major|field|specialization)[:\s]+([A-Za-z\s]+)/i);
                    if (fieldMatch) currentEdu.field = fieldMatch[1].trim();
                }
            }
        }

        // Don't forget last entry
        if (currentEdu) {
            education.push(currentEdu);
        }

        console.log('🎓 Education extracted:', education.length, 'entries');
        education.forEach((e, i) => console.log(`  ${i + 1}. ${e.degree || 'No degree'} - ${e.school || 'No school'}`));
    }

    // ============= PROJECTS EXTRACTION =============

    const projects: any[] = [];
    const projSection = sections.find(s => s.type === 'projects');

    // Helper function to extract project from lines
    // Tracks current project and groups multi-line descriptions
    // NEW STRATEGY: ONLY main bullets (•) start new projects.
    // ALL other lines (Tech Stack:, GitHub:, Live:, sub-bullets) are APPENDED.
    const extractProjectFromLines = (lines: string[]) => {
        const extractedProjects: any[] = [];
        let currentProject: any = null;

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const isMainBullet = /^[•\u2022\u2023\u25E6\u2043\u2219]/.test(line);
            const cleanLine = line.replace(/^[•\-\*\u2022\u2023\u25E6\u2043\u2219]\s*/, '').trim();

            if (cleanLine.length < 3) continue;

            // ONLY main bullets start new projects
            if (isMainBullet) {
                // Save previous project
                if (currentProject && currentProject.name) {
                    extractedProjects.push(currentProject);
                }

                // Extract name and description from "Name - Description" or "Name: Description"
                const match = cleanLine.match(/^([^-–—:]+)[\s]*[-–—:]\s+(.+)/);
                const projectName = match ? match[1].trim() : cleanLine;
                const projectDesc = match ? match[2].trim() : '';

                // Extract URLs from the line
                const urlMatches = cleanLine.match(/https?:\/\/[^\s)>]+/gi) || [];

                currentProject = {
                    name: projectName,
                    description: projectDesc,
                    technologies: [],
                    url: urlMatches.find(u => !u.includes('github.com')) || '',
                    github: urlMatches.find(u => u.includes('github.com')) || ''
                };

                // Extract technologies from the line
                for (const tech of Array.from(TECH_KEYWORDS)) {
                    if (new RegExp(`\\b${tech.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i').test(cleanLine)) {
                        const proper = tech.split(/[\s-]/).map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
                        if (!currentProject.technologies.includes(proper)) currentProject.technologies.push(proper);
                    }
                }
            } else if (currentProject) {
                // ALL non-bullet lines are appended to the current project

                // Handle special metadata lines
                if (/^Tech\s*Stack\s*:/i.test(cleanLine)) {
                    // Extract tech from "Tech Stack: React, Node.js, MongoDB"
                    const techList = cleanLine.replace(/^Tech\s*Stack\s*:\s*/i, '').split(/[,\s]+/);
                    for (const t of techList) {
                        const trimmed = t.trim();
                        if (trimmed.length > 1 && !currentProject.technologies.some((x: string) => x.toLowerCase() === trimmed.toLowerCase())) {
                            currentProject.technologies.push(trimmed);
                        }
                    }
                } else if (/^GitHub\s*:/i.test(cleanLine)) {
                    // Extract GitHub URL
                    const urlMatch = cleanLine.match(/https?:\/\/github\.com[^\s)>]+/i);
                    if (urlMatch) currentProject.github = urlMatch[0];
                    // Also check for Live URL on the same line
                    const liveMatch = cleanLine.match(/Live\s*:\s*(https?:\/\/[^\s)>]+)/i);
                    if (liveMatch) currentProject.url = liveMatch[1];
                } else if (/^Live\s*:/i.test(cleanLine)) {
                    // Extract Live URL
                    const urlMatch = cleanLine.match(/https?:\/\/[^\s)>]+/);
                    if (urlMatch) currentProject.url = urlMatch[0];
                } else if (/^https?:\/\//.test(cleanLine)) {
                    // Standalone URL line
                    const urlMatch = cleanLine.match(/https?:\/\/[^\s)>]+/);
                    if (urlMatch) {
                        if (urlMatch[0].includes('github.com') && !currentProject.github) {
                            currentProject.github = urlMatch[0];
                        } else if (!currentProject.url) {
                            currentProject.url = urlMatch[0];
                        }
                    }
                } else {
                    // Regular description line - append
                    currentProject.description += ' ' + cleanLine;
                }

                // Extract technologies from any line
                for (const tech of Array.from(TECH_KEYWORDS)) {
                    if (new RegExp(`\\b${tech.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i').test(cleanLine)) {
                        const proper = tech.split(/[\s-]/).map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
                        if (!currentProject.technologies.some((t: string) => t.toLowerCase() === proper.toLowerCase())) {
                            currentProject.technologies.push(proper);
                        }
                    }
                }
            } else if (i === 0) {
                // First line without bullet - treat as first project
                const match = cleanLine.match(/^([^-–—:]+)[\s]*[-–—:]\s+(.+)/);
                const projectName = match ? match[1].trim() : cleanLine;
                const projectDesc = match ? match[2].trim() : '';

                currentProject = {
                    name: projectName,
                    description: projectDesc,
                    technologies: [],
                    url: '',
                    github: ''
                };
            }
        }

        // Don't forget the last project
        if (currentProject && currentProject.name) {
            extractedProjects.push(currentProject);
        }

        return extractedProjects;
    };

    // First try the dedicated projects section
    if (projSection && projSection.lines.length > 0) {
        console.log('🔧 Projects section lines:', projSection.lines.length);
        projSection.lines.forEach((line, i) => console.log(`  ${i}: "${line.substring(0, 60)}..."`));

        projects.push(...extractProjectFromLines(projSection.lines));

        console.log('🔧 Projects extracted:', projects.length, 'entries');
        projects.forEach((p, i) => console.log(`  ${i + 1}. "${p.name}"`));
    }

    // If no projects found, try to find projects in the full text
    if (projects.length === 0) {
        // Look for project patterns in the full text
        const projectPatterns = [
            /(?:project[s]?\s*:?\s*)([A-Z][A-Za-z0-9\s\-_]+)(?:\s*[-|:]\s*|\n)/gi,
            /(?:built|developed|created|designed|implemented)\s+([A-Z][A-Za-z0-9\s\-_]+?)(?:\s*,\s*(?:a|an|the)|\s+using|\s+with)/gi
        ];

        for (const pattern of projectPatterns) {
            let match;
            while ((match = pattern.exec(fullText)) !== null) {
                if (match[1] && match[1].length > 3 && match[1].length < 50) {
                    const projectName = match[1].trim();
                    // Avoid duplicates
                    if (!projects.some(p => p.name.toLowerCase() === projectName.toLowerCase())) {
                        projects.push({
                            name: projectName,
                            description: '',
                            technologies: [],
                            url: '',
                            github: ''
                        });
                    }
                }
            }
        }
    }

    // Limit to reasonable number and clean up
    const finalProjects = projects.slice(0, 10).map(p => ({
        ...p,
        name: p.name.substring(0, 100),
        description: p.description.substring(0, 500),
        technologies: p.technologies.slice(0, 15)
    }));

    console.log('🔧 Projects extracted:', finalProjects.length, finalProjects.map((p: any) => p.name));

    // ============= BIO & ROLE EXTRACTION =============

    let bio = '';
    const summarySection = sections.find(s => s.type === 'summary');
    if (summarySection && summarySection.lines.length > 0) {
        bio = summarySection.lines.slice(0, 5).join(' ').substring(0, 500);
    } else if (experience.length > 0) {
        const latest = experience[0];
        bio = `${latest.position}${latest.company ? ` at ${latest.company}` : ''} with expertise in ${finalSkills.slice(0, 5).join(', ')}.`;
    }

    let role = '';
    if (experience.length > 0 && experience[0].position) {
        role = experience[0].position;
    } else {
        const titleMatch = fullText.match(/(?:senior|junior|lead|principal|staff|)?\s*(?:software|frontend|backend|full[- ]?stack|web|mobile|devops|cloud|data|ml|ai|machine learning|product|project|ux|ui)\s*(?:engineer|developer|architect|designer|scientist|analyst|manager)/i);
        role = titleMatch ? titleMatch[0].trim() : 'Software Developer';
    }

    console.log('✅ Fallback parser completed:', {
        name, email: email ? '✓' : '✗', phone: phone ? '✓' : '✗', location: location ? '✓' : '✗',
        skills: finalSkills.length, experience: experience.length, education: education.length, projects: finalProjects.length
    });

    try {
        const logData = `
================================================================================
TIMESTAMP: ${new Date().toISOString()}
================================================================================

RAW TEXT LENGTH: ${text.length}
NORMALIZED TEXT LENGTH: ${normalizedText.length}

--------------------------------------------------------------------------------
NORMALIZED TEXT PREVIEW:
--------------------------------------------------------------------------------
${normalizedText}

--------------------------------------------------------------------------------
DETECTED SECTIONS:
--------------------------------------------------------------------------------
${sections.map(s => `${s.type.toUpperCase()} (Lines ${s.startIdx}-${s.endIdx}):\n${s.lines.join('\n')}`).join('\n\n')}

--------------------------------------------------------------------------------
EXTRACTED DATA:
--------------------------------------------------------------------------------
PROJECTS: ${JSON.stringify(finalProjects, null, 2)}
EDUCATION: ${JSON.stringify(education, null, 2)}
EXPERIENCE: ${JSON.stringify(experience, null, 2)}
`;
        fs.writeFileSync(path.join(process.cwd(), 'resume_debug_log.txt'), logData);
    } catch (e) { console.error('Failed to write debug log', e); }

    return {
        name: name || '',
        email: email || '',
        phone: phone || '',
        location: location || '',
        bio: bio || '',
        role: role || '',
        skills: finalSkills,
        experience: experience.length > 0 ? experience : [],
        education: education.length > 0 ? education : [],
        projects: finalProjects,
        certifications: [],
        links: { github, linkedin, twitter: '', website, portfolio: '' }
    };
}

export async function POST(request: NextRequest) {
    try {
        // Rate limiting - 20 parses per hour per IP
        const ip = getClientIP(request);
        const { success: rateLimitOk, resetTime } = rateLimit(
            `parse-resume:${ip}`,
            RATE_LIMITS.RESUME_PARSE.limit,
            RATE_LIMITS.RESUME_PARSE.windowMs
        );

        if (!rateLimitOk) {
            const retryAfter = Math.ceil((resetTime - Date.now()) / 1000);
            return NextResponse.json(
                { error: 'Too many resume parsing requests. Please try again later.' },
                {
                    status: 429,
                    headers: { 'Retry-After': String(retryAfter) }
                }
            );
        }

        const formData = await request.formData();
        const file = formData.get('resume') as File;

        if (!file) {
            return NextResponse.json({ error: 'Resume file is required' }, { status: 400 });
        }

        if (file.type !== 'application/pdf') {
            return NextResponse.json({ error: 'Only PDF files are supported' }, { status: 400 });
        }

        if (file.size > 5 * 1024 * 1024) {
            return NextResponse.json({ error: 'File size must be less than 5MB' }, { status: 400 });
        }

        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        // Try OCR.space first, then fall back to pdf-parse
        let resumeText = '';
        try {
            resumeText = await extractTextWithOcrSpace(buffer, file.name);
            console.log('✅ OCR.space extraction successful');
        } catch (ocrError) {
            console.log('⚠️ OCR.space failed, falling back to pdf-parse:', ocrError);
            try {
                const pdfData = await pdf(buffer);
                resumeText = pdfData.text;
                console.log('✅ pdf-parse extraction successful');
            } catch (pdfError) {
                console.error('❌ Both OCR methods failed');
                return NextResponse.json({ error: 'Could not extract text from PDF.' }, { status: 400 });
            }
        }

        if (!resumeText || resumeText.trim().length < 50) {
            return NextResponse.json({ error: 'Could not extract text from PDF.' }, { status: 400 });
        }

        console.log('📄 Extracted text length:', resumeText.length);
        console.log('📄 Text preview (first 500 chars):', resumeText.substring(0, 500));

        // Use the fallback parser for structuring the data
        const portfolioData = fallbackParseResume(resumeText);
        console.log('✅ Resume parsing completed');
        console.log('📊 Parsed data summary:', {
            name: portfolioData.name,
            email: portfolioData.email,
            skillsCount: portfolioData.skills?.length || 0,
            experienceCount: portfolioData.experience?.length || 0,
            educationCount: portfolioData.education?.length || 0,
            projectsCount: portfolioData.projects?.length || 0
        });

        // Log project details for debugging
        if (portfolioData.projects && portfolioData.projects.length > 0) {
            console.log('🔧 Projects extracted:');
            portfolioData.projects.forEach((p: any, i: number) => {
                console.log(`  ${i + 1}. "${p.name}" - ${p.description?.substring(0, 50)}...`);
            });
        }

        const normalizedData = {
            name: portfolioData.name || '',
            email: portfolioData.email || '',
            phone: portfolioData.phone || '',
            location: portfolioData.location || '',
            bio: portfolioData.bio || '',
            role: portfolioData.role || '',
            skills: portfolioData.skills || [],
            experience: (portfolioData.experience || []).map((exp: any) => ({
                company: exp.company || '',
                position: exp.position || '',
                startDate: exp.startDate || '',
                endDate: exp.endDate || '',
                description: exp.description || '',
                highlights: exp.highlights || []
            })),
            education: (portfolioData.education || []).map((edu: any) => ({
                school: edu.school || '',
                degree: edu.degree || '',
                field: edu.field || '',
                startDate: edu.startDate || '',
                endDate: edu.endDate || ''
            })),
            projects: (portfolioData.projects || []).map((proj: any) => ({
                name: proj.name || '',
                description: proj.description || '',
                technologies: proj.technologies || [],
                url: proj.url || '',
                github: proj.github || ''
            })),
            certifications: portfolioData.certifications || [],
            links: {
                github: portfolioData.links?.github || '',
                linkedin: portfolioData.links?.linkedin || '',
                twitter: portfolioData.links?.twitter || '',
                website: portfolioData.links?.website || '',
                portfolio: portfolioData.links?.portfolio || ''
            }
        };

        console.log('✅ Final:', { name: normalizedData.name, skills: normalizedData.skills.length, exp: normalizedData.experience.length, edu: normalizedData.education.length });

        return NextResponse.json({ success: true, data: normalizedData });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: 'Failed to parse resume.' }, { status: 500 });
    }
}
