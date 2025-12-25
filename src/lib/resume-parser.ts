import pdf from 'pdf-parse/lib/pdf-parse';

export interface ParsedResume {
    name: string;
    email: string;
    phone: string;
    bio: string;
    role: string;
    experience: Array<{
        title: string;
        company: string;
        duration: string;
        description: string;
    }>;
    education: Array<{
        degree: string;
        institution: string;
        field: string;
        year: string;
    }>;
    skills: string[];
    projects: Array<{
        name: string;
        description: string;
        technologies: string[];
        url?: string;
        github?: string;
    }>;
    links: {
        github?: string;
        linkedin?: string;
        twitter?: string;
        website?: string;
        [key: string]: string | undefined;
    };
}

function extractEmail(text: string): string {
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    const matches = text.match(emailRegex);
    return matches && matches[0] ? matches[0] : '';
}

function extractPhone(text: string): string {
    const phoneRegex = /(\+?\d{1,3}[-.\ s]?)?\(?\d{3}\)?[-.\ s]?\d{3}[-.\ s]?\d{4}/g;
    const matches = text.match(phoneRegex);
    return matches && matches[0] ? matches[0].trim() : '';
}

function extractName(text: string): string {
    const lines = text.split('\n').filter(line => line.trim());

    // Try to find name in first few lines
    for (let i = 0; i < Math.min(5, lines.length); i++) {
        const line = lines[i].trim();

        // Skip headers, emails, phones
        if (line.match(/resume|curriculum|vitae|cv/i)) continue;
        if (line.includes('@')) continue;
        if (line.match(/\d{3}[-.\s]?\d{3}[-.\s]?\d{4}/)) continue;

        // Look for typical name pattern
        const words = line.split(/\s+/);
        if (words.length >= 2 && words.length <= 4) {
            //Check each word starts with capital
            const isName = words.every(word =>
                word.length > 0 && /^[A-Z]/.test(word) && /^[A-Za-z'-]+$/.test(word)
            );

            if (isName && line.length > 2 && line.length < 50) {
                return line;
            }
        }
    }
    return '';
}

function extractRole(text: string): string {
    const lines = text.split('\n').filter(line => line.trim());

    // Common role patterns
    const rolePatterns = [
        /^(?:Senior|Junior|Lead|Staff|Principal)?\s*(?:Software|Frontend|Backend|Full[- ]?Stack|DevOps|Data|Machine Learning|ML|AI|Web|Mobile|iOS|Android|QA|Test)?\s*(?:Engineer|Developer|Programmer|Architect|Designer|Analyst|Scientist|Manager)/i,
        /^(?:Product|Project|Engineering|Technical|Marketing|Sales|Operations|HR|Finance)\s*(?:Manager|Director|Lead|Head|Chief|VP)/i,
    ];

    // Check first 10 lines for role
    for (let i = 0; i < Math.min(10, lines.length); i++) {
        const line = lines[i].trim();
        for (const pattern of rolePatterns) {
            if (pattern.test(line) && line.length < 100) {
                return line;
            }
        }
    }

    // Try to extract from objective/summary
    const objectiveSection = extractSection(text, ['OBJECTIVE', 'CAREER OBJECTIVE', 'PROFESSIONAL TITLE']);
    if (objectiveSection) {
        const firstLine = objectiveSection.split('\n')[0].trim();
        if (firstLine.length < 100) {
            return firstLine;
        }
    }

    return '';
}

function extractBio(text: string): string {
    const bioSection = extractSection(text, [
        'SUMMARY', 'PROFILE', 'OBJECTIVE', 'ABOUT', 'ABOUT ME',
        'PROFESSIONAL SUMMARY', 'CAREER OBJECTIVE', 'PROFESSIONAL PROFILE'
    ]);

    if (bioSection) {
        return bioSection.substring(0, 500).trim();
    }

    // Fallback: try to get text after name/contact and before first section
    const lines = text.split('\n').filter(line => line.trim());
    let bioLines: string[] = [];
    let foundStart = false;

    for (let i = 0; i < Math.min(15, lines.length); i++) {
        const line = lines[i].trim();

        // Skip headers and contact info
        if (line.includes('@') || line.match(/\d{3}/)) continue;
        if (line.match(/^(EXPERIENCE|EDUCATION|SKILLS|PROJECTS|WORK)/i)) break;

        if (!foundStart && line.length > 20) {
            foundStart = true;
        }

        if (foundStart && line.length > 10) {
            bioLines.push(line);
            if (bioLines.join(' ').length > 200) break;
        }
    }

    return bioLines.join(' ').substring(0, 500).trim();
}

function extractLinks(text: string) {
    const links: { [key: string]: string } = {};

    // GitHub
    const githubRegex = /(?:https?:\/\/)?(?:www\.)?github\.com\/([a-zA-Z0-9_-]+)/gi;
    const github = text.match(githubRegex);
    if (github && github[0]) {
        links.github = github[0].startsWith('http') ? github[0] : `https://${github[0]}`;
    }

    // LinkedIn
    const linkedinRegex = /(?:https?:\/\/)?(?:www\.)?linkedin\.com\/in\/([a-zA-Z0-9_-]+)/gi;
    const linkedin = text.match(linkedinRegex);
    if (linkedin && linkedin[0]) {
        links.linkedin = linkedin[0].startsWith('http') ? linkedin[0] : `https://${linkedin[0]}`;
    }

    // Twitter/X
    const twitterRegex = /(?:https?:\/\/)?(?:www\.)?(?:twitter\.com|x\.com)\/([a-zA-Z0-9_]+)/gi;
    const twitter = text.match(twitterRegex);
    if (twitter && twitter[0]) {
        links.twitter = twitter[0].startsWith('http') ? twitter[0] : `https://${twitter[0]}`;
    }

    // Portfolio/Personal Website
    const websiteRegex = /(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9-]+\.(?:com|io|dev|me|net|org|co|tech))(?:\/[^\s]*)?/gi;
    const websites = text.match(websiteRegex);
    if (websites) {
        for (const site of websites) {
            const lower = site.toLowerCase();
            // Skip if it's already matched as a social platform
            if (!lower.includes('github.') && !lower.includes('linkedin.') &&
                !lower.includes('twitter.') && !lower.includes('x.com')) {
                links.website = site.startsWith('http') ? site : `https://${site}`;
                break;
            }
        }
    }

    // Portfolio keyword search
    const portfolioMatch = text.match(/(?:portfolio|website)[\s:]+(?:https?:\/\/)?([^\s,\n]+)/i);
    if (portfolioMatch && !links.website) {
        const url = portfolioMatch[1];
        links.portfolio = url.startsWith('http') ? url : `https://${url}`;
    }

    return links;
}

function extractSection(text: string, sectionNames: string[]): string {
    const pattern = sectionNames.join('|');
    const regex = new RegExp(`(?:^|\\n)(${pattern})[:\\s]*([\\s\\S]*?)(?=\\n(?:[A-Z][A-Z\\s]{2,}:|$))`, 'im');
    const match = text.match(regex);
    return match && match[2] ? match[2].trim() : '';
}

function extractExperience(text: string) {
    const experience: Array<{ title: string; company: string; duration: string; description: string }> = [];
    const expSection = extractSection(text, ['EXPERIENCE', 'WORK EXPERIENCE', 'EMPLOYMENT', 'PROFESSIONAL EXPERIENCE', 'WORK HISTORY']);
    if (!expSection) return experience;

    const blocks = expSection.split(/\n\s*\n/).filter(b => b.trim().length > 15);

    for (const block of blocks) {
        const lines = block.split('\n').map(l => l.trim()).filter(l => l);
        if (lines.length < 2) continue;

        let title = '';
        let company = '';
        let duration = '';
        const descriptionLines: string[] = [];

        const datePatterns = [
            /([A-Z][a-z]{2,8}\.?\s+\d{4}\s*[-–—]\s*(?:[A-Z][a-z]{2,8}\.?\s+\d{4}|Present|Current|Now))/i,
            /(\d{4}\s*[-–—]\s*(?:\d{4}|Present|Current|Now))/i,
            /(\d{1,2}\/\d{4}\s*[-–—]\s*(?:\d{1,2}\/\d{4}|Present|Current))/i
        ];

        for (const pattern of datePatterns) {
            const match = block.match(pattern);
            if (match) {
                duration = match[1];
                break;
            }
        }

        // Parse title and company from first few lines
        let lineIndex = 0;
        for (let i = 0; i < Math.min(3, lines.length); i++) {
            const line = lines[i];
            if (duration && line.includes(duration)) {
                lineIndex = i + 1;
                continue;
            }

            if (!title && line.length > 5 && line.length < 100) {
                title = line;
                lineIndex = i + 1;
            } else if (!company && line.length > 3 && line.length < 100 && line !== title) {
                company = line;
                lineIndex = i + 1;
                break;
            }
        }

        // Collect all remaining lines as description (including bullets)
        for (let i = lineIndex; i < lines.length; i++) {
            const line = lines[i];
            // Skip lines that look like dates or section headers
            if (!line.match(/^\d{4}/) && !line.match(/^(SKILLS|EDUCATION|PROJECTS)/i)) {
                descriptionLines.push(line.replace(/^[•\-\|]\s*/, '').trim());
            }
        }

        if (title) {
            experience.push({
                title: title.replace(/[•\-\|]/g, '').trim(),
                company: company.replace(/[•\-\|]/g, '').trim() || 'Company',
                duration: duration || 'Date not specified',
                description: descriptionLines.join(' • ').substring(0, 500) // Keep meaningful descriptions
            });
        }
    }

    return experience.slice(0, 15); // Increased from 5 to allow more entries
}

function extractEducation(text: string) {
    const education: Array<{ degree: string; institution: string; field: string; year: string }> = [];
    const eduSection = extractSection(text, ['EDUCATION', 'ACADEMIC', 'ACADEMICS', 'QUALIFICATIONS', 'EDUCATIONAL BACKGROUND']);
    if (!eduSection) return education;

    const blocks = eduSection.split(/\n\s*\n/).filter(b => b.trim().length > 10);

    for (const block of blocks) {
        const lines = block.split('\n').map(l => l.trim()).filter(l => l);

        let degree = '';
        let institution = '';
        let field = '';
        let year = '';

        // Enhanced degree patterns to also extract field
        const degreeWithFieldPatterns = [
            /(?:Bachelor|Master|PhD|Doctor|B\.?S\.?|M\.?S\.?|B\.?A\.?|M\.?A\.?|B\.?Tech|M\.?Tech|B\.?E\.?|M\.?E\.?|MBA)\s+(?:of|in|of Arts in|of Science in)?\s+([^,\n]+)/i,
        ];

        const degreePatterns = [
            /(?:Bachelor|Master|PhD|Doctor|B\.?S\.?|M\.?S\.?|B\.?A\.?|M\.?A\.?|B\.?Tech|M\.?Tech|B\.?E\.?|M\.?E\.?|MBA)[^\n]*/i
        ];

        const yearMatch = block.match(/\b(19|20)\d{2}\b/);
        if (yearMatch) year = yearMatch[0];

        // Try to extract degree with field
        for (const pattern of degreeWithFieldPatterns) {
            const match = block.match(pattern);
            if (match) {
                degree = match[0].trim();
                field = match[1]?.trim() || '';
                break;
            }
        }

        // Fallback to basic degree extraction
        if (!degree) {
            for (const pattern of degreePatterns) {
                const match = block.match(pattern);
                if (match) {
                    degree = match[0].trim();
                    break;
                }
            }
        }

        if (!degree && lines.length > 0) {
            degree = lines[0];
        }

        // Extract institution
        for (const line of lines) {
            if (line !== degree && /(?:University|College|Institute|School|Academy)/i.test(line)) {
                institution = line;
                break;
            }
        }

        if (!institution && lines.length > 1 && lines[1] !== degree) {
            institution = lines[1];
        }

        // Try to extract field if not found yet
        if (!field && degree) {
            const fieldMatch = degree.match(/(?:in|of)\s+([A-Z][^,\n]+)/);
            if (fieldMatch) {
                field = fieldMatch[1].trim();
            }
        }

        if (degree) {
            education.push({
                degree: degree.substring(0, 100),
                institution: institution.substring(0, 100) || 'Institution',
                field: field.substring(0, 100) || '',
                year: year || ''
            });
        }
    }

    return education.slice(0, 5); // Allow up to 5 education entries
}

function extractSkills(text: string): string[] {
    const skillsSection = extractSection(text, ['SKILLS', 'TECHNICAL SKILLS', 'TECHNOLOGIES', 'EXPERTISE', 'CORE COMPETENCIES', 'TECHNICAL EXPERTISE', 'PROGRAMMING LANGUAGES', 'TOOLS']);
    if (!skillsSection) return [];

    // Handle multiple formats: newlines, bullets, commas, pipes, semicolons
    const skills = skillsSection
        .replace(/\n/g, ',')
        .replace(/[•·]/g, ',') // Replace bullets with commas
        .split(/[,;•·|]/)
        .map(skill => skill.trim())
        .filter(skill =>
            skill.length > 1 &&
            skill.length < 50 &&
            !skill.match(/^(skills?|technologies|expertise|tools?|languages?|programming|technical|core|competencies|proficient|experience)$/i) &&
            !skill.match(/^(with|in|and|or|the|a|an)$/i) // Filter common words
        );

    // Remove duplicates (case-insensitive)
    const uniqueSkills = Array.from(new Set(skills.map(s => s.toLowerCase())))
        .map(lowercase => skills.find(s => s.toLowerCase() === lowercase)!)
        .filter(Boolean);

    return uniqueSkills.slice(0, 50); // Increased to capture more skills
}

function extractProjects(text: string) {
    const projects: Array<{ name: string; description: string; technologies: string[]; url?: string; github?: string }> = [];
    const projectSection = extractSection(text, ['PROJECTS', 'PROJECT', 'PERSONAL PROJECTS', 'KEY PROJECTS', 'PROFESSIONAL PROJECTS', 'PORTFOLIO']);
    if (!projectSection) return projects;

    const blocks = projectSection.split(/\n\s*\n/).filter(b => b.trim().length > 10);

    for (const block of blocks) {
        const lines = block.split('\n').map(l => l.trim()).filter(l => l);
        if (lines.length < 1) continue;

        let name = '';
        let description = '';
        const technologies: string[] = [];
        let url: string | undefined;
        let github: string | undefined;

        // First line is usually project name (remove bullets/dashes)
        name = lines[0].replace(/^[•\-\|]\s*/, '').trim();

        // Extract URLs
        const githubMatch = block.match(/(?:https?:\/\/)?(?:www\.)?github\.com\/[^\s]+/i);
        if (githubMatch) github = githubMatch[0];

        const urlPattern = /(?:https?:\/\/)[^\s,\)]+/g;
        const allUrls = block.match(urlPattern);
        if (allUrls) {
            for (const foundUrl of allUrls) {
                if (!foundUrl.includes('github.com')) {
                    url = foundUrl;
                    break;
                }
            }
        }

        // Extract technologies (look for multiple patterns)
        const techPatterns = [
            /(?:Technologies|Tech Stack|Built with|Using|Stack|Tools)[\\s:]+([^\\n]+)/gi,
            /\\(([^)]*(?:React|Vue|Angular|Node|Python|Java|JavaScript|TypeScript|HTML|CSS)[^)]*)\\)/gi
        ];

        for (const pattern of techPatterns) {
            let match;
            while ((match = pattern.exec(block)) !== null) {
                const techList = match[1].split(/[,;|&]/).map(t => t.trim()).filter(t => t.length > 0 && t.length < 30);
                technologies.push(...techList);
            }
        }

        // Description is remaining text (excluding tech lists and URLs)
        const descLines = lines.slice(1).filter(l =>
            !l.match(/(?:Technologies|Tech Stack|Built with|Using|github\.com|https?:\/\/)/i) &&
            !l.includes(url || '') &&
            !l.includes(github || '')
        );

        // Join description lines and extract first meaningful sentence(s)
        description = descLines.join(' ').replace(/^[•\-\|]\s*/, '').substring(0, 400);

        // Remove duplicate technologies
        const uniqueTech = Array.from(new Set(technologies.map(t => t.toLowerCase())))
            .map(lowercase => technologies.find(t => t.toLowerCase() === lowercase)!)
            .filter(Boolean);

        if (name) {
            projects.push({
                name: name.substring(0, 100),
                description: description || 'Project description',
                technologies: uniqueTech.slice(0, 15),
                url,
                github
            });
        }
    }

    return projects.slice(0, 20); // Increased to capture all projects
}

export async function parseResume(buffer: Buffer): Promise<ParsedResume> {
    try {
        const data = await pdf(buffer);
        const text = data.text;

        const name = extractName(text);
        const email = extractEmail(text);
        const phone = extractPhone(text);
        const links = extractLinks(text);
        const role = extractRole(text);
        const bio = extractBio(text);

        const experience = extractExperience(text);
        const education = extractEducation(text);
        const skills = extractSkills(text);
        const projects = extractProjects(text);

        return {
            name: name || 'Your Name',
            email: email || 'your.email@example.com',
            phone: phone || '',
            bio: bio || 'Professional summary not found.',
            role: role || 'Professional',
            experience: experience.length > 0 ? experience : [{
                title: 'Job Title',
                company: 'Company Name',
                duration: '2020 - Present',
                description: ''
            }],
            education: education.length > 0 ? education : [{
                degree: 'Degree',
                institution: 'University',
                field: '',
                year: '2020'
            }],
            skills: skills.length > 0 ? skills : ['JavaScript', 'React', 'Node.js'],
            projects: projects,
            links
        };
    } catch (error) {
        console.error('Error parsing resume:', error);
        throw new Error('Failed to parse resume. Please ensure the file is a valid PDF with selectable text.');
    }
}
