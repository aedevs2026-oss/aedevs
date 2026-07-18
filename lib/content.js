export const siteConfig = {
  name: "AEDEVS",
  tagline: "Premium software agency for modern growth",
  description:
    "Premium software company in Dharmapuri, Tamil Nadu, crafting high-performance websites, mobile apps, ecommerce experiences, and AI-powered products.",
  email: "aedevs2026@gmail.com",
  phone: "+91 9488577882",
  whatsapp: "https://wa.me/919488577882",
  address: "Dharmapuri, Tamil Nadu, India - 635301",
  hours: "Mon – Sat • 9:00 AM – 7:00 PM",
  domain: "https://aedevs.vercel.app",
  social: {
    linkedin: "https://www.linkedin.com",
    instagram: "https://www.instagram.com/aedevs_software_development",
    github: "https://github.com",
  },
};

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/technologies", label: "Technologies" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export const serviceAreas = [
  "Dharmapuri",
  "Harur",
  "Palacode",
  "Pennagaram",
  "Pappireddipatti",
  "Krishnagiri",
  "Salem",
  "Hosur",
  "Namakkal",
  "Tirupattur",
];

export const stats = [
  { value: "5+", label: "Projects delivered" },
  { value: "100%", label: "On-time delivery" },
  { value: "5.0", label: "Average client rating" },
  { value: "24/7", label: "Post-launch support" },
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We align on goals, audience, scope, and success metrics so every decision has a clear purpose.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Wireframes and polished UI systems shaped around your brand, with accessibility and conversion in mind.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Clean, performant implementation with modern frameworks, thorough QA, and SEO-ready structure.",
  },
  {
    step: "04",
    title: "Launch & Grow",
    description:
      "Smooth deployment, analytics setup, and ongoing support to keep your product performing at its best.",
  },
];

export const services = [
  {
    title: "Web Development",
    icon: "globe",
    description: "Fast, polished websites that feel premium from the first scroll.",
    features: ["Next.js & React", "Accessible UI", "SEO ready"],
    link: "/services",
  },
  {
    title: "App Development",
    icon: "mobile",
    description: "Mobile-first apps built for speed, reliability, and delightful UX.",
    features: ["React Native", "Native-like performance", "Cross-platform"],
    link: "/services",
  },
  {
    title: "Ecommerce Solutions",
    icon: "cart",
    description: "Conversion-focused storefronts with streamlined checkout and dashboards.",
    features: ["Magento", "WooCommerce", "Checkout optimization"],
    link: "/services",
  },
  {
    title: "CMS Development",
    icon: "cms",
    description: "Flexible content systems for brands that need speed and control.",
    features: ["WordPress", "Headless CMS", "Editorial workflows"],
    link: "/services",
  },
  {
    title: "LMS Development",
    icon: "learn",
    description: "Learning platforms designed for engagement, progress tracking, and scale.",
    features: ["Course portals", "Admin console", "Student experience"],
    link: "/services",
  },
  {
    title: "SEO",
    icon: "search",
    description: "Technical and content SEO tuned for discoverability and long-term growth.",
    features: ["Audit", "On-page", "Analytics"],
    link: "/services",
  },
  {
    title: "Digital Marketing",
    icon: "growth",
    description: "Performance campaigns and creative systems that turn attention into momentum.",
    features: ["Growth strategy", "Paid media", "Lifecycle campaigns"],
    link: "/services",
  },
  {
    title: "AI Chatbot (RAG)",
    icon: "ai",
    description: "Context-aware AI assistants grounded in your product, docs, and knowledge base.",
    features: ["Knowledge retrieval", "Multi-turn chat", "Secure integration"],
    link: "/services",
  },
];

export const technologyGroups = [
  {
    title: "Frontend",
    items: [
      {
        name: "Next.js",
        logo: "N",
        icon: "/icons/nextjs.svg",
        description: "Blazing fast product experiences with server-first architecture.",
      },
      {
        name: "React.js",
        logo: "R",
        icon: "/icons/react.svg",
        description: "Reusable interfaces with a powerful component model.",
      },
      {
        name: "Tailwind CSS",
        logo: "T",
        icon: "/icons/tailwind.svg",
        description: "Rapid UI development with a polished, consistent system.",
      },
      {
        name: "Bootstrap",
        logo: "B",
        icon: "/icons/bootstrap.svg",
        description: "Flexible responsive layouts for speed and familiarity.",
      },
    ],
  },
  {
    title: "Backend & Languages",
    items: [
      {
        name: "PHP",
        logo: "P",
        icon: "/icons/php.svg",
        description: "Robust enterprise-ready backend logic and integrations.",
      },
      {
        name: "Node.js",
        logo: "JS",
        icon: "/icons/nodejs.svg",
        description: "Scalable APIs and real-time services for modern web products.",
      },
    ],
  },
  {
    title: "Database",
    items: [
      {
        name: "PostgreSQL",
        logo: "PG",
        icon: "/icons/postgres.svg",
        description: "Reliable relational storage for complex, growing products.",
      },
      {
        name: "MySQL",
        logo: "MY",
        icon: "/icons/mysql.svg",
        description: "Widely adopted database support for fast-moving teams.",
      },
    ],
  },
  {
    title: "CMS",
    items: [
      {
        name: "WordPress",
        logo: "W",
        icon: "/icons/wordpress.svg",
        description: "Content-first sites with a familiar editorial experience.",
      },
      {
        name: "Magento",
        logo: "M",
        icon: "/icons/magento.svg",
        description: "Commerce-grade architecture for ambitious online stores.",
      },
      {
        name: "Wix",
        logo: "Wi",
        icon: "/icons/wix.svg",
        description: "Simple and elegant launches for fast-moving brands.",
      },
    ],
  },
  {
    title: "Mobile",
    items: [
      {
        name: "React Native",
        logo: "RN",
        icon: "/icons/react-native.svg",
        description: "Cross-platform mobile products that feel native and polished.",
      },
    ],
  },
];

const PORTFOLIODUMP = [
  {
    name: "Arulneri",
    client: "Deepan",
    location: "Tirunelveli",
    category: "Educational Platform",
    desc: "A modern educational and spiritual learning platform with responsive design and a user-friendly experience.",
    accent: "from-blue-600 to-blue-400",
    link: "https://arulneri.vercel.app",
    image: "/arul.png",
    logo: "https://arulneri.vercel.app/Logo.png",
  },
  {
    name: "Universal Solar Power Solution",
    client: "Sabari",
    location: "Chennai",
    category: "Business Website",
    desc: "Professional solar energy company website showcasing products, services, and customer engagement features.",
    accent: "from-teal-500 to-emerald-400",
    link: "https://universalsolarpowersolutions.com",
    image: "/univ.png",
  },
  {
    name: "ToolzBanana",
    client: "Vignesh",
    location: "Chennai",
    category: "Web Application",
    desc: "Modern utility and productivity platform built with scalable architecture and a responsive user experience.",
    accent: "from-amber-400 to-teal-400",
    link: "https://toolzbanana.vercel.app",
    image: "/toolz.png",
    logo: "/toolz-logo.png",
  },
  {
    name: "RF Interior Spot",
    client: "Karthik R",
    location: "Chennai",
    category: "Interior Design",
    desc: "A modern interior design website showcasing residential, commercial, and office projects with portfolio, SEO, and responsive UX.",
    accent: "from-amber-400 to-teal-400",
    link: "https://www.rfinteriorspot.com",
    image: "/rf-logo.png",
    logo: "https://www.rfinteriorspot.com/logo.png",
  },
  {
    name: "Om Mosquito Nets",
    client: "Karthik R",
    location: "Chennai",
    category: "Business Website",
    desc: "A professional business website for mosquito net installation services with product showcases, local SEO, and mobile-first design.",
    accent: "from-blue-600 to-teal-400",
    link: "https://www.ommosquitonets.com",
    image: "/om-nets.png",
    logo: "https://ommosquitonets.vercel.app/logo.png",
  },
];

const TESTIMONIALSDUMP = [
  {
    name: "Deepan",
    company: "Arulneri",
    review:
      "AEDEVS understood exactly what our learning platform needed. The site is fast, clean, and our students find it easy to use.",
    rating: 5,
  },
  {
    name: "Sabari",
    company: "Universal Solar Power Solutions",
    review:
      "Professional from start to finish. Our new website finally reflects the quality of the work we do for our customers.",
    rating: 5,
  },
  {
    name: "Vignesh",
    company: "ToolzBanana",
    review:
      "The team shipped a complex web app on schedule and kept communication clear the whole way through. Highly recommend.",
    rating: 5,
  },
  {
    name: "Karthik R.",
    company: "RF Interior Spot",
    review:
      "Affordable, responsive, and genuinely invested in getting our business online the right way. Support after launch has been great.",
    rating: 5,
  },
];

export const portfolioItems = PORTFOLIODUMP.map((item) => ({
  title: item.name,
  category: item.category,
  client: item.client,
  location: item.location,
  image: item.image,
  description: item.desc,
  href: item.link,
  accent: item.accent,
}));

export const portfolioCategories = [
  "All",
  ...new Set(portfolioItems.map((item) => item.category)),
];

export const testimonials = TESTIMONIALSDUMP.map((item) => ({
  quote: item.review,
  name: item.name,
  role: item.company,
  rating: item.rating,
}));

export const clients = PORTFOLIODUMP.map((item) => ({
  name: item.client,
  company: item.name,
  location: item.location,
  category: item.category,
  href: item.link,
  logo: item.logo,
}));

export const teamMembers = [
  {
    name: "Lawrence",
    role: "Senior Full Stack Developer",
    bio: "Experienced full-stack developer specializing in scalable web applications, eCommerce platforms, and enterprise software solutions.",
    specialties: ["PHP", "Laravel", "React", "Next.js", "Magento 2", "WordPress", "WooCommerce", "MySQL", "PostgreSQL", "Node.js", "CMS", "RAG", "Wix"],
  },
  {
    name: "Grace Kumar",
    role: "Junior Developer",
    bio: "Passionate developer focused on creating modern, responsive, and user-friendly web experiences.",
    specialties: ["HTML", "CSS", "JavaScript", "Next.js"],
  },
];

export const blogPosts = [
  {
    slug: "ai-chatbot-rag",
    title: "Designing AI chatbots that feel useful, not gimmicky",
    excerpt:
      "The difference between a flashy demo and a trustworthy assistant is context, orchestration, and a calm UX.",
    category: "AI",
    date: "July 10, 2026",
    readTime: "6 min read",
    image: "/ai-aedevs.png",
    featured: true,
  },
  {
    slug: "nextjs-performance",
    title: "Why premium web experiences still begin with performance",
    excerpt: "Performance is a product feature. It shapes trust, conversion, and the feeling of quality.",
    category: "Development",
    date: "June 28, 2026",
    readTime: "4 min read",
    image: "/perfomance-aedevs.png",
    featured: false,
  },
  {
    slug: "saas-landing-pages",
    title: "The anatomy of a modern SaaS landing page",
    excerpt: "A thoughtful landing page blends clarity, momentum, and a compelling visual signature.",
    category: "Design",
    date: "June 16, 2026",
    readTime: "5 min read",
    image: "/saas-aedevs.png",
    featured: false,
  },
];

export const faqs = [
  {
    category: "General",
    question: "What kinds of projects does AEDEVS take on?",
    answer:
      "We partner on premium websites, mobile apps, ecommerce experiences, CMS builds, LMS products, and AI assistants for fast-growing teams.",
  },
  {
    category: "Website",
    question: "How long does a custom website typically take?",
    answer:
      "Most projects ship in 3–6 weeks depending on scope, integrations, and the level of design direction needed.",
  },
  {
    category: "App",
    question: "Do you build mobile apps for both iOS and Android?",
    answer:
      "Yes. We design and build cross-platform experiences with React Native so your product reaches both audiences efficiently.",
  },
  {
    category: "SEO",
    question: "Can you improve search visibility after launch?",
    answer:
      "Absolutely. We offer technical SEO, content strategy, and performance improvements to support long-term growth.",
  },
  {
    category: "AI",
    question: "Can your AI chatbot use our own content?",
    answer:
      "Yes. We build retrieval-augmented systems so your assistant can answer from your documents, product data, or knowledge base.",
  },
  {
    category: "Pricing",
    question: "Do you offer flexible engagement models?",
    answer:
      "We work with fixed-scope projects, retainers, and product partnerships depending on your launch needs and growth stage.",
  },
  {
    category: "Support",
    question: "What support do you provide after launch?",
    answer:
      "We provide post-launch support, updates, and optimization for the features that matter most to your team.",
  },
];

export const quickLinks = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/technologies", label: "Technologies" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export const contactServices = [
  "Web Development",
  "App Development",
  "Ecommerce",
  "CMS Development",
  "LMS Development",
  "SEO",
  "Digital Marketing",
  "AI Chatbot",
  "Other",
];

export const budgetRanges = [
  "Under ₹50,000",
  "₹50,000 – ₹1,50,000",
  "₹1,50,000 – ₹5,00,000",
  "₹5,00,000+",
  "Not sure yet",
];
