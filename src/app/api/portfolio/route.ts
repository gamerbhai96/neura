import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { getSession } from '@/lib/auth';

export async function GET(request: NextRequest) {
    try {
        // Check authentication with custom auth
        const user = await getSession();

        if (!user) {
            console.log('❌ Portfolio API - Not authenticated');
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const supabase = await createClient();
        const { searchParams } = new URL(request.url);
        const siteId = searchParams.get('siteId');

        console.log('📥 Portfolio API - Request:', { siteId, userId: user.id });

        if (!siteId) {
            return NextResponse.json({ error: 'Site ID required' }, { status: 400 });
        }

        const { data: site, error: siteError } = await supabase
            .from('user_sites')
            .select('*')
            .eq('id', siteId)
            .eq('user_id', user.id)
            .single();

        if (siteError || !site) {
            console.log('❌ Portfolio API - Not found:', siteError);
            return NextResponse.json({ error: 'Portfolio not found' }, { status: 404 });
        }

        console.log('✅ Portfolio API - Found site:', {
            id: site.id,
            hasData: !!site.data_json,
            name: (site.data_json as any)?.name,
            skills: (site.data_json as any)?.skills?.length
        });

        return NextResponse.json({ success: true, site });

    } catch (error) {
        console.error('❌ Portfolio API - Error:', error);
        return NextResponse.json({ error: 'Failed to fetch portfolio' }, { status: 500 });
    }
}
