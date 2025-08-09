import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="px-6 py-10 max-w-6xl mx-auto text-gray-800">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-2">Rupesh's Portfolio</h1>
        <p className="text-lg"> Master of Technology, GNR IIT Bombay | Deep Learning & Computer Vision | LLMs Enthusiast</p>
      </header>

      {/* Education */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <ul className="space-y-2">
          <li>
            <strong>Indian Institute of Technology, Bombay</strong><br />
            Master of Technology, GNR, CSRE, 2026 — <em>CGPA: 9.05</em>
          </li>
          <li>
            <strong>National Institute Of Technology, Andhra Pradesh</strong><br />
            Bachelor of Technology, Computer Science and Engineering, 2024 — <em>CGPA: 8.56</em>
          </li>
          <li>
            <strong>Sri Chaitanya Junior College</strong><br />
            Board of Intermediate Education, Andhra Pradesh, 2020 — <em>CGPA: 9.86</em>
          </li>
          <li>
            <strong>Narayana E.M High School</strong><br />
            Board of Secondary Education, Andhra Pradesh, 2018 — <em>CGPA: 10</em>
          </li>
        </ul>
      </section>

      {/* Technical Skills */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="font-semibold">Languages</h3>
            <ul className="list-disc list-inside text-sm">
              <li>Python</li>
              <li>C/C++</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>SQL</li>
              <li>ROS2</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Libraries & Frameworks</h3>
            <ul className="list-disc list-inside text-sm">
              <li>Keras</li>
              <li>TensorFlow</li>
              <li>PyTorch</li>
              <li>Node.js</li>
              <li>React.js</li>
              <li>Flask</li>
              <li>Streamlit</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Tools & Platforms</h3>
            <ul className="list-disc list-inside text-sm">
              <li>Linux</li>
              <li>Git</li>
              <li>VS Code</li>
              <li>MySQL</li>
              <li>Tableau</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>ArcGIS</li>
              <li>MLFlow</li>
              <li>AirFlow</li>
              <li>BigQuery</li>
              <li>PySpark</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="mt-16 border-t pt-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Rupesh. All rights reserved.
      </footer>
    </main>
  );
}
