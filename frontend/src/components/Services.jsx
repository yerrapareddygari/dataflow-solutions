import { ChevronRight } from "lucide-react";

const services = [
  {
    category: "Data Entry Services",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80&auto=format&fit=crop",
    accent: "blue",
    items: [
      { title: "Excel to Visualization", desc: "Transform raw spreadsheet data into interactive charts, dashboards, and visual reports for better decision-making." },
      { title: "Data Digitalization", desc: "Convert manual records, paper invoices, and physical documents into structured digital formats." },
      { title: "Data Management", desc: "Day-to-day data storage, organization, and maintenance — invoices, records, and operational data kept clean and accessible." },
    ],
  },
  {
    category: "Book Keeping Services",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=600&q=80&auto=format&fit=crop",
    accent: "cyan",
    items: [
      { title: "Accounting & Invoice Management", desc: "Complete accounting services including invoice creation, tracking, reconciliation, and accounts payable/receivable." },
      { title: "Audit Support", desc: "Outsourced audit preparation and support — we organize your books and documentation to ensure smooth audit processes." },
      { title: "Financial Statement Preparation", desc: "Accurate preparation of balance sheets, profit & loss statements, and cash flow reports as per standards." },
      { title: "Payroll Data Management", desc: "End-to-end payroll data processing — salary calculations, deductions, compliance records, and monthly reports." },
    ],
  },
];

const accentMap = {
  blue: {
    badge: "bg-blue-100 text-blue-700 border-blue-200",
    dot: "bg-blue-500",
    border: "border-blue-100",
    header: "from-blue-600 to-blue-400",
    tag: "bg-blue-50 text-blue-600 border-blue-100",
  },
  cyan: {
    badge: "bg-cyan-100 text-cyan-700 border-cyan-200",
    dot: "bg-cyan-500",
    border: "border-cyan-100",
    header: "from-cyan-600 to-cyan-400",
    tag: "bg-cyan-50 text-cyan-600 border-cyan-100",
  },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 font-semibold text-sm rounded-full border border-blue-100 mb-4">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Services We Provide</h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Comprehensive data and financial services tailored to your business needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {services.map(({ category, image, accent, items }) => {
            const a = accentMap[accent];
            return (
              <div key={category} className={`rounded-3xl border ${a.border} overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white`}>

                {/* Image header */}
                <div className="relative h-48 overflow-hidden">
                  <img src={image} alt={category} className="w-full h-full object-cover" />
                  <div className={`absolute inset-0 bg-gradient-to-r ${a.header} opacity-80`} />
                  <div className="absolute inset-0 flex items-center px-8">
                    <h3 className="text-2xl font-bold text-white">{category}</h3>
                  </div>
                </div>

                {/* Items */}
                <div className="p-6 space-y-4">
                  {items.map(({ title, desc }) => (
                    <div key={title} className="flex gap-3 p-4 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors group">
                      <div className={`w-1.5 h-1.5 ${a.dot} rounded-full mt-2 shrink-0`} />
                      <div>
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${a.tag} mb-2 inline-block`}>
                          {title}
                        </span>
                        <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-200 transition-all duration-300"
          >
            Request a Service <ChevronRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
