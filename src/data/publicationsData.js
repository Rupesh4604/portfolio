export const publications = [
  {
    title: "Quantum Convolutional Neural Network for Slum Classification using Sentinel-2 Imagery",
    authors: "Rupesh et al.",
    venue: "Under Review - 2025",
    year: "2025",
    description:
      "Proposed a Multi-channel Quantum Convolutional Neural Network using TensorFlow Quantum and Cirq for patch-level classification of urban slums from Sentinel-2 imagery."
  },
  {
    title: "Enhancing Hyperspectral Imagery Classification using CNN and ViT",
    authors: "Rupesh et al.",
    venue: "Presented at ICICA-24, Submitted to Pattern Recognition and Machine Intelligence (PReMI) 2025.",
    year: "2024",
    description:
      "Authored and presented the research work integrating Convolutional Neural Networks and Vision Transformers to improve hyperspectral image classification performance.",
    abstract:" Deep Learning Algorithms are becoming predominant in Remote sensing, particularly in Hyperspectral Images (HSI), while Convolutional Neural Networks (CNN) and their variations are widely employed due to their proficiency in extracting local features, their limitations in capturing sequential properties of spectral characteristics have led to increased attention on transformers. In computer vision, there’s a notable shift towards Vision Transformer (ViT)-based models. However, these models lack image-specific inductive bias, such as translational equivariance and locality. The application of transformers in HSI faces a critical challenge due to the absence of suitable pre-processing and optimization methods, greatly impacting the overall performance of the models. To address this, we take the Spectralformer, a ViT-based model as a backbone, dropping the Group spectral Embedding (GSE) module and employing the preprocessing strategies utilized in the end - to end spectral–spatial residual network (SSRN) to extract features of the hyperspectral data, and it also helps in analyzing the spectral and spatial features of the hyperspectral data, with all these techniques combined our model had shown a phenomenal increase in accuracy by leveraging the ViT backbone, even with lesser training samples than in previous cases. Thus, showcasing the importance of early-stage feature processing and fully unleashing the capabilities of the ViT."
  },
  {
    title: "Graph-Based Stance Grouping in Multi-Participant Discussions",
    authors: "Rupesh et al.",
    venue: "Advances in Computer Science Research, Proceedings of the International Conference on Sustainability Innovation in Computing and Engineering (ICSICE 2024)",
    year: "2025",
    description:
      "Co-authored a research paper introducing a Graph-Based approach for Detecting and Grouping Stance in Multi-Participant Discussions.",
    abstract: "Motivated by the need for identifying and propagating stances along debate threads where this correspondence can be elusive, we present a stance propagation model built on the Heat Diffusion algorithm, and show that it can effectively spread stances over the nodes of a debate thread. Our authors are represented by the nodes of our model, posts written are oriented to the edges in this case, data has been retrieved from the CreateDebate platform. The experimental results show that the proposed model achieves comparable performance as the current state-of-the-art models. This algorithm has shown to be very effective at growing stances in unsupervised settings and, as such, these results provide valuable insight into the evolution of online debates.",
    doi: "https://doi.org/10.2991/978-94-6463-718-2_131"
  }
];