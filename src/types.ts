export type Language = 'fa' | 'en';

export type ProjectCategory = 'all' | 'web-app' | 'ecommerce' | 'ui-ux' | 'business';

export interface Project {
  id: string;
  slug: string;
  title: {
    fa: string;
    en: string;
  };
  subtitle: {
    fa: string;
    en: string;
  };
  category: 'web-app' | 'ecommerce' | 'ui-ux' | 'business';
  categoryLabel: {
    fa: string;
    en: string;
  };
  year: string;
  featured: boolean;
  technologies: string[];
  description: {
    fa: string;
    en: string;
  };
  overview: {
    fa: string;
    en: string;
  };
  problem: {
    fa: string;
    en: string;
  };
  solution: {
    fa: string;
    en: string;
  };
  role: {
    fa: string;
    en: string;
  };
  features: {
    fa: string[];
    en: string[];
  };
  results: {
    metric: string;
    label: {
      fa: string;
      en: string;
    };
  }[];
  liveUrl?: string;
  githubUrl?: string;
  accentColor: string;
  bgGradient: string;
  mockup: {
    type: 'car-platform' | 'coffee-shop' | 'creative-studio' | 'kanban-app' | 'telehealth' | 'minimal-blog';
    badge: string;
  };
}

export interface Service {
  id: string;
  iconName: string;
  title: {
    fa: string;
    en: string;
  };
  description: {
    fa: string;
    en: string;
  };
  deliverables: {
    fa: string[];
    en: string[];
  };
  color: string;
  lightBg: string;
}

export interface SkillItem {
  name: string;
  category: 'frontend' | 'backend' | 'design' | 'tools';
  level: string;
  icon: string;
  description: {
    fa: string;
    en: string;
  };
  highlight?: boolean;
}

export interface ProcessStep {
  step: string;
  title: {
    fa: string;
    en: string;
  };
  subtitle: {
    fa: string;
    en: string;
  };
  description: {
    fa: string;
    en: string;
  };
  icon: string;
  accent: string;
}

export interface Testimonial {
  id: string;
  quote: {
    fa: string;
    en: string;
  };
  author: {
    fa: string;
    en: string;
  };
  role: {
    fa: string;
    en: string;
  };
  company: string;
  avatarColor: string;
  rating: number;
}
