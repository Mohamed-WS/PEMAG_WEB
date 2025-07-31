// Client-side type definitions (independent of server schema)

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface BlogPost {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  createdAt: Date;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  completedCount: number;
  icon: string;
}