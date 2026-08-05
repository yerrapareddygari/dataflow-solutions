import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Serving clients across multiple industries",
  "Certified accounting and data professionals",
  "Strict NDA and data confidentiality policies",
  "Scalable services — from startups to enterprises",
  "Transparent pricing with no hidden charges",
  "Regular reporting and client communication",
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
              Your Reliable Back-Office Partner
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              DataFlow Solutions is a non-IT business services company specializing in data
              management and financial bookkeeping. We work as an extension of your team —
              handling the operational groundwork so your core team can focus on what matters most.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Whether you're a small business needing clean books or a growing enterprise
              requiring structured data pipelines, we have the expertise and tools to deliver
              with precision and confidentiality.
            </p>

            <ul className="grid sm:grid-cols-2 gap-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-gray-700 text-sm">
                  <CheckCircle2 size={18} className="text-cyan-500 mt-0.5 shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Visual card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-700 to-cyan-600 rounded-3xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Our Approach</h3>
              {[
                { step: "01", title: "Understand", desc: "We start by understanding your data and financial workflows in detail." },
                { step: "02", title: "Process", desc: "Our team processes your data with multi-level quality checks." },
                { step: "03", title: "Deliver", desc: "Clean, accurate outputs delivered on time — every time." },
                { step: "04", title: "Support", desc: "Ongoing support and revisions until you're fully satisfied." },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-4 mb-6 last:mb-0">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-sm font-bold shrink-0">
                    {step}
                  </div>
                  <div>
                    <div className="font-semibold">{title}</div>
                    <div className="text-blue-100 text-sm mt-0.5">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
            {/* Decorative blob */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-200 rounded-full blur-2xl opacity-60 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
