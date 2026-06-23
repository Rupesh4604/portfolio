// src/data/internshipData.js

// Full-time / part-time jobs and professional roles.
// Same shape as `internships` below - add entries here as your career grows.
// {
//   role: "Software Engineer",
//   organization: "Company, Location",
//   duration: "Aug 2026 - Present",
//   description: "Short summary shown on the card (supports \\n line breaks).",
//   longDescription: "Optional richer detail shown in the modal.",
//   highlights: ["Point A", "Point B"],
//   techStack: ["React", "Python"],
//   link: "https://...",
//   image: "https://..."
// }
export const work = [
  {
    role: "Data Scientist",
    organization: "Esri R&D Center - GeoAI",
    duration: "Jun 2026 - Present",
    description:
      "Data Scientist on the GeoAI research team, working on generative-AI and LLM-based approaches for geospatial intelligence building, fine-tuning, and deploying models that bring language and multimodal reasoning to spatial data.",
    techStack: ["LLMs", "Generative AI", "Deep Learning", "GeoAI", "Python"]
  }
];

export const internships = [
  {
    role: "Computer Vision and Research Intern",
    organization: "Center for Artificial Intelligence and Robotics (CAIR), DRDO",
    duration: "May 2023 - July 2023",
    description:
      "Primarily focused on camera-based object detection and its successful integration using ROS2 into autonomous vehicles, followed by extensive testing."
      + "\n Also worked on computer vision using deep learning for LiDAR and camera fusion in 2D and 3D object detection, optimizing models for real-world applications."
      + "\n Implemented state-of-the-art models such as YOLOv8, YOLOv7, ComplexYOLO for 3D object detection, MV3D, and LCC Net, 2D and 3D object detection using sensor data (camera live data, LiDAR data).",
    techStack: ["Deep Learning", "YOLOv8", "ROS2", "LiDAR", "Sensor Fusion"]
  },
  {
    role: "Machine Learning Intern",
    organization: "Hindustan Aeronautics Ltd (HAL), Nasik",
    duration: "May 2022 - July 2022",
    description:
      "Developed a machine learning model for Snag Disposition prediction, leveraging 13 years of in-house data from the Snag & Query Management System (SQMS) at the Aircraft Upgrade R&D Centre."
      + "\n Achieved a training accuracy of 95.54% and testing accuracy of 98.76% by utilizing algorithms such as SVM, Logistic Regression, MultinomialNB, Naive Bayes, Random Forest, and XGBoost, identifying the best-performing classifier for the problem."
      + "\n Delivered comprehensive data analysis and model performance evaluations to improve aircraft maintenance processes.",
    techStack: ["Predictive Modeling", "Machine Learning", "EDA", "Data Visualization"]
  }
];
