import { ArrowRight, TrendingUp, Shield, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0e7490 100%)",
      }}
    >
      {/* Animated blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-700/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          Trusted Data & Financial Services Partner
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
          Simplify Your{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Data & Finance
          </span>
          <br />
          Operations
        </h1>

        <p className="text-xl text-blue-100/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          From data entry and digitalization to bookkeeping and financial statements —
          we handle the numbers so you can focus on growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:opacity-90 transition shadow-lg shadow-blue-500/30"
          >
            Explore Services <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/25 text-white font-semibold rounded-xl hover:bg-white/20 transition"
          >
            Contact Us
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { icon: TrendingUp, label: "Data Accuracy", value: "99.9%" },
            { icon: Shield, label: "Data Security", value: "100%" },
            { icon: Clock, label: "Turnaround Time", value: "24 hrs" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="glass rounded-2xl p-5 text-center">
              <Icon size={24} className="text-cyan-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">{value}</div>
              <div className="text-blue-200 text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#ffffff"
            d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"
          />
        </svg>
      </div>
    </section>
  );
}
