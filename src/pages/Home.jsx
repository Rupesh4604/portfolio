import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col justify-center items-start mb-20 pt-10">
        <div className="absolute top-0 right-0 -z-10 opacity-30 dark:opacity-20 pointer-events-none">
          <div className="w-96 h-96 bg-blue-500/30 rounded-full blur-3xl absolute top-0 right-[-100px] animate-pulse"></div>
          <div className="w-80 h-80 bg-purple-500/30 rounded-full blur-3xl absolute top-[100px] right-[50px] animate-pulse animation-delay-200"></div>
        </div>

        <div className="max-w-3xl animate-fade-in">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-sm font-medium mb-6">
            Available for opportunities
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            Hi, I'm <br />
            <span className="text-gradient">Rupesh Kumar</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed">
            Master of Technology at <strong className="text-slate-900 dark:text-slate-200">IIT Bombay</strong>.
            Specializing in <span className="text-indigo-600 dark:text-indigo-400">Deep Learning</span>, <span className="text-indigo-600 dark:text-indigo-400">Computer Vision</span>, and Large Language Models.
          </p>

          <div className="flex flex-wrap gap-4 animate-slide-up animation-delay-200">
            <Link to="/projects" className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-semibold hover:opacity-90 transition-opacity">
              View Projects
            </Link>
            <Link to="mailto:rupesh@example.com" className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Only - Centered or Full Width */}
      <div className="max-w-4xl mx-auto mb-20 animate-slide-up animation-delay-400">

        {/* Technical Skills */}
        <section>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-purple-600 rounded-full"></span>
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Languages",
                items: ["Python", "C/C++", "Java", "JavaScript", "TypeScript", "SQL", "MATLAB", "R", "Bash", "HTML/CSS"],
                icon: "💻"
              },
              {
                title: "AI & ML Frameworks",
                items: ["PyTorch", "TensorFlow", "Keras", "Scikit-Learn", "OpenCV", "LangChain", "Hugging Face"],
                icon: "🧠"
              },
              {
                title: "Dev & Tools",
                items: ["React.js", "Node.js", "Git", "Docker", "Linux", "VS Code", "AWS", "MongoDB", "PostgreSQL"],
                icon: "🛠️"
              },
              {
                title: "Data & Others",
                items: ["Tableau", "Spark", "BigQuery", "ROS2", "ArcGIS", "AirFlow", "MLFlow"],
                icon: "📊"
              }

            ].map((group) => (
              <div key={group.title} className="bg-white dark:bg-surface-2 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-surface-border hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-4 text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <span>{group.icon}</span> {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span key={skill} className="chip text-sm px-3 py-1.5 cursor-default hover:scale-105 transition-transform">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
