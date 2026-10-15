// Central brand + content config.
// Swap COMPANY_NAME, TAGLINE and CONTACT once the founders confirm final naming/details.

export const COMPANY_NAME = "Cachemere Cloud";
export const TAGLINE = "Cloud Infrastructure for India";

export const CONTACT = {
  email: "info@cachemere.ai",
  phone: "+91 78991 21912",
  address: "Eldeco Centre, Block A, Shivalik Colony, Malviya Nagar, New Delhi, Delhi 110017",
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

// Cloud services catalog — grouped the way a customer decides, not the way it's built.
export const PRODUCT_CATEGORIES = [
  {
    category: "Compute",
    items: [
      {
        name: "GPU Cloud",
        subtitle: "GPU-as-a-Service",
        description: "On-demand GPU capacity to train and run AI models — no hardware to buy or maintain.",
        icon: "cpu",
      },
      {
        name: "General Purpose",
        description: "Balanced CPU and memory for everyday workloads and getting started.",
        icon: "server",
      },
      {
        name: "Compute Optimized",
        description: "More CPU per core, for processing-heavy workloads.",
        icon: "cube",
      },
      {
        name: "Memory Optimized",
        description: "More memory per core, for memory-intensive workloads.",
        icon: "grid",
      },
    ],
  },
  {
    category: "Dedicated",
    items: [
      {
        name: "Private & Dedicated Cloud",
        description:
          "Dedicated servers, a fully isolated private cloud, or our platform in your own facility, managed by us.",
        icon: "lock",
      },
    ],
  },
  {
    category: "Networking",
    items: [
      {
        name: "Private Networks & Subnets",
        description: "Private networks and subnets, built around how your systems actually talk to each other.",
        icon: "network",
      },
      {
        name: "Public IPs & DNS",
        description: "Public addressing and domain management, managed from the same place as everything else.",
        icon: "globe",
      },
      {
        name: "VPN & Micro-segmentation",
        description: "Secure connections in, and fine-grained separation between workloads once they're on.",
        icon: "shield",
      },
      {
        name: "Load Balancing",
        description: "Traffic spread across servers, with health checks and automatic failover.",
        icon: "scale",
      },
      {
        name: "Firewall as a Service",
        description: "A dedicated, managed firewall for every customer — not a shared ruleset.",
        icon: "shield-check",
      },
    ],
  },
  {
    category: "Storage",
    items: [
      {
        name: "Block Storage",
        description: "High-performance storage that attaches directly to your servers, with snapshots.",
        icon: "disk",
      },
      {
        name: "Object Storage",
        subtitle: "S3-compatible",
        description: "S3-compatible storage for files, backups and media, at any scale.",
        icon: "bucket",
      },
      {
        name: "File Storage",
        description: "High-performance shared file storage for workloads that need it.",
        icon: "grid",
      },
      {
        name: "Archiving",
        description: "Long-term archiving with full version history.",
        icon: "book",
      },
    ],
  },
  {
    category: "Platform & Data",
    items: [
      {
        name: "Managed Kubernetes",
        description: "Managed clusters for container workloads, without running the control plane yourself.",
        icon: "grid",
      },
      {
        name: "Database as a Service",
        description:
          "Managed PostgreSQL, MySQL, SQL Server, MongoDB and Redis, with high availability and point-in-time recovery.",
        icon: "database",
      },
    ],
  },
  {
    category: "Resilience & Hybrid",
    items: [
      {
        name: "Backup",
        description: "Scheduled, ransomware-resistant backups with self-service restore.",
        icon: "shield-check",
      },
      {
        name: "Disaster Recovery as a Service",
        description:
          "Keep your business running if your own servers, AWS or Google Cloud go down — recover into our cloud with agreed recovery times and regular drills.",
        icon: "shield",
      },
      {
        name: "Hybrid Cloud",
        description: "Connect AWS or Google Cloud to us, with one dashboard and one set of security rules.",
        icon: "globe",
      },
    ],
  },
];

// Curated highlights for the Home page's condensed overview — not the full Products catalog.
export const PRODUCT_HIGHLIGHTS = [
  { name: "GPU Cloud", icon: "cpu" },
  { name: "Cloud Server", icon: "server" },
  { name: "Object Storage", icon: "bucket" },
  { name: "Managed Kubernetes", icon: "grid" },
  { name: "Managed Database", icon: "database" },
  { name: "Firewall as a Service", icon: "shield-check" },
  { name: "Backup", icon: "shield" },
];

// Account-level capabilities and operations — not raw infrastructure you provision.
export const PLATFORM_OPERATIONS = [
  {
    name: "Identity & Access",
    description: "Users, roles, MFA and single sign-on.",
    icon: "lock",
  },
  {
    name: "Monitoring & Logging",
    description: "Performance graphs, alerts and full audit logs.",
    icon: "grid",
  },
  {
    name: "Managed Services",
    description: "We run your infrastructure 24x7 — monitoring, patching, security operations and audit-ready reports.",
    icon: "shield-check",
  },
];

export const SERVICES = [
  {
    name: "Assessment & Planning",
    description: "Understand what you're running today before we touch anything.",
    icon: "check",
  },
  {
    name: "Migration",
    description: "Included free with every plan — moving to us doesn't cost extra.",
    icon: "arrow",
  },
  {
    name: "Software Implementation",
    description: "Hands-on setup of whichever industry software you choose.",
    icon: "cube",
  },
  {
    name: "Integrations",
    description: "Connect the systems you already depend on.",
    icon: "network",
  },
  {
    name: "Compliance Readiness",
    description: "Get your environment ready for the audits that matter to you.",
    icon: "shield-check",
  },
  {
    name: "DevOps Support",
    description: "Ongoing hands-on help running what you've built.",
    icon: "chat",
  },
];

// Industry clouds — the same core infrastructure above, pre-shaped for each sector.
export const SECTORS = [
  {
    key: "hospitality",
    name: "Hospitality Cloud",
    subBrand: "Nest by Cachemere",
    positioning: "Always online, multi-property control, a secured zone for card payments, and all your hotel systems connected.",
    icon: "hotel",
    comingSoon: false,
  },
  {
    key: "education",
    name: "Education Cloud",
    positioning:
      "Ready for admissions and results day, smooth video and learning content, and student data protected, including parental consent.",
    icon: "book",
    comingSoon: false,
  },
  {
    key: "healthcare",
    name: "Healthcare Cloud",
    positioning: "Isolated servers, patient consent controls, zero trust access and tamper-proof audit logs.",
    icon: "health",
    comingSoon: true,
  },
  {
    key: "manufacturing",
    name: "Manufacturing Cloud",
    positioning: "Engineering and machine data in one place, computing at every plant, and fast storage with version history.",
    icon: "factory",
    comingSoon: true,
  },
];

// Industry software — ready-made applications running natively on the industry clouds above.
export const INDUSTRY_SOFTWARE = [
  {
    name: "Nest Suite",
    subtitle: "Hotel management system",
    description: "Front desk, POS, housekeeping, revenue management, CRM, accounting, HR and reports.",
    icon: "hotel",
  },
  {
    name: "Atlas Campus",
    subtitle: "School ERP",
    description: "Admissions, attendance, exams, fees, parent and teacher apps, transport and HR.",
    icon: "book",
  },
  {
    name: "Hospital & Clinic EMR",
    description: "Appointments, medical records, OPD and IPD, pharmacy, lab, billing and ABDM integration.",
    icon: "health",
  },
  {
    name: "Manufacturing ERP",
    description: "Sales, purchasing, inventory, production planning, maintenance and GST e-invoicing.",
    icon: "factory",
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
