import { AnimatePresence } from "framer-motion";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { 
  Heart, 
  Building2, 
  Gift, 
  GraduationCap, 
  CheckCircle2, 
  Mail,
  Smartphone,
  Info,
  Package,
  Truck
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Donate() {
  const [activeTab, setActiveTab] = useState("bank");
  const navigate = useNavigate();

  const tabs = [
    { id: "bank", label: "Bank Transfer", icon: Building2 },
    { id: "items", label: "Donate Items", icon: Package },
    { id: "scholarships", label: "Scholarships", icon: GraduationCap },
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-emerald-100 selection:text-emerald-900 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-bold tracking-widest uppercase mb-6"
          >
            <Heart className="w-3 h-3" /> Make an Impact
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-emerald-950 mb-8 leading-[1.1]"
          >
            Your Kindness <br />
            <span className="text-emerald-600 italic">Powers Change</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed font-serif"
          >
            Whether it's a one-time gift, a monthly commitment, or donating essential items, your support directly reaches the most vulnerable communities in Sri Lanka.
          </motion.p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap gap-2 md:gap-4 mb-8 md:mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 min-w-[140px] md:flex-none flex items-center justify-center md:justify-start gap-2 md:gap-3 px-4 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl text-[9px] md:text-xs font-bold uppercase tracking-widest transition-all ${
                activeTab === tab.id 
                  ? "bg-emerald-600 text-white shadow-xl shadow-emerald-600/20 scale-105" 
                  : "bg-gray-50 text-gray-400 hover:bg-gray-100"
              }`}
            >
              <tab.icon className="w-3 h-3 md:w-4 md:h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gray-50 rounded-[3rem] p-8 md:p-12 border border-emerald-50"
            >
              {activeTab === "bank" && (
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-emerald-950">Bank <span className="text-emerald-600">Transfer</span> Details</h2>
                  
                  <div className="space-y-6">
                    <div className="p-6 bg-white rounded-2xl border border-emerald-100">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center">
                          <Building2 className="w-5 h-5 text-emerald-600" />
                        </div>
                        <h3 className="font-bold text-emerald-950 uppercase tracking-widest text-xs">Direct Deposit - HNB</h3>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 text-sm font-medium text-gray-600">
                        <div>
                          <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Account Name</p>
                          <p className="font-bold text-emerald-950">Foundation of Goodness</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Account Number</p>
                          <p className="font-bold text-emerald-950">092010085900</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Bank & Branch</p>
                          <p className="font-bold text-emerald-950">HNB (Thimbirigasyaya)</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">SWIFT Code</p>
                          <p className="font-bold text-emerald-950">HBLILKLX</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-emerald-950 text-white rounded-2xl shadow-xl">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-emerald-400">
                            <Mail className="w-4 h-4" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Mail by Cheque</span>
                          </div>
                          <p className="text-xs text-emerald-100/60 leading-relaxed font-serif italic">
                            Address to "Foundation of Goodness" <br />
                            30/32 Longden Place, Colombo 7, Sri Lanka
                          </p>
                        </div>
                        <div className="shrink-0">
                          <Info className="w-8 h-8 text-emerald-800" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "items" && (
                <div className="space-y-8">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h2 className="text-3xl font-bold text-emerald-950 mb-4">Donate <span className="text-emerald-600">Goods</span></h2>
                      <p className="text-gray-600 leading-relaxed font-serif">We accept new or gently used (preloved) items that can help families in need.</p>
                    </div>
                    <div className="w-16 h-16 bg-emerald-100 rounded-3xl flex items-center justify-center shrink-0">
                      <Truck className="w-8 h-8 text-emerald-600" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { title: "Essential Clothing", desc: "New or clean preloved clothes for children and adults.", items: ["School Uniforms", "Casual Wear", "Footwear"] },
                      { title: "Educational Kits", desc: "Materials to help children continue their education.", items: ["Stationery", "Laptops (Working)", "Books"] },
                      { title: "Household Items", desc: "Basic utilities for families affected by disasters.", items: ["Dry Rations", "Bed Sheets", "Kitchenware"] },
                      { title: "Medical Supplies", desc: "Unopened essential medical equipment.", items: ["Wheelchairs", "Crutches", "First Aid Kits"] }
                    ].map((cat, i) => (
                      <div key={i} className="p-6 bg-white rounded-2xl border border-emerald-100 hover:border-emerald-500 transition-colors group">
                        <h4 className="font-bold text-emerald-950 mb-2">{cat.title}</h4>
                        <p className="text-xs text-gray-500 mb-4">{cat.desc}</p>
                        <ul className="space-y-2">
                          {cat.items.map((item, j) => (
                            <li key={j} className="flex items-center gap-2 text-[10px] font-bold text-emerald-600 uppercase tracking-widest">
                              <CheckCircle2 className="w-3 h-3" /> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="p-8 bg-white rounded-2xl border-2 border-dashed border-emerald-200">
                    <h4 className="font-bold text-emerald-950 mb-4 uppercase tracking-widest text-center text-xs">How to Donate Items?</h4>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                      {[
                        { step: "1", title: "Quality Check", desc: "Ensure items are in good, usable condition." },
                        { step: "2", title: "Get in Touch", desc: "Call us to coordinate the drop-off or pickup." },
                        { step: "3", title: "Deliver Hope", desc: "Send to our collection center in Colombo." }
                      ].map((step, i) => (
                        <div key={i}>
                          <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xs">{step.step}</div>
                          <p className="text-[10px] font-bold text-emerald-950 uppercase tracking-widest mb-1">{step.title}</p>
                          <p className="text-[9px] text-gray-400 font-medium">{step.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <button 
                      onClick={() => navigate("/contact-us")}
                      className="w-full md:w-auto md:px-12 py-4 bg-emerald-600 text-white rounded-xl font-bold uppercase tracking-widest text-[10px] shadow-lg shadow-emerald-200 flex items-center justify-center gap-2 hover:bg-emerald-700 transition-all"
                    >
                      <Smartphone className="w-3 h-3" /> Call to Coordinate
                    </button>
                  </div>
                </div>
              )}

              {activeTab === "scholarships" && (
                <div className="space-y-10 text-slate-900">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="max-w-xl">
                      <h2 className="text-3xl font-bold text-emerald-950 mb-3">Empower Through <span className="text-emerald-600 italic">Scholarships</span></h2>
                      <p className="text-gray-600 leading-relaxed font-serif italic text-sm">Sponsor a student's educational journey and help them break the cycle of poverty. Your contribution provides regular support to students who are academically gifted but financially vulnerable.</p>
                    </div>
                    <div className="w-16 h-16 bg-emerald-50 rounded-3xl flex items-center justify-center shrink-0 border border-emerald-100">
                      <GraduationCap className="w-8 h-8 text-emerald-600" />
                    </div>
                  </div>

                  {/* Bank Details Specifically for Scholarships */}
                  <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm">
                    <div className="flex items-center gap-3 mb-6">
                      <Building2 className="w-5 h-5 text-emerald-600" />
                      <h3 className="text-xs font-black uppercase tracking-[0.2em] text-emerald-950">Scholarship Fund Bank Details</h3>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-12">
                      <div className="space-y-4 text-[11px]">
                         <div>
                            <p className="text-gray-400 font-bold uppercase tracking-widest mb-1">Bank Name</p>
                            <p className="font-bold text-slate-800">HNB Bank (Hatton National Bank Plc)</p>
                         </div>
                         <div>
                            <p className="text-gray-400 font-bold uppercase tracking-widest mb-1">Account Name</p>
                            <p className="font-bold text-slate-800">FOUNDATION OF GOODNESS</p>
                         </div>
                         <div>
                            <p className="text-gray-400 font-bold uppercase tracking-widest mb-1">Account Number</p>
                            <p className="font-bold text-emerald-600 font-mono text-sm leading-none">092020143614</p>
                         </div>
                      </div>
                      <div className="space-y-4 text-[11px]">
                         <div>
                            <p className="text-gray-400 font-bold uppercase tracking-widest mb-1">Branch</p>
                            <p className="font-bold text-slate-800">Thimbirigasyaya</p>
                         </div>
                         <div>
                            <p className="text-gray-400 font-bold uppercase tracking-widest mb-1">Bank / Branch Code</p>
                            <p className="font-bold text-slate-800">7083 / 092</p>
                         </div>
                         <div>
                            <p className="text-gray-400 font-bold uppercase tracking-widest mb-1">SWIFT Code</p>
                            <p className="font-bold text-slate-800">HBLILKLX</p>
                         </div>
                      </div>
                      <div className="space-y-4 text-[11px]">
                         <div>
                            <p className="text-gray-400 font-bold uppercase tracking-widest mb-1">Bank Address</p>
                            <p className="font-bold text-slate-800 leading-relaxed italic">138B Havelock Road, Colombo 05</p>
                         </div>
                         <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 italic text-[9px] text-emerald-800">
                           "Please specify 'SCHOLARSHIP FOR UNIVERSITY STUDENT' or 'SCHOLARSHIP FOR SCHOOL CHILD' during transfer."
                         </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Proof and Commitment info */}
                  <div className="grid md:grid-cols-2 gap-8">
                     <div className="p-8 bg-slate-900 text-white rounded-[2.5rem] shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                          <CheckCircle2 className="w-24 h-24" />
                        </div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400 mb-6">Transparency & Proof</h4>
                        <p className="text-xs leading-relaxed text-slate-400 font-serif mb-6 italic">Upon remitting funds, you will receive a comprehensive file including:</p>
                        <ul className="space-y-3">
                          {[
                            "Background & family details",
                            "Bank account details for direct audit",
                            "Student photographs",
                            "University/School enrollment letters"
                          ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-slate-100">
                              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> {item}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-8 pt-8 border-t border-white/10">
                           <p className="text-[10px] text-slate-400 leading-relaxed italic">Progress reports are submitted to donors every 4 months to ensure continued impact.</p>
                        </div>
                     </div>

                     <div className="space-y-6">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-900 border-b border-emerald-100 pb-4">Sponsorship Schemes</h4>
                        
                        <div className="space-y-4">
                           {/* Uni Card */}
                           <div className="p-6 bg-white border border-emerald-100 rounded-2xl hover:shadow-lg transition-all group">
                              <div className="flex justify-between items-start mb-4">
                                 <h5 className="font-bold text-emerald-950 text-sm">University Students</h5>
                                 <span className="px-2 py-1 bg-emerald-50 text-emerald-600 rounded text-[8px] font-black uppercase">4-6 Year Program</span>
                              </div>
                              <div className="flex items-baseline gap-2 mb-4">
                                 <span className="text-xl font-bold font-mono text-emerald-600">LKR 10,000</span>
                                 <span className="text-[9px] font-bold text-gray-400 uppercase">/ Month</span>
                                 <span className="text-[9px] font-bold text-gray-200 uppercase px-2">|</span>
                                 <span className="text-xs font-bold text-slate-900">LKR 120,000<span className="text-[9px] text-gray-400"> Per Annum</span></span>
                              </div>
                              <p className="text-[10px] text-gray-500 italic leading-relaxed mb-4">Duration covers undergraduate studies. Minimum sponsorship period is 1 year.</p>
                           </div>

                           {/* School Card */}
                           <div className="p-6 bg-white border border-slate-100 rounded-2xl hover:shadow-lg transition-all">
                              <div className="flex justify-between items-start mb-4">
                                 <h5 className="font-bold text-emerald-950 text-sm">School Children</h5>
                                 <span className="px-2 py-1 bg-slate-50 text-slate-500 rounded text-[8px] font-black uppercase">Foundation Level</span>
                              </div>
                              <div className="space-y-3 mb-6">
                                 <div className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-lg">
                                    <span className="text-[9px] font-bold uppercase text-gray-400">Up to Ordinary Level</span>
                                    <span className="text-xs font-bold text-emerald-600">LKR 5,000<span className="text-[8px] text-gray-400 font-normal"> /mo</span></span>
                                 </div>
                                 <div className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-lg">
                                    <span className="text-[9px] font-bold uppercase text-gray-400">Advanced Level</span>
                                    <span className="text-xs font-bold text-emerald-600">LKR 7,500<span className="text-[8px] text-gray-400 font-normal"> /mo</span></span>
                                 </div>
                              </div>

                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="p-8 bg-emerald-50 border border-emerald-100 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-8">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-emerald-100">
                      <Mail className="w-8 h-8 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-emerald-950 mb-2">Coordination & Guidance</h4>
                      <p className="text-[11px] text-gray-600 leading-relaxed font-serif italic">
                        If you would like to move forward with a scholarship, please contact <span className="text-emerald-700 font-bold">Ananda Jayawardena</span> at <span className="font-bold font-mono">ananda@foguc.org</span>. Our education officer will guide you through the student selection and remittance process.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Sidebar / Impact Stats */}
          <div className="space-y-8">
            <div className="bg-emerald-950 text-white rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-900 rounded-full translate-x-16 -translate-y-16"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-6">Our Integrity <span className="text-emerald-400 italic">Promise</span></h3>
                <div className="space-y-6">
                  {[
                    { title: "No Admin Cost", desc: "100% of your donation goes to the project.", icon: HandHeart },
                    { title: "100% Transparency", icon: CheckCircle2, desc: "Track your funds thru verified GN reports." },
                    { title: "Prompt Updates", icon: Gift, desc: "Recieve photos and success stories of impact." }
                  ].map((p, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 bg-emerald-900 rounded-xl flex items-center justify-center shrink-0">
                        <p.icon className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest mb-1">{p.title}</h4>
                        <p className="text-[10px] text-emerald-100/40 leading-relaxed font-serif italic">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-[2.5rem] p-8 border border-emerald-50">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 text-center">Need Assistance?</h3>
              <div className="space-y-4">
                <button 
                  onClick={() => navigate("/contact-us")}
                  className="w-full py-4 bg-white border border-emerald-100 rounded-xl text-[10px] font-bold uppercase tracking-widest text-emerald-950 hover:border-emerald-600 transition-all flex items-center justify-center gap-3"
                >
                  <Mail className="w-4 h-4 text-emerald-600" /> Contact Us
                </button>
                <p className="text-center text-[9px] text-gray-400 font-medium">Available Mon-Fri, 9AM to 5PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HandHeart(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
      <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.8-2.8L13 15" />
      <path d="M14 11V9a2 2 0 1 0-4 0v4.5" />
      <path d="M8 15V7a2 2 0 1 0-4 0v11" />
      <path d="M18 15V5a2 2 0 1 0-4 0v2" />
    </svg>
  );
}
