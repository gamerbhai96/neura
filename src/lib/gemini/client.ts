import { GoogleGenerativeAI } from '@google/generative-ai';
import type { PortfolioData } from '../../components/templates/types';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export type ParsedResumeData = PortfolioData;

export async function parseResumeWithGemini(
  resumeText: string
): Promise<ParsedResumeData> {
  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

  const prompt = `You are an expert resume parser. Your job is to extract COMPLETE and DETAILED information from resumes.

RESUME TEXT TO PARSE:
"""
${resumeText}
"""

CRITICAL INSTRUCTIONS:
1. Return ONLY a valid JSON object - NO markdown, NO explanations, NO code blocks
2. Extract EVERY piece of information you can find
3. For SKILLS: Look for technical skills, programming languages, frameworks, tools, soft skills - extract ALL of them
4. For EXPERIENCE: Extract ALL jobs with full details including bullet points as highlights
5. For EDUCATION: Extract ALL degrees, certifications, courses
6. For PROJECTS: Look for project sections, personal projects, academic projects
7. If information is missing, use empty string "" or empty array []
8. Be thorough - extract everything!

REQUIRED JSON STRUCTURE:
{
    "name": "Full Name from resume",
    "email": "email address",
    "phone": "phone number",
    "location": "City, State/Country",
    "bio": "Create a 2-3 sentence professional summary based on their experience",
    "role": "Their most recent or primary job title",
    "skills": ["List", "every", "single", "skill", "mentioned", "in", "resume"],
    "experience": [
        {
            "company": "Company Name",
            "position": "Job Title",
            "startDate": "Start date (e.g., Jan 2020 or 2020)",
            "endDate": "End date or Present",
            "description": "Brief description of the role",
            "highlights": ["Achievement 1", "Achievement 2", "Every bullet point"]
        }
    ],
    "education": [
        {
            "school": "University/School Name",
            "degree": "Degree Type (Bachelor of Science, Master of, etc.)",
            "field": "Major/Field of Study",
            "startDate": "Start year",
            "endDate": "End year or Expected year"
        }
    ],
    "projects": [
        {
            "name": "Project Name",
            "description": "What the project does",
            "technologies": ["tech1", "tech2"],
            "url": "",
            "github": ""
        }
    ],
    "certifications": [
        {
            "name": "Certification Name",
            "issuer": "Issuing Organization",
            "date": "Year"
        }
    ],
    "links": {
        "github": "GitHub URL if found",
        "linkedin": "LinkedIn URL if found",
        "twitter": "",
        "website": "Personal website if found",
        "portfolio": ""
    }
}

Parse the resume NOW and return ONLY the JSON object with ALL extracted data:`;

  try {
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    console.log('📝 Raw Gemini response length:', text.length);

    // Clean any markdown formatting
    let cleanedText = text
      .replace(/```json\n?/gi, '')
      .replace(/```\n?/gi, '')
      .trim();

    // Try to find JSON object if there's extra text
    const jsonMatch = cleanedText.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      cleanedText = jsonMatch[0];
    }

    const parsedData: ParsedResumeData = JSON.parse(cleanedText);

    console.log('🤖 Gemini parsed successfully:', {
      name: parsedData.name,
      skillsCount: parsedData.skills?.length || 0,
      experienceCount: parsedData.experience?.length || 0,
      educationCount: parsedData.education?.length || 0,
      projectsCount: parsedData.projects?.length || 0
    });

    return parsedData;
  } catch (error) {
    console.error('Gemini parsing error:', error);
    throw new Error('Failed to parse resume with AI. Please try again.');
  }
}

export async function validatePortfolioData(
  data: Partial<ParsedResumeData>
): Promise<{ valid: boolean; suggestions: string[] }> {
  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

  const prompt = `Review this portfolio data and provide suggestions.

Data:
${JSON.stringify(data, null, 2)}

Return JSON only:
{
    "valid": true/false (has name, bio, role),
    "suggestions": ["suggestion1", "suggestion2"]
}`;

  try {
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    const cleanedText = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    return JSON.parse(cleanedText);
  } catch (error) {
    return {
      valid: Boolean(data.name && data.bio && data.role),
      suggestions: [],
    };
  }
}
