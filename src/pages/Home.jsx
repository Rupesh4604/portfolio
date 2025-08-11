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
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Languages",
              items: ["Python", "C/C++", "Java", "JavaScript", "SQL", "Robot Operating System (ROS2)", "MATLAB", "R", "Bash", "HTML", "CSS", "TypeScript"],
            },
            {
              title: "Libraries & Frameworks",
              items: ["Keras", "TensorFlow", "PyTorch", "Node.js", "React.js", "Flask", "Streamlit", "OpenStreetMap", "OpenCV", "LangChain"],
            },
            {
              title: "Tools & Platforms",
              items: ["Linux", "Git", "VS Code", "MySQL", "Tableau", "PostgreSQL", "MongoDB", "ArcGIS", "MLFlow", "AirFlow", "BigQuery", "PySpark"],
            },
          ].map((col) => (
            <div key={col.title}
              className="rounded-2xl border bg-white/70 dark:bg-slate-900/60 backdrop-blur
                        p-5 shadow-sm dark:border-slate-700">
              <h3 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">{col.title}</h3>
              <div className="flex flex-wrap gap-2">
                {col.items.map((x) => (
                  <span key={x}
                    className="px-2.5 py-1 text-xs rounded-md
                              bg-slate-100 text-slate-700
                              dark:bg-slate-800 dark:text-slate-200">
                    {x}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
