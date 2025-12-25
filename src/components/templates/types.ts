export interface PortfolioData {
    // Personal Information
    name: string;
    role: string;
    email: string;
    phone: string;
    location?: string;
    bio: string;

    // Skills
    skills: string[];

    // Experience
    experience: Experience[];

    // Education
    education: Education[];

    // Projects
    projects: Project[];

    // Certifications (optional)
    certifications?: Certification[];

    // Links
    links: SocialLinks;
}

export interface Experience {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
    highlights: string[];
}

export interface Education {
    school: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
}

export interface Project {
    name: string;
    description: string;
    technologies: string[];
    url?: string;
    github?: string;
    image?: string;
}

export interface Certification {
    name: string;
    issuer: string;
    date: string;
}

export interface SocialLinks {
    website?: string;
    github?: string;
    linkedin?: string;
    twitter?: string;
    portfolio?: string;
}

export interface TemplateConfig {
    id: string;
    name: string;
    description: string;
    role: string;
    previewImage: string;
    techStack: string[];
    features: string[];
}
