'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code2, Zap } from 'lucide-react';
import type { PortfolioData } from '../../types';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

interface CyberpunkNeonPageProps {
  data: PortfolioData;
}

export default function CyberpunkNeonPage({ data }: CyberpunkNeonPageProps) {
  const defaultData: PortfolioData = {
    name: "Alex Cyber",
    role: "Full Stack Developer",
    email: "alex@example.com",
    phone: "+1 234 567 890",
    bio: "Building the future of the web with neon-infused code.",
    skills: ["React", "Three.js", "Next.js", "TypeScript", "Node.js", "WebGL"],
    experience: [
      {
        position: "Senior Developer",
        company: "CyberCorp",
        startDate: "2023",
        endDate: "Present",
        description: "Leading the frontend team in building immersive 3D experiences.",
        highlights: ["Built 3D engine", "Reduced load time by 50%"]
      },
      {
        position: "Web Developer",
        company: "FutureTech",
        startDate: "2021",
        endDate: "2023",
        description: "Developed high-performance web applications using modern stacks.",
        highlights: ["Implemented CI/CD", "Mentored juniors"]
      }
    ],
    education: [
      {
        school: "Tech University",
        degree: "BS Computer Science",
        field: "Computer Science",
        startDate: "2017",
        endDate: "2021"
      }
    ],
    projects: [
      { name: "Neon Dashboard", description: "A futuristic dashboard for managing cyber assets.", technologies: ["React", "D3.js"] },
      { name: "Virtual City", description: "Procedural city generation in the browser.", technologies: ["Three.js", "WebGL"] }
    ],
    links: { github: "github.com", linkedin: "linkedin.com" }
  };

  // Merge user data with defaults - user data takes priority if it exists and is not empty
  const displayData: PortfolioData = {
    name: data?.name || defaultData.name,
    role: data?.role || defaultData.role,
    email: data?.email || defaultData.email,
    phone: data?.phone || defaultData.phone,
    bio: data?.bio || defaultData.bio,
    skills: data?.skills?.length > 0 ? data.skills : defaultData.skills,
    experience: data?.experience?.length > 0 ? data.experience : defaultData.experience,
    education: data?.education?.length > 0 ? data.education : defaultData.education,
    projects: data?.projects?.length > 0 ? data.projects : defaultData.projects,
    links: {
      github: data?.links?.github || defaultData.links?.github,
      linkedin: data?.links?.linkedin || defaultData.links?.linkedin,
      twitter: data?.links?.twitter || '',
      website: data?.links?.website || '',
      portfolio: data?.links?.portfolio || ''
    }
  };

  // Debug log
  console.log('🎭 CyberpunkNeon Template - Received data:', data ? 'YES' : 'NO');
  console.log('🎭 CyberpunkNeon Template - Display data:', {
    name: displayData.name,
    role: displayData.role,
    skills: displayData.skills?.length,
    isDefaultName: displayData.name === defaultData.name
  });

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono overflow-x-hidden">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 157, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 157, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite',
          }}
        />
      </div>

      {/* Scanline Effect */}
      <div className="fixed inset-0 pointer-events-none opacity-10"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 157, 0.2) 2px, rgba(0, 255, 157, 0.2) 4px)',
          animation: 'scanline 8s linear infinite',
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-green-500/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <Code2 className="w-6 h-6 text-green-400" />
              <span className="text-xl font-bold text-green-400 glitch" data-text={displayData.name || 'Developer'}>
                {displayData.name || 'Developer'}
              </span>
            </motion.div>
            <div className="flex items-center space-x-6">
              {displayData.links?.github && (
                <a
                  href={displayData.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {displayData.links?.linkedin && (
                <a
                  href={displayData.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {displayData.email && (
                <a
                  href={`mailto:${displayData.email}`}
                  className="hover:text-pink-500 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-20">
        <Hero data={displayData} />
        <About data={displayData} />
        <Skills data={displayData} />
        <Projects data={displayData} />
        <Experience data={displayData} />
        <Education data={displayData} />
        <Contact data={displayData} />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-green-500/30 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <p className="text-green-500/70">
              © {new Date().getFullYear()} {displayData.name}. Built with Next.js & Cyberpunk Aesthetics.
            </p>
          </div>
        </div>
      </footer>

      {/* Styles for custom animations */}
      <style jsx global>{`
        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        @keyframes scanline {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }

        .glitch {
          position: relative;
        }

        .glitch:before,
        .glitch:after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .glitch:before {
          left: 2px;
          text-shadow: -2px 0 #ff00de;
          clip: rect(24px, 550px, 90px, 0);
          animation: glitch-anim 3s infinite linear alternate-reverse;
        }

        .glitch:after {
          left: -2px;
          text-shadow: -2px 0 #00fff9;
          clip: rect(85px, 550px, 140px, 0);
          animation: glitch-anim 2s infinite linear alternate-reverse;
        }

        @keyframes glitch-anim {
          0% {
            clip: rect(61px, 9999px, 50px, 0);
          }
          20% {
            clip: rect(97px, 9999px, 30px, 0);
          }
          40% {
            clip: rect(20px, 9999px, 90px, 0);
          }
          60% {
            clip: rect(55px, 9999px, 75px, 0);
          }
          80% {
            clip: rect(35px, 9999px, 10px, 0);
          }
          100% {
            clip: rect(80px, 9999px, 40px, 0);
          }
        }

        .neon-text {
          text-shadow: 0 0 10px #00ff9d, 0 0 20px #00ff9d, 0 0 30px #00ff9d;
        }

        .neon-border {
          box-shadow: 0 0 5px #00ff9d, 0 0 10px #00ff9d, inset 0 0 5px #00ff9d;
        }
      `}</style>
    </div>
  );
}
