import React from "react";
import { Heart, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      name: "Facebook", 
      href: "#", 
      path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" 
    },
    { 
      name: "Instagram", 
      href: "#", 
      path: "rect x='2' y='2' width='20' height='20' rx='5' ry='5'/><path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'/><line x1='17.5' y1='6.5' x2='17.51' y2='6.5'" 
    },
    { 
      name: "Youtube", 
      href: "#", 
      path: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z" 
    }
  ];

  return (
    <footer className="bg-emerald-50 border-t border-emerald-100 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-10">
          
          <div className="md:col-span-4 space-y-5 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center shadow-sm">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-emerald-900">
                HOPE<span className="text-emerald-600">CONNECT</span>
              </span>
            </div>
            <p className="text-sm text-emerald-800/70 leading-relaxed">
              Empowering communities through sustainable support and 
              transparent humanitarian initiatives across Sri Lanka.
            </p>
          </div>

          <div className="md:col-span-3 text-center md:text-left">
            <h3 className="text-xs font-semibold text-emerald-900 uppercase tracking-widest mb-6">
              Follow Us
            </h3>
            <div className="flex justify-center md:justify-start gap-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white border border-emerald-100 flex items-center justify-center text-emerald-600 transition-all hover:bg-emerald-600 hover:text-white shadow-sm hover:-translate-y-1"
                >
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-5">
            <h3 className="text-xs font-semibold text-emerald-900 uppercase tracking-widest mb-6 text-center md:text-left">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              {[
                { icon: MapPin, text: "456 Unity Tower, Galle Road, Colombo 03", href: "#" },
                { icon: Phone, text: "+94 11 234 5678", href: "tel:+94112345678" },
                { icon: Mail, text: "hello@hopeconnect.org", href: "mailto:hello@hopeconnect.org" },
              ].map((item, i) => (
                <li key={i}>
                  <a href={item.href} className="flex items-start gap-4 group text-gray-600 hover:text-emerald-700 transition-colors">
                    <item.icon className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span className="text-sm font-medium">{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-emerald-200/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] font-medium text-emerald-800/50 uppercase">NGO Registry: GA 00261679</p>
          <p className="text-[11px] text-emerald-800/60 font-medium uppercase">© {currentYear} Hopeconnect Foundation.</p>
        </div>
      </div>
    </footer>
  );
}