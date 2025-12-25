'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Plus, Eye, Download, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';

interface AuthUser {
    id: string;
    email: string;
    name: string | null;
}

interface UserSite {
    id: string;
    template_id: string | null;
    data_json: Record<string, unknown>;
    exported_zip_url: string | null;
    updated_at: string;
    templates?: {
        name: string;
        role: string;
    };
}

export default function DashboardPage() {
    const router = useRouter();
    const [sites, setSites] = useState<UserSite[]>([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<AuthUser | null>(null);

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        try {
            const response = await fetch('/api/auth/me');
            if (!response.ok) {
                router.push('/login');
                return;
            }
            const data = await response.json();
            setUser(data.user);
            await fetchSites();
        } catch (error) {
            console.error('Auth check error:', error);
            router.push('/login');
        } finally {
            setLoading(false);
        }
    };

    const fetchSites = async () => {
        try {
            const response = await fetch('/api/save');
            const result = await response.json();
            if (result.success) {
                setSites(result.sites || []);
            }
        } catch (error) {
            console.error('Error fetching sites:', error);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#09090b] flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-500 border-t-transparent" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#09090b] text-white">
            {/* Grid Background */}
            <div className="fixed inset-0 grid-bg opacity-30" />

            {/* Gradient Orbs */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[100px]" />
            </div>

            <Navbar />

            {/* Main Content */}
            <main className="relative pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-12">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="heading-lg mb-4"
                        >
                            My Portfolios
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-zinc-400"
                        >
                            Manage and view all your created portfolios
                        </motion.p>
                    </div>

                    {sites.length === 0 ? (
                        /* Empty State */
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center py-20"
                        >
                            <div className="card-glass p-16 max-w-lg mx-auto">
                                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mx-auto mb-6">
                                    <Sparkles className="w-8 h-8 text-blue-400" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">No portfolios yet</h3>
                                <p className="text-zinc-400 mb-8">
                                    Choose a template and upload your resume to create your first portfolio.
                                </p>
                                <Link href="/templates" className="btn-primary">
                                    <Plus className="w-4 h-4" />
                                    Browse Templates
                                </Link>
                            </div>
                        </motion.div>
                    ) : (
                        /* Portfolio Grid */
                        <>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {sites.map((site, index) => (
                                    <motion.div
                                        key={site.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <div className="card p-6 h-full flex flex-col">
                                            <div className="flex-1 mb-6">
                                                <h3 className="text-lg font-semibold mb-1">
                                                    {(site.data_json as any)?.name || 'Untitled Portfolio'}
                                                </h3>
                                                <p className="text-sm text-zinc-400 mb-1">
                                                    {site.templates?.name || site.template_id || 'Custom Template'}
                                                </p>
                                                <p className="text-sm text-zinc-500">
                                                    {(site.data_json as any)?.role || 'Professional'}
                                                </p>
                                                <p className="text-xs text-zinc-600 mt-4">
                                                    Updated {new Date(site.updated_at).toLocaleDateString()}
                                                </p>
                                            </div>

                                            <div className="flex gap-3">
                                                <Link
                                                    href={`/templates/${site.template_id}?siteId=${site.id}`}
                                                    className="flex-1 btn-primary justify-center text-sm py-2.5"
                                                >
                                                    <Eye className="w-4 h-4" />
                                                    View
                                                </Link>
                                                <button
                                                    onClick={async () => {
                                                        try {
                                                            const response = await fetch(`/api/export-portfolio?siteId=${site.id}`);
                                                            if (!response.ok) {
                                                                alert('Download failed');
                                                                return;
                                                            }
                                                            const blob = await response.blob();
                                                            const url = window.URL.createObjectURL(blob);
                                                            const a = document.createElement('a');
                                                            a.href = url;
                                                            a.download = `portfolio-${site.id}.zip`;
                                                            document.body.appendChild(a);
                                                            a.click();
                                                            window.URL.revokeObjectURL(url);
                                                            document.body.removeChild(a);
                                                        } catch (error) {
                                                            console.error('Download error:', error);
                                                            alert('Failed to download');
                                                        }
                                                    }}
                                                    className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium transition-all flex items-center gap-2"
                                                >
                                                    <Download className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Create New CTA */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="mt-12 text-center"
                            >
                                <Link
                                    href="/templates"
                                    className="btn-secondary inline-flex"
                                >
                                    <Plus className="w-4 h-4" />
                                    Create New Portfolio
                                </Link>
                            </motion.div>
                        </>
                    )}
                </div>
            </main>
        </div>
    );
}
