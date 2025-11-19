export default function About(){
  return (
    <main className="min-h-screen bg-slate-950 text-white pt-20">
      <section className="max-w-3xl mx-auto px-6 py-10 space-y-6">
        <h1 className="text-3xl font-semibold">About</h1>
        <p className="text-white/80">I'm Swaugat Beura, a backend and cloud engineer with 2+ years of experience building APIs and distributed systems with Node.js, NestJS, MongoDB, Postgres, AWS, and OCI.</p>
        <ul className="list-disc list-inside text-white/80 space-y-2">
          <li>Designed and deployed microservices on AWS ECS and OCI OKE</li>
          <li>Built event-driven workflows with queues and serverless</li>
          <li>Optimized MongoDB and Postgres for reliability and scale</li>
        </ul>
        <a href="/Swaugat-Beura-CV.pdf" className="inline-block px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500">Download CV</a>
      </section>
    </main>
  );
}
