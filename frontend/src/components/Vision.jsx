import { Eye, Target, Lightbulb } from "lucide-react";

export default function Vision() {
  return (
    <section id="vision" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 font-semibold text-sm rounded-full border border-blue-100 mb-4">
            Who We Are
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Vision &amp; Mission
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Driven by purpose, guided by precision.
          </p>
        </div>

        {/* Image + cards layout */}
        <div className="grid lg:grid-cols-5 gap-10 items-center">

          {/* Image */}
          <div className="lg:col-span-2 relative">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-blue-100">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80&auto=format&fit=crop"
                alt="Team working together"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-3xl" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-gradient-to-br from-blue-600 to-cyan-500 text-white rounded-2xl p-5 shadow-xl">
              <div className="text-3xl font-extrabold">5+</div>
              <div className="text-xs text-blue-100 mt-0.5">Years of Excellence</div>
            </div>
          </div>

          {/* Cards */}
          <div className="lg:col-span-3 space-y-5">
            {[
              {
                icon: Eye,
                title: "Our Vision",
                color: "bg-blue-50 border-blue-100",
                iconBg: "bg-blue-600",
                text: "To be the most trusted non-IT business services partner — empowering organizations with accurate data, transparent financials, and seamless operations.",
              },
              {
                icon: Target,
                title: "Our Mission",
                color: "bg-cyan-50 border-cyan-100",
                iconBg: "bg-cyan-600",
                text: "Deliver high-quality data management and bookkeeping services with speed, accuracy, and confidentiality — enabling our clients to make smarter business decisions.",
              },
              {
                icon: Lightbulb,
                title: "Our Values",
                color: "bg-indigo-50 border-indigo-100",
                iconBg: "bg-indigo-600",
                text: "Integrity in every entry. Precision in every report. Commitment to every client. We treat your data as our own — with the highest standards of care and security.",
              },
            ].map(({ icon: Icon, title, color, iconBg, text }) => (
              <div
                key={title}
                className={`flex gap-5 p-6 rounded-2xl border ${color} hover:shadow-md transition-shadow duration-300`}
              >
                <div className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center shrink-0 shadow-md`}>
                  <Icon size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
