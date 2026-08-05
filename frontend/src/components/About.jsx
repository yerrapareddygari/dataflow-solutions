import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Serving clients across multiple industries",
  "Certified accounting and data professionals",
  "Strict NDA and data confidentiality policies",
  "Scalable services — startups to enterprises",
  "Transparent pricing with no hidden charges",
  "Regular reporting and client communication",
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 font-semibold text-sm rounded-full border border-blue-100 mb-4">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Your Reliable Back-Office Partner</h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            We work as an extension of your team — handling the operational groundwork so you can focus on growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">

          {/* Left: text */}
          <div>
            <p className="text-gray-500 leading-relaxed mb-4">
              DataFlow Solutions is a non-IT business services company specializing in data
              management and financial bookkeeping. Whether you're a small business needing
              clean books or a growing enterprise requiring structured data pipelines, we
              deliver with precision and confidentiality.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 mt-8">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-gray-600 text-sm">
                  <CheckCircle2 size={17} className="text-cyan-500 mt-0.5 shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: approach steps */}
          <div className="bg-white rounded-3xl border border-blue-100 shadow-sm p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Our Approach</h3>
            <div className="space-y-5">
              {[
                { step: "01", title: "Understand", desc: "We start by understanding your data and financial workflows in detail.", color: "bg-blue-600" },
                { step: "02", title: "Process", desc: "Our team processes your data with multi-level quality checks.", color: "bg-cyan-600" },
                { step: "03", title: "Deliver", desc: "Clean, accurate outputs delivered on time — every time.", color: "bg-indigo-600" },
                { step: "04", title: "Support", desc: "Ongoing support and revisions until you're fully satisfied.", color: "bg-blue-400" },
              ].map(({ step, title, desc, color }) => (
                <div key={step} className="flex gap-4 items-start">
                  <div className={`w-9 h-9 ${color} rounded-xl flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                    {step}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{title}</div>
                    <div className="text-gray-400 text-sm mt-0.5">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Video Section — embedded inline */}
        <div className="rounded-3xl overflow-hidden border border-blue-100 shadow-xl bg-white">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-5 flex items-center gap-3">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
            <h3 className="text-white font-bold text-lg">CoreSynergy in Action — AI Explainer</h3>
            <span className="ml-auto text-xs bg-white/20 text-white px-3 py-1 rounded-full border border-white/30">AI Generated</span>
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
          <div className="px-8 py-4 bg-blue-50 border-t border-blue-100 flex items-center gap-2">
            <span className="text-xs text-blue-500 font-medium">🤖 Powered by HeyGen AI</span>
            <span className="text-gray-300 text-xs">•</span>
            <span className="text-xs text-gray-400">Learn how CoreSynergy simplifies your data & financial operations</span>
          </div>
        </div>
      </div>

    </section>
  );
}
