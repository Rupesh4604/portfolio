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
    title: 'M Rupesh Kumar Yadav | Software Engineer & AI Developer',
    description:
      'Portfolio of M Rupesh Kumar Yadav — Software Engineer and AI Developer, M.Tech at IIT Bombay. Projects in Deep Learning, Computer Vision, LLMs, RAG systems, and open-source work (ProdHub, OpenSourceEnv).',
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
    path: '/internships',
    title: 'Internships & Education | M Rupesh Kumar Yadav',
    description:
      'Academic background and professional internships of M Rupesh Kumar Yadav — M.Tech at IIT Bombay, B.Tech at NIT Andhra Pradesh, research internships in AI and remote sensing.',
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
    path: '/achievements',
    title: 'Achievements | M Rupesh Kumar Yadav',
    description:
      'Awards, certifications, competitions, and positions of responsibility held by M Rupesh Kumar Yadav — IIT Bombay M.Tech researcher and AI engineer.',
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
