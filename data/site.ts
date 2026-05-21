/**
 * ============================================
 * PAGE CONTENT DATA
 * ============================================
 * All structured content for pages lives here.
 * Edit these arrays/objects to customize the template content.
 *
 * Replace placeholder images in src/assets/ with your own.
 */

export const site = {
  url: 'https://aprastyo.my.id',
  meta: {
    title: 'Agung Prastyo | Full-Stack Developer & IT Support', // Lebih SEO-friendly
    description: 'Portfolio of Agung Prastyo: AI-Augmented Web Development, IT Support, and Cybersecurity.',
    // Tambahkan 2 baris ini:
    keywords: 'Agung Prastyo, Web Developer, Full-Stack Developer, IT Support, React.js, Supabase, Vibe Coding',
    ogImage: '/project-01.webp', // Gambar thumbnail saat link dibagikan
  },
  hero: {
    name: 'Agung Prastyo', // [cite: 1]
    role: 'Jobless', // [cite: 12]
    tagline: 'Leveraging technical skills and analytical abilities in System Architecture, Web Development, and IT Support.', // [cite: 6]
    contact: 'Open to roles leveraging 5 years of IT Support and modern AI-augmented web development.', // [cite: 5]
    avatarSrc: '/favicon.svg',
    avatarAlt: 'Agung Prastyo', // [cite: 1]
    resumeUrl: '/resume.pdf', // [cite: 2]
  },
  about: {
    paragraphs: [
      'Graduate in Informatics Engineering from Universitas Budi Luhur with certifications from Google (IT Support), Fortinet (Cybersecurity), and IBM (Cybersecurity).', // [cite: 4]
      'Strong understanding of IT Support backed by 5 years of daily hands-on practice in hardware/software troubleshooting and asset management, combined with expertise in AI-Augmented Web Development via vibe coding.', // [cite: 5]
      {
        heading: 'Example focus areas',
        bullets: [
          'Designing centralized digital platforms to accelerate transparency and efficiency.', // [cite: 16]
          'Building dynamic Role-Based Access Control (RBAC) and automated document tracking.', // [cite: 18, 19]
          'Integrating AI and OCR for automatic metadata extraction without manual entry.', // [cite: 30]
        ],
      },
      {
        heading: 'Sample stack',
        techItems: ['React.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Vibe Coding', 'Linux'], // [cite: 52, 54]
      },
    ],
  },
  experiences: [
    {
      period: 'Nov 2025 - May 2026', // [cite: 15]
      title: 'AI-Augmented Full-Stack Developer (Intern)', // [cite: 12]
      company: 'Balai Pemasyarakatan (Bapas) Kelas I Jakarta Barat', // [cite: 13]
      summary: 'Contributed to the MONALISA information system to digitize manual files into a centralized digital platform.', // [cite: 16]
      highlights: [
        'Applied vibe coding consistently using AI as the primary development partner for React components and Supabase integration.', // [cite: 17]
        'Translated technical instructions into document tracking features and automated task delegation.', // [cite: 18]
        'Built dynamic Role-Based Access Control (RBAC) based on agency hierarchy to automatically filter roles.', // [cite: 19]
      ],
      tech: ['React.js', 'Supabase', 'AI', 'Vibe Coding'], // [cite: 17, 52]
    },
    {
      period: 'Aug 2020 - Oct 2025', // [cite: 22]
      title: 'Administrative & IT Staff', // [cite: 20]
      company: 'Yayasan As-Salam Joglo', // [cite: 21]
      summary: 'Performed daily hardware and software troubleshooting to ensure smooth operations.', // [cite: 23]
      highlights: [
        'Assisted with software installation and updates in the work environment.', // [cite: 24]
        'Managed inventory and maintenance of IT assets, including computers and network devices.', // [cite: 25]
        'Implemented basic security practices such as managing access rights for digital documents.', // [cite: 26]
      ],
      tech: ['IT Support', 'Hardware Troubleshooting', 'Asset Management'], // [cite: 23, 25, 53]
    },
  ],
  featuredProjects: [
    {
      title: 'MONALISA',
      period: 'Nov 2025 - May 2026',
      summary: 'Developed a centralized digital public service platform using an AI-augmented vibe coding approach to replace fragmented manual administrative workflows.',
      solution: 'Built an integrated monitoring and evaluation system with dynamic role-based access control, digital reporting, and real-time service tracking.',
      impact: 'Improved transparency, operational efficiency, and administrative accountability through centralized digital workflows and automated monitoring.',
      image: 'project-01.webp',
      imageAlt: 'MONALISA Monitoring System Interface',
      demoLink: 'https://monalisa-eta.vercel.app/', // [cite: 17]
      techCategories: [
        {
          category: 'Frontend & Backend',
          items: ['React.js', 'Supabase', 'CRUD', 'Vibe Coding'],
        },
        {
          category: 'Core Features',
          items: ['RBAC', 'Real-time Monitoring', 'Digital Services'],
        },
      ],
    },
    {
      title: 'Digital Archive System for Incoming Mail', // [cite: 29]
      period: 'Apr 2026 - May 2026', // [cite: 29]
      summary: 'Designed the entire system architecture using an AI vibe coding approach as the main navigator.', // [cite: 29]
      solution: 'Built a digital incoming mail archiving system that eliminates manual recording through AI and OCR integration for automatic metadata extraction.', // [cite: 30]
      impact: 'Accelerated the completion of document management features, full-text search, and cloud storage.', // [cite: 31]
      image: 'project-02.webp',
      imageAlt: 'Digital Archive System Dashboard', // [cite: 29]
      demoLink: 'https://janda-bapas.vercel.app/', // [cite: 29]
      techCategories: [
        {
          category: 'Stack',
          items: ['React.js', 'Supabase', 'AI Extraction', 'OCR'], // [cite: 29]
        },
        {
          category: 'Approach',
          items: ['Vibe Coding', 'Relational Database Design'], // [cite: 29]
        },
      ],
    },
  ],
  projectArchivePage: {
    title: 'All projects',
    description: 'Project archive: dates, roles, and technologies across web development, IoT, and IT support engagements.',
    intro: 'A concise archive of academic projects and professional development work.',
  },
  projectArchive: [
    { date: '2026', project: 'Digital Archive System', role: 'Full-Stack', techStack: 'React.js, Supabase, AI, OCR' }, // [cite: 29]
    { date: '2025', project: 'Portfolio Website', role: 'Frontend', techStack: 'HTML, CSS, JavaScript, Responsive Design' }, // [cite: 41, 42]
    { date: '2025', project: 'IoT Mini Vehicle Prototype', role: 'Hardware & Web', techStack: 'Microcontroller, Sensor Fusion' }, // [cite: 32]
    { date: '2024', project: 'Internal Asset Management', role: 'Full-Stack', techStack: 'IoT, NFC, CRUD' }, // [cite: 36, 37]
  ],
  contact: {
    email: 'agungprastyo052@gmail.com', // [cite: 2]
    github: 'https://github.com/machioneel', // [cite: 2]
    linkedin: 'https://linkedin.com/in/agungprstyo', // [cite: 2]
  },
} as const;

export type ProjectArchiveRow = (typeof site.projectArchive)[number];
export type FeaturedProject = (typeof site.featuredProjects)[number];