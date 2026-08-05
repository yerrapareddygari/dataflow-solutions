import { Eye, Target, Lightbulb } from "lucide-react";

export default function Vision() {
  return (
    <section id="vision" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">
            Who We Are
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Vision &amp; Mission
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Driven by purpose, guided by precision.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Eye,
              title: "Our Vision",
              color: "from-blue-600 to-blue-400",
              bg: "bg-blue-50",
              text:
                "To be the most trusted non-IT business services partner — empowering organizations with accurate data, transparent financials, and seamless operations.",
            },
            {
              icon: Target,
              title: "Our Mission",
              color: "from-cyan-600 to-cyan-400",
              bg: "bg-cyan-50",
              text:
                "Deliver high-quality data management and bookkeeping services with speed, accuracy, and confidentiality — enabling our clients to make smarter business decisions.",
            },
            {
              icon: Lightbulb,
              title: "Our Values",
              color: "from-indigo-600 to-indigo-400",
              bg: "bg-indigo-50",
              text:
                "Integrity in every entry. Precision in every report. Commitment to every client. We treat your data as our own — with the highest standards of care and security.",
            },
          ].map(({ icon: Icon, title, color, bg, text }) => (
            <div
              key={title}
              className={`${bg} rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300 group`}
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}
              >
                <Icon size={26} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
