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
    title: 'Agung Prastyo | Full-Stack Developer & IT Support Jakarta',
    description: 'Portofolio Profesional Agung Prastyo: Pengembangan Web Berbasis AI, Dukungan TI (IT Support), dan Keamanan Siber di Jakarta.',
    keywords: 'Agung Prastyo, JANDA-BAPAS, MONALISA, Web Developer Jakarta, Full-Stack Developer, IT Support Jakarta, React.js, Supabase, Vibe Coding, Linux Mint',
    ogImage: '/project-01.webp',
  },
  hero: {
    name: 'Agung Prastyo',
    role: 'Full-Stack Developer & IT Support', // Menggantikan 'Jobless' dengan kata kunci industri
    tagline: 'Memanfaatkan keterampilan teknis dan kemampuan analitis dalam Arsitektur Sistem, Pengembangan Web, dan Dukungan TI yang berbasis di Jakarta.',
    contact: 'Terbuka untuk peran yang memanfaatkan 5 tahun pengalaman di bidang IT Support dan pengembangan web modern berbasis AI.',
    avatarSrc: '/favicon.svg',
    avatarAlt: 'Agung Prastyo',
    resumeUrl: '/resume.pdf',
  },
  about: {
    paragraphs: [
      'Lulusan Sarjana Komputer (Teknik Informatika) dari Universitas Budi Luhur dengan sertifikasi dari Google (IT Support), Fortinet (Cybersecurity), dan IBM (Cybersecurity).', // [cite: 4]
      'Memiliki pemahaman kuat mengenai IT Support dengan pengalaman langsung selama 5 tahun dalam troubleshooting perangkat keras/lunak dan manajemen aset, dikombinasikan dengan keahlian dalam Pengembangan Web Berbasis AI melalui pendekatan vibe coding.', // [cite: 5]
      {
        heading: 'Fokus Utama Saya',
        bullets: [
          'Merancang platform digital terpusat untuk mempercepat transparansi dan efisiensi.', // [cite: 16]
          'Membangun Role-Based Access Control (RBAC) yang dinamis dan pelacakan dokumen otomatis.', // [cite: 18, 19]
          'Mengintegrasikan AI dan OCR untuk ekstraksi metadata secara otomatis tanpa proses input manual.', // [cite: 30]
        ],
      },
      {
        heading: 'Keahlian Teknologi',
        techItems: ['React.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Vibe Coding', 'Linux'], // [cite: 52, 54]
      },
    ],
  },
  experiences: [
    {
      period: 'Nov 2025 - Mei 2026',
      title: 'Pengelola Fasilitas Umum (Magang)',
      company: 'Balai Pemasyarakatan (Bapas) Kelas I Jakarta Barat',
      summary: 'Mendukung operasional umum dan memberikan bantuan teknis untuk digitalisasi layanan instansi.',
      highlights: [
        'Menyiapkan sarana pendukung kegiatan umum seperti ruang rapat, kendaraan, dan logistik perkantoran.',
        'Memberikan dukungan teknis dan membantu inisiatif digitalisasi layanan instansi melalui pengembangan sistem.',
        'Memantau penggunaan fasilitas agar efisien serta mengatur perawatan rutin fasilitas umum.',
        'Membantu berbagai kebutuhan operasional kantor sehari-hari.',
      ],
      tech: ['Dukungan Teknis', 'Operasional', 'Pengembangan Sistem'],
    },
    {
      period: 'Ags 2020 - Okt 2025',
      title: 'Staf Administrasi & IT',
      company: 'Yayasan As-Salam Joglo',
      summary: 'Melakukan pemecahan masalah perangkat keras dan lunak secara harian serta tugas administratif untuk memastikan kelancaran operasional.',
      highlights: [
        'Melakukan pemecahan masalah harian pada hardware dan software untuk memastikan kelancaran operasional.',
        'Membantu instalasi jaringan dan pembaruan software di lingkungan kerja.',
        'Mengelola inventaris dan pemeliharaan aset TI menggunakan SnipeIT, termasuk komputer dan perangkat jaringan.',
        'Menerapkan praktik keamanan dasar seperti mengelola hak akses untuk dokumen digital.',
        'Bertanggung jawab atas pengarsipan dokumen secara digital dan fisik.',
      ],
      tech: ['IT Support', 'Troubleshooting Hardware', 'SnipeIT', 'Jaringan', 'Manajemen Aset'],
    },
  ],
  featuredProjects: [
    {
      title: 'MONALISA - Sistem Informasi Pemasyarakatan',
      period: 'Nov 2025 - Mei 2026',
      summary: 'Mengembangkan platform layanan publik digital terpusat menggunakan pendekatan AI-augmented vibe coding untuk menggantikan alur kerja administratif manual yang terfragmentasi.',
      solution: 'Membangun sistem pemantauan dan evaluasi terintegrasi dengan kontrol akses berbasis peran (RBAC) yang dinamis, pelaporan digital, dan pelacakan layanan secara real-time.',
      impact: 'Meningkatkan transparansi, efisiensi operasional, dan akuntabilitas administratif melalui alur kerja digital terpusat dan pemantauan otomatis.',
      image: 'project-01.webp',
      imageAlt: 'Antarmuka Sistem Pemantauan MONALISA',
      demoLink: 'https://monalisa-eta.vercel.app/', // [cite: 17]
      techCategories: [
        {
          category: 'Frontend & Backend',
          items: ['React.js', 'Supabase', 'CRUD', 'Vibe Coding'],
        },
        {
          category: 'Fitur Utama',
          items: ['RBAC', 'Real-time Monitoring', 'Layanan Digital'],
        },
      ],
    },
    {
      title: 'Sistem Arsip Digital Penerimaan Surat', // [cite: 29]
      period: 'Apr 2026 - Mei 2026', // [cite: 29]
      summary: 'Merancang arsitektur keseluruhan sistem menggunakan pendekatan AI vibe coding sebagai navigator utama.', // [cite: 29]
      solution: 'Membangun sistem pengarsipan surat masuk digital yang mengeliminasi pencatatan manual melalui integrasi AI dan OCR untuk ekstraksi metadata secara otomatis.', // [cite: 30]
      impact: 'Mempercepat penyelesaian fitur manajemen dokumen, pencarian teks penuh (full-text search), dan penyimpanan cloud.', // [cite: 31]
      image: 'project-02.webp',
      imageAlt: 'Dasbor Sistem Arsip Digital', // [cite: 29]
      demoLink: 'https://janda-bapas.vercel.app/', // [cite: 29]
      techCategories: [
        {
          category: 'Stack',
          items: ['React.js', 'Supabase', 'Ekstraksi AI', 'OCR'], // [cite: 29]
        },
        {
          category: 'Pendekatan',
          items: ['Vibe Coding', 'Desain Database Relasional'], // [cite: 29]
        },
      ],
    },
  ],
  projectArchivePage: {
    title: 'Semua Proyek',
    description: 'Arsip proyek: periode, peran, dan teknologi mencakup berbagai proyek pengembangan web, IoT, dan IT support.',
    intro: 'Arsip ringkas dari proyek akademis dan pekerjaan profesional.',
  },
  projectArchive: [
    { date: '2026', project: 'Sistem Arsip Digital Penerimaan Surat', role: 'Full-Stack', techStack: 'React.js, Supabase, AI, OCR' }, // [cite: 29]
    { date: '2025', project: 'Website Portofolio', role: 'Frontend', techStack: 'HTML, CSS, JavaScript, Responsive Design' }, // [cite: 41, 42]
    { date: '2025', project: 'Prototipe IoT Mini Vehicle', role: 'Hardware & Web', techStack: 'Mikrokontroler, Sensor Fusion' }, // [cite: 32]
    { date: '2024', project: 'Manajemen Aset Internal', role: 'Full-Stack', techStack: 'IoT, NFC, CRUD' }, // [cite: 36, 37]
  ],
  contact: {
    email: 'agungprastyo052@gmail.com', // [cite: 2]
    github: 'https://github.com/machioneel', // [cite: 2]
    linkedin: 'https://linkedin.com/in/agungprstyo', // [cite: 2]
  },
} as const;

export type ProjectArchiveRow = (typeof site.projectArchive)[number];
export type FeaturedProject = (typeof site.featuredProjects)[number];