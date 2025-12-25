// @ts-nocheck


import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ParsedResumeData {
    name: string;
    email: string;
    phone: string;
    location?: string;
    bio: string;
    role: string;
    skills: string[];
    experience: {
        company: string;
        position: string;
        startDate: string;
        endDate: string;
        description: string;
        highlights: string[];
    }[];
    education: {
        school: string;
        degree: string;
        field: string;
        startDate: string;
        endDate: string;
    }[];
    projects: {
        name: string;
        description: string;
        technologies: string[];
        url?: string;
        github?: string;
    }[];
    certifications?: {
        name: string;
        issuer: string;
        date: string;
    }[];
    links: {
        website?: string;
        github?: string;
        linkedin?: string;
        twitter?: string;
        portfolio?: string;
    };
}

Deno.serve(async (req) => {
    // Handle CORS preflight requests
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders });
    }

    try {
        const { resumeText, userId } = await req.json();

        if (!resumeText) {
            throw new Error('Resume text is required');
        }

        // Call Gemini API
        const geminiApiKey = Deno.env.get('GEMINI_API_KEY');
        if (!geminiApiKey) {
            throw new Error('GEMINI_API_KEY not configured');
        }

        const prompt = `You are an expert resume parser. Extract structured data from the following resume text and return it as a JSON object.

Resume Text:
${resumeText}

Extract the following information:
- name (string)
- email (string)
- phone (string)
- location (string, optional)
- bio (string, professional summary or objective)
- role (string, current or desired job title like "Software Engineer", "Designer", etc.)
- skills (array of strings)
- experience (array of objects with: company, position, startDate, endDate, description, highlights[])
- education (array of objects with: school, degree, field, startDate, endDate)
- projects (array of objects with: name, description, technologies[], url, github)
- certifications (array of objects with: name, issuer, date, optional)
- links (object with: website, github, linkedin, twitter, portfolio - all optional)

Return ONLY valid JSON, no markdown formatting or explanation. If a field is not found, use empty string or empty array as appropriate.`;

        const response = await fetch(
            'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=' +
            geminiApiKey,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                {
                                    text: prompt,
                                },
                            ],
                        },
                    ],
                }),
            }
        );

        if (!response.ok) {
            throw new Error(`Gemini API error: ${response.statusText}`);
        }

        const data = await response.json();
        const generatedText = data.candidates[0].content.parts[0].text;

        // Clean up markdown code blocks if present
        const cleanedText = generatedText
            .replace(/```json\n?/g, '')
            .replace(/```\n?/g, '')
            .trim();

        const parsedData: ParsedResumeData = JSON.parse(cleanedText);

        // Log to Supabase (optional)
        if (userId) {
            const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
            const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
            const supabase = createClient(supabaseUrl, supabaseKey);

            await supabase.from('ai_logs').insert({
                user_id: userId,
                action: 'parse_resume',
                input_data: { resumeTextLength: resumeText.length },
                output_data: parsedData,
            });
        }

        return new Response(JSON.stringify({ success: true, data: parsedData }), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error:', error);
        return new Response(
            JSON.stringify({ success: false, error: (error as any).message || 'Unknown error' }),
            {
                status: 400,
                headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            }
        );
    }
});
