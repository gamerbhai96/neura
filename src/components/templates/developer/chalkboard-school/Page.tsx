'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, PenTool, BookOpen, Lightbulb } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Professor Dev",
    role: "Software Engineer",
    email: "teacher@chalk.io",
    phone: "+1 555 000 0000",
    location: "Cambridge, MA",
    bio: "Teaching machines to learn, one line of code at a time. Education meets innovation.",
    skills: ["Python", "TensorFlow", "PyTorch", "React", "Node.js", "SQL", "Docker", "AWS"],
    experience: [{ company: "Academia Tech", position: "Senior Engineer", startDate: "2018", endDate: "Present", description: "Building educational platforms", highlights: [] }],
    education: [
        { school: "MIT", degree: "PhD Computer Science", field: "Machine Learning", startDate: "2014", endDate: "2018" }
    ],
    projects: [
        { name: "LearnCode", description: "Interactive coding education platform", technologies: ["React", "Python"] },
        { name: "QuizMaster", description: "AI-powered assessment tool", technologies: ["TensorFlow", "FastAPI"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

export default function ChalkboardSchoolPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    return (
        <div className="min-h-screen bg-green-950 text-green-50 font-mono overflow-hidden" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`
        }}>
            {/* Chalk dust particles */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`
                        }}
                        animate={{
                            y: [0, 100, 0],
                            opacity: [0, 0.5, 0]
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            delay: Math.random() * 5
                        }}
                    />
                ))}
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-green-950/90 backdrop-blur-md border-b-4 border-amber-800">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-xl font-bold flex items-center gap-2 text-green-100">
                        <BookOpen className="w-6 h-6 text-yellow-200" />
                        CHALKBOARD
                    </div>
                    <div className="flex gap-8 text-sm font-bold text-green-200">
                        {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-yellow-200 transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
                <div className="text-center max-w-4xl mx-auto relative z-10">
                    {/* Chalk drawing decorations */}
                    <motion.div
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        className="absolute -top-20 -left-20 opacity-20"
                    >
                        <svg width="100" height="100" viewBox="0 0 100 100">
                            <motion.path
                                d="M10,50 Q50,10 90,50 Q50,90 10,50"
                                fill="none"
                                stroke="#fef3c7"
                                strokeWidth="2"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2 }}
                            />
                        </svg>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 border-2 border-dashed border-yellow-200/50 text-yellow-200 text-sm mb-8"
                    >
                        <Lightbulb className="w-4 h-4" />
                        {displayData.role}
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold mb-8"
                        style={{
                            fontFamily: 'Caveat, cursive',
                            textShadow: '2px 2px 0 rgba(0,0,0,0.3)'
                        }}
                    >
                        {displayData.name}
                    </motion.h1>

                    {/* Math decorations */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.3 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-yellow-100/50 mb-4"
                    >
                        f(x) = ∫ creativity + code dx
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-green-200 max-w-2xl mx-auto leading-relaxed mb-8"
                        style={{ fontFamily: 'Caveat, cursive', fontSize: '1.5rem' }}
                    >
                        {displayData.bio}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex justify-center gap-4"
                    >
                        <button className="px-8 py-3 bg-yellow-200 text-green-950 font-bold rounded hover:bg-yellow-100 transition-colors">
                            View Lessons
                        </button>
                        <button className="px-8 py-3 bg-transparent text-yellow-200 border-2 border-yellow-200 font-bold rounded hover:bg-yellow-200/10 transition-colors">
                            Office Hours
                        </button>
                    </motion.div>

                    {/* Doodles */}
                    <div className="absolute -right-10 top-1/4 text-4xl opacity-30">✨</div>
                    <div className="absolute -left-10 bottom-1/4 text-5xl opacity-30">📚</div>
                </div>
            </section>

            {/* About */}
            <section id="about" className="py-32 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="border-4 border-dashed border-green-700 p-12 rounded-lg relative"
                    >
                        {/* Corner pin decorations */}
                        <div className="absolute -top-3 -left-3 w-6 h-6 bg-red-400 rounded-full shadow" />
                        <div className="absolute -top-3 -right-3 w-6 h-6 bg-yellow-300 rounded-full shadow" />
                        <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-blue-400 rounded-full shadow" />
                        <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-green-400 rounded-full shadow" />

                        <h2 className="text-4xl font-bold text-center mb-8 text-yellow-200" style={{ fontFamily: 'Caveat, cursive' }}>
                            About the Teacher
                        </h2>
                        <p className="text-lg text-green-200 leading-relaxed text-center" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.4rem' }}>
                            The best code is written like the best lessons—clear, purposeful, and inspiring.
                            I approach every project as an opportunity to teach machines new tricks while
                            learning something new myself. Currently based in {displayData.location}.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Skills */}
            <section id="skills" className="py-32 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center mb-16 text-yellow-200"
                        style={{ fontFamily: 'Caveat, cursive' }}
                    >
                        Syllabus 📝
                    </motion.h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {displayData.skills.map((skill, i) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="bg-green-900/50 border-2 border-dashed border-green-700 p-6 text-center hover:border-yellow-200/50 transition-colors"
                            >
                                <PenTool className="w-6 h-6 text-yellow-200 mx-auto mb-3" />
                                <span className="text-green-100" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.2rem' }}>{skill}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="py-32 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center mb-16 text-yellow-200"
                        style={{ fontFamily: 'Caveat, cursive' }}
                    >
                        Homework Assignments 📖
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`group bg-green-900/30 border-4 border-dashed border-green-700 overflow-hidden hover:border-yellow-200/50 transition-all ${project.url || project.github ? 'cursor-pointer' : ''}`}
                                onClick={() => {
                                    const url = project.url || project.github;
                                    if (url) window.open(url, '_blank', 'noopener,noreferrer');
                                }}
                            >
                                <div className="aspect-video bg-green-900/50 flex items-center justify-center relative">
                                    <span className="text-6xl opacity-30">📝</span>
                                    {/* Grade stamp */}
                                    <div className="absolute top-4 right-4 w-16 h-16 border-4 border-red-400 rounded-full flex items-center justify-center text-red-400 font-bold text-2xl transform rotate-12">
                                        A+
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold mb-3 text-green-100 group-hover:text-yellow-200 transition-colors" style={{ fontFamily: 'Caveat, cursive' }}>
                                        {project.name}
                                    </h3>
                                    <p className="text-green-300 mb-4" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.1rem' }}>{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies?.map((tech) => (
                                            <span key={tech} className="px-3 py-1 border border-green-600 text-green-300 text-sm rounded">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience */}
            <section className="py-32 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center mb-16 text-yellow-200"
                        style={{ fontFamily: 'Caveat, cursive' }}
                    >
                        Teaching History 🎓
                    </motion.h2>
                    <div className="space-y-6">
                        {displayData.experience.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="border-l-4 border-yellow-200 pl-8 py-4"
                            >
                                <div className="flex justify-between items-start flex-wrap gap-4 mb-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-green-100" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.5rem' }}>{exp.position}</h3>
                                        <p className="text-yellow-200">{exp.company}</p>
                                    </div>
                                    <span className="text-sm text-green-400">{exp.startDate} - {exp.endDate}</span>
                                </div>
                                <p className="text-green-300" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.1rem' }}>{exp.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education */}
            <section className="py-32 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center mb-16 text-yellow-200"
                        style={{ fontFamily: 'Caveat, cursive' }}
                    >
                        Degrees 🎓
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {displayData.education.map((edu, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-green-900/30 border-2 border-dashed border-green-700 p-6"
                            >
                                <h3 className="text-lg font-bold text-green-100 mb-1" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.3rem' }}>{edu.degree}</h3>
                                <p className="text-yellow-200 mb-2">{edu.school}</p>
                                <p className="text-sm text-green-400">{edu.startDate} - {edu.endDate}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-32 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <BookOpen className="w-16 h-16 text-yellow-200 mx-auto mb-6" />
                        <h2 className="text-5xl font-bold mb-8 text-yellow-200" style={{ fontFamily: 'Caveat, cursive' }}>
                            Office Hours
                        </h2>
                        <p className="text-xl text-green-200 mb-12" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.5rem' }}>
                            Ready to learn together? Raise your hand! ✋
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex justify-center gap-6"
                    >
                        {[
                            { icon: Mail, href: `mailto:${displayData.email}` },
                            { icon: Github, href: displayData.links.github },
                            { icon: Linkedin, href: displayData.links.linkedin }
                        ].map(({ icon: Icon, href }, i) => (
                            <a
                                key={i}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 bg-yellow-200 text-green-950 rounded hover:bg-yellow-100 transition-colors"
                            >
                                <Icon className="w-6 h-6" />
                            </a>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
