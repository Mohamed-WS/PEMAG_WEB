import type { Service, BlogPost, Testimonial, Project } from "@shared/schema";

export const staticServices: Service[] = [
  {
    id: 1,
    title: "Oil & Gas Engineering",
    description: "Comprehensive training programs covering upstream, midstream, and downstream operations in the oil and gas industry.",
    icon: "oil-well",
    features: [
      "Reservoir Engineering",
      "Drilling Operations",
      "Production Optimization",
      "Safety Protocols",
      "Environmental Compliance"
    ]
  },
  {
    id: 2,
    title: "Environmental Engineering",
    description: "Sustainable engineering solutions focusing on environmental protection and resource management.",
    icon: "leaf",
    features: [
      "Environmental Impact Assessment",
      "Water Treatment Systems",
      "Air Quality Management",
      "Waste Management",
      "Renewable Energy Systems"
    ]
  },
  {
    id: 3,
    title: "Process Engineering",
    description: "Advanced process design and optimization for industrial applications and manufacturing.",
    icon: "recycle",
    features: [
      "Process Design",
      "Equipment Selection",
      "Process Optimization",
      "Quality Control",
      "Cost Analysis"
    ]
  },
  {
    id: 4,
    title: "Project Management",
    description: "Professional project management training for engineering projects and industrial operations.",
    icon: "users",
    features: [
      "Project Planning",
      "Risk Management",
      "Team Leadership",
      "Budget Control",
      "Quality Assurance"
    ]
  },
  {
    id: 5,
    title: "Digital Engineering",
    description: "Modern digital tools and technologies for engineering design and analysis.",
    icon: "monitor",
    features: [
      "CAD/CAM Systems",
      "Simulation Software",
      "Data Analytics",
      "Digital Twin Technology",
      "Automation Systems"
    ]
  },
  {
    id: 6,
    title: "Innovation & R&D",
    description: "Research and development methodologies for engineering innovation and technology advancement.",
    icon: "lightbulb",
    features: [
      "Research Methodologies",
      "Innovation Management",
      "Technology Transfer",
      "Patent Development",
      "Commercialization"
    ]
  }
];

export const staticProjects: Project[] = [
  {
    id: 1,
    title: "Oil & Gas Projects",
    description: "Successfully completed training programs for major oil and gas companies",
    completedCount: 150,
    icon: "oil-well"
  },
  {
    id: 2,
    title: "Environmental Projects",
    description: "Environmental engineering training and consulting projects",
    completedCount: 85,
    icon: "leaf"
  },
  {
    id: 3,
    title: "Industrial Training",
    description: "Comprehensive industrial engineering training programs",
    completedCount: 200,
    icon: "users"
  },
  {
    id: 4,
    title: "Digital Solutions",
    description: "Digital transformation and engineering software training",
    completedCount: 120,
    icon: "monitor"
  }
];

export const staticTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ahmed Hassan",
    role: "Senior Engineer, SNIM",
    content: "PEMAG's training programs have significantly enhanced our team's capabilities in mining operations. The practical approach and expert instructors made all the difference.",
    image: "/logos/snim.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Fatima Al-Rashid",
    role: "Project Manager, Ministry of Energy",
    content: "The project management training provided by PEMAG was exceptional. It equipped our staff with modern methodologies and best practices.",
    image: "/logos/ministry-energy-petroleum.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Omar Benali",
    role: "Environmental Specialist, SMH",
    content: "PEMAG's environmental engineering courses are comprehensive and up-to-date with international standards. Highly recommended for professional development.",
    image: "/logos/smh.jpg",
    rating: 5
  },
  {
    id: 4,
    name: "Mariam Ould Ahmed",
    role: "Safety Manager, British Safety Services",
    content: "The safety training programs offered by PEMAG are world-class. They've helped us implement better safety protocols across our operations.",
    image: "/logos/british-safety-services.jpg",
    rating: 5
  }
];

export const staticBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Engineering Education in Mauritania",
    description: "Exploring how modern engineering education is evolving to meet the demands of Mauritania's growing industrial sector.",
    category: "Education",
    image: "/logos/MEP.jpg",
    createdAt: new Date("2024-01-15")
  },
  {
    id: 2,
    title: "Sustainable Mining Practices in West Africa",
    description: "Best practices for sustainable mining operations and environmental protection in the West African region.",
    category: "Environment",
    image: "/logos/snim.jpg",
    createdAt: new Date("2024-01-10")
  },
  {
    id: 3,
    title: "Digital Transformation in Industrial Operations",
    description: "How digital technologies are revolutionizing industrial operations and the skills needed to adapt.",
    category: "Technology",
    image: "/logos/idm-industries.jpg",
    createdAt: new Date("2024-01-05")
  }
];