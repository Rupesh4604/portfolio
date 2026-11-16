// Wording for the C · Glass variant (dark, >=768px), taken from the Glass design
// templates (design-handoff/reference/*C.dc.html, Glass.dc.html).
// Rule: the template wins on wording, the data files win on facts (years, counts,
// authors, tools, real posts). Overrides are keyed by the data title so links,
// anchors and search keep working; unknown keys throw in development.
import { projects } from "./projectsData.js";
import { publications } from "./publicationsData.js";
import { work, internships } from "./internshipData.js";

const RAG = "Intelligent Multi-Agent RAG System";
const HSI = "Hyperspectral Imagery Classification (CNN + ViT)";
const RSDL = "rs-dl-architect";

export const glass = {
  home: {
    now: "Esri R&D, vision-language and decision models. Reading about VLA models.",
    status: "Open to conversations",
    research: "peer-reviewed papers",
    // Template order: Systems, Models, Tools
    work: [
      { key: RAG, tag: "Systems", title: "Multi-agent knowledge assistant", desc: "Agentic retrieval with triage, re-ranking and guardrails" },
      { key: HSI, tag: "Models", title: "CNN and ViT for hyperspectral imagery", desc: "Hybrid model, published at PReMI 2026" },
      { key: RSDL, tag: "Tools", title: "rs-dl-architect", desc: "Gives coding agents expertise in vision model design" },
    ],
  },

  projects: {
    lead: "Things I've built, sorted into models, the systems that run them, and tools for other builders.",
    featured: [
      { key: RAG, tag: "Systems", title: "Multi-agent knowledge assistant", desc: "Agentic retrieval with triage, re-ranking and guardrails.", cta: "Case study" },
      { key: HSI, tag: "Models", title: "CNN and ViT for hyperspectral imagery", desc: "Hybrid convolution and transformer model, PReMI 2026.", cta: "Read the paper", paper: "Enhancing Hyperspectral Imagery Classification using CNN and ViT" },
      { key: RSDL, tag: "Tools", title: "rs-dl-architect", desc: "Gives coding agents expertise in vision model design.", cta: "View on GitHub" },
    ],
    // title / track / stack per project. Years always come from projectsData.
    rows: {
      [RAG]: { title: "Multi-agent knowledge assistant", tag: "Systems", stack: "RAG, LangChain" },
      [HSI]: { title: "CNN and ViT for hyperspectral imagery", tag: "Models", stack: "Paper, PyTorch" },
      "Quantum CNN for Slum Classification": { title: "Quantum CNN for slum classification", tag: "Models", stack: "Paper, TFQ" },
      "Image Super-Resolution (4x SISR)": { title: "4x image super-resolution", tag: "Models", stack: "Vision" },
      "Pedestrian Tracking - YOLOv5 + Deep SORT": { title: "Pedestrian tracking with YOLOv5 and DeepSORT", tag: "Systems", stack: "Vision, tracking" },
      "Financial News Sentiment Analysis (FinBERT)": { title: "Financial news sentiment with FinBERT", tag: "Systems", stack: "NLP" },
      "ProdHub: AI-Powered Productivity Hub": { title: "ProdHub productivity app", tag: "Systems", stack: "Full stack, Gemini" },
      [RSDL]: { title: "rs-dl-architect", tag: "Tools", stack: "Agents, open source" },
      "Rib Segmentation & Labelling (FPN / U-Net++)": { title: "Rib segmentation with FPN and U-Net++", tag: "Models", stack: "Medical vision" },
      // Not in the template: tag proposed, title and stack from the data.
      "Semantic Paraphrase Identification": { tag: "Models" },
      "Time-Series Forecasting - Financial Markets": { tag: "Models" },
      "3D CNN for Slum Classification": { tag: "Models" },
      GeoWebClient: { tag: "Tools" },
      "SOS WebClient Interface": { tag: "Tools" },
      "Emergency Services & Flood Zones Locator": { tag: "Systems" },
      "Triple GAN": { tag: "Models" },
    },
    tags: ["Models", "Systems", "Tools"],
  },

  research: {
    statusLabels: {
      "Journal article": ["Journal article", "Journal articles"],
      "Conference chapter": ["Springer LNCS chapter", "Springer LNCS chapters"],
      "Conference paper": ["Conference paper", "Conference papers"],
    },
    pubs: {
      "Quantum Convolutional Neural Network for Slum Classification using Sentinel-2 Imagery": {
        title: "Quantum convolutional neural network for slum classification using Sentinel-2 imagery",
        abstract:
          "A hybrid quantum-classical model for slum classification from Sentinel-2 imagery, using multi-channel quantum image encoding and stratified sampling for class imbalance.",
      },
      "Enhancing Hyperspectral Imagery Classification using CNN and ViT": {
        title: "Enhancing hyperspectral imagery classification using CNN and ViT",
        venue: "Pattern Recognition and Machine Intelligence, Springer LNCS",
        abstract:
          "Convolutional and transformer architectures for hyperspectral classification, with spectral-spatial preprocessing for low-data settings.",
      },
      "Slum Detection Using U-Net Attention Gate on Mid-Resolution Satellite Imagery": {
        title: "Slum detection using U-Net attention gate on mid-resolution satellite imagery",
        venue: "Journal of the Indian Society of Remote Sensing",
      },
      "Graph-Based Stance Grouping in Multi-Participant Discussions": {
        title: "Graph-based stance grouping in multi-participant discussions",
        venue: "ICSICE 2024, Advances in Computer Science Research",
      },
    },
    collections: {
      "GeoFM Lab": "Index of geospatial foundation models",
      "Quantum AI Hub": "Notes on quantum machine learning",
    },
  },

  blog: {
    lead: "Paper reviews, engineering notes on models in production, and things I learn along the way.",
    featuredLabel: "Featured",
  },

  career: {
    lead: "Data scientist at Esri R&D. Before that, research in computer vision and machine learning at IIT Bombay, DRDO and HAL.",
    // keyed by organization in internshipData
    jobs: {
      "Esri R&D Center - GeoAI": {
        role: "Data Scientist",
        org: "Esri R&D Center, New Delhi",
        detail: "Building, fine-tuning and deploying vision-language and decision models, and integrating them into the ArcGIS platform.",
      },
      "Center for Artificial Intelligence and Robotics (CAIR), DRDO": {
        role: "Computer Vision Research Intern",
        org: "CAIR, DRDO",
        detail: "2D and 3D object detection with camera and LiDAR fusion, integrated through ROS2 into autonomous vehicles.",
      },
      "Hindustan Aeronautics Ltd (HAL), Nasik": {
        role: "Machine Learning Intern",
        org: "Hindustan Aeronautics Ltd",
        detail: "Predicted snag dispositions from 13 years of maintenance data, reaching 98.8% test accuracy.",
      },
    },
    highlights: [
      { title: "Top 3%", sub: "GATE 2024, Computer Science" },
      { title: "Teaching assistant", sub: "Computer Vision, IIT Bombay" },
      { title: "Top performer", sub: "Deep Learning for Computer Vision" },
    ],
  },
};

// Development guard: every override must point at a real data entry.
if (import.meta.env?.DEV) {
  const titles = new Set(projects.map((p) => p.title));
  const pubTitles = new Set(publications.map((p) => p.title));
  const orgs = new Set([...work, ...internships].map((j) => j.organization));
  const missing = [
    ...glass.home.work.map((w) => w.key),
    ...glass.projects.featured.map((w) => w.key),
    ...Object.keys(glass.projects.rows),
  ].filter((k) => !titles.has(k));
  missing.push(...Object.keys(glass.research.pubs).filter((k) => !pubTitles.has(k)));
  missing.push(...Object.keys(glass.career.jobs).filter((k) => !orgs.has(k)));
  missing.push(...projects.filter((p) => !glass.projects.rows[p.title]).map((p) => `(no Glass tag) ${p.title}`));
  if (missing.length) throw new Error(`glassCopy.js keys do not match the data: ${missing.join("; ")}`);
}
