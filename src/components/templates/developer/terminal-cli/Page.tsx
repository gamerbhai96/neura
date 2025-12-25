'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Cpu, Shield, Wifi } from 'lucide-react';
import { PortfolioData } from '../../types';

// Mock data for development/preview
const mockData: PortfolioData = {
    name: "Terminal Dev",
    role: "Full Stack Engineer",
    email: "dev@terminal.local",
    phone: "+1 (555) 000-0000",
    location: "Cyberspace",
    bio: "Building robust, scalable systems with clean code.",
    skills: ["TypeScript", "Rust", "Go", "Python", "React", "Next.js", "Docker", "Kubernetes"],
    experience: [
        {
            company: "Tech Corp",
            position: "Senior Developer",
            startDate: "2020",
            endDate: "Present",
            description: "Leading backend development team.",
            highlights: ["Improved system performance by 40%"]
        }
    ],
    education: [
        {
            school: "Tech University",
            degree: "Master of Computer Science",
            field: "Computer Science",
            startDate: "2016",
            endDate: "2018"
        }
    ],
    projects: [
        {
            name: "Neural Network Visualizer",
            description: "Interactive visualization of neural networks",
            technologies: ["React", "Python", "TensorFlow"]
        },
        {
            name: "Blockchain Explorer",
            description: "Real-time blockchain transaction explorer",
            technologies: ["Next.js", "Solidity", "Web3"]
        }
    ],
    links: {
        github: "https://github.com/terminal-dev",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com"
    }
};

export default function TerminalCLIPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    const [command, setCommand] = useState('');
    const [history, setHistory] = useState<string[]>([
        `Welcome to ${displayData.name}'s Portfolio v1.0.0`,
        'Type "help" for available commands.',
        ' '
    ]);
    const inputRef = useRef<HTMLInputElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        const cmd = command.trim().toLowerCase();
        const newHistory = [...history, `> ${command}`];

        switch (cmd) {
            case 'help':
                newHistory.push(
                    'Available commands:',
                    '  about     - Display user information',
                    '  projects  - List current projects',
                    '  skills    - Show technical skills',
                    '  education - Show educational background',
                    '  experience - Show work experience',
                    '  contact   - Display contact info',
                    '  links     - Show social links',
                    '  clear     - Clear terminal',
                    ' '
                );
                break;
            case 'about':
                newHistory.push(
                    `User: ${displayData.name}`,
                    `Role: ${displayData.role}`,
                    `Location: ${displayData.location || 'Not specified'}`,
                    `Bio: ${displayData.bio}`,
                    ' '
                );
                break;
            case 'projects':
                newHistory.push('Loading projects...');
                if (displayData.projects && displayData.projects.length > 0) {
                    displayData.projects.forEach((project, i) => {
                        const techs = project.technologies?.join(', ') || 'N/A';
                        newHistory.push(`${i + 1}. ${project.name} [${techs}]`);
                        if (project.description) {
                            newHistory.push(`   ${project.description}`);
                        }
                    });
                } else {
                    newHistory.push('No projects found.');
                }
                newHistory.push(' ');
                break;
            case 'skills':
                if (displayData.skills && displayData.skills.length > 0) {
                    newHistory.push(`Skills: ${displayData.skills.join(', ')}`);
                } else {
                    newHistory.push('No skills listed.');
                }
                newHistory.push(' ');
                break;
            case 'education':
                newHistory.push('Education:');
                if (displayData.education && displayData.education.length > 0) {
                    displayData.education.forEach((edu) => {
                        const dateRange = edu.startDate && edu.endDate ? ` (${edu.startDate}-${edu.endDate})` : '';
                        newHistory.push(`  ${edu.degree} - ${edu.school}${dateRange}`);
                        if (edu.field) newHistory.push(`    Field: ${edu.field}`);
                    });
                } else {
                    newHistory.push('  No education history found.');
                }
                newHistory.push(' ');
                break;
            case 'experience':
                newHistory.push('Work Experience:');
                if (displayData.experience && displayData.experience.length > 0) {
                    displayData.experience.forEach((exp) => {
                        const dateRange = exp.startDate && exp.endDate ? ` (${exp.startDate}-${exp.endDate})` : '';
                        newHistory.push(`  ${exp.position} @ ${exp.company}${dateRange}`);
                        if (exp.description) newHistory.push(`    ${exp.description}`);
                    });
                } else {
                    newHistory.push('  No experience found.');
                }
                newHistory.push(' ');
                break;
            case 'contact':
                newHistory.push(
                    `Email: ${displayData.email || 'Not provided'}`,
                    `Phone: ${displayData.phone || 'Not provided'}`,
                    ' '
                );
                break;
            case 'links':
                newHistory.push('Social Links:');
                if (displayData.links?.github) newHistory.push(`  GitHub: ${displayData.links.github}`);
                if (displayData.links?.linkedin) newHistory.push(`  LinkedIn: ${displayData.links.linkedin}`);
                if (displayData.links?.twitter) newHistory.push(`  Twitter: ${displayData.links.twitter}`);
                if (displayData.links?.website) newHistory.push(`  Website: ${displayData.links.website}`);
                if (displayData.links?.portfolio) newHistory.push(`  Portfolio: ${displayData.links.portfolio}`);
                newHistory.push(' ');
                break;
            case 'clear':
                setHistory([]);
                setCommand('');
                return;
            default:
                newHistory.push(`Command not found: ${cmd}. Type "help" for assistance.`, ' ');
        }

        setHistory(newHistory);
        setCommand('');
    };

    return (
        <div className="min-h-screen bg-black text-green-500 font-mono p-4 md:p-8 selection:bg-green-500 selection:text-black">
            <div className="max-w-4xl mx-auto border border-green-500/30 rounded-lg bg-black/90 shadow-[0_0_50px_rgba(34,197,94,0.1)] min-h-[80vh] flex flex-col relative overflow-hidden">
                {/* CRT Scanline Effect */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 pointer-events-none bg-[length:100%_4px,3px_100%]" />

                {/* Header */}
                <div className="flex items-center justify-between px-4 py-2 border-b border-green-500/30 bg-green-500/5">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="text-xs opacity-50">{displayData.name?.toLowerCase().replace(/\s+/g, '')}@portfolio:~</div>
                </div>

                {/* Terminal Content */}
                <div className="flex-1 p-6 overflow-y-auto font-bold text-sm md:text-base relative z-0" onClick={() => inputRef.current?.focus()}>
                    {history.map((line, i) => (
                        <div key={i} className="mb-1 whitespace-pre-wrap">{line}</div>
                    ))}

                    <form onSubmit={handleCommand} className="flex items-center gap-2 mt-2">
                        <span className="text-green-500">{'>'}</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={command}
                            onChange={(e) => setCommand(e.target.value)}
                            className="flex-1 bg-transparent border-none outline-none text-green-500 font-bold caret-green-500"
                            autoFocus
                        />
                    </form>
                    <div ref={bottomRef} />
                </div>

                {/* Status Bar */}
                <div className="border-t border-green-500/30 bg-green-500/10 px-4 py-2 flex justify-between text-xs uppercase tracking-wider">
                    <div className="flex gap-4">
                        <span className="flex items-center gap-1"><Terminal className="w-3 h-3" /> BASH</span>
                        <span className="flex items-center gap-1"><Cpu className="w-3 h-3" /> CPU: 12%</span>
                        <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> SECURE</span>
                    </div>
                    <div className="flex items-center gap-1 animate-pulse">
                        <Wifi className="w-3 h-3" /> ONLINE
                    </div>
                </div>
            </div>
        </div>
    );
}

