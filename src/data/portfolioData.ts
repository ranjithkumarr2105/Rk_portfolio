import smartAgHero from '../assets/generated/smart_ag_hero.png';
import healthTrackerHero from '../assets/generated/health_tracker_hero.png';
import foodDeliveryHero from '../assets/generated/food_delivery_hero.png';
import cropDiseaseHero from '../assets/generated/crop_disease_hero.png';

export const portfolioData = {
  personal: {
    name: "Ranjithkumar R",
    role: "Software Engineer",
    tagline: "Building intelligent Android applications, robust backend systems, and AI-powered digital experiences that solve real-world problems.",
    roles: [
      "Android Developer",
      "Full Stack Developer",
      "Backend Engineer",
      "AI Application Developer",
      "Freelance Software Engineer"
    ],
    skills: ["Android", "Backend", "AI", "REST APIs", "Firebase"],
    email: "ranjithkumarr2105@gmail.com",
    location: "Kanchipuram, Tamil Nadu",
    linkedin: "https://linkedin.com/in/rk2105",
    github: "https://github.com/ranjithkumarr2105",
    availability: [
      "Open to Full-Time Roles",
      "Open to Internships",
      "Open to Freelance Projects",
      "Open to Startup Collaborations"
    ]
  },
  
  about: {
    narrative: `I am a Software Engineer who believes that writing code is just one part of the equation—building scalable, production-ready systems is the real challenge. 

My journey into software engineering started with a simple curiosity about how mobile applications are built, which quickly evolved into a deep passion for the entire stack. I love Android development because of the immediate, tangible impact it has on users, but I am equally fascinated by the unseen architecture: designing normalized databases, building robust Flask APIs, and integrating edge-deployed AI models. 

When I approach a problem, I don't just look for a quick fix. I analyze the business value, consider edge cases, and focus on clean architecture. Whether it's reducing wait times in a campus cafeteria or building an offline crop disease detection model for remote farmers, I aim to create software that is intuitive, performant, and deeply valuable to its users.`,
    stats: {
      projects: "5+ Projects",
      experience: "Android + Web",
      education: "B.E. CSE (CGPA: 8.13)"
    }
  },

  whyWorkWithMe: [
    {
      title: "Production-Focused",
      description: "I don't just write scripts; I build robust architectures designed to handle real users, edge cases, and scale."
    },
    {
      title: "Clean Architecture",
      description: "Strong believer in separation of concerns, DRY principles, and maintaining readable, scalable codebases."
    },
    {
      title: "Mobile + Backend",
      description: "From pixel-perfect Jetpack Compose UIs to normalized MySQL schemas and fast Flask APIs."
    },
    {
      title: "AI Integration",
      description: "Experience bridging the gap between cutting-edge LLMs (Gemini) or Edge AI (TFLite) and practical user applications."
    },
    {
      title: "Performance Optimization",
      description: "Obsessed with optimizing network calls, reducing layout overdraws, and writing efficient database queries."
    },
    {
      title: "Problem Solving",
      description: "I enjoy dissecting complex business requirements and translating them into elegant technical solutions."
    }
  ],

  workflow: [
    { step: "Discover", desc: "Understanding the core problem, user needs, and business goals." },
    { step: "Research", desc: "Analyzing competitors, technical constraints, and best practices." },
    { step: "Architecture", desc: "Designing the database, API contracts, and scalable system flow." },
    { step: "Development", desc: "Writing clean, modular, and testable code." },
    { step: "Testing", desc: "Ensuring stability across devices, network conditions, and edge cases." },
    { step: "Deployment", desc: "Setting up CI/CD pipelines and launching to production." },
    { step: "Maintenance", desc: "Monitoring analytics, fixing bugs, and iterating on feedback." }
  ],

  featuredProject: {
    title: "Stall Spot",
    subtitle: "Campus Food Ordering System",
    problem: "Campus cafeterias suffer from massive congestion during peak hours, leading to wasted time for students and inefficient order management for stall owners.",
    solution: "A full-stack Android platform enabling pre-parcel ordering, real-time status tracking, and automated dynamic rent calculation based on stall revenue.",
    architecture: "Native Android (Java/XML) client interfacing with a custom PHP backend and normalized MySQL database. Implemented role-based access for Users, Stall Owners, and Admins.",
    techStack: ["Java", "Android SDK", "PHP", "MySQL", "REST APIs"],
    features: [
      "Pre-parcel Ordering",
      "Dynamic Rent Calculation",
      "Role-Based Dashboards",
      "Real-time Order Tracking",
      "Analytics & Reporting"
    ],
    impact: "Reduced cafeteria wait times by 40% and streamlined revenue tracking for campus administration.",
    challenges: "Managing real-time state synchronization between the stall owner's dashboard and the student's app over fluctuating campus networks.",
    github: "https://github.com/ranjithkumarr2105/Stall_Spot",
    screenshots: [
      { id: "landing", title: "Customer Experience", desc: "Students can browse stalls, view menus, and place pre-parcel orders to skip the queue.", image: "/images/stall-spot/home.jpg" },
      { id: "customer", title: "Ordering Experience", desc: "Real-time order tracking and status updates from the vendor.", image: "/images/stall-spot/user_menu.jpg" },
      { id: "ownerMenu", title: "Vendor Management", desc: "Stall owners can manage their active menu items, availability, and pricing in real-time.", image: "/images/stall-spot/owner_menu.jpg" },
      { id: "ownerOrder", title: "Order Processing", desc: "Vendors receive live order notifications and update statuses (Preparing, Ready, Collected).", image: "/images/stall-spot/owner_order.jpg" },
      { id: "admin", title: "System Administration", desc: "Admins monitor total platform revenue and calculate dynamic rent for each stall.", image: "/images/stall-spot/admin_home.jpg" }
    ]
  },

  freelanceProjects: [
    {
      title: "Smart Agriculture & Food Rescue",
      type: "Full Stack AI Platform",
      problem: "Farmers lack real-time crop diagnostics, and excess food in the supply chain often goes to waste due to inefficient logistics.",
      solution: "A comprehensive ecosystem connecting farmers, logistics, and buyers with integrated AI diagnostics and a donation pipeline.",
      architecture: "Kotlin Android app powered by a Flask backend and Firebase real-time database, utilizing Gemini AI for crop analysis and Google Maps for live tracking.",
      techStack: ["Kotlin", "Jetpack Compose", "Flask", "Firebase", "React", "Gemini AI"],
      features: ["Live Tracking", "AI Crop Doctor", "Wallet Integration", "OTP Verification", "Donation Management"],
      impact: "Created a seamless end-to-end flow for real-time order management, secure payments, and waste reduction.",
      image: smartAgHero
    },
    {
      title: "Health & Wellness Tracker",
      type: "Mobile Application",
      problem: "Users struggle to accurately compute and log daily caloric intake without cumbersome interfaces.",
      solution: "Engineered a streamlined mobile app prioritizing speed of entry and real-time caloric computation.",
      architecture: "Native Android application leveraging Firebase for real-time data synchronization and user profile management.",
      techStack: ["Android", "Java", "Firebase", "Material Design"],
      features: ["Real-time Computation", "Calorie Tracking", "Custom User Profiles", "Progress Analytics"],
      impact: "Delivered a frictionless daily tracking experience for active users.",
      image: healthTrackerHero
    },
    {
      title: "Commission-Free Food Delivery",
      type: "Backend Platform",
      problem: "Local restaurants lose significant margins to high-commission delivery aggregators.",
      solution: "Developed an ordering platform with a highly optimized, normalized SQL schema allowing restaurants to bypass aggregators.",
      architecture: "Robust Flask REST APIs serving an Android client, backed by a deeply normalized MySQL database to ensure data integrity.",
      techStack: ["Flask", "MySQL", "Python", "REST APIs"],
      features: ["Normalized Schema", "Order Management", "Restaurant Dashboards", "Delivery Routing"],
      impact: "Provided a scalable backend foundation capable of handling concurrent orders without aggregator fees.",
      image: foodDeliveryHero
    },
    {
      title: "Offline Crop Disease Detection",
      type: "Edge AI Tool",
      problem: "Farmers in remote areas lack internet connectivity to access cloud-based crop diagnostic tools.",
      solution: "Built a standalone Android tool that runs deep learning inference directly on the device.",
      architecture: "Integrated TensorFlow Lite models into a Kotlin Android app for instant, on-device edge inference without network calls.",
      techStack: ["Android", "Kotlin", "TensorFlow Lite", "Edge AI"],
      features: ["Offline Diagnosis", "Edge Inference", "Real-time Camera Feed", "Disease Treatment DB"],
      impact: "Empowered remote farmers with instant, zero-latency crop diagnostics regardless of connectivity.",
      image: cropDiseaseHero
    }
  ]
};
