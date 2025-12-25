'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code, Layers, Layout, Zap } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Iso Dev",
    role: "Creative Developer",
    email: "dev@iso.build",
    phone: "+1 555 000 0000",
    location: "3D Space",
    bio: "I'm a creative developer who sees the web as a canvas for immersive experiences.",
    skills: ["React", "Next.js", "TypeScript", "Node.js", "Three.js", "WebGL", "Tailwind", "Framer Motion", "Git"],
    experience: [{ company: "3D Corp", position: "Lead Dev", startDate: "2020", endDate: "Present", description: "Building", highlights: [] }],
    education: [
        { school: "Tech University", degree: "Master of Computer Science", field: "CS", startDate: "2022", endDate: "2024" },
        { school: "State College", degree: "Bachelor of Engineering", field: "Engineering", startDate: "2018", endDate: "2022" }
    ],
    projects: [
        { name: "Project 1", description: "3D Visualization", technologies: ["React", "Next.js", "WebGL"] },
        { name: "Project 2", description: "Interactive Experience", technologies: ["Three.js", "TypeScript"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

export default function Isometric3DPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;
    return (
        <div className="min-h-screen bg-[#f0f2f5] text-slate-800 font-sans overflow-x-hidden">
            {/* Background Grid */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2 font-bold text-xl text-indigo-600">
                        <Layers className="w-6 h-6" />
                        <span>ISO.BUILD</span>
                    </div>
                    <div className="flex gap-8 font-medium text-slate-600">
                        {['Work', 'Skills', 'Education', 'About'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-indigo-600 transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>
                    <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-bold shadow-[0_4px_0_rgb(67,56,202)] hover:shadow-[0_2px_0_rgb(67,56,202)] hover:translate-y-[2px] transition-all active:shadow-none active:translate-y-[4px]">
                        Let's Talk
                    </button>
                </div>
            </nav>
            {/* Work Section */}
            <section id="work" className="py-32 px-6 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-end mb-20">
                        <h2 className="text-4xl font-black">Selected Projects</h2>
                        <button className="text-indigo-400 font-bold hover:text-white transition-colors flex items-center gap-2">
                            View All <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {[1, 2].map((item) => (
                            <motion.div
                                key={item}
                                whileHover={{ scale: 1.02 }}
                                className="group cursor-pointer"
                            >
                                <div className="aspect-[16/10] bg-slate-800 rounded-3xl overflow-hidden mb-6 relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 group-hover:opacity-0 transition-opacity" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-32 h-32 bg-slate-700/50 rounded-full blur-3xl" />
                                    </div>
                                </div>
                                <h3 className="text-3xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">Project Name {item}</h3>
                                <p className="text-slate-400">React • Next.js • WebGL</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-32 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-16">
                        <div className="md:w-1/3">
                            <h2 className="text-4xl font-black mb-6 text-slate-900">Technical<br />Arsenal</h2>
                            <p className="text-slate-600 leading-relaxed">
                                A curated collection of tools and technologies I use to build digital products.
                                Always exploring new dimensions of development.
                            </p>
                        </div>
                        <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-6">
                            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Three.js', 'WebGL', 'Tailwind', 'Framer', 'Git'].map((skill) => (
                                <div key={skill} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-indigo-600 hover:shadow-[0_8px_0_rgb(67,56,202)] hover:-translate-y-1 transition-all cursor-default group">
                                    <Code className="w-8 h-8 text-indigo-600 mb-4 group-hover:scale-110 transition-transform" />
                                    <h3 className="font-bold text-slate-800">{skill}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section id="education" className="py-32 px-6 bg-[#f0f2f5]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-black mb-16 text-slate-900 text-center">Education Log</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { degree: 'Master of Computer Science', school: 'Tech University', year: '2022-2024' },
                            { degree: 'Bachelor of Engineering', school: 'State College', year: '2018-2022' }
                        ].map((edu, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full -mr-8 -mt-8" />
                                <div className="relative z-10">
                                    <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg font-bold text-sm mb-6">
                                        {edu.year}
                                    </span>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{edu.degree}</h3>
                                    <p className="text-slate-600 font-medium">{edu.school}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-32 px-6 bg-white border-t border-slate-200">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-block p-4 bg-indigo-50 rounded-2xl mb-8">
                        <Layout className="w-12 h-12 text-indigo-600" />
                    </div>
                    <h2 className="text-5xl font-black mb-8 text-slate-900">Building in 3D</h2>
                    <p className="text-xl text-slate-600 leading-relaxed mb-12">
                        I'm a creative developer who sees the web as a canvas for immersive experiences.
                        Combining technical precision with artistic vision to create products that stand out.
                    </p>
                    <div className="grid grid-cols-3 gap-8 text-left">
                        {[
                            { label: "Experience", value: "5+ Years" },
                            { label: "Projects", value: "100+" },
                            { label: "Clients", value: "50+" }
                        ].map((stat, i) => (
                            <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                <div className="text-3xl font-black text-indigo-600 mb-2">{stat.value}</div>
                                <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
