import { BarChart3 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <BarChart3 size={16} className="text-white" />
              </div>
              <span className="text-white font-bold">DataFlow Solutions</span>
            </div>
            <p className="text-sm leading-relaxed">
              Your trusted partner for data management and financial bookkeeping services.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Services</h4>
            <ul className="space-y-2 text-sm">
              {["Data Entry", "Data Digitalization", "Data Management", "Accounting", "Audit Support", "Financial Statements", "Payroll Management"].map((s) => (
                <li key={s}><a href="#services" className="hover:text-cyan-400 transition">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[["Vision & Mission", "#vision"], ["Why Choose Us", "#why"], ["About Us", "#about"], ["Contact Us", "#contact"]].map(([label, href]) => (
                <li key={label}><a href={href} className="hover:text-cyan-400 transition">{label}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-sm">
          © {new Date().getFullYear()} DataFlow Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
