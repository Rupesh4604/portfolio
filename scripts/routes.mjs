// Central registry of routes for prerender + sitemap.
// Keep meta in sync with each page's <Helmet>.

export const SITE = {
  origin: 'https://rupeshmediboyina.dev',
  defaultImage: '/og-image.jpg',
  defaultImageType: 'image/jpeg',
  twitterHandle: '@RupeshKumar4604',
};

export const routes = [
  {
    path: '/',
    title: 'M Rupesh Kumar Yadav - AI/ML Engineer & Researcher | Esri R&D',
    description:
      'AI/ML engineer and researcher at Esri R&D working on multimodal AI, geospatial intelligence, vision-language models, agentic systems, computer vision, and remote sensing.',
    changefreq: 'weekly',
    priority: 1.0,
  },
  {
    path: '/projects',
    title: 'Projects | M Rupesh Kumar Yadav',
    description:
      'Selected AI/ML engineering projects by M Rupesh Kumar Yadav across agentic systems, geospatial AI, remote sensing, computer vision, and full-stack ML applications.',
    changefreq: 'monthly',
    priority: 0.9,
  },
  {
    path: '/experience',
    title: 'Experience | M Rupesh Kumar Yadav',
    description:
      'Experience of M Rupesh Kumar Yadav — education at IIT Bombay & NIT Andhra Pradesh, professional roles, research internships in AI and remote sensing, achievements, and positions of responsibility.',
    changefreq: 'monthly',
    priority: 0.7,
  },
  {
    path: '/publications',
    title: 'Research Publications | M Rupesh Kumar Yadav',
    description:
      'Research publications by M Rupesh Kumar Yadav across quantum machine learning, remote sensing, hyperspectral imagery, computer vision, and graph-based NLP.',
    changefreq: 'monthly',
    priority: 0.7,
  },
  {
    path: '/beyond',
    title: 'Blog | M Rupesh Kumar Yadav',
    description:
      'Writing by M Rupesh Kumar Yadav — notes on transformers and machine learning, book notes — plus GeoFM Lab, Quantum AI Hub, ProdHub and other places on the web.',
    changefreq: 'monthly',
    priority: 0.6,
  },
  {
    path: '/contact',
    title: 'Contact | M Rupesh Kumar Yadav',
    description:
      'Get in touch with M Rupesh Kumar Yadav (Rupesh Mediboyina) about research collaborations, multimodal models, agents and inference.',
    changefreq: 'yearly',
    priority: 0.5,
  },
  {
    path: '/open-source-env',
    title: 'OpenSourceEnv & ProdHub | M Rupesh Kumar Yadav',
    description:
      'OpenSourceEnv — open-source learning initiative covering Deep Learning, ML, AI, Data Science, Web Dev, DBMS, and DSA. Featuring ProdHub, an AI-powered personal productivity hub by M Rupesh Kumar Yadav.',
    changefreq: 'monthly',
    priority: 0.8,
  },
];
