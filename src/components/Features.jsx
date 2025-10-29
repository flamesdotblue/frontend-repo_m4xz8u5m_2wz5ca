import { Hand, Mic, Shield, Settings, Zap, Monitor } from 'lucide-react';

const features = [
  {
    icon: Hand,
    title: 'Natural hand gestures',
    desc: 'Swipe, pinch, point, and flick — no buttons needed. Works with your device camera, no extra hardware.'
  },
  {
    icon: Mic,
    title: 'Conversational voice',
    desc: 'Speak naturally to launch apps, type text, or orchestrate multi-step flows across devices.'
  },
  {
    icon: Settings,
    title: 'Fully customizable',
    desc: 'Create your own gestures and phrases, then map them to apps, smart devices, or automation.'
  },
  {
    icon: Shield,
    title: 'Privacy-first AI',
    desc: 'On-device processing by default keeps your gestures and voice private and secure.'
  },
  {
    icon: Zap,
    title: 'Adaptive shortcuts',
    desc: 'Learns your habits to suggest one-tap and hands-free shortcuts for what you do most.'
  },
  {
    icon: Monitor,
    title: 'Cross-device control',
    desc: 'Control laptops, projectors, TVs, and more — a single, seamless hub for every screen.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative bg-gradient-to-b from-black to-zinc-950 text-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Designed for fluid control</h2>
          <p className="mt-3 text-white/70">A focused toolkit that turns movement and voice into instant actions, tailored to your world.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-cyan-400/40 transition">
              <div className="h-10 w-10 grid place-items-center rounded-lg bg-gradient-to-br from-cyan-400/20 to-blue-500/20 text-cyan-300 group-hover:from-cyan-400/30 group-hover:to-blue-500/30">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-medium">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
