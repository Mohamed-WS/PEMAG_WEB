import type { Service, BlogPost, Testimonial, Project } from "@shared/schema";

export const staticServices: Service[] = [
  {
    id: 1,
    title: "Petroleum & Mining Engineering",
    description: "Comprehensive training in drilling, reservoir engineering, safety, and production optimization for oil and gas operations and mining processes. Focus on technical, safety, and operational excellence.",
    icon: "oil-well",
    features: [
      "Drilling & Reservoir Engineering",
      "Production Optimization",
      "Mining Operations",
      "Safety & Risk Management",
      "Heavy Equipment Operations"
    ]
  },
  {
    id: 2,
    title: "Energy & Sustainability",
    description: "Training covering energy transition, green hydrogen, carbon capture, renewable energy, and environmental compliance. Addressing climate change and sustainable development.",
    icon: "leaf",
    features: [
      "Renewable Energy Systems",
      "Energy Transition & Green Hydrogen",
      "Carbon Capture & Low-Carbon Technologies",
      "Environmental Compliance",
      "Sustainable Development Projects"
    ]
  },
  {
    id: 3,
    title: "Environment and Waste Management",
    description: "Comprehensive training in environmental protection, waste management, recycling technologies, environmental impact assessment, and sustainable practices for industrial and municipal waste.",
    icon: "recycle",
    features: [
      "Industrial Waste Management",
      "Environmental Impact Assessment",
      "Recycling Technologies",
      "Hazardous Materials Handling",
      "Sustainable Waste Practices"
    ]
  },
  {
    id: 4,
    title: "Agriculture & Technology Services",
    description: "Comprehensive training in modern agricultural technologies, precision farming, sustainable agriculture practices, and innovative farming solutions to enhance food security and agricultural productivity in Mauritania.",
    icon: "users",
    features: [
      "Precision Agriculture & Smart Farming",
      "Irrigation Systems & Water Management",
      "Crop Management & Soil Science",
      "Agricultural Technology Integration",
      "Sustainable Farming Practices",
      "Food Security & Production Optimization"
    ]
  },
  {
    id: 5,
    title: "Software Training",
    description: "Specialized software training for engineering applications from including: PETREL, ECLIPSE, PIPESIM, OLGA, Exploration and Production software.",
    icon: "monitor",
    features: [
      "PETREL Reservoir Modeling",
      "ECLIPSE Simulation Software",
      "PIPESIM Systems",
      "OLGA Multiphase",
      "Production Software"
    ]
  },
  {
    id: 6,
    title: "Artificial Intelligence and IT",
    description: "Advanced training in artificial intelligence, machine learning, data science, cybersecurity, and modern IT infrastructure for engineering and industrial applications.",
    icon: "lightbulb",
    features: [
      "Machine Learning & AI Applications",
      "Data Science & Analytics",
      "Computer Programming Basics",
      "Database Management Systems",
      "Digital Transformation Technologies"
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