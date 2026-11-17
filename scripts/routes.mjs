// Central registry of routes for prerender, sitemap and each page's <Helmet>
// (pages read their title/description through src/lib/seo.js, so there is one copy).

export const SITE = {
  origin: 'https://rupeshmediboyina.dev',
  defaultImage: '/og-share.jpg',
  defaultImageType: 'image/jpeg',
  twitterHandle: '@RupeshKumar4604',
};

export const routes = [
  {
    path: '/',
    title: 'Rupesh Mediboyina | AI Engineer, Data Scientist & Researcher',
    description:
      'M Rupesh Kumar Yadav (Rupesh Mediboyina): AI engineer, data scientist and researcher building multimodal and geospatial AI, from vision-language models and agents to remote sensing. Data Scientist at Esri R&D; M.Tech, IIT Bombay.',
    changefreq: 'weekly',
    priority: 1.0,
  },
  {
    path: '/projects',
    title: 'Projects | M Rupesh Kumar Yadav',
    description:
      'Projects by M Rupesh Kumar Yadav: a multi-agent RAG assistant, CNN and vision transformers for hyperspectral imagery, quantum CNNs for satellite imagery, agent tools for remote sensing, and more.',
    changefreq: 'monthly',
    priority: 0.9,
  },
  {
    path: '/career',
    title: 'Career | M Rupesh Kumar Yadav',
    description:
      'Career of M Rupesh Kumar Yadav: Data Scientist at Esri R&D, M.Tech from IIT Bombay, B.Tech from NIT Andhra Pradesh, and research internships in computer vision and machine learning at DRDO and HAL.',
    changefreq: 'monthly',
    priority: 0.7,
  },
  {
    path: '/research',
    title: 'Research Publications | M Rupesh Kumar Yadav',
    description:
      'Peer-reviewed research by M Rupesh Kumar Yadav on quantum machine learning, hyperspectral imagery, slum detection from satellite imagery and graph-based NLP.',
    changefreq: 'monthly',
    priority: 0.7,
  },
  {
    path: '/beyond',
    title: 'Blog | M Rupesh Kumar Yadav',
    description:
      'Writing by M Rupesh Kumar Yadav: notes, research reviews and tutorials on geospatial foundation models, remote sensing and vision-language models, plus GeoFM Lab and Quantum AI Hub.',
    changefreq: 'monthly',
    priority: 0.6,
  },
  {
    path: '/contact',
    title: 'Contact | M Rupesh Kumar Yadav',
    description:
      'Contact M Rupesh Kumar Yadav (Rupesh Mediboyina) about research collaborations, multimodal and geospatial AI, agents and RAG.',
    changefreq: 'yearly',
    priority: 0.5,
  },
];
