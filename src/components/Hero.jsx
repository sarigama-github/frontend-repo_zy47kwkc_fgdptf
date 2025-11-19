import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur text-white text-sm mb-4">
            Backend & Cloud Engineer
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-tight drop-shadow-lg">
            Swaugat Beura
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/80 max-w-2xl">
            Building resilient APIs, event-driven systems, and cloud-native platforms with Node.js, NestJS, MongoDB, Postgres, AWS, and OCI.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#projects" className="px-5 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition">View Projects</a>
            <a href="/services" className="px-5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition">Request a Service</a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950" />
    </section>
  );
}
