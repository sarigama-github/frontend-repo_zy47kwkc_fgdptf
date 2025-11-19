import { useEffect, useState } from 'react';

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function Projects(){
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch(`${API}/projects`).then(r=>r.json()).then(setProjects).catch(()=>setProjects([]));
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-white pt-20">
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-semibold mb-6">Projects</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.length ? projects.map((p, i) => (
            <div key={i} className="rounded-xl border border-white/10 p-5 bg-white/5">
              <h3 className="font-medium">{p.title}</h3>
              <p className="text-white/70 text-sm mt-2">{p.summary}</p>
              <div className="mt-3 flex gap-3 text-sm">
                {p.repo_url && <a href={p.repo_url} className="text-blue-400 hover:text-blue-300">Repo</a>}
                {p.demo_url && <a href={p.demo_url} className="text-blue-400 hover:text-blue-300">Demo</a>}
              </div>
              <div className="mt-2 text-xs text-white/60">{p.tech?.join(' • ')}</div>
            </div>
          )) : (
            <p className="text-white/70">No projects yet. (Add in DB)</p>
          )}
        </div>
      </section>
    </main>
  );
}
