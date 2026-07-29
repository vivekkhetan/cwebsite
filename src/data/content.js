// Central brand + content config.
// Swap COMPANY_NAME, TAGLINE and CONTACT once the founders confirm final naming/details.

export const COMPANY_NAME = "Nabh Cloud";
export const TAGLINE = "Sovereign Cloud & AI for Bharat's Businesses";

export const CONTACT = {
  email: "hello@nabhcloud.in",
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
    title: "Your data stays yours",
    body: "Hosted in India, governed by Indian law, never used to train someone else's models.",
  },
  {
    title: "Enterprise capability, SMB-sized",
    body: "Access GPU and AI infrastructure without hiring an infrastructure team.",
  },
  {
    title: "Real support, not call centers",
    body: "A dedicated point of contact who understands your business.",
  },
  {
    title: "Built for where you are",
    body: "Designed for businesses in tier 2/3 cities, not just metro enterprises.",
  },
];

export const KEY_MESSAGES = [
  {
    title: "Sovereign by design",
    body: "Your data, your AI models, your control — hosted on Indian infrastructure, under Indian jurisdiction.",
  },
  {
    title: "Built for Bharat's SMBs",
    body: "Advanced AI and cloud infrastructure made accessible to businesses that can't build or manage it themselves — not just large enterprises.",
  },
  {
    title: "Highest security standards",
    body: "Enterprise-grade security and compliance, without needing an in-house security team.",
  },
  {
    title: "Consistent, hands-on support",
    body: "A real support relationship, not a ticket queue — so you can run your business, not your infrastructure.",
  },
  {
    title: "Latest hardware, India-based",
    body: "Modern GPU and AI-capable infrastructure, run and supported locally.",
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
    positioning: "Smarter operations and guest experience through connected, AI-enabled systems.",
    icon: "hotel",
  },
];

export const SECURITY_PILLARS = [
  {
    title: "Data residency in India",
    body: "Your data is stored and processed on Indian soil, subject to Indian law only.",
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
    title: "Compliance roadmap",
    body: "Working toward ISO 27001 certification and MeitY empanelment, and building to align with RBI data localization guidelines.",
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
    body: "Infrastructure and/or solution tailored to your sector and scale.",
  },
  {
    step: "3",
    title: "We onboard and support you",
    body: "Hands-on setup with a dedicated support contact, ongoing.",
  },
];

export const FAQS = [
  {
    q: "Is your product available now, or still launching?",
    a: `${COMPANY_NAME} is currently in development and onboarding early conversations ahead of launch. We're talking with businesses now to shape what we build — reach out and we'll walk you through what's ready and what's coming.`,
  },
  {
    q: "Where is my data physically stored?",
    a: "All infrastructure is hosted on Indian soil. We'll confirm exact data center locations as they're finalized — every deployment stays within India, governed by Indian law.",
  },
  {
    q: "What size of business do you work with?",
    a: "We're built for small and medium businesses, particularly in India's tier 2 and tier 3 cities, across manufacturing, healthcare, education, and hospitality. If you don't have an in-house infrastructure or AI team, that's exactly who we're for.",
  },
  {
    q: "Do I need my own technical/IT team to use your services?",
    a: "No. Hands-on setup and ongoing support are core to how we work — you get a dedicated point of contact, not just a product to self-manage.",
  },
  {
    q: "What industries do you currently support?",
    a: "Our initial focus sectors are manufacturing, healthcare, education, and hospitality, with core cloud and GPU infrastructure available across industries.",
  },
  {
    q: "How do I get started / talk to someone?",
    a: 'Use the "Talk to Us" button anywhere on the site to reach our contact form, or email us directly — we\'ll follow up to understand your needs and next steps.',
  },
];

export const HEARD_ABOUT_OPTIONS = ["Search engine", "Social media", "Referral", "Event", "Other"];

export const SECTOR_OPTIONS = ["Manufacturing", "Healthcare", "Education", "Hospitality", "Other"];
