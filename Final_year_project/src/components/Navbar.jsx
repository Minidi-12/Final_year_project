import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router";
import { 
  Heart, 
  ChevronDown, 
  Globe2 
} from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    { label: "HOME", href: "/", dropdown: null },
    { label: "ABOUT US", href: "/about-us", dropdown: null },
    { label: "OUR WORK", href: "#", dropdown: ["PROJECTS", "PROJECT ACHIEVEMENTS", "ACTIVITIES", "CAMPAIGNS"] },
    { label: "LATEST", href: "#", dropdown: ["UPCOMING ACTIVITIES", "REPORTS AND RESEARCHES"] },
    { label: "CONTACT US", href: "/contact-us", dropdown: null },
  ];

  const getInvolvedDropdown = ["DONATE", "VOLUNTEER", "REQUEST SUPPORT"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-200/50">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold font-display tracking-tight text-emerald-950 uppercase">HOPELINK</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-6 text-[11px] font-bold tracking-widest text-gray-500 uppercase">
              {navItems.map((item) => (
                <div 
                  key={item.label}
                  className="relative group h-16 flex items-center"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.href.startsWith('/') ? (
                    <Link 
                      to={item.href} 
                      className={`flex items-center gap-1 transition-colors hover:text-emerald-600 ${location.pathname === item.href ? "text-emerald-600" : ""}`}
                    >
                      {item.label}
                      {item.dropdown && <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === item.label ? "rotate-180" : ""}`} />}
                    </Link>
                  ) : (
                    <a 
                      href={item.href} 
                      className="flex items-center gap-1 transition-colors hover:text-emerald-600"
                    >
                      {item.label}
                      {item.dropdown && <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === item.label ? "rotate-180" : ""}`} />}
                    </a>
                  )}

                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute top-full left-0 w-64 bg-white border border-emerald-100 rounded-2xl shadow-2xl shadow-emerald-900/10 p-3 z-50 pointer-events-auto"
                      >
                        {item.dropdown.map((subItem) => (
                          <Link 
                            key={subItem} 
                            to={
                              subItem === "PROJECT ACHIEVEMENTS" ? "/achievements" : 
                              subItem === "ACTIVITIES" ? "/activities" : 
                              subItem === "CAMPAIGNS" ? "/campaigns" :
                              subItem === "UPCOMING ACTIVITIES" ? "/upcoming-activities" :
                              subItem === "REPORTS AND RESEARCHES" ? "/reports-and-researches" :
                              "/projects"
                            } 
                            className="block px-4 py-3 text-[10px] text-gray-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all font-bold tracking-widest"
                          >
                            {subItem}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Link to="/login" className="px-4 py-2 text-xs font-bold text-emerald-700 bg-emerald-50 rounded-full hover:bg-emerald-100 transition-all border border-emerald-200 uppercase tracking-widest">
                OFFICER PORTAL
              </Link>
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown("GET INVOLVED")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-5 py-2.5 text-xs font-bold text-white bg-emerald-600 rounded-full hover:bg-emerald-700 shadow-lg shadow-emerald-200 transition-all transform hover:-translate-y-0.5 uppercase tracking-widest flex items-center gap-2">
                  GET INVOLVED
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === "GET INVOLVED" ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === "GET INVOLVED" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full right-0 mt-2 w-56 bg-emerald-950 text-white rounded-[1.5rem] shadow-2xl p-3 z-50 border border-white/10"
                    >
                      {getInvolvedDropdown.map((subItem) => (
                        <button 
                          key={subItem} 
                          onClick={() => {
                            if (subItem === "REQUEST SUPPORT") navigate("/request-support");
                            else if (subItem === "VOLUNTEER") navigate("/volunteer");
                            else if (subItem === "DONATE") navigate("/donate");
                          }}
                          className="w-full text-left px-4 py-3 text-[10px] text-emerald-100/60 hover:text-white hover:bg-white/10 rounded-xl transition-all font-bold tracking-widest uppercase"
                        >
                          {subItem}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </nav>
  );
}