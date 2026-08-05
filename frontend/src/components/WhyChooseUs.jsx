import { ShieldCheck, Zap, Users, Lock, Award, HeadphonesIcon } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, title: "Data Security First", desc: "Your data is encrypted, access-controlled, and handled under strict confidentiality agreements." },
  { icon: Zap, title: "Fast Turnaround", desc: "Processed data and financial reports delivered within agreed timelines — speed without compromising accuracy." },
  { icon: Users, title: "Experienced Team", desc: "Data specialists and certified accountants with years of hands-on experience across diverse industries." },
  { icon: Lock, title: "100% Confidential", desc: "All client data treated with absolute confidentiality. We sign NDAs and follow strict data governance policies." },
  { icon: Award, title: "Quality Assured", desc: "Multi-level quality checks ensure every output meets the highest accuracy standards." },
  { icon: HeadphonesIcon, title: "Dedicated Support", desc: "A dedicated account manager for every client — always reachable and responsive." },
];

const tools = ["Microsoft Excel", "Tally ERP", "QuickBooks", "Zoho Books", "Google Sheets", "Power BI", "SAP", "Xero"];

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-white text-blue-600 font-semibold text-sm rounded-full border border-blue-200 mb-4 shadow-sm">
            Our Advantage
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Why Choose Us?</h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            The right tools, the right people, and the right processes — delivering results you can rely on.
          </p>
        </div>

        {/* Image + grid layout */}
        <div className="grid lg:grid-cols-3 gap-8 mb-14">

          {/* Left: image */}
          <div className="lg:col-span-1 relative">
            <div className="rounded-3xl overflow-hidden shadow-xl h-full min-h-64 border border-blue-100">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80&auto=format&fit=crop"
                alt="Data security and analytics"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <div className="text-3xl font-extrabold">500+</div>
                <div className="text-blue-200 text-sm">Projects Delivered</div>
              </div>
            </div>
          </div>

          {/* Right: cards grid */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
            {reasons.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg border border-blue-50 hover:border-blue-200 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mb-4 shadow group-hover:scale-110 transition-transform">
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-1.5">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools banner */}
        <div className="bg-white rounded-3xl border border-blue-100 shadow-sm p-8">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-gray-900">Tools &amp; Technologies We Use</h3>
            <p className="text-gray-400 text-sm mt-1">Industry-standard platforms for accurate, reliable results</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-5 py-2.5 bg-blue-50 border border-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 transition"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
