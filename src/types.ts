/**
 * Kisan4U Type Definitions
 */

export interface NavItem {
  id: string;
  label: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
  isAdvisor?: boolean;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Smart Farming' | 'Agri Technology' | 'Market Insights' | 'Government Schemes' | 'Success Stories' | 'Crop Discovery' | 'Agronomy Basics' | 'Regenerative Agriculture' | 'Best Practices';
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    role: string;
  };
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  crop: string;
  quote: string;
  yieldIncrease?: string;
  incomeIncrease?: string;
  rating: number;
  image: string;
  category: 'dealer' | 'farmer' | 'seller';
}

export interface AwardItem {
  id: string;
  year: string;
  title: string;
  issuer: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Drone Shots' | 'Field Visits' | 'Farmer Events' | 'Training Programs';
  image: string;
  description: string;
}
