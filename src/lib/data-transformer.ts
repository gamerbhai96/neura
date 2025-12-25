import type { ParsedResume } from './resume-parser';
import type { PortfolioData } from '../components/templates/types';

/**
 * Transform parsed resume data to portfolio data format expected by templates
 */
export function transformToPortfolioData(parsed: ParsedResume): PortfolioData {
    return {
        // Personal Information
        name: parsed.name,
        role: parsed.role,
        email: parsed.email,
        phone: parsed.phone,
        location: '', // Not extracted from resume, can be added manually
        bio: parsed.bio,

        // Skills
        skills: parsed.skills,

        // Experience - Transform to match template format
        experience: parsed.experience.map(exp => {
            // Parse duration into start/end dates
            const { startDate, endDate } = parseDuration(exp.duration);

            return {
                company: exp.company,
                position: exp.title, // Map title to position
                startDate,
                endDate,
                description: exp.description || `Worked as ${exp.title} at ${exp.company}`,
                highlights: [] // Can be filled from description if available
            };
        }),

        // Education - Transform to match template format
        education: parsed.education.map(edu => {
            return {
                school: edu.institution,
                degree: edu.degree,
                field: edu.field || extractFieldFromDegree(edu.degree),
                startDate: edu.year ? `${parseInt(edu.year) - 4}` : '',
                endDate: edu.year || ''
            };
        }),

        // Projects
        projects: parsed.projects.map(proj => ({
            name: proj.name,
            description: proj.description,
            technologies: proj.technologies,
            url: proj.url,
            github: proj.github
        })),

        // Certifications (optional, not extracted from basic parser)
        certifications: [],

        // Links
        links: {
            website: parsed.links.website || parsed.links.portfolio,
            github: parsed.links.github,
            linkedin: parsed.links.linkedin,
            twitter: parsed.links.twitter,
            portfolio: parsed.links.website || parsed.links.portfolio
        }
    };
}

/**
 * Parse duration string to extract start and end dates
 */
function parseDuration(duration: string): { startDate: string; endDate: string } {
    // Handle various duration formats
    // Examples: "2020 - 2023", "Jan 2020 - Present", "01/2020 - 12/2022"

    const currentKeywords = ['Present', 'Current', 'Now'];
    const isCurrent = currentKeywords.some(keyword =>
        duration.toLowerCase().includes(keyword.toLowerCase())
    );

    // Try to extract years
    const yearMatches = duration.match(/\b(19|20)\d{2}\b/g);

    if (yearMatches && yearMatches.length >= 1) {
        const startDate = yearMatches[0];
        const endDate = isCurrent ? 'Present' : (yearMatches[1] || yearMatches[0]);
        return { startDate, endDate };
    }

    // Try to extract month/year format
    const monthYearMatch = duration.match(/([A-Z][a-z]{2,8}\.?\s+\d{4})\s*[-–—]\s*([A-Z][a-z]{2,8}\.?\s+\d{4}|Present|Current)/i);
    if (monthYearMatch) {
        return {
            startDate: monthYearMatch[1],
            endDate: monthYearMatch[2]
        };
    }

    // Fallback
    return {
        startDate: duration.split('-')[0]?.trim() || '',
        endDate: duration.split('-')[1]?.trim() || 'Present'
    };
}

/**
 * Extract field of study from degree string if not explicitly provided
 */
function extractFieldFromDegree(degree: string): string {
    // Try to extract field from degree string
    // Examples: "Bachelor of Science in Computer Science", "B.S. Computer Science"

    const fieldMatch = degree.match(/(?:in|of)\s+([A-Z][^,\n]+)/i);
    if (fieldMatch) {
        return fieldMatch[1].trim();
    }

    // Common degree abbreviations to field mapping
    const degreeFieldMap: { [key: string]: string } = {
        'CS': 'Computer Science',
        'EE': 'Electrical Engineering',
        'ME': 'Mechanical Engineering',
        'CE': 'Civil Engineering',
        'MBA': 'Business Administration',
        'BA': 'Arts',
        'BS': 'Science',
        'MA': 'Arts',
        'MS': 'Science',
    };

    for (const [abbr, field] of Object.entries(degreeFieldMap)) {
        if (degree.toUpperCase().includes(abbr)) {
            return field;
        }
    }

    return '';
}

/**
 * Merge user-edited data with parsed data
 */
export function mergePortfolioData(
    original: PortfolioData,
    updates: Partial<PortfolioData>
): PortfolioData {
    return {
        ...original,
        ...updates,
        links: {
            ...original.links,
            ...updates.links
        }
    };
}
