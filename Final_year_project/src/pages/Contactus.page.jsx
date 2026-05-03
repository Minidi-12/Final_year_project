import React, { useState} from "react";
import { AnimatePresence } from "framer-motion";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Sparkles, ArrowRight, ShieldCheck, Headphones } from "lucide-react";
import { Link } from "react-router";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white selection:bg-emerald-100 selection:text-emerald-900 pt-20">
      {/* Hero Section */}
      <section className="bg-emerald-950 py-32 md:py-40 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-emerald-800/20 rounded-full blur-3xl opacity-50 z-0"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-emerald-400/10 rounded-full blur-3xl opacity-30 z-0"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-8"
          >
            <MessageSquare className="w-3 h-3 text-emerald-400" /> 
            <span>Open Communication</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1] tracking-tight max-w-4xl"
          >
            We're Here to <br />
            <span className="text-emerald-400 font-serif italic font-medium">Listen</span> & Support
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-emerald-100/60 max-w-2xl leading-relaxed font-serif italic mb-12"
          >
            Whether you're seeking guidance, looking to contribute, or need immediate assistance, our dedicated team is standing by to bridge the gap.
          </motion.p>
          
          <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400/80">
            <Link to="/" className="hover:text-white transition-colors">HOME</Link>
            <span className="text-white/20">/</span>
            <span className="text-white">CONTACT US</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Contact Details & Info */}
            <div className="lg:col-span-5 space-y-16">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold text-emerald-950 tracking-tight">Direct <span className="text-emerald-600 font-serif italic font-medium">Connect</span></h2>
                <p className="text-lg text-gray-500 font-serif italic leading-relaxed">
                  "Every report, every inquiry, and every message is handled with the highest degree of confidentiality and professional urgency."
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8">
                {[
                  { 
                    icon: MapPin, 
                    title: "Headquarters", 
                    value: "456 Unity Tower, Galle Road, Colombo 03, SL",
                    desc: "Official administrative office"
                  },
                  { 
                    icon: Phone, 
                    title: "Phone Support", 
                    value: "+94 11 234 5678",
                    desc: "Available 24/7 for urgent reports"
                  },
                  { 
                    icon: Mail, 
                    title: "Digital Inquiries", 
                    value: "hello@hopelink.org",
                    desc: "General and partnership requests"
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-8 p-10 bg-[#FAFAFA] rounded-[3rem] border border-transparent hover:border-emerald-100 hover:bg-white hover:shadow-2xl hover:shadow-emerald-900/5 transition-all group"
                  >
                    <div className="w-16 h-16 shrink-0 bg-white rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm group-hover:bg-emerald-950 group-hover:text-white transition-colors">
                      <item.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-[10px] font-black text-emerald-900/30 uppercase tracking-[0.2em] mb-3">{item.title}</h3>
                      <p className="text-xl font-bold text-emerald-950 mb-1">{item.value}</p>
                      <p className="text-xs text-gray-400 font-medium">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Verified Badge / Working Hours Card */}
              <div className="bg-emerald-50 rounded-[3.5rem] p-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-40 h-40 bg-white/50 rounded-full blur-2xl"></div>
                
                <div className="relative z-10 flex flex-col gap-8">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white">
                        <Clock className="w-6 h-6" />
                      </div>
                      <h4 className="text-xs font-bold text-emerald-900 uppercase tracking-widest">Office Operations</h4>
                   </div>
                   
                   <div className="space-y-6">
                      <div className="flex justify-between items-end border-b border-emerald-200/50 pb-4">
                        <span className="text-gray-500 font-serif italic">Monday — Friday</span>
                        <span className="text-[10px] font-bold text-emerald-950 uppercase tracking-widest">09:00 AM — 05:00 PM</span>
                      </div>
                      <div className="flex justify-between items-end border-b border-emerald-200/50 pb-4">
                        <span className="text-gray-500 font-serif italic">Sat & Public Holidays</span>
                        <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Emergency Line Only</span>
                      </div>
                   </div>

                   <div className="pt-4 flex items-center gap-3 text-emerald-900/40 text-[9px] font-bold uppercase tracking-widest">
                      <ShieldCheck className="w-4 h-4" /> Fully Registered NGO / Verified Support Center
                   </div>
                </div>
              </div>
            </div>

            {/* Message Form Column */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white rounded-[4rem] p-10 lg:p-20 border border-gray-50 shadow-2xl shadow-emerald-900/5 relative overflow-hidden"
              >
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-24 text-center"
                  >
                    <div className="w-24 h-24 bg-emerald-50 text-emerald-600 rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 shadow-xl shadow-emerald-900/5">
                      <Send className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-bold text-emerald-950 mb-6 tracking-tight">Transmission Successful</h2>
                    <p className="text-lg text-emerald-900/60 font-serif italic mb-12 max-w-sm mx-auto leading-relaxed">
                      "Thank you for reaching out. A coordinator from our support division will review your inquiry and contact you within 24 hours."
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-[10px] font-bold text-emerald-600 uppercase tracking-[0.2em] hover:text-emerald-950 transition-colors inline-flex items-center gap-2 group"
                    >
                      SEND ANOTHER REPORT <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <div className="mb-16">
                      <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-8">
                        <Headphones className="w-6 h-6" />
                      </div>
                      <h2 className="text-3xl font-bold text-emerald-950 mb-4 tracking-tight">Send a Message</h2>
                      <p className="text-emerald-900/40 font-medium text-sm">Please fill out the form below and we'll get back to you immediately.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
                      <div className="space-y-4">
                        <label className="text-[10px] font-bold text-emerald-950 uppercase tracking-[0.2em] ml-2">Your Name</label>
                        <input
                          type="text"
                          required
                          placeholder="ALEXANDER PERERA"
                          className="w-full bg-[#FAFAFA] border border-transparent rounded-[1.5rem] px-8 py-5 text-[11px] font-bold uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-emerald-600/10 focus:bg-white focus:border-emerald-100 transition-all placeholder:text-gray-300"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>

                      <div className="space-y-4">
                        <label className="text-[10px] font-bold text-emerald-950 uppercase tracking-[0.2em] ml-2">Email Address</label>
                        <input
                          type="email"
                          required
                          placeholder="OFFICIAL@MAIL.COM"
                          className="w-full bg-[#FAFAFA] border border-transparent rounded-[1.5rem] px-8 py-5 text-[11px] font-bold uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-emerald-600/10 focus:bg-white focus:border-emerald-100 transition-all placeholder:text-gray-300"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>

                      <div className="space-y-4">
                        <label className="text-[10px] font-bold text-emerald-950 uppercase tracking-[0.2em] ml-2">Contact Number</label>
                        <input
                          type="tel"
                          placeholder="+94 XX XXX XXXX"
                          className="w-full bg-[#FAFAFA] border border-transparent rounded-[1.5rem] px-8 py-5 text-[11px] font-bold uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-emerald-600/10 focus:bg-white focus:border-emerald-100 transition-all placeholder:text-gray-300"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>

                      <div className="space-y-4">
                        <label className="text-[10px] font-bold text-emerald-950 uppercase tracking-[0.2em] ml-2">Inquiry Type</label>
                        <select
                          required
                          className="w-full bg-[#FAFAFA] border border-transparent rounded-[1.5rem] px-8 py-5 text-[11px] font-bold uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-emerald-600/10 focus:bg-white focus:border-emerald-100 transition-all appearance-none cursor-pointer"
                          value={formData.subject}
                          onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        >
                          <option value="">SELECT SUBJECT</option>
                          <option value="General">GENERAL INQUIRY</option>
                          <option value="Support">REQUEST SUPPORT</option>
                          <option value="Volunteer">VOLUNTEER APPLICATION</option>
                          <option value="Partnership">PARTNERSHIP</option>
                        </select>
                      </div>

                      <div className="md:col-span-2 space-y-4">
                        <label className="text-[10px] font-bold text-emerald-950 uppercase tracking-[0.2em] ml-2">Detailed Message</label>
                        <textarea
                          required
                          rows={6}
                          placeholder="PLEASE DESCRIBE YOUR REQUIREMENT OR INQUIRY IN DETAIL..."
                          className="w-full bg-[#FAFAFA] border border-transparent rounded-[2rem] px-8 py-6 text-[11px] font-bold uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-emerald-600/10 focus:bg-white focus:border-emerald-100 transition-all resize-none placeholder:text-gray-300"
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                        ></textarea>
                      </div>

                      <div className="md:col-span-2 pt-6">
                        <button
                          type="submit"
                          className="w-full md:w-auto bg-emerald-950 text-white px-16 py-6 rounded-2xl font-bold text-xs uppercase tracking-[0.25em] shadow-2xl shadow-emerald-950/20 hover:bg-emerald-800 transition-all flex items-center justify-center gap-4 group"
                        >
                          Send Inquiry
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-32 bg-[#FAFAFA] rounded-t-[5rem]">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="w-20 h-20 bg-white rounded-3xl shadow-xl shadow-emerald-900/5 flex items-center justify-center mx-auto mb-12">
              <Sparkles className="w-10 h-10 text-emerald-600" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-emerald-950 mb-12 leading-tight tracking-tight">Our Privacy <br /><span className="text-emerald-600 font-serif italic">Commitment</span></h2>
            <p className="text-xl text-emerald-900/40 leading-relaxed font-serif italic">
              "We prioritize your safety above all else. Communication with Hopelink is protected by end-to-end security protocols. We do not share your contact information with external agencies without explicit legal mandate or prior consent."
            </p>
         </div>
      </section>
    </div>
  );
}
