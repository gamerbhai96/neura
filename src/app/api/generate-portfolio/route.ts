import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { getSession } from '@/lib/auth';

// Sanitize data to remove null bytes and other problematic characters
function sanitizeData(obj: any): any {
    if (typeof obj === 'string') {
        return obj.replace(/\u0000/g, '').replace(/[\x00-\x08\x0B-\x0C\x0E-\x1F]/g, '');
    }
    if (Array.isArray(obj)) {
        return obj.map(item => sanitizeData(item));
    }
    if (obj && typeof obj === 'object') {
        const sanitized: any = {};
        for (const key in obj) {
            sanitized[key] = sanitizeData(obj[key]);
        }
        return sanitized;
    }
    return obj;
}

export async function POST(request: NextRequest) {
    try {
        // Check authentication with custom auth
        const user = await getSession();

        if (!user) {
            console.log('❌ Generate API - Not authenticated');
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        console.log('✅ Generate API - User:', user.id);

        const supabase = await createClient();
        const { templateId, data: userData } = await request.json();

        console.log('📥 Generate API - Received:', {
            templateId,
            name: userData?.name,
            role: userData?.role,
            skills: userData?.skills?.length,
            experience: userData?.experience?.length,
            education: userData?.education?.length,
            projects: userData?.projects?.length
        });

        if (!templateId || !userData) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const sanitizedData = sanitizeData(userData);

        const { data: site, error: dbError } = await supabase
            .from('user_sites')
            .insert({
                user_id: user.id,
                template_id: templateId,
                data_json: sanitizedData,
                exported_zip_url: `#download-${Date.now()}`,
            })
            .select()
            .single();

        if (dbError) {
            console.error('❌ Generate API - DB error:', JSON.stringify(dbError, null, 2));
            console.error('❌ Generate API - DB error details:', dbError.message, dbError.code, dbError.details, dbError.hint);
            return NextResponse.json({ error: 'Failed to save portfolio', details: dbError.message }, { status: 500 });
        }

        console.log('✅ Generate API - Saved site:', site.id, 'with data name:', (site.data_json as any)?.name);

        return NextResponse.json({
            success: true,
            site: {
                id: site.id,
                preview_url: `/templates/${templateId}?siteId=${site.id}`,
                exported_zip_url: site.exported_zip_url,
            }
        });

    } catch (error: unknown) {
        console.error('❌ Generate API - Error:', error);
        const message = error instanceof Error ? error.message : 'Failed to generate portfolio';
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
