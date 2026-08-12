// Central brand + content config.
// Swap COMPANY_NAME, TAGLINE and CONTACT once the founders confirm final naming/details.

export const COMPANY_NAME = "Cachemere Cloud";
export const TAGLINE = "Cloud Infrastructure for India";

export const CONTACT = {
  email: "hello@cachemerecloud.com",
  phone: "+91 98765 43210",
  address: "Registered office address — to be confirmed",
};

export const NAV_LINKS = [
  { label: "Products", to: "/products" },
  { label: "Solutions", to: "/solutions" },
  { label: "Security", to: "/security" },
  { label: "About", to: "/about" },
  { label: "FAQ", to: "/faq" },
];

export const WHY_POINTS = [
  {
    title: "One platform, no wrong door",
    body: "Build directly on our infrastructure, or run a ready-made solution — either way, you get the same reliability and support.",
  },
  {
    title: "Real infrastructure, not a bolt-on",
    body: "Compute, network, storage, security, and databases you can build on directly — not a tool layered on someone else's cloud.",
  },
  {
    title: "Human support, not a ticket queue",
    body: "A team that shows up locally, so your energy goes into your business, not your infrastructure.",
  },
  {
    title: "Built for where you are",
    body: "Every business gets the same quality of infrastructure and support, wherever they're based.",
  },
];

export const BRAND_VALUES = [
  {
    title: "One platform, no wrong door",
    body: "Whether a business builds on our infrastructure directly or starts with a ready-made solution, they get the same reliability and support.",
  },
  {
    title: "Simplicity is respect",
    body: "Infrastructure shouldn't require an advanced explanation for those who just want it to work.",
  },
  {
    title: "Show up where others don't",
    body: "Every business gets the same quality of infrastructure and support, wherever they're based.",
  },
  {
    title: "Earn trust through reliability, not promises",
    body: "Uptime, security, and compliance matter more than announcements.",
  },
];

export const KEY_MESSAGES = [
  {
    title: "One provider, two ways in",
    body: "Build directly on our core infrastructure, or run a native solution for your industry — without switching providers as needs evolve.",
  },
  {
    title: "Built for all of India",
    body: "Pricing, support, and presence purpose-built for businesses across India.",
  },
  {
    title: "The same guarantee at every layer",
    body: "Security, compliance, backups, and support apply whether you touch raw infrastructure or a native solution.",
  },
  {
    title: "Human support, not a ticket queue",
    body: "A real support relationship — so you can run your business, not your infrastructure.",
  },
  {
    title: "Earn trust through reliability, not promises",
    body: "Uptime, security, and compliance matter more than announcements.",
  },
];

export const PRODUCT_CATEGORIES = [
  {
    category: "Compute",
    items: [
      {
        name: "GPU Cloud",
        subtitle: "GPU-as-a-Service",
        description:
          "Rent powerful GPU capacity on demand to train and run AI models — no hardware to buy or maintain.",
        icon: "cpu",
      },
      {
        name: "Cloud Server",
        description:
          "Virtual machines for your everyday applications and workloads, scalable as you grow.",
        icon: "server",
      },
      {
        name: "Bare Metal",
        description:
          "Dedicated physical servers for workloads that need guaranteed, isolated performance.",
        icon: "cube",
      },
    ],
  },
  {
    category: "Storage",
    items: [
      {
        name: "Block Storage",
        description: "High-performance storage that attaches directly to your servers.",
        icon: "disk",
      },
      {
        name: "Object Storage",
        subtitle: "S3-compatible",
        description:
          "Simple, scalable storage for files, backups, and media — compatible with common tools.",
        icon: "bucket",
      },
    ],
  },
  {
    category: "Resilience",
    items: [
      {
        name: "Backups & Disaster Recovery",
        description:
          "Automatic backups and recovery plans so a failure never means losing your business data.",
        icon: "shield-check",
      },
    ],
  },
  {
    category: "Networking & Ops",
    items: [
      {
        name: "Managed Kubernetes",
        description: "Run modern containerized applications without managing the complexity yourself.",
        icon: "grid",
      },
      {
        name: "Firewall",
        description: "Network-level protection to keep unauthorized traffic out.",
        icon: "shield",
      },
      {
        name: "DDoS Protection",
        description: "Keeps your services online and available during attack attempts.",
        icon: "bolt-shield",
      },
      {
        name: "VPC",
        subtitle: "Virtual Private Cloud",
        description: "A private, isolated network environment for your infrastructure.",
        icon: "network",
      },
      {
        name: "Load Balancer",
        description: "Distributes traffic across servers so performance stays smooth as you scale.",
        icon: "scale",
      },
      {
        name: "DNS Manager",
        description: "Manage your domains and routing in one place.",
        icon: "globe",
      },
    ],
  },
  {
    category: "Data",
    items: [
      {
        name: "Managed Database",
        description: "Fully managed databases — we handle setup, patching, and scaling.",
        icon: "database",
      },
    ],
  },
];

export const SECTORS = [
  {
    key: "manufacturing",
    name: "Manufacturing",
    positioning:
      "AI-driven insights and automation to reduce downtime, optimize production, and cut operational costs.",
    icon: "factory",
  },
  {
    key: "healthcare",
    name: "Healthcare",
    positioning:
      "Secure, compliant digital infrastructure for patient data, records, and AI-assisted operations — built for India's data protection needs.",
    icon: "health",
  },
  {
    key: "education",
    name: "Education",
    positioning:
      "Cloud-powered tools to manage institutions, support digital learning, and use analytics to improve outcomes.",
    icon: "book",
  },
  {
    key: "hospitality",
    name: "Hospitality",
    subBrand: "Nest by Cachemere",
    positioning: "Smarter operations and guest experience through connected, AI-enabled systems.",
    icon: "hotel",
  },
];

export const SECURITY_PILLARS = [
  {
    title: "Hosted in India",
    body: "Infrastructure hosted and supported within India, close to the businesses that run on it.",
  },
  {
    title: "Encryption at rest and in transit",
    body: "Data is encrypted throughout its lifecycle, on our infrastructure and as it moves.",
  },
  {
    title: "Access controls",
    body: "Strict, role-based access so only the right people can reach your systems and data.",
  },
  {
    title: "Verifiable compliance credentials",
    body: "Working toward PCI-DSS, ISO 27001, ISO 20000, and MeitY empanelment — credentials you'll be able to assess directly, not just take our word for.",
  },
  {
    title: "Regular audits",
    body: "Independent security reviews planned as part of our compliance roadmap, ahead of general availability.",
  },
];

export const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Talk to us",
    body: "Share your business needs, no obligation.",
  },
  {
    step: "2",
    title: "We design your setup",
    body: "Core infrastructure, a native solution, or both — tailored to your sector and scale.",
  },
  {
    step: "3",
    title: "We onboard and support you",
    body: "Hands-on setup with a dedicated support contact, ongoing.",
  },
];

export const FAQS = [
  {
    q: "Is your platform available now, or still launching?",
    a: `${COMPANY_NAME} is currently in development and onboarding early conversations ahead of launch. We're talking with businesses now to shape both our core infrastructure and our native solutions — reach out and we'll walk you through what's ready and what's coming.`,
  },
  {
    q: "What's the difference between a native solution and building on your core infrastructure?",
    a: "They're two ways into the same platform. A native solution is ready-made for your industry — no building required, and you're up and running quickly. Building on our core infrastructure means using our compute, network, storage, security, and databases directly, through a single management plane, if your team wants more control. Either way, you get the same reliability, security, and human support underneath.",
  },
  {
    q: "Where is my data physically stored?",
    a: "All infrastructure is hosted in India. We'll share exact data center locations as they're finalized.",
  },
  {
    q: "What size of business do you work with?",
    a: "We're built for businesses across India, across manufacturing, healthcare, education, and hospitality — whether you're a non-technical owner/operator looking for a ready-made solution, or an IT/operations team that wants to build directly on our infrastructure.",
  },
  {
    q: "Do I need my own technical/IT team to use your services?",
    a: "Not necessarily. A native solution is ready-made — no building or configuration required, and no in-house IT needed to set it up or troubleshoot it. If you're building directly on our core infrastructure, a technical team helps, but our human support means you're never on your own either way.",
  },
  {
    q: "What industries do you currently support?",
    a: "Our focus sectors are manufacturing, healthcare, education, and hospitality. Our core infrastructure — compute, storage, networking, and databases — is available to any business, in any industry.",
  },
  {
    q: "How do I get started / talk to someone?",
    a: 'Use the "Talk to Us" button anywhere on the site to reach our contact form, or email us directly — we\'ll follow up to understand your needs and next steps.',
  },
];

export const HEARD_ABOUT_OPTIONS = ["Search engine", "Social media", "Referral", "Event", "Other"];

export const SECTOR_OPTIONS = ["Manufacturing", "Healthcare", "Education", "Hospitality", "Other"];
