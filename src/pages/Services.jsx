import { useEffect, useState } from 'react';

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function Services(){
  const [offers, setOffers] = useState([]);
  const [form, setForm] = useState({ offer_slug: '', name: '', email: '', message: '', budget: '' });
  const [ok, setOk] = useState(null);

  useEffect(() => {
    fetch(`${API}/services`).then(r => r.json()).then(setOffers).catch(() => setOffers([]));
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API}/service-requests`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    setOk(data.ok);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white pt-20">
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-semibold mb-6">Services</h1>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <div className="grid sm:grid-cols-2 gap-4">
              {offers.length ? offers.map(o => (
                <div key={o.slug} className="rounded-xl border border-white/10 p-5 bg-white/5">
                  <h3 className="font-medium">{o.title}</h3>
                  <p className="text-white/70 text-sm mt-2">{o.summary}</p>
                  <div className="mt-2 text-xs text-white/60">{o.tags?.join(' • ')}</div>
                </div>
              )) : (
                <p className="text-white/70">No offers yet. (Add in DB)</p>
              )}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-medium mb-3">Request a Service</h2>
            <form onSubmit={submit} className="space-y-3">
              <select className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2" value={form.offer_slug} onChange={e=>setForm({ ...form, offer_slug: e.target.value })} required>
                <option value="">Select an offer</option>
                {offers.map(o => <option key={o.slug} value={o.slug}>{o.title}</option>)}
              </select>
              <input className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2" placeholder="Your name" value={form.name} onChange={e=>setForm({ ...form, name: e.target.value })} required />
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2" placeholder="Email" value={form.email} onChange={e=>setForm({ ...form, email: e.target.value })} required />
              <input className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2" placeholder="Budget (optional)" value={form.budget} onChange={e=>setForm({ ...form, budget: e.target.value })} />
              <textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2" placeholder="Project brief" rows={4} value={form.message} onChange={e=>setForm({ ...form, message: e.target.value })} />
              <button className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500">Submit</button>
              {ok && <p className="text-green-400 text-sm">Request submitted! We'll be in touch via email.</p>}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
