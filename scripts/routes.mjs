// Central registry of routes for prerender + sitemap.
// Keep meta in sync with each page's <Helmet>.

export const SITE = {
  origin: 'https://rupesh-dev.vercel.app',
  defaultImage: '/og-image.jpg',
  defaultImageType: 'image/jpeg',
  twitterHandle: '@RupeshKumar4604',
};

export const routes = [
  {
    path: '/',
    title: 'M Rupesh Kumar Yadav | Data Scientist & AI Developer',
    description:
      'Portfolio of M Rupesh Kumar Yadav — Data Scientist and AI Developer, M.Tech at IIT Bombay. Projects in Machine Learning, Deep Learning, Computer Vision, LLMs, RAG systems, and geospatial AI (ProdHub, OpenSourceEnv).',
    changefreq: 'weekly',
    priority: 1.0,
  },
  {
    path: '/projects',
    title: 'Projects | M Rupesh Kumar Yadav',
    description:
      'Explore projects by M Rupesh Kumar Yadav — multi-agent RAG systems, quantum CNN for remote sensing, AI productivity apps (ProdHub), and full-stack applications.',
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
    title: 'Publications | M Rupesh Kumar Yadav',
    description:
      'Peer-reviewed research papers by M Rupesh Kumar Yadav on Quantum Neural Networks, Hyperspectral Imagery Classification, and Graph-Based stance grouping — published in QIP, PReMI, IIT Delhi.',
    changefreq: 'monthly',
    priority: 0.7,
  },
  {
    path: '/beyond',
    title: 'Beyond | M Rupesh Kumar Yadav',
    description:
      'More from M Rupesh Kumar Yadav — personal blog, Quantum AI Hub, ProdHub productivity app, Google Scholar, and other sites.',
    changefreq: 'monthly',
    priority: 0.6,
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
