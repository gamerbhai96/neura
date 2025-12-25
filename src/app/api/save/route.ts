import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { getSession } from '@/lib/auth';

export async function POST(request: NextRequest) {
    try {
        // Check authentication with custom auth
        const user = await getSession();

        if (!user) {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 }
            );
        }

        const { templateId, portfolioData, siteId } = await request.json();

        if (!portfolioData) {
            return NextResponse.json(
                { error: 'Portfolio data is required' },
                { status: 400 }
            );
        }

        const supabase = await createClient();

        // Insert or update user_sites
        const siteData = {
            user_id: user.id,
            template_id: templateId || null,
            data_json: portfolioData,
            updated_at: new Date().toISOString(),
        };

        let result;
        if (siteId) {
            // Update existing site
            const { data, error } = await supabase
                .from('user_sites')
                .update(siteData)
                .eq('id', siteId)
                .eq('user_id', user.id)
                .select()
                .single();

            if (error) throw error;
            result = data;
        } else {
            // Insert new site
            const { data, error } = await supabase
                .from('user_sites')
                .insert(siteData)
                .select()
                .single();

            if (error) throw error;
            result = data;
        }

        return NextResponse.json({
            success: true,
            site: result,
        });
    } catch (error) {
        console.error('Error saving portfolio:', error);
        return NextResponse.json(
            { error: 'Failed to save portfolio' },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        // Check authentication with custom auth
        const user = await getSession();

        if (!user) {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 }
            );
        }

        const supabase = await createClient();

        // Fetch user's sites
        const { data, error } = await supabase
            .from('user_sites')
            .select('*, templates(*)')
            .eq('user_id', user.id)
            .order('updated_at', { ascending: false });

        if (error) throw error;

        return NextResponse.json({
            success: true,
            sites: data,
        });
    } catch (error) {
        console.error('Error fetching user sites:', error);
        return NextResponse.json(
            { error: 'Failed to fetch sites' },
            { status: 500 }
        );
    }
}
