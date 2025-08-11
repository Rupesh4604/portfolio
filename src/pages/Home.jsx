import React from "react";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          {/* Rupesh&apos;s Portfolio */}
          Rupesh Kumar Yadav Mediboyina
        </h1>
        <p className="mt-2 text-lg text-slate-700">
          Master of Technology, GNR IIT Bombay · Deep Learning &amp; Computer Vision · LLMs Enthusiast
        </p>
      </header>

      {/* Education */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <div className="space-y-4">
          <div className="rounded-xl border bg-white p-4 shadow-sm">
            <strong>Indian Institute of Technology, Bombay</strong>
            <div className="text-sm text-slate-600">
              Master of Technology, GNR, CSRE, 2026 — <em>CGPA: 9.05</em>
            </div>
          </div>

          <div className="rounded-xl border bg-white p-4 shadow-sm">
            <strong>National Institute Of Technology, Andhra Pradesh</strong>
            <div className="text-sm text-slate-600">
              Bachelor of Technology, Computer Science and Engineering, 2024 — <em>CGPA: 8.56</em>
            </div>
          </div>

          <div className="rounded-xl border bg-white p-4 shadow-sm">
            <strong>Sri Chaitanya Junior College</strong>
            <div className="text-sm text-slate-600">
              Board of Intermediate Education, Andhra Pradesh, 2020 — <em>CGPA: 9.86</em>
            </div>
          </div>

          <div className="rounded-xl border bg-white p-4 shadow-sm">
            <strong>Narayana E.M High School</strong>
            <div className="text-sm text-slate-600">
              Board of Secondary Education, Andhra Pradesh, 2018 — <em>CGPA: 10</em>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border bg-white p-4 shadow-sm">
            <h3 className="font-semibold mb-2">Languages</h3>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Python</li><li>C/C++</li><li>Java</li>
              <li>JavaScript</li><li>SQL</li><li>ROS2</li>
            </ul>
          </div>

          <div className="rounded-xl border bg-white p-4 shadow-sm">
            <h3 className="font-semibold mb-2">Libraries &amp; Frameworks</h3>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Keras</li><li>TensorFlow</li><li>PyTorch</li>
              <li>Node.js</li><li>React.js</li><li>Flask</li><li>Streamlit</li>
            </ul>
          </div>

          <div className="rounded-xl border bg-white p-4 shadow-sm">
            <h3 className="font-semibold mb-2">Tools &amp; Platforms</h3>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Linux</li><li>Git</li><li>VS Code</li><li>MySQL</li>
              <li>Tableau</li><li>PostgreSQL</li><li>MongoDB</li>
              <li>ArcGIS</li><li>MLFlow</li><li>AirFlow</li><li>BigQuery</li><li>PySpark</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
