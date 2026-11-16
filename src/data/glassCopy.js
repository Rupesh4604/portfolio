// Glass-only wording (dark mode on everything but phones) for the Home bento and the Career job cards.
// Projects, papers and posts are NOT overridden here: they read the same in every mode
// (src/data/projectsData.js, publicationsData.js, postsData.js).
// Job overrides are keyed by organization in internshipData; unknown keys throw in development.
import { work, internships } from "./internshipData.js";

export const glass = {
  home: {
    now: "Esri R&D, vision-language and decision models. Reading about VLA models.",
    status: "Open to conversations",
    research: "peer-reviewed papers",
  },

  career: {
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
  },
};

// Development guard: every job override must point at a real organization.
if (import.meta.env?.DEV) {
  const orgs = new Set([...work, ...internships].map((j) => j.organization));
  const missing = Object.keys(glass.career.jobs).filter((k) => !orgs.has(k));
  if (missing.length) throw new Error(`glassCopy.js keys do not match the data: ${missing.join("; ")}`);
}
