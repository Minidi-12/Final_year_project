import React from "react";
import { AnimatePresence } from "framer-motion";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router";
import { 
  Calendar, 
  MapPin, 
  ArrowUpRight, 
  Sparkles,
  Search,
  Filter
} from "lucide-react";
import { ACTIVITIES } from "../constants";

export default function Activities() {
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
            <Sparkles className="w-3 h-3 text-emerald-400" /> 
            <span>Community Engagement</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1] tracking-tight max-w-4xl"
          >
            Stories of <br />
            <span className="text-emerald-400 font-serif italic font-medium">Progress</span> & Hope
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-emerald-100/60 max-w-2xl leading-relaxed font-serif italic mb-12"
          >
            Explore our daily efforts on the ground—from community workshops to emergency relief distributions across Sri Lanka.
          </motion.p>
          
          <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400/80">
            <Link to="/" className="hover:text-white transition-colors">HOME</Link>
            <span className="text-white/20">/</span>
            <span className="text-white">ACTIVITIES</span>
          </div>
        </div>
      </section>

      {/* Activities Feed */}
      <section className="py-24 px-6 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {ACTIVITIES.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col bg-white rounded-[3rem] overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-emerald-900/5 transition-all h-full"
              >
                {/* Visual Header */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={activity.image} 
                    alt={activity.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-6 left-6 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="px-3 py-1.5 bg-emerald-600 text-white text-[9px] font-bold rounded-full uppercase tracking-widest flex items-center gap-1.5 shadow-lg">
                      <Calendar className="w-3 h-3" /> {activity.date}
                    </span>
                  </div>
                </div>

                {/* Narrative Content */}
                <div className="p-10 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-6">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{activity.location}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-emerald-950 mb-6 leading-tight group-hover:text-emerald-700 transition-colors">
                    {activity.title}
                  </h3>
                  
                  <p className="text-gray-500 text-sm leading-relaxed font-serif italic mb-10 flex-1 border-l-2 border-emerald-50 pl-6 group-hover:border-emerald-200 transition-colors">
                    {activity.description}
                  </p>


                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
