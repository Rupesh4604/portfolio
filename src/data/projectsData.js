// Projects, shown the same way in every mode (light, Glass and Bold).
// Order is curated: the first three are featured on Home and at the top of /projects.
//
// title            short display name (also the #anchor slug)
// tag              one area: "Models" | "Systems" | "Tools" (the filter chips)
// stack            two or three words under the title in the list
// description      one sentence for cards
// longDescription  a short paragraph or two, written for the website (HTML allowed, sanitised)
// techStack        at most four tools
// featured         optional, for the three featured cards: { cta, paper } (paper = publication title)
export const projects = [
  {
    title: "Multi-agent knowledge assistant",
    tag: "Systems",
    stack: "RAG, LangChain",
    description: "Agents that route each question, retrieve from two knowledge sources and check the answer before replying.",
    longDescription:
      "Engineered a LangChain and Google Gemini powered multi-agent system with intelligent query triage, dual-source RAG (Parent-Child retrieval, query expansion, Flashrank re-ranking), dynamic tool-use for internal/external data access, and guardrail validation for reliable, domain-specific query handling.",
    techStack: ["LangChain", "Gemini", "FAISS", "RAG"],
    link: "https://github.com/Rupesh4604/Intelligent-Multi-Agent-Knowledge-Assistant",
    image: "https://raw.githubusercontent.com/Rupesh4604/images/main/assets_portfolio/agent.png",
    featured: { cta: "Case study" },
  },
  {
    title: "CNN and ViT for hyperspectral imagery",
    tag: "Models",
    stack: "Paper, PyTorch",
    description: "A hybrid convolution and transformer model that maps land cover from hyperspectral images with very few labels.",
    longDescription:
      "<p>Hyperspectral sensors record hundreds of narrow bands for every pixel, but labelled training data is scarce. This work compares 3D-CNNs, graph networks, CNNs and vision transformers on that problem, then pairs a Spectralformer backbone with SSRN-style spectral-spatial preprocessing.</p>"
      + "<p>Trained on only 10% of the labels, the model reaches 99.80% accuracy on Indian Pines and 97.54% on Pavia University. The work is published in Springer LNCS (PReMI).</p>",
    techStack: ["PyTorch", "Vision Transformer", "Hyperspectral"],
    link: "https://link.springer.com/chapter/10.1007/978-3-032-18477-1_34",
    image: "https://raw.githubusercontent.com/Rupesh4604/images/main/assets_portfolio/arch.jpg",
    featured: { cta: "Read the paper", paper: "Enhancing Hyperspectral Imagery Classification using CNN and ViT" },
  },
  {
    title: "rs-dl-architect",
    tag: "Tools",
    stack: "Agents, open source",
    description: "An open-source skill that gives coding agents expertise in designing vision models for satellite imagery.",
    longDescription:
      "<strong>rs-dl-architect</strong> is a lightweight, end-to-end framework built to design and evaluate deep learning architectures for remote sensing and Earth observation data."
      + "<br/><br/>"
      + "<ul class=\"list-disc pl-5 space-y-1\">"
      + "<li><strong>Agentic automation:</strong> Packaged as a reusable agent skill that proposes, configures, and benchmarks model architectures.</li>"
      + "<li><strong>Targeted tasks:</strong> Streamlines semantic segmentation, object detection, and change detection on satellite imagery.</li>"
      + "<li><strong>Advanced capabilities:</strong> Core support for multi-source data fusion (optical/SAR) and multi-temporal analysis.</li>"
      + "<li><strong>Production-ready:</strong> Built-in tooling for benchmarking model performance and ensuring interpretability.</li>"
      + "</ul>",
    techStack: ["Python", "PyTorch", "Agent skill", "Remote sensing"],
    link: "https://github.com/Rupesh4604/rs-dl-architect",
    image: "https://raw.githubusercontent.com/Rupesh4604/rs-dl-architect/main/images/rl-ds.png",
    featured: { cta: "View on GitHub" },
  },
  {
    title: "Quantum CNN for slum classification",
    tag: "Models",
    stack: "Paper, TFQ",
    description: "A hybrid quantum-classical network that maps informal settlements from Sentinel-2 imagery.",
    longDescription:
      "<p>A multi-channel quantum convolutional network built with TensorFlow Quantum and Cirq, using custom quantum convolution layers and MCQI image encoding. Spectral-intensity stratified sampling balances slum and non-slum training patches.</p>"
      + "<p>The model reaches 94.8% test accuracy and an F1 score of 0.933, ahead of a comparable classical CNN. Published in Quantum Information Processing.</p>",
    techStack: ["TensorFlow Quantum", "Cirq", "Sentinel-2"],
    link: "https://link.springer.com/article/10.1007/s11128-026-05134-z",
    image: "https://raw.githubusercontent.com/Rupesh4604/images/main/assets_portfolio/mqcnn.png",
  },
  {
    title: "3D CNN for slum classification",
    tag: "Models",
    stack: "Vision, Sentinel-2",
    description: "A 3D CNN that reads every Sentinel-2 band together to outline slum boundaries.",
    longDescription:
      "<p>A PyTorch 3D convolutional network that treats the spectral bands of Sentinel-2 imagery as a third dimension, so spectral and spatial patterns are learned together. It predicts patch by patch and stitches the results back into a full map of slum boundaries.</p>",
    techStack: ["PyTorch", "3D CNN", "Sentinel-2"],
    link: "",
    image: "https://raw.githubusercontent.com/Rupesh4604/images/main/assets_portfolio/cnn.png",
  },
  {
    title: "Rib segmentation with FPN and U-Net++",
    tag: "Models",
    stack: "Medical vision",
    description: "Finds and numbers all 20 ribs in a chest X-ray.",
    longDescription:
      "<p>U-Net, U-Net++ with an EfficientNet-B0 encoder, and FPN models trained on the VinDr-RibCXR dataset to segment and label each of the 20 ribs in a chest X-ray. The best model reaches a Dice score of 0.834 and holds up on the separate JSRT dataset.</p>",
    techStack: ["PyTorch", "U-Net++", "FPN", "Medical imaging"],
    link: "https://github.com/Rupesh4604/Labeling-Chest-X-Rays",
    image: "https://raw.githubusercontent.com/Rupesh4604/Labeling-Chest-X-Rays/main/Figures/CXR-Visualizer.png",
  },
  {
    title: "4x image super-resolution",
    tag: "Models",
    stack: "Vision",
    description: "A lightweight network that rebuilds 1080p game frames from 480×270 input.",
    longDescription:
      "<p>A compact residual CNN that upscales game frames four times, from 480×270 to 1920×1080. Eight residual blocks and PixelShuffle upsampling keep the model small, and mixed-precision training on 4,500 image pairs keeps it fast.</p>"
      + "<p>It beats bicubic upscaling on PSNR, SSIM and a perceptual quality score.</p>",
    techStack: ["PyTorch", "CNN", "Super-resolution"],
    link: "https://github.com/Rupesh4604/Image-Super-Resolution",
    image: "https://raw.githubusercontent.com/Rupesh4604/images/main/assets_portfolio/hr.png",
  },
  {
    title: "Pedestrian tracking with YOLOv5 and DeepSORT",
    tag: "Systems",
    stack: "Vision, tracking",
    description: "Follows people across camera views and serves the tracks through an API.",
    longDescription:
      "<p>Combines YOLOv5 detection, DeepSORT tracking and a ResNet-50 re-identification model, so a person keeps the same ID as they move between cameras. It re-identifies people with 87% accuracy, runs in real time on standard hardware and is served through FastAPI.</p>",
    techStack: ["YOLOv5", "DeepSORT", "FastAPI"],
    link: "https://github.com/Rupesh4604/Pedestrian-Tracking-using-Deep-Learning",
    image: "https://raw.githubusercontent.com/Rupesh4604/Pedestrian-Tracking-using-Deep-Learning/main/person-tracking.png",
  },
  {
    title: "Financial news sentiment with FinBERT",
    tag: "Models",
    stack: "NLP",
    description: "Reads financial news sentences and labels them positive, negative or neutral.",
    longDescription:
      "<p>FinBERT, BERT and DistilBERT fine-tuned on 4,840 expert-labelled sentences from the Financial PhraseBank and compared side by side. FinBERT comes out ahead with 90.9% accuracy and a weighted F1 of 0.91, against 0.86 for BERT and 0.81 for DistilBERT.</p>"
      + "<p>An optimizer and learning-rate study shows how each model converges.</p>",
    techStack: ["Hugging Face", "FinBERT", "PyTorch"],
    link: "https://github.com/Rupesh4604/Financial-News-Sentiment-Analysis",
    image: "https://opengraph.githubassets.com/1/Rupesh4604/Financial-News-Sentiment-Analysis",
  },
  {
    title: "ProdHub productivity app",
    tag: "Systems",
    stack: "Full stack, Gemini",
    description: "Projects, tasks, habits and calendar in one app, with Gemini turning goals into steps.",
    longDescription:
      "<p>A serverless React and Firebase app for managing projects, tasks, habits and a calendar in one place. Gemini breaks a goal into concrete tasks, and Google Calendar shows them in your schedule through client-side OAuth.</p>"
      + "<p>Firestore security rules keep each person's data private.</p>",
    techStack: ["React", "Firebase", "Gemini API"],
    link: "https://github.com/Rupesh4604/ProdHub",
    image: "https://raw.githubusercontent.com/Rupesh4604/ProdHub/main/images/dashboard_2.png",
  },
  {
    title: "Paraphrase detection with a Siamese LSTM",
    tag: "Models",
    stack: "NLP",
    description: "Decides whether two sentences say the same thing.",
    longDescription:
      "<p>A Siamese LSTM with pre-trained GloVe embeddings, trained on the Microsoft Research Paraphrase Corpus. It reaches 91.4% test accuracy, with every experiment tracked in MLflow.</p>",
    techStack: ["TensorFlow", "LSTM", "MLflow"],
    link: "https://github.com/Rupesh4604/Paraphrase_Identification_on_MRPC_Dataset",
    image: "https://opengraph.githubassets.com/1/Rupesh4604/Paraphrase_Identification_on_MRPC_Dataset",
  },
  {
    title: "Stock price forecasting",
    tag: "Models",
    stack: "Time series",
    description: "Classical and neural forecasts of daily closing prices, compared.",
    longDescription:
      "<p>Checks stationarity and seasonality with ADF tests, ACF/PACF plots and decomposition, then compares ARIMA, SARIMA and LSTM forecasts. A stateful LSTM gives the best fit, with an RMSE of 10.3 and R² of 0.83.</p>",
    techStack: ["Statsmodels", "LSTM", "Pandas"],
    link: "https://github.com/Rupesh4604/Time-Series-Forecasting-for-Financial-Markets",
    image: "https://opengraph.githubassets.com/1/Rupesh4604/Time-Series-Forecasting-for-Financial-Markets",
  },
  {
    title: "Emergency services and flood zones locator",
    tag: "Systems",
    stack: "GIS, FastAPI",
    description: "Finds the nearest emergency services and shows flood risk on a live map.",
    longDescription:
      "<p>A disaster-preparedness web app with a Leaflet map, live geolocation, filters and flood-zone layers from PostGIS. A FastAPI backend with GiST indexes and Redis caching makes location queries 99% faster. Deployed on Google Cloud.</p>",
    techStack: ["FastAPI", "PostGIS", "Redis", "Leaflet"],
    link: "https://github.com/Rupesh4604/Emergency-Services-Locator",
    image: "https://raw.githubusercontent.com/Rupesh4604/Emergency-Services-Locator/main/images/ios.png",
  },
  {
    title: "GeoWebClient",
    tag: "Tools",
    stack: "GIS, OGC",
    description: "A web map client for browsing and querying GeoServer layers.",
    longDescription:
      "<p>A browser dashboard built on OpenLayers that connects to GeoServer through the OGC WMS and WFS standards. You can browse layers, query features and run simple analyses on data stored in PostGIS.</p>",
    techStack: ["OpenLayers", "GeoServer", "PostGIS"],
    link: "https://github.com/Rupesh4604/GeoWebClient",
    image: "https://raw.githubusercontent.com/Rupesh4604/GeoWebClient/main/geowebclient.png",
  },
  {
    title: "SOS WebClient",
    tag: "Tools",
    stack: "Sensors, OGC",
    description: "A browser client for finding sensors and charting their readings.",
    longDescription:
      "<p>A lightweight client for OGC Sensor Observation Service endpoints such as istSOS. It discovers sensors, places them on a map and plots their readings as tables and time-series charts.</p>",
    techStack: ["JavaScript", "istSOS", "Google Charts"],
    link: "https://github.com/Rupesh4604/SOS-WebClient-Interface",
    image: "https://raw.githubusercontent.com/Rupesh4604/SOS-WebClient-Interface/main/sos.png",
  },
  {
    title: "Triple GAN",
    tag: "Models",
    stack: "Generative",
    description: "A reproduction of Triple GAN for semi-supervised image generation.",
    longDescription:
      "<p>A reimplementation of the Triple Generative Adversarial Nets paper that generates labelled synthetic images, reaching 99.10% peak classification accuracy. It also compares VAEs and autoregressive models as other ways to make synthetic training data.</p>",
    techStack: ["GANs", "Semi-supervised"],
    link: "https://github.com/Rupesh4604/Triple-GAN",
    image: "https://raw.githubusercontent.com/Rupesh4604/Triple-GAN/main/triple%20gan.png",
  },
];

export const projectTags = ["Models", "Systems", "Tools"];
export const featuredProjects = projects.filter((p) => p.featured);
