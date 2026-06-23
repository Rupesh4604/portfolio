export const publications = [
  {
    title: "Quantum Convolutional Neural Network for Slum Classification using Sentinel-2 Imagery",
    authors: "Archana G Pai, R. K. Y. Mediboyina.",
    venue: "Quantum Information Processing (QIP) Journal",
    year: "2025",
    description:
      "Proposed a Multi-channel Quantum Convolutional Neural Network using TensorFlow Quantum and Cirq for patch-level classification of urban slums from Sentinel-2 imagery.",
      abstract: "This study explores the novel application of Quantum ConvolutionalNeural Networks (QCNNs) for slum classification using Sentinel-2 satellite imagery. While traditional machine learning models and deep CNNs have been employed for informal settlement detection, they often struggle with class imbalance, high intra-class variability, and limited training data. We propose a hybrid quantum-classical model based on Multi-Channel Quantum Image (MCQI) encoding and evaluate its performance against a structurally analogous classical CNN. To address the significant class imbalance in the dataset, we apply a stratified sampling strategy based on spectral intensity binning. Our results demonstrate that the QCNN achieves superior performance, particularly on the minority (slum) class, with a test accuracy of 94.8% and an F1-score of 0.933, outperforming the classical CNN baseline. Ablation studies confirm the importance of sampling strategy and label purity thresholds. These findings underscore the potential of quantum learning architectures in remote sensing tasks with limited or imbalanced data",
      doi: "https://link.springer.com/article/10.1007/s11128-026-05134-z"
  },
  {
    title: "Enhancing Hyperspectral Imagery Classification using CNN and ViT",
    authors: "R. K. Y. Mediboyina et al.",
    venue: "Pattern Recognition and Machine Intelligence (PReMI), IIT Delhi",
    year: "2025",
    description:
      "Authored and presented the research work integrating Convolutional Neural Networks and Vision Transformers to improve hyperspectral image classification performance.",
    abstract:" Deep Learning Algorithms are becoming predominant in Remote sensing, particularly in Hyperspectral Images (HSI), while Convolutional Neural Networks (CNN) and their variations are widely employed due to their proficiency in extracting local features, their limitations in capturing sequential properties of spectral characteristics have led to increased attention on transformers. In computer vision, there’s a notable shift towards Vision Transformer (ViT)-based models. However, these models lack image-specific inductive bias, such as translational equivariance and locality. The application of transformers in HSI faces a critical challenge due to the absence of suitable pre-processing and optimization methods, greatly impacting the overall performance of the models. To address this, we take the Spectralformer, a ViT-based model as a backbone, dropping the Group spectral Embedding (GSE) module and employing the preprocessing strategies utilized in the end - to end spectral–spatial residual network (SSRN) to extract features of the hyperspectral data, and it also helps in analyzing the spectral and spatial features of the hyperspectral data, with all these techniques combined our model had shown a phenomenal increase in accuracy by leveraging the ViT backbone, even with lesser training samples than in previous cases. Thus, showcasing the importance of early-stage feature processing and fully unleashing the capabilities of the ViT.",
    doi: "https://link.springer.com/chapter/10.1007/978-3-032-18477-1_34"
  },
  {
    title: "Slum Detection Using U-Net Attention Gate on Mid-Resolution Satellite Imagery",
    // TODO: confirm full author list & order
    authors: "R. K. Y. Mediboyina et al. (co-author)",
    venue: "Journal of the Indian Society of Remote Sensing (Springer)",
    year: "2026",
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
    authors: "Co-Aurthor Rupesh Kumar Yadav Mediboyina.",
    venue: "Advances in Computer Science Research, Proceedings of the International Conference on Sustainability Innovation in Computing and Engineering (ICSICE 2024)",
    year: "2025",
    description:
      "Co-authored a research paper introducing a Graph-Based approach for Detecting and Grouping Stance in Multi-Participant Discussions.",
    abstract: "Motivated by the need for identifying and propagating stances along debate threads where this correspondence can be elusive, we present a stance propagation model built on the Heat Diffusion algorithm, and show that it can effectively spread stances over the nodes of a debate thread. Our authors are represented by the nodes of our model, posts written are oriented to the edges in this case, data has been retrieved from the CreateDebate platform. The experimental results show that the proposed model achieves comparable performance as the current state-of-the-art models. This algorithm has shown to be very effective at growing stances in unsupervised settings and, as such, these results provide valuable insight into the evolution of online debates.",
    doi: "https://doi.org/10.2991/978-94-6463-718-2_131"
  }
];
