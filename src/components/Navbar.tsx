'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { LogOut, User as UserIcon, LayoutDashboard } from 'lucide-react';

interface AuthUser {
    id: string;
    email: string;
    name: string | null;
}

export default function Navbar() {
    const router = useRouter();
    const pathname = usePathname();
    const [user, setUser] = useState<AuthUser | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        try {
            const response = await fetch('/api/auth/me');
            if (response.ok) {
                const data = await response.json();
                setUser(data.user);
            } else {
                setUser(null);
            }
        } catch (error) {
            console.error('Auth check error:', error);
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    const handleSignOut = async () => {
        try {
            await fetch('/api/auth/logout', { method: 'POST' });
            setUser(null);
            router.push('/');
        } catch (error) {
            console.error('Sign out error:', error);
        }
    };

    // Don't show navbar on template preview pages
    if (pathname?.startsWith('/templates/') && !pathname?.includes('?')) {
        return null;
    }

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 backdrop-blur-xl bg-[#09090b]/80">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/logo.png" alt="Neura" width={80} height={80} className="rounded-lg" />
                        <span className="font-semibold text-lg tracking-tight">Neura</span>
                    </Link>

                    {/* Nav Links */}
                    <div className="hidden md:flex items-center gap-6">
                        <Link
                            href="/templates"
                            className={`text-sm font-medium transition-colors ${pathname === '/templates' ? 'text-white' : 'text-zinc-400 hover:text-white'
                                }`}
                        >
                            Templates
                        </Link>
                        {user && (
                            <Link
                                href="/dashboard"
                                className={`text-sm font-medium transition-colors ${pathname === '/dashboard' ? 'text-white' : 'text-zinc-400 hover:text-white'
                                    }`}
                            >
                                Dashboard
                            </Link>
                        )}
                    </div>
                </div>

                {/* Auth */}
                <div className="flex items-center gap-3">
                    {loading ? (
                        <div className="w-20 h-9 bg-white/5 rounded-lg animate-pulse" />
                    ) : user ? (
                        <>
                            <Link
                                href="/profile"
                                className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
                            >
                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center">
                                    <UserIcon className="w-3 h-3 text-white" />
                                </div>
                                <span className="text-sm text-zinc-400 max-w-[120px] truncate">
                                    {user.name || user.email.split('@')[0]}
                                </span>
                            </Link>

                            <Link
                                href="/dashboard"
                                className="md:hidden p-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
                            >
                                <LayoutDashboard className="w-4 h-4 text-zinc-400" />
                            </Link>

                            <button
                                onClick={handleSignOut}
                                className="p-2 bg-white/5 border border-white/10 rounded-lg hover:bg-red-500/10 hover:border-red-500/20 transition-colors group"
                                title="Sign Out"
                            >
                                <LogOut className="w-4 h-4 text-zinc-400 group-hover:text-red-400" />
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                href="/login"
                                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                            >
                                Login
                            </Link>
                            <Link
                                href="/signup"
                                className="btn-primary text-sm py-2 px-5"
                            >
                                Get Started
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}
