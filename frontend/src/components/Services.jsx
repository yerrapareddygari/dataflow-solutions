import { Database, BookOpen, ChevronRight } from "lucide-react";

const services = [
  {
    icon: Database,
    category: "Data Entry Services",
    color: "from-blue-600 to-blue-400",
    lightBg: "bg-blue-50",
    borderColor: "border-blue-200",
    tagColor: "bg-blue-100 text-blue-700",
    items: [
      {
        title: "Excel to Visualization",
        desc: "Transform raw spreadsheet data into interactive charts, dashboards, and visual reports for better decision-making.",
      },
      {
        title: "Data Digitalization",
        desc: "Convert manual records, paper invoices, and physical documents into structured digital formats.",
      },
      {
        title: "Data Management",
        desc: "Day-to-day data storage, organization, and maintenance — invoices, records, and operational data kept clean and accessible.",
      },
    ],
  },
  {
    icon: BookOpen,
    category: "Book Keeping Services",
    color: "from-cyan-600 to-cyan-400",
    lightBg: "bg-cyan-50",
    borderColor: "border-cyan-200",
    tagColor: "bg-cyan-100 text-cyan-700",
    items: [
      {
        title: "Accounting & Invoice Management",
        desc: "Complete accounting services including invoice creation, tracking, reconciliation, and accounts payable/receivable.",
      },
      {
        title: "Audit Support",
        desc: "Outsourced audit preparation and support — we organize your books and documentation to ensure smooth audit processes.",
      },
      {
        title: "Financial Statement Preparation",
        desc: "Accurate preparation of balance sheets, profit & loss statements, and cash flow reports as per standards.",
      },
      {
        title: "Payroll Data Management",
        desc: "End-to-end payroll data processing — salary calculations, deductions, compliance records, and monthly reports.",
      },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Services We Provide
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Comprehensive data and financial services tailored to your business needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map(({ icon: Icon, category, color, lightBg, borderColor, tagColor, items }) => (
            <div
              key={category}
              className={`rounded-2xl border ${borderColor} overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300`}
            >
              {/* Card header */}
              <div className={`bg-gradient-to-r ${color} p-6 flex items-center gap-4`}>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{category}</h3>
              </div>

              {/* Service items */}
              <div className={`${lightBg} p-6 space-y-4`}>
                {items.map(({ title, desc }) => (
                  <div
                    key={title}
                    className="bg-white rounded-xl p-5 flex gap-4 hover:shadow-md transition-shadow"
                  >
                    <ChevronRight size={18} className="text-blue-500 mt-0.5 shrink-0" />
                    <div>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${tagColor} mb-2 inline-block`}>
                        {title}
                      </span>
                      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:opacity-90 transition shadow-lg shadow-blue-500/25"
          >
            Request a Service <ChevronRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
