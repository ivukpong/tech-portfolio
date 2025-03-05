// types/resume.ts
export interface ResumeData {
    main: {
        name: string;
        description: string;
        image: string;
        bio: string;
        phone: string;
        email: string;
        github: string;
        project: string;
        website: string;
        social: SocialLink[];
    };
    resume: {
        education: Education[];
        work: Experience[];
        skills: SkillCategory[];
    };
    portfolio: {
        projects: Project[];
    };
}

export interface SocialLink {
    name: string;
    url: string;
    className: string;
}

export interface Education {
    school: string;
    degree: string;
    graduated: string;
    description: string;
}

export interface Experience {
    company: string;
    title: string;
    years: string;
    description: string;
}

export interface SkillCategory {
    name: string;
    level: string;
    details: Skill[];
}

export interface Skill {
    name: string;
    level: string;
}

export interface Project {
    title: string;
    category: string;
    image: string;
    url: string;
}