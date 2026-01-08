'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, FileText, CheckCircle2, Download, Edit, ArrowLeft, ArrowRight, Loader2, Eye, Sparkles, Plus, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { PortfolioData } from '@/components/templates/types';

const STEPS = [
    { id: 1, name: 'Upload Resume', icon: Upload },
    { id: 2, name: 'Review Data', icon: Edit },
    { id: 3, name: 'Generate', icon: Sparkles },
    { id: 4, name: 'Complete', icon: CheckCircle2 },
];

function BuilderContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const templateId = searchParams.get('template');

    const [currentStep, setCurrentStep] = useState(1);
    const [file, setFile] = useState<File | null>(null);
    const [parsing, setParsing] = useState(false);
    const [generating, setGenerating] = useState(false);
    const [parsedData, setParsedData] = useState<PortfolioData | null>(null);
    const [error, setError] = useState('');
    const [generatedSite, setGeneratedSite] = useState<{ id: string; preview_url: string; exported_zip_url: string } | null>(null);

    // Check authentication
    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        try {
            const response = await fetch('/api/auth/me');
            if (!response.ok) {
                router.push('/login');
            }
        } catch (error) {
            console.error('Auth check error:', error);
            router.push('/login');
        }
    };

    // Handle file selection
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            if (selectedFile.type !== 'application/pdf') {
                setError('Please upload a PDF file');
                return;
            }
            if (selectedFile.size > 5 * 1024 * 1024) {
                setError('File size must be less than 5MB');
                return;
            }
            setFile(selectedFile);
            setError('');
        }
    };

    // Parse resume
    const handleParse = async () => {
        if (!file) return;

        setParsing(true);
        setError('');

        try {
            const formData = new FormData();
            formData.append('resume', file);

            const response = await fetch('/api/parse-resume', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Failed to parse resume');
            }

            setParsedData(result.data);
            setCurrentStep(2);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to parse resume');
        } finally {
            setParsing(false);
        }
    };

    // Generate portfolio
    const handleGenerate = async () => {
        if (!parsedData) return;

        setGenerating(true);
        setError('');

        try {
            const response = await fetch('/api/generate-portfolio', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    templateId: templateId || 'cyberpunk-neon',
                    data: parsedData,
                }),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Failed to generate portfolio');
            }

            setGeneratedSite(result.site);
            setCurrentStep(4);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to generate portfolio');
        } finally {
            setGenerating(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#09090b] text-white overflow-hidden">
            {/* Grid Background */}
            <div className="fixed inset-0 grid-bg opacity-30" />

            {/* Gradient Orbs */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[100px]" />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 backdrop-blur-xl bg-[#09090b]/80">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <Link href="/" className="flex items-center gap-2">
                            <Image src="/logo.png" alt="Neura" width={32} height={32} className="rounded-lg" />
                            <span className="font-semibold text-lg">Neura</span>
                        </Link>
                        <Link href="/templates" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                            Templates
                        </Link>
                        <Link href="/dashboard" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                            Dashboard
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Progress Steps */}
            <div className="relative z-10 container mx-auto px-6 pt-24 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center justify-between mb-12">
                        {STEPS.map((step, index) => {
                            const Icon = step.icon;
                            const isActive = currentStep === step.id;
                            const isCompleted = currentStep > step.id;

                            return (
                                <div key={step.id} className="flex items-center flex-1">
                                    <div className="flex flex-col items-center">
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${isCompleted ? 'bg-green-500 text-white' :
                                            isActive ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white' :
                                                'bg-white/10 backdrop-blur-xl border border-white/20 text-white/40'
                                            }`}>
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <span className={`mt-2 text-sm font-medium ${isActive ? 'text-white' : 'text-white/50'}`}>
                                            {step.name}
                                        </span>
                                    </div>
                                    {index < STEPS.length - 1 && (
                                        <div className={`flex-1 h-1 mx-4 rounded ${currentStep > step.id ? 'bg-green-500' : 'bg-white/10 backdrop-blur-xl'
                                            }`} />
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="mb-6 bg-red-500/10 border border-red-500/20 text-red-400 px-6 py-4 rounded-xl backdrop-blur-xl">
                            {error}
                        </div>
                    )}

                    {/* Step Content */}
                    <AnimatePresence mode="wait">
                        {currentStep === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-12"
                            >
                                <div className="text-center mb-8">
                                    <div className="w-20 h-20 bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Upload className="w-10 h-10 text-violet-400" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-white mb-2">Upload Your Resume</h2>
                                    <p className="text-white/60">We'll automatically extract your information from your PDF resume</p>
                                </div>

                                <div className="max-w-md mx-auto">
                                    <div className="border-2 border-dashed border-white/20 rounded-xl p-12 text-center hover:border-violet-500 transition-colors cursor-pointer backdrop-blur-xl bg-white/[0.02]"
                                        onClick={() => document.getElementById('resume-upload')?.click()}
                                    >
                                        {file ? (
                                            <div className="space-y-4">
                                                <FileText className="w-16 h-16 text-green-400 mx-auto" />
                                                <div>
                                                    <p className="font-semibold text-white">{file.name}</p>
                                                    <p className="text-sm text-white/60">{(file.size / 1024).toFixed(2)} KB</p>
                                                </div>
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); setFile(null); }}
                                                    className="text-sm text-red-400 hover:underline"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        ) : (
                                            <div className="space-y-4">
                                                <Upload className="w-16 h-16 text-white/40 mx-auto" />
                                                <div>
                                                    <p className="font-semibold text-white">Click to upload or drag and drop</p>
                                                    <p className="text-sm text-white/60">PDF file (max 5MB)</p>
                                                </div>
                                            </div>
                                        )}
                                        <input
                                            id="resume-upload"
                                            type="file"
                                            accept=".pdf"
                                            onChange={handleFileChange}
                                            className="hidden"
                                        />
                                    </div>

                                    <button
                                        onClick={handleParse}
                                        disabled={!file || parsing}
                                        className="w-full mt-8 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 disabled:bg-white/10 disabled:from-white/10 disabled:to-white/10 text-white font-semibold py-4 rounded-xl transition-all flex items-center justify-center space-x-2"
                                    >
                                        {parsing ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                <span>Parsing Resume...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Parse Resume</span>
                                                <ArrowRight className="w-5 h-5" />
                                            </>
                                        )}
                                    </button>

                                    {/* Divider */}
                                    <div className="flex items-center gap-4 mt-6">
                                        <div className="flex-1 h-px bg-white/10"></div>
                                        <span className="text-white/40 text-sm">or</span>
                                        <div className="flex-1 h-px bg-white/10"></div>
                                    </div>

                                    {/* Skip Resume Button */}
                                    <button
                                        onClick={() => {
                                            // Set empty default data for manual entry
                                            setParsedData({
                                                name: '',
                                                email: '',
                                                phone: '',
                                                location: '',
                                                bio: '',
                                                role: '',
                                                skills: [],
                                                experience: [{
                                                    company: '',
                                                    position: '',
                                                    startDate: '',
                                                    endDate: '',
                                                    description: '',
                                                    highlights: []
                                                }],
                                                education: [{
                                                    school: '',
                                                    degree: '',
                                                    field: '',
                                                    startDate: '',
                                                    endDate: ''
                                                }],
                                                projects: [{
                                                    name: '',
                                                    description: '',
                                                    technologies: [],
                                                    url: '',
                                                    github: ''
                                                }],
                                                certifications: [],
                                                links: {
                                                    github: '',
                                                    linkedin: '',
                                                    twitter: '',
                                                    website: '',
                                                    portfolio: ''
                                                }
                                            });
                                            setCurrentStep(2);
                                        }}
                                        className="w-full mt-4 border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-medium py-3 rounded-xl transition-all flex items-center justify-center space-x-2 backdrop-blur-xl bg-white/[0.02]"
                                    >
                                        <Edit className="w-4 h-4" />
                                        <span>Skip, enter details manually</span>
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {currentStep === 2 && parsedData && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-12"
                            >
                                <div className="mb-8">
                                    <h2 className="text-3xl font-bold text-white mb-2">Review Your Information</h2>
                                    <p className="text-white/60">Double-check the extracted data and make any edits</p>
                                </div>

                                <div className="space-y-6 max-h-[600px] overflow-y-auto pr-4">
                                    {/* Basic Info */}
                                    <div>
                                        <label className="block text-sm font-medium text-white/70 mb-2">Name</label>
                                        <input
                                            type="text"
                                            value={parsedData.name}
                                            onChange={(e) => setParsedData({ ...parsedData, name: e.target.value })}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent text-white placeholder-white/40"
                                        />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-white/70 mb-2">Email</label>
                                            <input
                                                type="email"
                                                value={parsedData.email}
                                                onChange={(e) => setParsedData({ ...parsedData, email: e.target.value })}
                                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent text-white placeholder-white/40"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-white/70 mb-2">Phone</label>
                                            <input
                                                type="tel"
                                                value={parsedData.phone}
                                                onChange={(e) => setParsedData({ ...parsedData, phone: e.target.value })}
                                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent text-white placeholder-white/40"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-white/70 mb-2">Location</label>
                                        <input
                                            type="text"
                                            value={parsedData.location || ''}
                                            onChange={(e) => setParsedData({ ...parsedData, location: e.target.value })}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent text-white placeholder-white/40"
                                            placeholder="e.g. San Francisco, CA"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-white/70 mb-2">Bio</label>
                                        <textarea
                                            value={parsedData.bio || ''}
                                            onChange={(e) => setParsedData({ ...parsedData, bio: e.target.value })}
                                            rows={4}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent text-white placeholder-white/40"
                                            placeholder="Your professional summary..."
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-white/70 mb-2">Role / Job Title</label>
                                        <input
                                            type="text"
                                            value={parsedData.role || ''}
                                            onChange={(e) => setParsedData({ ...parsedData, role: e.target.value })}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent text-white placeholder-white/40"
                                            placeholder="e.g. Full Stack Developer, Data Scientist"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-white/70 mb-2">Skills (comma-separated)</label>
                                        <input
                                            type="text"
                                            defaultValue={(parsedData.skills || []).join(', ')}
                                            onBlur={(e) => setParsedData({ ...parsedData, skills: e.target.value.split(',').map(s => s.trim()).filter(s => s) })}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent text-white placeholder-white/40"
                                            placeholder="React, TypeScript, Node.js, Python..."
                                        />
                                        <p className="text-xs text-white/40 mt-1">Type your skills separated by commas. Press Tab or click outside to save.</p>
                                    </div>

                                    {/* Education - Editable */}
                                    <div>
                                        <div className="flex items-center justify-between mb-3">
                                            <h3 className="font-semibold text-white">Education</h3>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setParsedData({
                                                        ...parsedData,
                                                        education: [
                                                            ...(parsedData.education || []),
                                                            {
                                                                school: '',
                                                                degree: '',
                                                                field: '',
                                                                startDate: '',
                                                                endDate: ''
                                                            }
                                                        ]
                                                    });
                                                }}
                                                className="px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg text-sm font-medium transition-all flex items-center gap-2"
                                            >
                                                <Plus className="w-4 h-4" />
                                                Add Education
                                            </button>
                                        </div>
                                        {(parsedData.education || []).map((edu, idx) => (
                                            <div key={idx} className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-lg mb-3 space-y-3 relative">
                                                {(parsedData.education || []).length > 1 && (
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            const newEdu = (parsedData.education || []).filter((_, i) => i !== idx);
                                                            setParsedData({ ...parsedData, education: newEdu });
                                                        }}
                                                        className="absolute top-2 right-2 p-1.5 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all"
                                                        title="Remove"
                                                    >
                                                        <X className="w-4 h-4" />
                                                    </button>
                                                )}
                                                <div className="grid md:grid-cols-2 gap-3">
                                                    <div>
                                                        <label className="block text-xs font-medium text-white/60 mb-1">Degree</label>
                                                        <input
                                                            type="text"
                                                            value={edu.degree}
                                                            onChange={(e) => {
                                                                const newEdu = [...(parsedData.education || [])];
                                                                newEdu[idx] = { ...newEdu[idx], degree: e.target.value };
                                                                setParsedData({ ...parsedData, education: newEdu });
                                                            }}
                                                            className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:ring-2 focus:ring-violet-500"
                                                            placeholder="Bachelor of Science"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-medium text-white/60 mb-1">Field of Study</label>
                                                        <input
                                                            type="text"
                                                            value={edu.field}
                                                            onChange={(e) => {
                                                                const newEdu = [...(parsedData.education || [])];
                                                                newEdu[idx] = { ...newEdu[idx], field: e.target.value };
                                                                setParsedData({ ...parsedData, education: newEdu });
                                                            }}
                                                            className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:ring-2 focus:ring-violet-500"
                                                            placeholder="Computer Science"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-medium text-white/60 mb-1">School/University</label>
                                                    <input
                                                        type="text"
                                                        value={edu.school}
                                                        onChange={(e) => {
                                                            const newEdu = [...(parsedData.education || [])];
                                                            newEdu[idx] = { ...newEdu[idx], school: e.target.value };
                                                            setParsedData({ ...parsedData, education: newEdu });
                                                        }}
                                                        className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:ring-2 focus:ring-violet-500"
                                                        placeholder="Stanford University"
                                                    />
                                                </div>
                                                <div className="grid md:grid-cols-2 gap-3">
                                                    <div>
                                                        <label className="block text-xs font-medium text-white/60 mb-1">Start Date</label>
                                                        <input
                                                            type="text"
                                                            value={edu.startDate}
                                                            onChange={(e) => {
                                                                const newEdu = [...(parsedData.education || [])];
                                                                newEdu[idx] = { ...newEdu[idx], startDate: e.target.value };
                                                                setParsedData({ ...parsedData, education: newEdu });
                                                            }}
                                                            className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:ring-2 focus:ring-violet-500"
                                                            placeholder="2015"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-medium text-white/60 mb-1">End Date</label>
                                                        <input
                                                            type="text"
                                                            value={edu.endDate}
                                                            onChange={(e) => {
                                                                const newEdu = [...(parsedData.education || [])];
                                                                newEdu[idx] = { ...newEdu[idx], endDate: e.target.value };
                                                                setParsedData({ ...parsedData, education: newEdu });
                                                            }}
                                                            className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:ring-2 focus:ring-violet-500"
                                                            placeholder="2019"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Experience - Editable */}
                                    <div>
                                        <div className="flex items-center justify-between mb-3">
                                            <h3 className="font-semibold text-white">Experience</h3>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setParsedData({
                                                        ...parsedData,
                                                        experience: [
                                                            ...(parsedData.experience || []),
                                                            {
                                                                company: '',
                                                                position: '',
                                                                startDate: '',
                                                                endDate: '',
                                                                description: '',
                                                                highlights: []
                                                            }
                                                        ]
                                                    });
                                                }}
                                                className="px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg text-sm font-medium transition-all flex items-center gap-2"
                                            >
                                                <Plus className="w-4 h-4" />
                                                Add Experience
                                            </button>
                                        </div>
                                        {(parsedData.experience || []).map((exp, idx) => (
                                            <div key={idx} className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-lg mb-3 space-y-3 relative">
                                                {(parsedData.experience || []).length > 1 && (
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            const newExp = (parsedData.experience || []).filter((_, i) => i !== idx);
                                                            setParsedData({ ...parsedData, experience: newExp });
                                                        }}
                                                        className="absolute top-2 right-2 p-1.5 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all"
                                                        title="Remove"
                                                    >
                                                        <X className="w-4 h-4" />
                                                    </button>
                                                )}
                                                <div className="grid md:grid-cols-2 gap-3">
                                                    <div>
                                                        <label className="block text-xs font-medium text-white/60 mb-1">Position</label>
                                                        <input
                                                            type="text"
                                                            value={exp.position}
                                                            onChange={(e) => {
                                                                const newExp = [...(parsedData.experience || [])];
                                                                newExp[idx] = { ...newExp[idx], position: e.target.value };
                                                                setParsedData({ ...parsedData, experience: newExp });
                                                            }}
                                                            className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:ring-2 focus:ring-violet-500"
                                                            placeholder="Senior Software Engineer"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-medium text-white/60 mb-1">Company</label>
                                                        <input
                                                            type="text"
                                                            value={exp.company}
                                                            onChange={(e) => {
                                                                const newExp = [...(parsedData.experience || [])];
                                                                newExp[idx] = { ...newExp[idx], company: e.target.value };
                                                                setParsedData({ ...parsedData, experience: newExp });
                                                            }}
                                                            className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:ring-2 focus:ring-violet-500"
                                                            placeholder="Tech Corp"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="grid md:grid-cols-2 gap-3">
                                                    <div>
                                                        <label className="block text-xs font-medium text-white/60 mb-1">Start Date</label>
                                                        <input
                                                            type="text"
                                                            value={exp.startDate}
                                                            onChange={(e) => {
                                                                const newExp = [...(parsedData.experience || [])];
                                                                newExp[idx] = { ...newExp[idx], startDate: e.target.value };
                                                                setParsedData({ ...parsedData, experience: newExp });
                                                            }}
                                                            className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:ring-2 focus:ring-violet-500"
                                                            placeholder="January 2020"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-medium text-white/60 mb-1">End Date</label>
                                                        <input
                                                            type="text"
                                                            value={exp.endDate}
                                                            onChange={(e) => {
                                                                const newExp = [...(parsedData.experience || [])];
                                                                newExp[idx] = { ...newExp[idx], endDate: e.target.value };
                                                                setParsedData({ ...parsedData, experience: newExp });
                                                            }}
                                                            className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:ring-2 focus:ring-violet-500"
                                                            placeholder="Present"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-medium text-white/60 mb-1">Description</label>
                                                    <textarea
                                                        value={exp.description}
                                                        onChange={(e) => {
                                                            const newExp = [...(parsedData.experience || [])];
                                                            newExp[idx] = { ...newExp[idx], description: e.target.value };
                                                            setParsedData({ ...parsedData, experience: newExp });
                                                        }}
                                                        rows={2}
                                                        className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:ring-2 focus:ring-violet-500"
                                                        placeholder="Brief description of your role..."
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Projects Section */}
                                    <div>
                                        <div className="flex items-center justify-between mb-3">
                                            <h3 className="font-semibold text-white">Projects</h3>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setParsedData({
                                                        ...parsedData,
                                                        projects: [...(parsedData.projects || []), { name: '', description: '', technologies: [], url: '', github: '' }]
                                                    });
                                                }}
                                                className="px-3 py-1 bg-violet-600 hover:bg-violet-700 text-white rounded-lg text-sm flex items-center gap-1"
                                            >
                                                <Plus className="w-4 h-4" /> Add Project
                                            </button>
                                        </div>
                                        {(parsedData.projects || []).map((proj: any, idx: number) => (
                                            <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4 mb-3 relative">
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        const newProj = [...(parsedData.projects || [])];
                                                        newProj.splice(idx, 1);
                                                        setParsedData({ ...parsedData, projects: newProj });
                                                    }}
                                                    className="absolute top-2 right-2 text-red-400 hover:text-red-300"
                                                >
                                                    <X className="w-4 h-4" />
                                                </button>
                                                <div className="grid md:grid-cols-2 gap-4 mb-3">
                                                    <div>
                                                        <label className="block text-xs font-medium text-white/60 mb-1">Project Name</label>
                                                        <input
                                                            type="text"
                                                            value={proj.name}
                                                            onChange={(e) => {
                                                                const newProj = [...(parsedData.projects || [])];
                                                                newProj[idx] = { ...newProj[idx], name: e.target.value };
                                                                setParsedData({ ...parsedData, projects: newProj });
                                                            }}
                                                            className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:ring-2 focus:ring-violet-500"
                                                            placeholder="My Awesome Project"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-medium text-white/60 mb-1">Technologies (comma-separated)</label>
                                                        <input
                                                            type="text"
                                                            defaultValue={(proj.technologies || []).join(', ')}
                                                            onBlur={(e) => {
                                                                const newProj = [...(parsedData.projects || [])];
                                                                newProj[idx] = { ...newProj[idx], technologies: e.target.value.split(',').map((s: string) => s.trim()).filter((s: string) => s) };
                                                                setParsedData({ ...parsedData, projects: newProj });
                                                            }}
                                                            className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:ring-2 focus:ring-violet-500"
                                                            placeholder="React, Node.js, PostgreSQL"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label className="block text-xs font-medium text-white/60 mb-1">Description</label>
                                                    <textarea
                                                        value={proj.description}
                                                        onChange={(e) => {
                                                            const newProj = [...(parsedData.projects || [])];
                                                            newProj[idx] = { ...newProj[idx], description: e.target.value };
                                                            setParsedData({ ...parsedData, projects: newProj });
                                                        }}
                                                        rows={2}
                                                        className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:ring-2 focus:ring-violet-500"
                                                        placeholder="Brief description of the project"
                                                    />
                                                </div>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-xs font-medium text-white/60 mb-1">Live URL</label>
                                                        <input
                                                            type="url"
                                                            value={proj.url || ''}
                                                            onChange={(e) => {
                                                                const newProj = [...(parsedData.projects || [])];
                                                                newProj[idx] = { ...newProj[idx], url: e.target.value };
                                                                setParsedData({ ...parsedData, projects: newProj });
                                                            }}
                                                            className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:ring-2 focus:ring-violet-500"
                                                            placeholder="https://myproject.com"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-medium text-white/60 mb-1">GitHub URL</label>
                                                        <input
                                                            type="url"
                                                            value={proj.github || ''}
                                                            onChange={(e) => {
                                                                const newProj = [...(parsedData.projects || [])];
                                                                newProj[idx] = { ...newProj[idx], github: e.target.value };
                                                                setParsedData({ ...parsedData, projects: newProj });
                                                            }}
                                                            className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:ring-2 focus:ring-violet-500"
                                                            placeholder="https://github.com/user/project"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Social Links */}
                                    <div>
                                        <h3 className="font-semibold text-white mb-3">Social Links</h3>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs font-medium text-white/60 mb-1">GitHub</label>
                                                <input
                                                    type="url"
                                                    value={parsedData.links?.github || ''}
                                                    onChange={(e) => setParsedData({ ...parsedData, links: { ...parsedData.links, github: e.target.value } })}
                                                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:ring-2 focus:ring-violet-500"
                                                    placeholder="https://github.com/username"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-medium text-white/60 mb-1">LinkedIn</label>
                                                <input
                                                    type="url"
                                                    value={parsedData.links?.linkedin || ''}
                                                    onChange={(e) => setParsedData({ ...parsedData, links: { ...parsedData.links, linkedin: e.target.value } })}
                                                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:ring-2 focus:ring-violet-500"
                                                    placeholder="https://linkedin.com/in/username"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-medium text-white/60 mb-1">Twitter / X</label>
                                                <input
                                                    type="url"
                                                    value={parsedData.links?.twitter || ''}
                                                    onChange={(e) => setParsedData({ ...parsedData, links: { ...parsedData.links, twitter: e.target.value } })}
                                                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:ring-2 focus:ring-violet-500"
                                                    placeholder="https://twitter.com/username"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-medium text-white/60 mb-1">Personal Website</label>
                                                <input
                                                    type="url"
                                                    value={parsedData.links?.website || ''}
                                                    onChange={(e) => setParsedData({ ...parsedData, links: { ...parsedData.links, website: e.target.value } })}
                                                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:ring-2 focus:ring-violet-500"
                                                    placeholder="https://yourwebsite.com"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-4 mt-8">
                                    <button
                                        onClick={() => setCurrentStep(1)}
                                        className="flex-1 border-2 border-gray-300 text-gray-700 font-semibold py-4 rounded-xl hover:bg-gray-50 transition-colors"
                                    >
                                        Back
                                    </button>
                                    <button
                                        onClick={() => setCurrentStep(3)}
                                        className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 rounded-xl transition-colors flex items-center justify-center space-x-2"
                                    >
                                        <span>Continue</span>
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {currentStep === 3 && parsedData && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="bg-white rounded-2xl shadow-xl p-12"
                            >
                                <div className="text-center mb-8">
                                    <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Sparkles className="w-10 h-10 text-purple-600" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Generate Your Portfolio</h2>
                                    <p className="text-gray-600">We'll create a beautiful portfolio website with your information</p>
                                </div>

                                <div className="max-w-md mx-auto">
                                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-6 mb-8">
                                        <h3 className="font-semibold text-gray-900 mb-4">What's included:</h3>
                                        <ul className="space-y-2 text-sm text-gray-700">
                                            <li className="flex items-start">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                                <span>Fully customized portfolio with your data</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                                <span>Live preview to see your site</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                                <span>Saved to your dashboard</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                                <span>Ready to deploy</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="flex gap-4">
                                        <button
                                            onClick={() => setCurrentStep(2)}
                                            disabled={generating}
                                            className="flex-1 border-2 border-gray-300 text-gray-700 font-semibold py-4 rounded-xl hover:bg-gray-50 transition-colors disabled:opacity-50"
                                        >
                                            Back
                                        </button>
                                        <button
                                            onClick={handleGenerate}
                                            disabled={generating}
                                            className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-4 rounded-xl transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                                        >
                                            {generating ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    <span>Generating...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Sparkles className="w-5 h-5" />
                                                    <span>Generate Portfolio</span>
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {currentStep === 4 && generatedSite && (
                            <motion.div
                                key="step4"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-white rounded-2xl shadow-xl p-12 text-center"
                            >
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">Portfolio Generated!</h2>
                                <p className="text-gray-600 mb-8">Your portfolio is ready to view</p>

                                <div className="flex gap-4 max-w-lg mx-auto mb-8">
                                    <Link
                                        href={`/templates/${templateId}?siteId=${generatedSite.id}`}
                                        target="_blank"
                                        className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-4 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all flex items-center justify-center space-x-2"
                                    >
                                        <Eye className="w-5 h-5" />
                                        <span>View Portfolio</span>
                                    </Link>
                                    <a
                                        href={`/api/export-portfolio?siteId=${generatedSite.id}`}
                                        download
                                        className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-xl transition-all flex items-center justify-center space-x-2"
                                    >
                                        <Download className="w-5 h-5" />
                                        <span>Download ZIP</span>
                                    </a>
                                </div>

                                <div className="flex gap-4 justify-center">
                                    <Link
                                        href="/dashboard"
                                        className="text-indigo-600 hover:text-indigo-700 font-medium hover:underline"
                                    >
                                        Go to Dashboard
                                    </Link>
                                    <span className="text-gray-300">•</span>
                                    <Link
                                        href="/templates"
                                        className="text-indigo-600 hover:text-indigo-700 font-medium hover:underline"
                                    >
                                        Create Another
                                    </Link>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

// Wrap in Suspense for useSearchParams
export default function BuilderPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-[#09090b] flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-500 border-t-transparent" />
            </div>
        }>
            <BuilderContent />
        </Suspense>
    );
}
