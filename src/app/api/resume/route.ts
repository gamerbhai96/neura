import { NextRequest, NextResponse } from 'next/server';

// Simple text-based resume parser (copy of the logic from parse-resume route)
function parseResumeText(text: string) {
    const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    const fullText = lines.join('\n');

    // Extract basic info
    const emailMatch = fullText.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/);
    const email = emailMatch ? emailMatch[0].toLowerCase() : '';

    const phoneMatch = fullText.match(/\+?\d{1,4}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/);
    const phone = phoneMatch ? phoneMatch[0].trim() : '';

    // Extract name from first few lines
    let name = '';
    for (let i = 0; i < Math.min(5, lines.length); i++) {
        const line = lines[i];
        if (!line.includes('@') && !/\d{3}/.test(line)) {
            const words = line.split(/\s+/).filter(w => w.length > 1);
            if (words.length >= 2 && words.length <= 4) {
                name = line;
                break;
            }
        }
    }

    return {
        name: name || '',
        email: email || '',
        phone: phone || '',
        location: '',
        bio: '',
        role: '',
        skills: [],
        experience: [],
        education: [],
        projects: [],
        certifications: [],
        links: { github: '', linkedin: '', twitter: '', website: '', portfolio: '' }
    };
}

export async function POST(request: NextRequest) {
    try {
        const { resumeText } = await request.json();

        if (!resumeText) {
            return NextResponse.json(
                { error: 'Resume text is required' },
                { status: 400 }
            );
        }

        // Parse resume using local parser
        const parsedData = parseResumeText(resumeText);

        return NextResponse.json({
            success: true,
            data: parsedData,
        });
    } catch (error) {
        console.error('Error parsing resume:', error);
        return NextResponse.json(
            { error: 'Failed to parse resume. Please try again.' },
            { status: 500 }
        );
    }
}
