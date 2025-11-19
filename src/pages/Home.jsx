import Hero from '../components/Hero';

export default function Home(){
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <div key={i} className="rounded-xl border border-white/10 p-5 bg-white/5">
              <h3 className="font-medium">Project {i}</h3>
              <p className="text-white/70 text-sm mt-2">Case study snippet with stack, outcomes and links.</p>
              <div className="mt-4 flex gap-3 text-sm">
                <a href="#" className="text-blue-400 hover:text-blue-300">Repo</a>
                <a href="#" className="text-blue-400 hover:text-blue-300">Demo</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
