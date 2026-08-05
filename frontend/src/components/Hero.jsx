import { ArrowRight, TrendingUp, Shield, Clock, Play } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-cyan-50">

      {/* Soft background blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-60 -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-100 rounded-full blur-3xl opacity-50 translate-y-1/3 -translate-x-1/3" />

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle, #93c5fd 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              Trusted Data & Financial Services Partner
            </div>

            <div className="mb-6">
              <Logo size="lg" showTagline />
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Simplify Your{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Data & Finance
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 8 Q75 2 150 8 Q225 14 298 8" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.4"/>
                </svg>
              </span>
              <br />
              <span className="text-gray-800">Operations</span>
            </h1>

            <p className="text-lg text-gray-500 max-w-lg mb-10 leading-relaxed">
              From data entry and digitalization to bookkeeping and financial statements —
              we handle the numbers so you can focus on growth.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-200 transition-all duration-300"
              >
                Explore Services <ArrowRight size={18} />
              </a>
              <button
                onClick={() => setVideoOpen(true)}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white border border-blue-200 text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-sm"
              >
                <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center">
                  <Play size={12} className="text-white ml-0.5" fill="white" />
                </div>
                Watch Overview
              </button>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8">
              {[
                { icon: TrendingUp, label: "Data Accuracy", value: "99.9%", color: "text-blue-600" },
                { icon: Shield, label: "Data Security", value: "100%", color: "text-cyan-600" },
                { icon: Clock, label: "Turnaround", value: "24 hrs", color: "text-indigo-600" },
              ].map(({ icon: Icon, label, value, color }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-blue-100 flex items-center justify-center">
                    <Icon size={18} className={color} />
                  </div>
                  <div>
                    <div className={`text-xl font-bold ${color}`}>{value}</div>
                    <div className="text-gray-400 text-xs">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image collage */}
          <div className="relative hidden lg:block">
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-100 border border-blue-100">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80&auto=format&fit=crop"
                alt="Data analytics dashboard"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
            </div>

            {/* Floating card 1 */}
            <div className="absolute -bottom-6 -left-8 bg-white rounded-2xl shadow-xl p-4 border border-blue-50 flex items-center gap-3 w-52">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                <TrendingUp size={18} className="text-green-600" />
              </div>
              <div>
                <div className="text-xs text-gray-400">Reports Generated</div>
                <div className="font-bold text-gray-900">1,200+ / mo</div>
              </div>
            </div>

            {/* Floating card 2 */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-blue-50 flex items-center gap-3 w-48">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                <Shield size={18} className="text-blue-600" />
              </div>
              <div>
                <div className="text-xs text-gray-400">Secure & Compliant</div>
                <div className="font-bold text-gray-900">ISO Ready</div>
              </div>
            </div>

            {/* Second image */}
            <div className="absolute -bottom-4 right-4 w-40 h-40 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&q=80&auto=format&fit=crop"
                alt="Bookkeeping"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 50" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ffffff" d="M0,25 C360,50 1080,0 1440,25 L1440,50 L0,50 Z" />
        </svg>
      </div>

      {/* HeyGen AI Video Modal */}
      {videoOpen && (
        <div
          className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="bg-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-blue-50">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span className="font-semibold text-gray-800">CoreSynergy — AI Overview</span>
              </div>
              <button onClick={() => setVideoOpen(false)} className="text-gray-400 hover:text-gray-700 text-xl font-bold leading-none">✕</button>
            </div>
            <div className="relative" style={{ paddingTop: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://app.heygen.com/embeds/988ea1c3d9ae41bdbd6822977241ff38"
                title="CoreSynergy Business Solutions — AI Video"
                frameBorder="0"
                allow="encrypted-media; fullscreen;"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
