'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { User as UserIcon, Mail, Calendar, LayoutGrid, LogOut, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

interface AuthUser {
    id: string;
    email: string;
    name: string | null;
}

interface UserSite {
    id: string;
    template_id: string | null;
    updated_at: string;
}

export default function ProfilePage() {
    const router = useRouter();
    const [user, setUser] = useState<AuthUser | null>(null);
    const [sites, setSites] = useState<UserSite[]>([]);
    const [loading, setLoading] = useState(true);

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

    const handleSignOut = async () => {
        try {
            await fetch('/api/auth/logout', { method: 'POST' });
            router.push('/');
        } catch (error) {
            console.error('Sign out error:', error);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#09090b] flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-500 border-t-transparent" />
            </div>
        );
    }

    const userName = user?.name || user?.email?.split('@')[0] || 'User';

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
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    {/* Back Button */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-8"
                    >
                        <Link href="/dashboard" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                            <ArrowLeft className="w-4 h-4" />
                            <span className="text-sm">Back to Dashboard</span>
                        </Link>
                    </motion.div>

                    {/* Profile Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="card-glass p-8 mb-8"
                    >
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                            {/* Avatar */}
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center">
                                <span className="text-3xl font-bold text-white">
                                    {userName.charAt(0).toUpperCase()}
                                </span>
                            </div>

                            {/* Info */}
                            <div className="flex-1 text-center sm:text-left">
                                <h1 className="text-2xl font-bold mb-2">{userName}</h1>
                                <div className="flex flex-col sm:flex-row gap-4 text-zinc-400 text-sm">
                                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                                        <Mail className="w-4 h-4" />
                                        <span>{user?.email}</span>
                                    </div>
                                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                                        <Calendar className="w-4 h-4" />
                                        <span>Neura Member</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="grid sm:grid-cols-3 gap-4 mb-8"
                    >
                        <div className="card p-6 text-center">
                            <div className="text-3xl font-bold text-blue-400 mb-1">{sites.length}</div>
                            <div className="text-sm text-zinc-400">Portfolios Created</div>
                        </div>
                        <div className="card p-6 text-center">
                            <div className="text-3xl font-bold text-violet-400 mb-1">40+</div>
                            <div className="text-sm text-zinc-400">Templates Available</div>
                        </div>
                        <div className="card p-6 text-center">
                            <div className="text-3xl font-bold text-emerald-400 mb-1">Free</div>
                            <div className="text-sm text-zinc-400">Current Plan</div>
                        </div>
                    </motion.div>

                    {/* Actions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-4"
                    >
                        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>

                        <Link href="/templates" className="card p-4 flex items-center justify-between group">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                                    <LayoutGrid className="w-5 h-5 text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="font-medium group-hover:text-blue-400 transition-colors">Browse Templates</h3>
                                    <p className="text-sm text-zinc-500">Explore 40+ premium templates</p>
                                </div>
                            </div>
                        </Link>

                        <Link href="/dashboard" className="card p-4 flex items-center justify-between group">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center">
                                    <UserIcon className="w-5 h-5 text-violet-400" />
                                </div>
                                <div>
                                    <h3 className="font-medium group-hover:text-violet-400 transition-colors">My Portfolios</h3>
                                    <p className="text-sm text-zinc-500">View and manage your portfolios</p>
                                </div>
                            </div>
                        </Link>

                        <button
                            onClick={handleSignOut}
                            className="w-full card p-4 flex items-center justify-between group text-left hover:border-red-500/30"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                                    <LogOut className="w-5 h-5 text-red-400" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-red-400">Sign Out</h3>
                                    <p className="text-sm text-zinc-500">Log out of your account</p>
                                </div>
                            </div>
                        </button>
                    </motion.div>
                </div>
            </main>
        </div>
    );
}
