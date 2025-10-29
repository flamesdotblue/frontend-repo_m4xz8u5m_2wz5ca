import { Rocket, Settings, Shield } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 grid place-items-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400">
              <Rocket className="h-5 w-5 text-white" />
            </div>
            <span className="text-white font-semibold tracking-tight">GestureAI</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#how" className="hover:text-white transition">How it works</a>
            <a href="#privacy" className="hover:text-white transition">Privacy</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 rounded-md bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90 transition"
            >
              Get started
            </a>
            <button
              aria-label="Settings"
              className="hidden sm:inline-flex items-center justify-center rounded-md border border-white/20 p-2 text-white/80 hover:text-white hover:border-white/40 transition"
            >
              <Settings className="h-4 w-4" />
            </button>
            <div id="privacy" className="sr-only" />
          </div>
        </div>
      </div>
    </header>
  );
}
