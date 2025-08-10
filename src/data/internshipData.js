// src/data/internshipData.js
export const internships = [
  {
    role: "Computer Vision and Research Intern",
    organization: "Center for Artificial Intelligence and Robotics (CAIR), DRDO",
    duration: "May 2023 - July 2023",
    description:
      "Primarily focused on camera-based object detection and its successful integration using ROS2 into autonomous vehicles, followed by extensive testing."
      +"\n Also worked on computer vision using deep learning for LiDAR and camera fusion in 2D and 3D object detection, optimizing models for real-world applications." 
      + "\n Implemented state-of-the-art models such as YOLOv8, YOLOv7, ComplexYOLO for 3D object detection, MV3D, and LCC Net, 2D and 3D object detection using sensor data (camera live data, LiDAR data).",
    techStack: ["YOLOv8", "ROS2", "LiDAR", "Sensor Fusion"]
  },
  {
    role: "Machine Learning Intern/Project Trainee",
    organization: "Hindustan Aeronautics Ltd (HAL), Nasik",
    duration: "May 2022 - July 2022",
    description:
      "Developed a machine learning model for Snag Disposition prediction, leveraging 13 years of in-house data from the Snag & Query Management System (SQMS) at the Aircraft Upgrade R&D Centre."
      + "\n Achieved a training accuracy of 95.54% and testing accuracy of 98.76% by utilizing algorithms such as SVM, Logistic Regression, MultinomialNB, Naive Bayes, Random Forest, and XGBoost, identifying the best-performing classifier for the problem."
      + "\n Delivered comprehensive data analysis and model performance evaluations to improve aircraft maintenance processes.",
    techStack: ["Python", "Scikit-learn", "Pandas"]
  }
];

  // Worked on LiDAR and camera fusion for object detection. Focused on YOLOv8 integration with ROS2, model comparison (YOLOv7, YOLOv8, Complex-YOLO), and deployment on autonomous vehicles.