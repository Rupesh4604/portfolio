export const projectsOld = [
  {
    title: "Intelligent Multi-Agent RAG System",
    description:
      "Engineered a LangChain and Google Gemini powered multi-agent system with intelligent query triage, dual-source RAG (Parent-Child retrieval, query expansion, Flashrank re-ranking), dynamic tool-use for internal/external data access, and guardrail validation for reliable, domain-specific query handling.",
    techStack: ["Langchain", "FAISS", "Gemini2.5", "Hierarchical RAG"],
    link: "",
    image: "",
    videoEmbed: ""
  },
  {
    title: "Quantum Convolutional Neural Network for Slum Classification",
    description:
      "A research-driven implementation of MQCNN using TensorFlow Quantum and Cirq for pixel-level slum classification from Sentinel-2 imagery. Includes custom quantum convolutional layers and MCQI encoding.",
    techStack: ["TensorFlow Quantum", "Cirq", "Keras", "Satellite Imagery"],
    link: "https://github.com/your-qcnn-project",
    image: "src/assets/mqcnn.png",
    videoEmbed: ""
  },
  {
    title: "ProdHub: AI-Powered Personal Productivity Hub",
    description:
      "ProdHub is a modern, all-in-one web application built to help you organize, achieve, and grow. Seamlessly manage projects, tasks, habits, and your calendar from a single, intuitive platform—all with smart AI-powered features and robust security.",
    techStack: ["React.js", "Firebase", "Google APIs"],
    link: "https://github.com/Rupesh4604/ProdHub",
    image: "src/assets/Prodhub.png",
    videoEmbed: ""
  },
  {
    title: "SOS WebClient Interface",
    description:
      "SOS WebClient Interface (istSOS Integration) is a lightweight, browser-based application designed to interact with OGC-compliant Sensor Observation Service (SOS) endpoints, particularly those hosted using istSOS with real-time sensor discovery, metadata visualization, and dynamic charting via Google Charts.",
    techStack: ["JavaScript", "Google Charts", "istSOS", "Docker"],
    link: "https://github.com/Rupesh4604/SOS-WebClient-Interface",
    image: "",
    videoEmbed: ""
  },
  {
    title: "GeoWebClient",
    description:
      "A client-server-based interoperable Geographic Information System (GIS) for visualizing, querying, and analyzing geospatial data using OGC-compliant WMS and WFS services with advanced map interaction and analysis features. This system allows seamless access to GeoServer-hosted spatial layers through an interactive web dashboard built with OpenLayers.",
    techStack: ["JavaScript", "OpenLayers", "GeoServer", "Apache Tomcat", "PostgreSQL", "PostGIS"],
    link: "https://github.com/Rupesh4604/GeoWebClient",
    image: "",
    videoEmbed: ""
  },
  {
    title: "3D CNN for Slum Classification",
    description:
      "Built a 3D Convolutional Neural Network in PyTorch for multi-band Sentinel-2 imagery. Handles patch-based inference and full image reconstruction for slum boundary detection.",
    techStack: ["PyTorch", "3D CNN", "Sentinel-2"],
    link: "",
    image: "src/assets/cnn.png",
    videoEmbed: ""
  },
  {
    title: "Emergency Services and Flood Zones Locator",
    description:
      "Interactive Web Application for Disaster Preparedness - Built a responsive web application utilizing Leaflet.js and the Geolocation API to identify nearby emergency facilities and display flood risk zones with user-interactive filtering options.",
    techStack: ["JavaScript", "Leaflet.js", "Geolocation API", "Overpass API"],
    link: "https://github.com/Rupesh4604/Emergency-Services-Locator",
    image: "https://raw.githubusercontent.com/Rupesh4604/Emergency-Services-Locator/main/images/ios.png",
    videoEmbed: ""
  },
  {
    title: "Hyperspectral Imagery Classification",
    description:
      "Implemented and compared advanced deep learning architectures such as 3DCNN, GCNs, CNNs, and Vision Transformers (ViT) to enhance spectral-spatial feature learning for hyperspectral imagery classification."
      + "<br/> - Co-authored the paper \"Enhancing Hyperspectral Imagery Classification using CNN and ViT\", accepted at ICICA-2024, and leveraged tools like EarthMapper, Spectralformer, and HVT for experimentation.",
    techStack: ["pytorch", "deep learning", "transformers"],
    link: "",
    image: "src/assets/arch.jpg",
    videoEmbed: ""
  },
  {
    title: "Pedestrian Tracking using DeepSort & YOLO",
    description:
      "Implemented pedestrian tracking using YOLOv5 for detection and Deep SORT for tracking across multiple camera views, integrating deep learning techniques to maintain identity consistency."
      + "<br/> - Developed a robust tracking system that achieved 87% accuracy in person re-identification across different camera angles, with real-time processing capabilities on standard hardware.",
    techStack: ["YOLOv5", "Deep SORT", "Computer Vision", "Deep Learning"],
    link: "https://github.com/Rupesh4604/Pedestrian-Tracking-using-Deep-Learning",
    image: "src/assets/person-tracking.png",
    videoEmbed: ""
  },
  {
    title: "Triple GAN",
    description:
      "Reproduced the \"Triple Generative Adversarial Nets\" architecture (arXiv:1703.02291) to generate high-quality synthetic image datasets with a peak accuracy of 99.10%."
      + " Explored synthetic data generation techniques like VAEs and autoregressive models.",
    topics: ["GANs", "Deep Learning", "Computer Vision"],
    link: "https://github.com/Rupesh4604/Triple-GAN",
    image: "https://raw.githubusercontent.com/Rupesh4604/Triple-GAN/main/triple%20gan.png",
    videoEmbed: ""
  },
  {
    title: "RIBS Identification, Labelling and Segmentation using FPN",
    description:
      "Labeling-Chest-X-Rays is a deep learning-based project for automatic rib segmentation and labeling in chest X-rays (CXR). Using the VinDr-RibCXR dataset, models like U-Net, U-Net++ with EfficientNet-B0, and FPN are trained to segment and label 20 ribs. The best model achieves a Dice score of 0.834.",
    topics: ["Deep Learning", "Computer Vision", "Medical Imaging"],
    link: "https://github.com/Rupesh4604/Labeling-Chest-X-Rays",
    image: "https://raw.githubusercontent.com/Rupesh4604/Labeling-Chest-X-Rays/main/Figures/CXR-Visualizer.png",
    videoEmbed: ""
  }
];

// export const full_descriptions = [
//   { title: "ProdHub: AI-Powered Personal Productivity Hub",
//     description:
//       "ProdHub is a modern, all-in-one web application built to help you organize, achieve, and grow. Seamlessly manage projects, tasks, habits, and your calendar from a single, intuitive platform—all with smart AI-powered features and robust security."
//       + "<br/> - Architected and developed a full-stack, serverless productivity application using React.js and Firebase (Firestore, Authentication) for comprehensive personal, project, and task management."
//       + "<br/> - Engineered intelligent features by integrating the Google Gemini API for context-aware task generation and the Google Calendar API for schedule visualization via secure, client-side OAuth 2.0."
//       + "<br/> - Designed a real-time, persistent data architecture using Firestore, ensuring data integrity and user privacy through secure authentication and data rules."
//   },
//   {
//     title: "Emergency Services and Flood Zones Locator",
//     description:
//       "Interactive Web Application for Disaster Preparedness - Built a responsive web application utilizing Leaflet.js and the Geolocation API to identify nearby emergency facilities and display flood risk zones with user-interactive filtering options."
//       + "<br/> - Integrated Overpass API for real-time data on hospitals, rescue centers, and shelters."
//       + "<br/> - Performed geospatial analysis using rainfall, slope, and population density data to create a detailed flood risk assessment model."
//       + "<br/> - Built a comprehensive emergency services locator app for both Android and iOS platforms, including tablet and iPad versions, deployed to app stores with full responsiveness and user-friendly interface."
//   },
//   {
//     title: "SOS WebClient Interface",
//     description:

//   },
//   {
//     title: "GeoWebClient",
//     description:
//       "A client-server-based interoperable Geographic Information System (GIS) for visualizing, querying, and analyzing geospatial data using OGC-compliant WMS and WFS services. This system allows seamless access to GeoServer-hosted spatial layers through an interactive web dashboard built with OpenLayers."
//       + "<br/> - Developed a dynamic web-based GIS dashboard using OpenLayers, integrating WFS and WMS services from any GeoServer instance, enabling real-time map layer querying and visualization with a custom user interface."
//       + "<br/> - Implemented advanced features such as dynamic server URL support, bounding box filtering, feature highlighting, and legend generation, enhancing user interaction and data exploration capabilities."
//       + "<br/> - Utilized JavaScript, jQuery, Bootstrap, and GeoServer to handle geospatial data processing, AJAX requests, and responsive design, ensuring compatibility with various OGC-compliant servers."
//   }
// ];

export const projects = [
  {
    title: "Intelligent Multi-Agent RAG System",
    description:
      "Multi-agent RAG with query triage, parent–child retrieval, Flashrank re-ranking, tool-use, and guardrails.",
    longDescription:
      "Engineered a LangChain and Google Gemini powered multi-agent system with intelligent query triage, dual-source RAG (Parent-Child retrieval, query expansion, Flashrank re-ranking), dynamic tool-use for internal/external data access, and guardrail validation for reliable, domain-specific query handling.",
    techStack: ["Langchain", "FAISS", "Gemini2.5", "Hierarchical RAG"],
    link: "",
    image: "",
    videoEmbed: ""
  },
  {
    title: "Quantum Convolutional Neural Network for Slum Classification",
    description:
      "MQCNN with TFQ/Cirq for pixel-level slum classification on Sentinel-2 imagery.",
    longDescription:
      "A research-driven implementation of MQCNN using TensorFlow Quantum and Cirq for pixel-level slum classification from Sentinel-2 imagery. Includes custom quantum convolutional layers and MCQI encoding.",
    techStack: ["TensorFlow Quantum", "Cirq", "Keras", "Satellite Imagery"],
    link: "https://github.com/your-qcnn-project",
    image: "src/assets/mqcnn.png",
    videoEmbed: ""
  },
  {
    title: "ProdHub: AI-Powered Personal Productivity Hub",
    description:
      "ProdHub is a modern, all-in-one web application built to help you organize, achieve, and grow. Seamlessly manage projects, tasks, habits, and your calendar from a single, intuitive platform—all with smart AI-powered features and robust security.",
    longDescription:
      "ProdHub is a modern, all-in-one web application built to help you organize, achieve, and grow. Seamlessly manage projects, tasks, habits, and your calendar from a single, intuitive platform—all with smart AI-powered features and robust security."
      + "<br/> - Architected and developed a full-stack, serverless productivity application using React.js and Firebase (Firestore, Authentication) for comprehensive personal, project, and task management."
      + "<br/> - Engineered intelligent features by integrating the Google Gemini API for context-aware task generation and the Google Calendar API for schedule visualization via secure, client-side OAuth 2.0."
      + "<br/> - Designed a real-time, persistent data architecture using Firestore, ensuring data integrity and user privacy through secure authentication and data rules.",
    techStack: ["React.js", "Firebase", "Google APIs"],
    link: "https://github.com/Rupesh4604/ProdHub",
    image: "src/assets/Prodhub.png",
    videoEmbed: ""
  },
  {
    title: "SOS WebClient Interface",
    description:
      "SOS WebClient Interface (istSOS Integration) is a lightweight, browser-based application designed to interact with OGC-compliant Sensor Observation Service (SOS) endpoints, particularly those hosted using istSOS with real-time sensor discovery, metadata visualization, and dynamic charting via Google Charts.",
    longDescription:
            "SOS WebClient Interface (istSOS Integration) is a lightweight, browser-based application designed to interact with OGC-compliant Sensor Observation Service (SOS) endpoints, particularly those hosted using istSOS."
      + "<br/> - The system enables users to dynamically discover, filter, and visualize sensor data through a user-friendly interface, combining real-time mapping, tabular output, and time-series charts."
      + "<br/> - Designed a lightweight browser-based client to interact with OGC-compliant Sensor Observation Service (SOS) endpoints, specifically istSOS."
      + "<br/> - Implemented real-time sensor discovery and metadata display with interactive, map-based visualization for intuitive sensor exploration."
      + "<br/> - Integrated Google Charts for dynamic visualization of sensor data through maps, tables, and time-series graphs.",
    techStack: ["JavaScript", "Google Charts", "istSOS", "Docker"],
    link: "https://github.com/Rupesh4604/SOS-WebClient-Interface",
    image: "",
    videoEmbed: ""
  },
  {
    title: "GeoWebClient",
    description:
      "Interoperable GIS dashboard using WMS/WFS via OpenLayers + GeoServer.",
    longDescription:
      "A client-server-based interoperable Geographic Information System (GIS) for visualizing, querying, and analyzing geospatial data using OGC-compliant WMS and WFS services with advanced map interaction and analysis features. This system allows seamless access to GeoServer-hosted spatial layers through an interactive web dashboard built with OpenLayers.",
    techStack: ["JavaScript", "OpenLayers", "GeoServer", "Apache Tomcat", "PostgreSQL", "PostGIS"],
    link: "https://github.com/Rupesh4604/GeoWebClient",
    image: "",
    videoEmbed: ""
  },
  {
    title: "3D CNN for Slum Classification",
    description:
      "3D CNN in PyTorch for multi-band Sentinel-2 slum detection.",
    longDescription:
      "Built a 3D Convolutional Neural Network in PyTorch for multi-band Sentinel-2 imagery. Handles patch-based inference and full image reconstruction for slum boundary detection.",
    techStack: ["PyTorch", "3D CNN", "Sentinel-2"],
    link: "",
    image: "src/assets/cnn.png",
    videoEmbed: ""
  },
  {
    title: "Emergency Services and Flood Zones Locator",
    description:
      "Leaflet web app to locate nearby emergency services and visualize flood risk zones.",
    longDescription:
      "Interactive Web Application for Disaster Preparedness - Built a responsive web application utilizing Leaflet.js and the Geolocation API to identify nearby emergency facilities and display flood risk zones with user-interactive filtering options.",
    techStack: ["JavaScript", "Leaflet.js", "Geolocation API", "Overpass API"],
    link: "https://github.com/Rupesh4604/Emergency-Services-Locator",
    image: "https://raw.githubusercontent.com/Rupesh4604/Emergency-Services-Locator/main/images/ios.png",
    videoEmbed: ""
  },
  {
    title: "Hyperspectral Imagery Classification",
    description:
      "Compared 3DCNN, GCN, CNN, and ViT for HSI; co-authored ICICA-2024 paper.",
    longDescription:
      "Implemented and compared advanced deep learning architectures such as 3DCNN, GCNs, CNNs, and Vision Transformers (ViT) to enhance spectral-spatial feature learning for hyperspectral imagery classification."
      + "<br/> - Co-authored the paper \"Enhancing Hyperspectral Imagery Classification using CNN and ViT\", accepted at ICICA-2024, and leveraged tools like EarthMapper, Spectralformer, and HVT for experimentation.",
    techStack: ["pytorch", "deep learning", "transformers"],
    link: "",
    image: "src/assets/arch.jpg",
    videoEmbed: ""
  },
  {
    title: "Pedestrian Tracking using DeepSort & YOLO",
    description:
      "YOLOv5 + Deep SORT multi-camera pedestrian tracking (87% ReID accuracy).",
    longDescription:
      "Implemented pedestrian tracking using YOLOv5 for detection and Deep SORT for tracking across multiple camera views, integrating deep learning techniques to maintain identity consistency."
      + "<br/> - Developed a robust tracking system that achieved 87% accuracy in person re-identification across different camera angles, with real-time processing capabilities on standard hardware.",
    techStack: ["YOLOv5", "Deep SORT", "Computer Vision", "Deep Learning"],
    link: "https://github.com/Rupesh4604/Pedestrian-Tracking-using-Deep-Learning",
    image: "src/assets/person-tracking.png",
    videoEmbed: ""
  },
  {
    title: "Triple GAN",
    description:
      "Reproduced Triple GAN; synthetic data generation with 99.10% peak accuracy.",
    longDescription:
      "Reproduced the \"Triple Generative Adversarial Nets\" architecture (arXiv:1703.02291) to generate high-quality synthetic image datasets with a peak accuracy of 99.10%. Explored synthetic data generation techniques like VAEs and autoregressive models.",
    topics: ["GANs", "Deep Learning", "Computer Vision"],
    link: "https://github.com/Rupesh4604/Triple-GAN",
    image: "https://raw.githubusercontent.com/Rupesh4604/Triple-GAN/main/triple%20gan.png",
    videoEmbed: ""
  },
  {
    title: "RIBS Identification, Labelling and Segmentation using FPN",
    description:
      "Rib segmentation & labeling in CXR (Dice 0.834) on VinDr-RibCXR.",
    longDescription:
      "Labeling-Chest-X-Rays is a deep learning-based project for automatic rib segmentation and labeling in chest X-rays (CXR). Using the VinDr-RibCXR dataset, models like U-Net, U-Net++ with EfficientNet-B0, and FPN are trained to segment and label 20 ribs. The best model achieves a Dice score of 0.834.",
    topics: ["Deep Learning", "Computer Vision", "Medical Imaging"],
    link: "https://github.com/Rupesh4604/Labeling-Chest-X-Rays",
    image: "https://raw.githubusercontent.com/Rupesh4604/Labeling-Chest-X-Rays/main/Figures/CXR-Visualizer.png",
    videoEmbed: ""
  }
];
