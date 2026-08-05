import { BarChart3, Mail, Phone, MapPin } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Logo size="sm" dark />
            </div>
            <p className="text-sm leading-relaxed mb-5">
              Your trusted partner for data management and financial bookkeeping services.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2"><Mail size={14} className="text-cyan-400" /> hello@coresynergy.in</div>
              <div className="flex items-center gap-2"><Phone size={14} className="text-cyan-400" /> +91 98765 43210</div>
              <div className="flex items-center gap-2"><MapPin size={14} className="text-cyan-400" /> India (Remote & On-site)</div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Data Services</h4>
            <ul className="space-y-2 text-sm">
              {["Data Entry", "Excel to Visualization", "Data Digitalization", "Data Management"].map((s) => (
                <li key={s}><a href="#services" className="hover:text-cyan-400 transition">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Financial Services</h4>
            <ul className="space-y-2 text-sm">
              {["Accounting & Invoice", "Audit Support", "Financial Statements", "Payroll Management"].map((s) => (
                <li key={s}><a href="#services" className="hover:text-cyan-400 transition">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {[["Vision & Mission", "#vision"], ["Why Choose Us", "#why"], ["About Us", "#about"], ["Contact Us", "#contact"]].map(([label, href]) => (
                <li key={label}><a href={href} className="hover:text-cyan-400 transition">{label}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <span>© {new Date().getFullYear()} CoreSynergy. All rights reserved.</span>
          <span className="text-gray-600">Built with ❤️ for growing businesses</span>
        </div>
      </div>
    </footer>
  );
}
