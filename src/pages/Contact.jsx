import { useState } from 'react';

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function Contact(){
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [ok, setOk] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    setOk(data.ok);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white pt-20">
      <section className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-semibold mb-6">Contact</h1>
        <form onSubmit={submit} className="space-y-3">
          <input className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2" placeholder="Your name" value={form.name} onChange={e=>setForm({ ...form, name: e.target.value })} required />
          <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2" placeholder="Email" value={form.email} onChange={e=>setForm({ ...form, email: e.target.value })} required />
          <textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2" placeholder="Message" rows={5} value={form.message} onChange={e=>setForm({ ...form, message: e.target.value })} required />
          <button className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500">Send</button>
          {ok && <p className="text-green-400 text-sm">Thanks! I'll get back to you soon.</p>}
        </form>
      </section>
    </main>
  );
}
