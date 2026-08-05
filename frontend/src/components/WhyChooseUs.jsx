import { ShieldCheck, Zap, Users, Lock, Award, HeadphonesIcon } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Data Security First",
    desc: "Your data is encrypted, access-controlled, and handled under strict confidentiality agreements. We follow industry-standard security protocols.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    desc: "We deliver processed data and financial reports within agreed timelines — no delays, no excuses. Speed without compromising accuracy.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    desc: "Our team of data specialists and certified accountants bring years of hands-on experience across diverse industries.",
  },
  {
    icon: Lock,
    title: "100% Confidential",
    desc: "All client data is treated with absolute confidentiality. We sign NDAs and follow strict data governance policies.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    desc: "Multi-level quality checks ensure every output — from data entry to financial statements — meets the highest accuracy standards.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    desc: "A dedicated account manager for every client. We're always reachable, responsive, and ready to help when you need us.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why"
      className="py-24"
      style={{ background: "linear-gradient(180deg, #f8fafc 0%, #eff6ff 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">
            Our Advantage
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Why Choose Us?
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            We combine the right tools, the right people, and the right processes to deliver results you can rely on.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg border border-gray-100 hover:border-blue-100 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-md">
                <Icon size={22} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Tools banner */}
        <div className="mt-14 bg-gradient-to-r from-blue-700 to-cyan-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-xl font-bold mb-3">Tools &amp; Technologies We Use</h3>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {["Microsoft Excel", "Tally ERP", "QuickBooks", "Zoho Books", "Google Sheets", "Power BI", "SAP", "Xero"].map(
              (tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-white/15 border border-white/25 rounded-full text-sm font-medium"
                >
                  {tool}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
