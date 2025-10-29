export default function CTA() {
  return (
    <section id="get-started" className="relative bg-black text-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-transparent p-8 sm:p-12">
          <div className="max-w-3xl">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Your devices, now fluent in you</h3>
            <p className="mt-2 text-white/80">Start with gesture and voice templates, customize everything, and experience hands-free control in minutes.</p>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-md bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90 transition"
            >
              Try live demo
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-medium text-white/90 hover:border-white/40 hover:text-white transition"
            >
              View docs
            </a>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-white/50">No extra hardware required. Works with your device camera and microphone.</p>
      </div>
    </section>
  );
}
