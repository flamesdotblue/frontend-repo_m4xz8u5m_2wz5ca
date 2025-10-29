import Spline from '@splinetool/react-spline';
import { Mic, Hand, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/C5lv0-cXORBFwnsP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft vignette and gradient glow overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute -inset-x-20 top-0 h-64 bg-gradient-to-b from-cyan-500/20 to-transparent blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
            Meet the new language of interaction
          </span>
          <h1 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tight">
            Control everything with a wave and a whisper
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            GestureAI turns your camera and microphone into a seamless control hub. Swipe to switch slides, pinch to zoom, and speak naturally to launch apps or automate workflows.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#get-started" className="inline-flex items-center gap-2 rounded-md bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90 transition">
              Start free preview
            </a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-medium text-white/90 hover:border-white/40 hover:text-white transition">
              Learn more
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl">
            <Capability icon={<Hand className="h-4 w-4" />} label="Air gestures" />
            <Capability icon={<Mic className="h-4 w-4" />} label="Voice commands" />
            <Capability icon={<Sparkles className="h-4 w-4" />} label="Adaptive learning" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Capability({ icon, label }) {
  return (
    <div className="flex items-center gap-2 rounded-md border border-white/10 bg-black/40 px-3 py-2">
      <div className="grid place-items-center h-7 w-7 rounded-md bg-white/10 text-white">
        {icon}
      </div>
      <span className="text-sm text-white/80">{label}</span>
    </div>
  );
}
