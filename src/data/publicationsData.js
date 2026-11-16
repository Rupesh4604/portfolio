export const publications = [
  {
    title: "Quantum Convolutional Neural Network for Slum Classification using Sentinel-2 Imagery",
    authors: "Archana G. Pai, Rupesh Kumar Yadav Mediboyina, Krishna Mohan Buddhiraju, Surya S. Durbha",
    venue: "Quantum Information Processing, 25(4), Article 119",
    year: "2026",
    status: "Journal article",
    description:
      "Hybrid quantum-classical model for Sentinel-2 slum classification using Multi-Channel Quantum Image encoding and stratified sampling for class imbalance.",
    abstract: "This study explores Multi-channel Quantum Convolutional Neural Networks for slum classification using Sentinel-2 satellite imagery. The work evaluates a hybrid quantum-classical model based on Multi-Channel Quantum Image encoding against a structurally comparable classical CNN, with stratified sampling used to address class imbalance.",
    doi: "https://doi.org/10.1007/s11128-026-05134-z",
    link: "https://link.springer.com/article/10.1007/s11128-026-05134-z",
    tags: ["Quantum ML", "Remote Sensing", "Sentinel-2", "Computer Vision"]
  },
  {
    title: "Enhancing Hyperspectral Imagery Classification using CNN and ViT",
    authors: "R. K. Y. Mediboyina et al.",
    venue: "Pattern Recognition and Machine Intelligence, Springer",
    year: "2026",
    status: "Conference chapter",
    description:
      "Study of CNN and Vision Transformer based approaches for hyperspectral image classification with spectral-spatial feature processing.",
    abstract: "This work studies hyperspectral image classification using convolutional and transformer-based architectures, with attention to spectral-spatial preprocessing and low-data classification performance.",
    doi: "https://doi.org/10.1007/978-3-032-18477-1_34",
    link: "https://link.springer.com/chapter/10.1007/978-3-032-18477-1_34",
    tags: ["Hyperspectral Imaging", "Vision Transformers", "Remote Sensing"]
  },
  {
    title: "Slum Detection Using U-Net Attention Gate on Mid-Resolution Satellite Imagery",
    // TODO: confirm full author list & order
    authors: "R. K. Y. Mediboyina et al. (co-author)",
    venue: "Journal of the Indian Society of Remote Sensing (Springer)",
    year: "2026",
    status: "Journal article",
    description:
      "Co-authored work on an attention-gated U-Net for slum detection from Sentinel-2 imagery (all bands up to 20 m) over Mumbai, with four spectral indices and an ignore mask, and cross-city transfer to Jakarta.",
    abstract: "Slum detection has emerged as a critical area of research in urban studies and remote sensing, driven by the need for effective urban planning, resource allocation, and policy intervention during disaster management. Detecting slums from satellite imagery presents a significant challenge due to variations in building materials, density, spatial organization, and local environmental factors, making it difficult to establish a universal detection approach. This study makes use of all bands of Sentinel-2 up to 20 m along with four spectral indices and an ignore mask to detect slum pockets in Mumbai. An attention mechanism is incorporated into U-Net architectures to enhance feature representation and improve classification performance. The model was further evaluated for generalization and transferability on a patch from the Jakarta dataset, where it demonstrated strong performance in slum classification. This work can be used by government bodies to continuously track and monitor the growth of slum areas and assist decision-makers in making informed decisions. Our proposed method with the attention module focuses on the most relevant spatial and contextual information within the image, strengthening discriminative feature learning and achieving superior results for slum detection.",
    notes:
      "<strong>My role (co-author):</strong> validated the methodology, implemented and corrected the codebase, and fixed errors in the model/training code to ensure reproducible results.<br/><br/><em>Published 18 June 2026.</em>",
    // TODO: add DOI / paper link when available
    doi: ""
  },
  {
    title: "Graph-Based Stance Grouping in Multi-Participant Discussions",
    authors: "Rupesh Kumar Yadav Mediboyina et al. (co-author)",
    venue: "Advances in Computer Science Research, Proceedings of the International Conference on Sustainability Innovation in Computing and Engineering (ICSICE 2024)",
    year: "2025",
    status: "Conference paper",
    description:
      "Co-authored a research paper introducing a Graph-Based approach for Detecting and Grouping Stance in Multi-Participant Discussions.",
    abstract: "Motivated by the need for identifying and propagating stances along debate threads where this correspondence can be elusive, we present a stance propagation model built on the Heat Diffusion algorithm, and show that it can effectively spread stances over the nodes of a debate thread. Our authors are represented by the nodes of our model, posts written are oriented to the edges in this case, data has been retrieved from the CreateDebate platform. The experimental results show that the proposed model achieves comparable performance as the current state-of-the-art models. This algorithm has shown to be very effective at growing stances in unsupervised settings and, as such, these results provide valuable insight into the evolution of online debates.",
    doi: "https://doi.org/10.2991/978-94-6463-718-2_131",
    link: "https://doi.org/10.2991/978-94-6463-718-2_131",
    tags: ["NLP", "Graph Algorithms", "Stance Detection"]
  }
];
