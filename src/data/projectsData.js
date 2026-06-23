// Projects are ordered intentionally: LLM / agentic / applied-ML work leads,
// because the homepage marquee features projects.slice(0, 6).
// Geospatial & remote-sensing work follows as supporting depth.
export const projects = [
  {
    title: "Intelligent Multi-Agent RAG System",
    description:
      "Multi-agent RAG with query triage, parent-child retrieval, Flashrank re-ranking, tool-use, and guardrails.",
    longDescription:
      "Engineered a LangChain and Google Gemini powered multi-agent system with intelligent query triage, dual-source RAG (Parent-Child retrieval, query expansion, Flashrank re-ranking), dynamic tool-use for internal/external data access, and guardrail validation for reliable, domain-specific query handling.",
    techStack: ["LangChain", "FAISS", "Gemini", "Agents", "Hierarchical RAG", "Guardrails"],
    link: "https://github.com/Rupesh4604/Intelligent-Multi-Agent-Knowledge-Assistant",
    image: "https://raw.githubusercontent.com/Rupesh4604/images/main/assets_portfolio/agent.png",
    videoEmbed: ""
  },
  {
    title: "rs-dl-architect",
    description:
      "An agentic Skill that automates deep-learning architecture design & evaluation for geospatial / RS tasks.",
    longDescription:
      "<strong>rs-dl-architect</strong> is a lightweight, end-to-end framework built to design and evaluate deep learning architectures for remote sensing and Earth observation data."
      + "<br/><br/>"
      + "<ul class=\"list-disc pl-5 space-y-1\">"
      + "<li><strong>Agentic automation:</strong> Packaged as a reusable agent Skill that proposes, configures, and benchmarks model architectures.</li>"
      + "<li><strong>Targeted tasks:</strong> Streamlines semantic segmentation, object detection, and change detection on satellite imagery.</li>"
      + "<li><strong>Advanced capabilities:</strong> Core support for multi-source data fusion (optical/SAR) and multi-temporal analysis.</li>"
      + "<li><strong>Production-ready:</strong> Built-in tooling for benchmarking model performance and ensuring interpretability.</li>"
      + "</ul>",
    techStack: ["Python", "PyTorch", "Agent Skill", "Computer Vision", "Remote Sensing"],
    link: "https://github.com/Rupesh4604/rs-dl-architect",
    image: "https://raw.githubusercontent.com/Rupesh4604/rs-dl-architect/main/images/rl-ds.png",
    videoEmbed: ""
  },
  {
    title: "ProdHub: AI-Powered Productivity Hub",
    description:
      "Full-stack serverless app with Gemini-powered goal decomposition and Google Calendar integration.",
    longDescription:
      "ProdHub is a modern, all-in-one web application built to help you organize, achieve, and grow. Seamlessly manage projects, tasks, habits, and your calendar from a single, intuitive platform - all with smart AI-powered features and robust security."
      + "<br/> - Architected and developed a full-stack, serverless productivity application using React.js and Firebase (Firestore, Authentication) for comprehensive personal, project, and task management."
      + "<br/> - Engineered intelligent features by integrating the Google Gemini API for context-aware task generation and AI goal decomposition, plus the Google Calendar API for schedule visualization via secure, client-side OAuth 2.0."
      + "<br/> - Designed a real-time, persistent data architecture using Firestore, ensuring data integrity and user privacy through secure authentication and data rules.",
    techStack: ["React.js", "Firebase", "Gemini API", "Google APIs", "OAuth 2.0"],
    link: "https://github.com/Rupesh4604/ProdHub",
    image: "https://raw.githubusercontent.com/Rupesh4604/ProdHub/main/images/dashboard_2.png",
    videoEmbed: ""
  },
  {
    title: "Financial News Sentiment Analysis (FinBERT)",
    description:
      "Fine-tuned FinBERT for financial sentiment classification - 90.9% accuracy, 0.91 F1 vs BERT/DistilBERT baselines.",
    longDescription:
      "An NLP sentiment-classification pipeline on the Financial PhraseBank dataset (4,840 expert-annotated sentences)."
      + "<br/> - Fine-tuned transformer language models (FinBERT, BERT, DistilBERT) and benchmarked them head-to-head for financial-text sentiment classification."
      + "<br/> - Achieved best performance with fine-tuned <strong>FinBERT: 90.9% accuracy, weighted F1 of 0.91</strong>, beating the BERT (0.86) and DistilBERT (0.81) baselines."
      + "<br/> - Ran a controlled optimizer study (AdamW, RMSprop, SGD/NAG) and learning-rate sweeps to characterise convergence behaviour.",
    techStack: ["Transformers", "Hugging Face", "FinBERT", "BERT", "NLP", "PyTorch"],
    link: "https://github.com/Rupesh4604/Financial-News-Sentiment-Analysis",
    image: "https://opengraph.githubassets.com/1/Rupesh4604/Financial-News-Sentiment-Analysis",
    videoEmbed: ""
  },
  {
    title: "Image Super-Resolution (4x SISR)",
    description:
      "Lightweight residual CNN in PyTorch for 4x super-resolution on 4,500 gaming LR-HR pairs; mixed-precision, PixelShuffle.",
    longDescription:
      "A single-image super-resolution (SISR) pipeline that reconstructs 1920x1080 HR frames from 480x270 LR gaming imagery at a 4x upscale factor."
      + "<br/> - Designed a lightweight CNN with eight residual blocks, global residual connection, and PixelShuffle sub-pixel upsampling in PyTorch."
      + "<br/> - Trained with L1 loss, Adam, cosine-annealing LR, and mixed-precision (AMP) on a 16 GB Kaggle-challenge dataset; selected the best checkpoint by validation PSNR."
      + "<br/> - Evaluated with PSNR / SSIM and a composite perceptual score, outperforming bicubic interpolation baselines.",
    techStack: ["PyTorch", "CNN", "Super-Resolution", "Mixed Precision", "PSNR/SSIM"],
    link: "https://github.com/Rupesh4604/Image-Super-Resolution",
    image: "https://raw.githubusercontent.com/Rupesh4604/images/main/assets_portfolio/hr.png",
    videoEmbed: ""
  },
  {
    title: "Pedestrian Tracking - YOLOv5 + Deep SORT",
    description:
      "Multi-camera pedestrian tracking served via FastAPI; 87% re-ID accuracy with a ResNet-50 feature extractor.",
    longDescription:
      "An end-to-end multi-object tracking pipeline combining YOLOv5 detection with Deep SORT identity tracking across camera views."
      + "<br/> - Engineered and deployed a modular YOLOv5 + Deep SORT pipeline served through a FastAPI backend."
      + "<br/> - Achieved 87% re-identification accuracy across different camera angles using a ResNet-50 feature-extraction model, with real-time processing on standard hardware.",
    techStack: ["YOLOv5", "Deep SORT", "FastAPI", "Computer Vision", "Deep Learning"],
    link: "https://github.com/Rupesh4604/Pedestrian-Tracking-using-Deep-Learning",
    image: "https://raw.githubusercontent.com/Rupesh4604/Pedestrian-Tracking-using-Deep-Learning/main/person-tracking.png",
    videoEmbed: ""
  },
  {
    title: "Semantic Paraphrase Identification",
    description:
      "Siamese-LSTM with GloVe embeddings for semantic paraphrase detection on MRPC - 91.4% test accuracy.",
    longDescription:
      "An NLP semantic-similarity model that decides whether two sentences are paraphrases."
      + "<br/> - Developed a Siamese LSTM network for paraphrase detection on the Microsoft Research Paraphrase Corpus (MRPC)."
      + "<br/> - Enhanced semantic representation with pre-trained GloVe embeddings, reaching 91.4% test accuracy."
      + "<br/> - Built an end-to-end pipeline with transfer learning and early stopping, integrating MLflow for experiment tracking.",
    techStack: ["NLP", "Siamese LSTM", "GloVe", "MLflow", "TensorFlow"],
    link: "https://github.com/Rupesh4604/Paraphrase_Identification_on_MRPC_Dataset",
    image: "https://opengraph.githubassets.com/1/Rupesh4604/Paraphrase_Identification_on_MRPC_Dataset",
    videoEmbed: ""
  },
  {
    title: "Time-Series Forecasting - Financial Markets",
    description:
      "ARIMA / SARIMA / stateful-LSTM forecasting of equity prices; best LSTM hit RMSE 10.3, R2 0.83.",
    longDescription:
      "A quantitative time-series study forecasting stock closing prices."
      + "<br/> - Performed EDA on market data and used ADF tests, ACF/PACF, and decomposition to assess stationarity and seasonality."
      + "<br/> - Built and compared ARIMA, SARIMA, and LSTM models; a stateful LSTM delivered the best performance (RMSE 10.3, R2 0.83).",
    techStack: ["Time Series", "ARIMA/SARIMA", "LSTM", "Statsmodels", "Pandas"],
    link: "https://github.com/Rupesh4604/Time-Series-Forecasting-for-Financial-Markets",
    image: "https://opengraph.githubassets.com/1/Rupesh4604/Time-Series-Forecasting-for-Financial-Markets",
    videoEmbed: ""
  },
  {
    title: "Hyperspectral Imagery Classification (CNN + ViT)",
    description:
      "Compared 3D-CNN, GCN, CNN, and ViT for HSI; SOTA accuracy in a low-data regime. PReMI 2025 paper.",
    longDescription:
      "Implemented and compared advanced deep learning architectures (3D-CNN, GCNs, CNNs, Vision Transformers) to enhance spectral-spatial feature learning for hyperspectral imagery classification."
      + "<br/> - Engineered a transformer-based model (Spectralformer backbone with SSRN-style preprocessing) that reached 99.80% on Indian Pines and 97.54% on PaviaU with as little as 10% training data."
      + "<br/> - First-authored \"Enhancing Hyperspectral Imagery Classification using CNN and ViT\", presented at PReMI 2025 (Springer).",
    techStack: ["PyTorch", "Vision Transformers", "Deep Learning", "Remote Sensing"],
    link: "https://link.springer.com/chapter/10.1007/978-3-032-18477-1_34",
    image: "https://raw.githubusercontent.com/Rupesh4604/images/main/assets_portfolio/arch.jpg",
    videoEmbed: ""
  },
  {
    title: "Quantum CNN for Slum Classification",
    description:
      "Multi-Channel QCNN (TFQ/Cirq) for slum detection on Sentinel-2 - 94.8% acc, 0.933 F1. QIP journal paper.",
    longDescription:
      "A research-driven hybrid quantum-classical model for pixel/patch-level slum classification from Sentinel-2 imagery."
      + "<br/> - Built a Multi-Channel Quantum CNN with custom quantum convolutional layers and MCQI encoding using TensorFlow Quantum and Cirq."
      + "<br/> - Addressed class imbalance via spectral-intensity stratified sampling; achieved 94.8% test accuracy and 0.933 F1, outperforming a comparable classical CNN."
      + "<br/> - Published in the Quantum Information Processing (QIP) journal, 2025.",
    techStack: ["TensorFlow Quantum", "Cirq", "Keras", "Satellite Imagery"],
    link: "https://link.springer.com/article/10.1007/s11128-026-05134-z",
    image: "https://raw.githubusercontent.com/Rupesh4604/images/main/assets_portfolio/mqcnn.png",
    videoEmbed: ""
  },
  {
    title: "3D CNN for Slum Classification",
    description:
      "3D CNN in PyTorch for multi-band Sentinel-2 slum detection with patch-based inference.",
    longDescription:
      "Built a 3D Convolutional Neural Network in PyTorch for multi-band Sentinel-2 imagery. Handles patch-based inference and full image reconstruction for slum boundary detection.",
    techStack: ["PyTorch", "3D CNN", "Sentinel-2"],
    link: "",
    image: "https://raw.githubusercontent.com/Rupesh4604/images/main/assets_portfolio/cnn.png",
    videoEmbed: ""
  },
  {
    title: "GeoWebClient",
    description:
      "Interoperable GIS dashboard using OGC WMS/WFS via OpenLayers + GeoServer.",
    longDescription:
      "A client-server-based interoperable Geographic Information System (GIS) for visualizing, querying, and analyzing geospatial data using OGC-compliant WMS and WFS services with advanced map interaction and analysis features. This system allows seamless access to GeoServer-hosted spatial layers through an interactive web dashboard built with OpenLayers.",
    techStack: ["JavaScript", "OpenLayers", "GeoServer", "PostGIS", "PostgreSQL"],
    link: "https://github.com/Rupesh4604/GeoWebClient",
    image: "https://raw.githubusercontent.com/Rupesh4604/GeoWebClient/main/geowebclient.png",
    videoEmbed: ""
  },
  {
    title: "SOS WebClient Interface",
    description:
      "Browser client for OGC SOS (istSOS) with real-time sensor discovery and Google Charts.",
    longDescription:
      "SOS WebClient Interface (istSOS Integration) is a lightweight, browser-based application designed to interact with OGC-compliant Sensor Observation Service (SOS) endpoints, particularly those hosted using istSOS."
      + "<br/> - Enables users to dynamically discover, filter, and visualize sensor data through a user-friendly interface, combining real-time mapping, tabular output, and time-series charts."
      + "<br/> - Implemented real-time sensor discovery and metadata display with interactive, map-based visualization."
      + "<br/> - Integrated Google Charts for dynamic visualization of sensor data through maps, tables, and time-series graphs.",
    techStack: ["JavaScript", "Google Charts", "istSOS", "Docker"],
    link: "https://github.com/Rupesh4604/SOS-WebClient-Interface",
    image: "https://raw.githubusercontent.com/Rupesh4604/SOS-WebClient-Interface/main/sos.png",
    videoEmbed: ""
  },
  {
    title: "Emergency Services & Flood Zones Locator",
    description:
      "Disaster-response web app; FastAPI + Redis + GiST indexing cut location query times by 99%.",
    longDescription:
      "Interactive web application for disaster preparedness."
      + "<br/> - Built a responsive Leaflet.js map with interactive filters, live geolocation, flood modeling, and PostGIS spatial analysis."
      + "<br/> - Implemented a FastAPI backend with GiST indexing and Redis caching, reducing location query times by 99%, deployed on Google Cloud.",
    techStack: ["FastAPI", "PostGIS", "Redis", "Leaflet.js", "GCP"],
    link: "https://github.com/Rupesh4604/Emergency-Services-Locator",
    image: "https://raw.githubusercontent.com/Rupesh4604/Emergency-Services-Locator/main/images/ios.png",
    videoEmbed: ""
  },
  {
    title: "Triple GAN",
    description:
      "Reproduced Triple GAN for semi-supervised synthetic-data generation; 99.10% peak accuracy.",
    longDescription:
      "Reproduced the \"Triple Generative Adversarial Nets\" architecture (arXiv:1703.02291) to generate high-quality synthetic image datasets with a peak accuracy of 99.10%. Explored synthetic data generation techniques including VAEs and autoregressive models.",
    techStack: ["GANs", "Deep Learning", "Computer Vision"],
    link: "https://github.com/Rupesh4604/Triple-GAN",
    image: "https://raw.githubusercontent.com/Rupesh4604/Triple-GAN/main/triple%20gan.png",
    videoEmbed: ""
  },
  {
    title: "Rib Segmentation & Labelling (FPN / U-Net++)",
    description:
      "Automatic rib segmentation & labeling in chest X-rays (Dice 0.834) on VinDr-RibCXR.",
    longDescription:
      "A deep-learning project for automatic rib segmentation and labeling in chest X-rays (CXR). Using the VinDr-RibCXR dataset, models such as U-Net, U-Net++ with EfficientNet-B0, and FPN are trained to segment and label 20 ribs. The best model achieves a Dice score of 0.834, validated on the JSRT dataset.",
    techStack: ["Deep Learning", "U-Net++", "FPN", "Medical Imaging"],
    link: "https://github.com/Rupesh4604/Labeling-Chest-X-Rays",
    image: "https://raw.githubusercontent.com/Rupesh4604/Labeling-Chest-X-Rays/main/Figures/CXR-Visualizer.png",
    videoEmbed: ""
  }
];
