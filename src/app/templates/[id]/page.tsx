'use client';

import { notFound, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Sparkles, ArrowLeft, Download } from 'lucide-react';
import Link from 'next/link';
import CyberpunkNeonPage from '@/components/templates/developer/cyberpunk-neon/Page';
import AppleMinimalPage from '@/components/templates/developer/apple-minimal/Page';
import ThreeDInteractivePage from '@/components/templates/developer/3d-interactive/Page';
import GlasmorphismPage from '@/components/templates/developer/glassmorphism/Page';
import ParticleBgPage from '@/components/templates/developer/particle-bg/Page';
import RetroPixelPage from '@/components/templates/developer/retro-pixel/Page';
import GradientBlobPage from '@/components/templates/developer/gradient-blob/Page';
import ParallaxScrollPage from '@/components/templates/developer/parallax-scroll/Page';
import NeoBrutalismPage from '@/components/templates/developer/neo-brutalism/Page';
import SpaceCosmicPage from '@/components/templates/developer/space-cosmic/Page';
import TerminalCLIPage from '@/components/templates/developer/terminal-cli/Page';
import Isometric3DPage from '@/components/templates/developer/isometric-3d/Page';
import MagazineEditorialPage from '@/components/templates/developer/magazine-editorial/Page';
import GlitchCyberPage from '@/components/templates/developer/glitch-cyber/Page';
import NatureOrganicPage from '@/components/templates/developer/nature-organic/Page';
import LiquidFluidPage from '@/components/templates/developer/liquid-fluid/Page';
import WebGLTunnelPage from '@/components/templates/developer/webgl-tunnel/Page';
// New template imports
import AuroraBorealisPage from '@/components/templates/developer/aurora-borealis/Page';
import MatrixRainPage from '@/components/templates/developer/matrix-rain/Page';
import NeonSynthwavePage from '@/components/templates/developer/neon-synthwave/Page';
import DarkAcademiaPage from '@/components/templates/developer/dark-academia/Page';
import GlassCardsPage from '@/components/templates/developer/glass-cards/Page';
import MinimalSwissPage from '@/components/templates/developer/minimal-swiss/Page';
import GradientMeshPage from '@/components/templates/developer/gradient-mesh/Page';
import VaporwavePage from '@/components/templates/developer/vaporwave/Page';
import GeometricArtPage from '@/components/templates/developer/geometric-art/Page';
import JapaneseZenPage from '@/components/templates/developer/japanese-zen/Page';
import BrutalistWebPage from '@/components/templates/developer/brutalist-web/Page';
import Cyberpunk2077Page from '@/components/templates/developer/cyberpunk-2077/Page';
import MemphisDesignPage from '@/components/templates/developer/memphis-design/Page';
import CosmicGalaxyPage from '@/components/templates/developer/cosmic-galaxy/Page';
import PaperCutoutPage from '@/components/templates/developer/paper-cutout/Page';
import BlueprintPage from '@/components/templates/developer/blueprint/Page';
import MonochromeElegantPage from '@/components/templates/developer/monochrome-elegant/Page';
import HolographicPage from '@/components/templates/developer/holographic/Page';
import NewspaperPage from '@/components/templates/developer/newspaper/Page';
import GradientWavesPage from '@/components/templates/developer/gradient-waves/Page';
import NeonGridPage from '@/components/templates/developer/neon-grid/Page';
import RetroComicPage from '@/components/templates/developer/retro-comic/Page';
import PixelArtPage from '@/components/templates/developer/pixel-art/Page';

interface AuthUser {
    id: string;
    email: string;
    name: string | null;
}

const templateComponents: Record<string, React.ComponentType<any>> = {
    'cyberpunk-neon': CyberpunkNeonPage,
    'apple-minimal': AppleMinimalPage,
    '3d-interactive': ThreeDInteractivePage,
    'glassmorphism': GlasmorphismPage,
    'particle-bg': ParticleBgPage,
    'retro-pixel': RetroPixelPage,
    'gradient-blob': GradientBlobPage,
    'parallax-scroll': ParallaxScrollPage,
    'neo-brutalism': NeoBrutalismPage,
    'space-cosmic': SpaceCosmicPage,
    'terminal-cli': TerminalCLIPage,
    'isometric-3d': Isometric3DPage,
    'magazine-editorial': MagazineEditorialPage,
    'glitch-cyber': GlitchCyberPage,
    'nature-organic': NatureOrganicPage,
    'liquid-fluid': LiquidFluidPage,
    'webgl-tunnel': WebGLTunnelPage,
    // New templates
    'aurora-borealis': AuroraBorealisPage,
    'matrix-rain': MatrixRainPage,
    'neon-synthwave': NeonSynthwavePage,
    'dark-academia': DarkAcademiaPage,
    'glass-cards': GlassCardsPage,
    'minimal-swiss': MinimalSwissPage,
    'gradient-mesh': GradientMeshPage,
    'vaporwave': VaporwavePage,
    'geometric-art': GeometricArtPage,
    'japanese-zen': JapaneseZenPage,
    'brutalist-web': BrutalistWebPage,
    'cyberpunk-2077': Cyberpunk2077Page,
    'memphis-design': MemphisDesignPage,
    'cosmic-galaxy': CosmicGalaxyPage,
    'paper-cutout': PaperCutoutPage,
    'blueprint': BlueprintPage,
    'monochrome-elegant': MonochromeElegantPage,
    'holographic': HolographicPage,
    'newspaper': NewspaperPage,
    'gradient-waves': GradientWavesPage,
    'neon-grid': NeonGridPage,
    'retro-comic': RetroComicPage,
    'pixel-art': PixelArtPage,
};

export default function TemplatePreviewPage({ params, searchParams }: { params: { id: string }, searchParams?: { siteId?: string } }) {
    const router = useRouter();
    const [user, setUser] = useState<AuthUser | null>(null);
    const [loading, setLoading] = useState(true);
    const [portfolioData, setPortfolioData] = useState<any>(null);
    const [siteId, setSiteId] = useState<string | null>(null);

    const TemplateComponent = templateComponents[params.id];

    useEffect(() => {
        checkAuth();

        // Get siteId from URL
        const urlSiteId = searchParams?.siteId;
        console.log('🔍 Template Preview - URL siteId:', urlSiteId);

        if (urlSiteId) {
            setSiteId(urlSiteId);
            loadPortfolioData(urlSiteId);
        } else {
            console.log('ℹ️ No siteId - showing template preview with default data');
            setLoading(false);
        }
    }, [searchParams?.siteId]);

    const checkAuth = async () => {
        try {
            const response = await fetch('/api/auth/me');
            if (response.ok) {
                const data = await response.json();
                setUser(data.user);
                console.log('👤 User auth status: logged in');
            } else {
                console.log('👤 User auth status: not logged in');
            }
        } catch (error) {
            console.error('Auth check error:', error);
        }
    };

    const loadPortfolioData = async (id: string) => {
        console.log('📥 Loading portfolio data for siteId:', id);
        try {
            const response = await fetch(`/api/portfolio?siteId=${id}`);
            const result = await response.json();

            console.log('📦 API Response:', {
                success: result.success,
                hasData: !!result.site?.data_json,
                name: result.site?.data_json?.name,
                skills: result.site?.data_json?.skills?.length,
                experience: result.site?.data_json?.experience?.length
            });

            if (result.success && result.site && result.site.data_json) {
                console.log('✅ Setting portfolio data:', result.site.data_json.name);
                setPortfolioData(result.site.data_json);
            } else {
                console.log('⚠️ No data_json in response:', result);
            }
        } catch (error) {
            console.error('❌ Error loading portfolio data:', error);
        } finally {
            setLoading(false);
        }
    };

    if (!TemplateComponent) {
        notFound();
    }

    // Debug log what we're passing to the template
    console.log('🎨 Rendering template with data:', {
        hasData: !!portfolioData,
        name: portfolioData?.name,
        skills: portfolioData?.skills?.length
    });

    return (
        <div className="relative">
            {/* Template Content - Pass data if available */}
            {loading ? (
                <div className="min-h-screen flex items-center justify-center bg-black">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-violet-600 mx-auto mb-4"></div>
                        <p className="text-white/60">Loading your portfolio...</p>
                    </div>
                </div>
            ) : (
                <TemplateComponent data={portfolioData} />
            )}

            {/* Floating Action Bar */}
            {!loading && (
                <div className="fixed bottom-0 left-0 right-0 z-50 p-6 pointer-events-none">
                    <div className="container mx-auto max-w-4xl pointer-events-auto">
                        <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-4 flex items-center justify-between">
                            <Link
                                href="/templates"
                                className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors"
                            >
                                <ArrowLeft className="w-5 h-5" />
                                <span className="font-medium hidden sm:inline">Back to Templates</span>
                            </Link>

                            <div className="flex items-center gap-3">
                                {siteId && (
                                    <button
                                        onClick={async () => {
                                            try {
                                                const response = await fetch(`/api/export-portfolio?siteId=${siteId}`);
                                                if (!response.ok) {
                                                    const error = await response.json();
                                                    alert(`Download failed: ${error.error || 'Unknown error'}`);
                                                    return;
                                                }
                                                const blob = await response.blob();
                                                const url = window.URL.createObjectURL(blob);
                                                const a = document.createElement('a');
                                                a.href = url;
                                                a.download = `portfolio-${siteId}.zip`;
                                                document.body.appendChild(a);
                                                a.click();
                                                window.URL.revokeObjectURL(url);
                                                document.body.removeChild(a);
                                            } catch (error) {
                                                console.error('Download error:', error);
                                                alert('Failed to download. Please try again.');
                                            }
                                        }}
                                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center space-x-2"
                                    >
                                        <Download className="w-5 h-5" />
                                        <span className="hidden sm:inline">Download</span>
                                    </button>
                                )}

                                {user ? (
                                    <button
                                        onClick={() => router.push(`/builder?template=${params.id}`)}
                                        className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center space-x-2 group"
                                    >
                                        <Sparkles className="w-5 h-5" />
                                        <span>Use This Template</span>
                                    </button>
                                ) : (
                                    <Link
                                        href="/signup"
                                        className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center space-x-2"
                                    >
                                        <Sparkles className="w-5 h-5" />
                                        <span>Sign Up to Use</span>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
