import { useEffect, useState } from 'react';

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function Blog(){
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`${API}/blog`).then(r=>r.json()).then(setPosts).catch(()=>setPosts([]));
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-white pt-20">
      <section className="max-w-5xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-semibold mb-6">Blog</h1>
        <div className="space-y-6">
          {posts.length ? posts.map((p, i) => (
            <article key={i} className="rounded-xl border border-white/10 p-5 bg-white/5">
              <h2 className="text-xl font-medium">{p.title}</h2>
              <p className="text-white/70 mt-2">{p.excerpt}</p>
              <div className="mt-2 text-xs text-white/60">{p.tags?.join(' • ')}</div>
            </article>
          )) : (
            <p className="text-white/70">No posts yet. (Add in DB)</p>
          )}
        </div>
      </section>
    </main>
  );
}
