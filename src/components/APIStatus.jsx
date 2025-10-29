import { useEffect, useState } from 'react';
import { Server, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

export default function APIStatus() {
  const [status, setStatus] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const baseUrl = import.meta.env.VITE_BACKEND_URL || window.location.origin.replace('3000', '8000');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${baseUrl}/test`);
        const data = await res.json();
        setStatus(data);
      } catch (e) {
        setStatus({ backend: '❌ Offline' });
      }
      try {
        const res2 = await fetch(`${baseUrl}/suggestions`);
        const data2 = await res2.json();
        setSuggestions(data2.suggestions || []);
      } catch (e) {
        setSuggestions([]);
      }
    };
    fetchData();
  }, [baseUrl]);

  return (
    <section className="bg-zinc-950 text-white py-16 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 grid place-items-center rounded-lg bg-white/5">
            <Server className="h-5 w-5 text-cyan-300" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Live backend status</h3>
            <p className="text-sm text-white/70">Connected to the GestureAI API for suggestions and customization.</p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <StatusCard
            label="Backend"
            ok={status?.backend?.includes('✅')}
            value={status?.backend || 'Checking...'}
          />
          <StatusCard
            label="Database"
            ok={status?.database?.includes('✅')}
            value={status?.database || 'Checking...'}
          />
          <StatusCard
            label="Collections"
            ok={Array.isArray(status?.collections)}
            value={Array.isArray(status?.collections) ? `${status.collections.length} collections` : '—'}
          />
        </div>

        {suggestions.length > 0 && (
          <div className="mt-10">
            <div className="flex items-center gap-2 text-white/80">
              <Sparkles className="h-4 w-4 text-cyan-300" />
              <span className="text-sm">Adaptive suggestions</span>
            </div>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {suggestions.map((s, i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs text-white/60">{s.category}</div>
                  <div className="mt-1 text-sm">{s.title}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function StatusCard({ label, ok, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-center justify-between">
        <div className="text-sm text-white/80">{label}</div>
        {ok ? (
          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
        ) : (
          <AlertCircle className="h-4 w-4 text-amber-400" />
        )}
      </div>
      <div className="mt-2 text-sm text-white/70">{value}</div>
    </div>
  );
}
