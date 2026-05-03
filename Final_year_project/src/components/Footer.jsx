import React from "react";
import { Link } from "react-router";
import { 
  Heart, 
  MapPin, 
  Mail, 
  Phone,  
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-50 pt-32 pb-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50/50 rounded-full blur-3xl -mr-48 -mt-48 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-50/50 rounded-full blur-3xl -ml-32 -mb-32 opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 mb-24">
          {/* Column 1: Branding & Mission */}
          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-11 h-11 bg-emerald-950 rounded-2xl flex items-center justify-center -rotate-3 hover:rotate-0 transition-transform shadow-xl shadow-emerald-900/10">
                  <Heart className="w-6 h-6 text-emerald-400" />
                </div>
                <span className="text-2xl font-bold tracking-tight text-emerald-950 uppercase">HOPELINK</span>
              </div>
              <p className="text-xl text-emerald-900/60 leading-relaxed font-serif italic max-w-sm">
                "Empowering the unheard, rebuilding lives through the intersection of empathy and modern advocacy."
              </p>
            </div>

            <div className="flex gap-4">
              {[].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-gray-100 text-gray-400 hover:bg-emerald-950 hover:text-white hover:border-emerald-950 transition-all shadow-sm hover:shadow-xl hover:shadow-emerald-950/20 group"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-[10px] font-bold text-emerald-950 uppercase tracking-[0.2em] mb-12 flex items-center gap-3">
              <span className="w-8 h-px bg-emerald-200"></span>
              Platform Guide
            </h3>
            <ul className="grid grid-cols-1 gap-6">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about-us" },
                { label: "Our Work", href: "/projects" },
                { label: "Contact Us", href: "/contact-us" },
                { label: "Donate Now", href: "/donate" }
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-xs font-bold text-gray-400 hover:text-emerald-600 transition-colors uppercase tracking-[0.15em] flex items-center gap-3 group">
                    <span className="w-1.5 h-1.5 bg-emerald-100 rounded-full group-hover:bg-emerald-600 group-hover:scale-150 transition-all"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Registry */}
          <div>
            <h3 className="text-[10px] font-bold text-emerald-950 uppercase tracking-[0.2em] mb-12 flex items-center gap-3">
              <span className="w-8 h-px bg-emerald-200"></span>
              Get in Touch
            </h3>
            <ul className="space-y-8">
              {[
                { icon: MapPin, text: "456 Unity Tower, Galle Road, Colombo 03, Sri Lanka" },
                { icon: Phone, text: "+94 11 234 5678" },
                { icon: Mail, text: "hello@hopelink.org" }
              ].map((item, i) => (
                <li key={i} className="flex gap-6 group">
                  <div className="w-11 h-11 bg-white rounded-2xl flex items-center justify-center shrink-0 border border-gray-100 group-hover:border-emerald-100 transition-colors shadow-sm">
                    <item.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-500 leading-relaxed pt-2">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">
            © 2026 Hopelink Foundation. Sri Lankan NGO Registry: NGO-7821.
          </div>
          <div className="flex gap-10 text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-emerald-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-600 transition-colors">Safety Standards</a>
          </div>
        </div>
      </div>
    </footer>
  );
}