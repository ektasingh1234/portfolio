export interface Project {
  id: string;
  title: string;
  fullTitle?: string;
  badge: string;
  secondaryBadge?: string;
  category: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  highlights?: string[];
  links: {
    github?: string;
    liveDemo?: string;
  };
  phantomDetails?: {
    fullForm: string;
    description: string;
    scoringFactors: { label: string; weight: number; description: string }[];
    decisionFlow: string[];
    passportStages: string[];
    sustainabilityMetrics: { label: string; value: string }[];
  };
  ragDetails?: {
    retrievalPipeline: string[];
    faithfulness: string;
  };
  mlopsDetails?: {
    architecture: string[];
  };
  footnote?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  badge?: string;
  description: string;
  responsibilities: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export interface ResearchItem {
  id: string;
  title: string;
  venue: string;
  year: string;
  type: 'Publication' | 'Patent';
  status: string;
  country?: string;
  distinctBadge?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  highlight?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  subtitle?: string;
  metric?: string;
  institution?: string;
  description: string;
  category: 'competition' | 'academic' | 'coding' | 'leadership';
  featured?: boolean;
}

export const PERSONAL_INFO = {
  name: "EKTA SINGH",
  title: "AI/ML Engineer • GenAI Developer • Data Science Student",
  location: "Jaipur, Rajasthan, India",
  education: {
    degree: "B.Tech in Computer Science and Engineering (Data Science)",
    university: "Manipal University Jaipur",
    period: "August 2023 – May 2027",
    cgpa: "8.48"
  },
  contact: {
    email: "singhekta2004@gmail.com",
    mailto: "mailto:singhekta2004@gmail.com",
    gmailUrl: "https://mail.google.com/mail/?view=cm&fs=1&to=singhekta2004@gmail.com"
  },
  social: {
    github: "https://github.com/ektasingh1234",
    linkedin: "https://www.linkedin.com/in/ekta-singh-ab64b8290/",
    leetcode: "https://leetcode.com/u/0Sp5HtKdKD/"
  },
  resumeUrl: "https://drive.google.com/file/d/1IsZdVUfXT9gecNTfse_5gE08KFwNZcOB/view?usp=drivesdk",
  photoUrl: "https://lh3.googleusercontent.com/d/13VSGckE20KnBScyGtGCoIUZQJXlKibmA",
  photoDriveUrl: "https://drive.google.com/file/d/13VSGckE20KnBScyGtGCoIUZQJXlKibmA/view?usp=drivesdk"
};

export const QUICK_STATS = [
  { value: "8.48", label: "CGPA", sublabel: "Manipal University Jaipur" },
  { value: "2+", label: "Industry Internships", sublabel: "FaxLab AI & Sportomic" },
  { value: "3", label: "Research Publications", sublabel: "ICICI, ICTISC, ICTCS" },
  { value: "1", label: "Utility Model Patent", sublabel: "Granted — Germany 2026" },
  { value: "450+", label: "LeetCode Submissions", sublabel: "DSA & Competitive Coding" },
  { value: "9", label: "LeetCode Badges", sublabel: "Algorithmic Problem Solving" }
];

export const TIMELINE_EVENTS = [
  { year: "2023", title: "Started B.Tech in CSE & Data Science", subtitle: "Manipal University Jaipur", status: "completed" },
  { year: "2025", title: "Research • Hackathons • Open Source", subtitle: "3 Research Papers & German Patent", status: "completed" },
  { year: "2026", title: "AI/ML Internships • GenAI • MLOps Projects", subtitle: "FaxLab AI & Sportomic", status: "active" },
  { year: "2027", title: "Expected Graduation", subtitle: "B.Tech CSE (Data Science)", status: "future" }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  { id: "PROGRAMMING", name: "PROGRAMMING", skills: ["Python", "Java", "JavaScript", "SQL"] },
  { id: "AI_ML", name: "AI / ML & GENAI", skills: ["Scikit-learn", "XGBoost", "TensorFlow", "RAG", "FAISS", "BM25", "Groq LLaMA3", "RAGAS"] },
  { id: "LLM", name: "LLM", skills: ["LangChain", "Prompt Engineering", "AI Agents", "Function Calling"] },
  { id: "AI_TOOLS", name: "AI TOOLS & PLATFORMS", skills: ["ChatGPT", "Claude", "Gemini", "GitHub Copilot", "Cursor", "Antigravity", "Hugging Face", "Ollama"] },
  { id: "WEB", name: "WEB DEVELOPMENT", skills: ["React.js", "Node.js", "Express.js", "FastAPI", "Flask", "Streamlit", "REST APIs"] },
  { id: "MLOPS", name: "MLOPS & DEPLOYMENT", skills: ["MLflow", "Feast", "Evidently AI", "Docker", "Redis", "Prometheus", "Grafana"] },
  { id: "DATABASES", name: "DATABASES & TOOLS", skills: ["MySQL", "MongoDB", "PostgreSQL", "Git", "GitHub", "Power BI", "Excel"] },
  { id: "CS", name: "CS FUNDAMENTALS", skills: ["DSA", "OOP", "DBMS", "Operating Systems", "System Design"] }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "01",
    company: "FaxLab AI",
    role: "AI/ML Intern",
    period: "May 2026 – Jul 2026",
    location: "Remote",
    badge: "NVIDIA Inception Program",
    description: "Developed machine learning pipelines and AI-driven solutions for real-world applications.",
    responsibilities: [
      "Developed machine learning pipelines and AI-driven solutions for real-world applications.",
      "Performed data preprocessing, model training, evaluation, and deployment in collaborative engineering workflows."
    ]
  },
  {
    id: "02",
    company: "Sportomic",
    role: "AI Intern",
    period: "Jun 2026 – Jul 2026",
    location: "Remote",
    description: "Built AI-powered features for sports venue discovery and management platforms.",
    responsibilities: [
      "Built AI-powered features for sports venue discovery and management platforms.",
      "Worked on data analysis, automation, and machine learning model development."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "01-prism",
    title: "PRISM",
    fullTitle: "Product Recovery Intelligence & Sustainability Management",
    badge: "AMAZON HACKON S6",
    category: "AI • SUSTAINABILITY • FULL STACK",
    description: "Full-stack AI platform built for Amazon HackOn Season 6 that transforms e-commerce returns into sustainable assets.",
    techStack: ["Next.js", "TypeScript", "FastAPI", "Tailwind CSS", "GSAP", "Framer Motion", "Vercel", "Render"],
    links: {
      github: "https://github.com/Vasudha-aga/PRISM-powered-by-PHANTOM",
      liveDemo: "https://prism-powered-by-phantom.vercel.app/"
    },
    footnote: "Built for Amazon HackOn Season 6.",
    phantomDetails: {
      fullForm: "Predictive Heuristic Asset Navigation & Transition Optimization Matrix",
      description: "PHANTOM is a recovery intelligence engine that scores returned products and routes them to their optimal second life: Resell, Refurbish, Recycle, or Dispose.",
      scoringFactors: [
        { label: "Condition", weight: 30, description: "Physical item state & damage evaluation" },
        { label: "Demand", weight: 20, description: "Secondary market resale velocity" },
        { label: "Resale Potential", weight: 20, description: "Expected financial recovery yield" },
        { label: "Repair Feasibility", weight: 10, description: "Refurbishment component cost ratio" },
        { label: "Return Reason", weight: 10, description: "Customer return rationale classification" },
        { label: "Sustainability Impact", weight: 10, description: "Carbon footprint & landfill avoidance" }
      ],
      decisionFlow: ["RETURNED PRODUCT", "PHANTOM", "RECOVERY SCORE", "DECISION ENGINE", "RESELL / REFURBISH / RECYCLE / DISPOSE"],
      passportStages: [
        "1. Return Initiated",
        "2. AI Diagnostics",
        "3. PHANTOM Scoring",
        "4. Recovery Routing",
        "5. Refurbishment Grading",
        "6. Resale Listing",
        "7. Green Impact Logged"
      ],
      sustainabilityMetrics: [
        { label: "CARBON SAVED", value: "2.4T" },
        { label: "WASTE DIVERTED", value: "18.5k kg" },
        { label: "GREEN CREDITS GENERATED", value: "4,200" }
      ]
    }
  },
  {
    id: "02-neurosearch",
    title: "NeuroSearch",
    badge: "INTERNSHIP PROJECT",
    secondaryBadge: "HYBRID RAG",
    category: "Semantic Search • GenAI • RAG",
    description: "Production-oriented hybrid RAG semantic search engine combining lexical and vector retrieval to generate grounded, cited answers from documents.",
    highlights: ["87% RAGAS Faithfulness", "BUILT DURING INTERNSHIP"],
    techStack: ["LangChain", "FAISS", "BM25", "Groq LLaMA3", "FastAPI", "Streamlit", "SQLite", "Docker"],
    links: {
      github: "https://github.com/ektasingh1234/semantic-search-engine"
    },
    ragDetails: {
      retrievalPipeline: ["PDF Input", "Chunking", "BM25 + FAISS", "Hybrid Retrieval", "Groq LLaMA3", "Cited Answer"],
      faithfulness: "87% RAGAS Faithfulness"
    }
  },
  {
    id: "03-ml-platform",
    title: "ML Platform",
    badge: "MLOPS PLATFORM",
    category: "MLOPS • MODEL SERVING • OBSERVABILITY",
    description: "An end-to-end MLOps platform for experiment tracking, feature management, monitoring, model serving and observability.",
    techStack: ["Feast", "Evidently AI", "MLflow", "Redis", "Ollama", "Prometheus", "Grafana", "Docker"],
    links: {
      github: "https://github.com/ektasingh1234/ml-platform"
    },
    mlopsDetails: {
      architecture: ["DATA", "FEATURE STORE", "TRAINING", "MLFLOW", "SERVING", "MONITORING", "PROMETHEUS + GRAFANA"]
    }
  }
];

export const RESEARCH_ITEMS: ResearchItem[] = [
  {
    id: "pub-01",
    title: "Engineering the Algorithmic Persona",
    venue: "ICICI 2026",
    year: "2026",
    type: "Publication",
    status: "Published"
  },
  {
    id: "pub-02",
    title: "Vision-Driven Digital Twin for Disease-Risk Prediction",
    venue: "ICTISC / FusionX Global 2025",
    year: "2025",
    type: "Publication",
    status: "Published"
  },
  {
    id: "pub-03",
    title: "Loan Default Prediction with Explainable AI",
    venue: "ICTCS 2025",
    year: "2025",
    type: "Publication",
    status: "Published"
  },
  {
    id: "patent-01",
    title: "AI-Supported Personal Branding System",
    venue: "Utility Model Patent Granted — Germany, 2026",
    year: "2026",
    type: "Patent",
    status: "Granted",
    country: "Germany 🇩🇪",
    distinctBadge: "GERMANY UTILITY MODEL PATENT"
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "Applied AI / Machine Learning Engineer",
    issuer: "micro1",
    year: "2026"
  },
  {
    title: "Introduction to Operating Systems",
    issuer: "NPTEL IIT Madras",
    year: "2025",
    highlight: "Elite, Top 5%"
  },
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    year: "2024"
  },
  {
    title: "Python for Data Science",
    issuer: "IBM",
    year: "2024"
  },
  {
    title: "AWS APAC Solutions Architecture Job Simulation",
    issuer: "Forage",
    year: "Job Simulation"
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "ach-01",
    title: "TOP 50 FEMALE CODERS",
    subtitle: "HackOn with Amazon 6.0",
    description: "Recognized among the Top 50 Female Coders at HackOn with Amazon 6.0.",
    category: "competition",
    featured: true
  },
  {
    id: "ach-02",
    title: "DEAN'S LIST",
    metric: "GPA 9.43",
    institution: "Manipal University Jaipur",
    description: "Academic Excellence Award for top GPA performance standing.",
    category: "academic"
  },
  {
    id: "ach-03",
    title: "DEAN'S LIST",
    metric: "GPA 9.10",
    institution: "Manipal University Jaipur",
    description: "Academic Excellence Award for consistent top GPA standing.",
    category: "academic"
  },
  {
    id: "ach-04",
    title: "450+ LEETCODE SUBMISSIONS",
    metric: "450+",
    institution: "LeetCode • Competitive Programming",
    description: "Data Structures, Algorithms, and competitive programming problem solutions on LeetCode.",
    category: "coding"
  },
  {
    id: "ach-05",
    title: "9 LEETCODE BADGES",
    metric: "9 Badges",
    institution: "LeetCode • Algorithmic Achievements",
    description: "Earned 9 technical badges on LeetCode for consistent problem solving, streak challenges, and algorithmic mastery.",
    category: "coding"
  },
  {
    id: "ach-06",
    title: "HACKATHON FINALIST",
    metric: "Top 20 / 1200+ Teams",
    institution: "MUJ HackX 2.0",
    description: "Ranked in the top 20 teams out of 1200+ participating teams nationwide.",
    category: "competition"
  },
  {
    id: "ach-07",
    title: "PROMOTIONS LEAD",
    subtitle: "IEEE WIE MUJ",
    description: "Promotions Lead for IEEE Women in Engineering student chapter.",
    category: "leadership"
  }
];
