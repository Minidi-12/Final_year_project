import React from "react";
import { AnimatePresence } from "framer-motion";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Sparkles,
  Info
} from "lucide-react";

const UPCOMING_ACTIVITIES = [
  {
    id: "rural-educators-2026",
    title: "Awareness Workshop for Rural Educators",
    date: "June 15, 2026",
    time: "09:00 AM - 04:00 PM",
    location: "Monaragala District Hall",
    description: "A specialized training session for teachers and school administrators in rural districts focusing on identifying psychological signs of abuse and establishing school-based support systems. This workshop will provide practical tools for early intervention and creating safe learning environments for all students.",
    image: "https://images.unsplash.com/photo-1544531585-9837b9884657?q=80&w=800&auto=format&fit=crop",
    capacity: "50 Participants",
    tag: "WORKSHOP"
  },
  {
    id: "protection-summit-2026",
    title: "Annual Child Protection Summit",
    date: "July 22, 2026",
    time: "10:00 AM - 06:00 PM",
    location: "BMICH, Colombo",
    description: "Our signature annual event bringing together policymakers, law enforcement, and social workers to discuss nationwide protocols for child safety. The 2026 summit focuses on digital safety, protecting children from online exploitation, and strengthening the national reporting mechanism.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop",
    capacity: "200+ Attendees",
    tag: "SUMMIT"
  }
];

export default function UpcomingActivities() {
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
            <span>Future Calendar</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1] tracking-tight max-w-4xl"
          >
            Planning for a <br />
            <span className="text-emerald-400 font-serif italic font-medium">Safer</span> Tomorrow
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-emerald-100/60 max-w-2xl leading-relaxed font-serif italic mb-12"
          >
            Join our upcoming events and workshops designed to empower communities, educate leaders, and build a unified front for woman and child protection.
          </motion.p>
          
          <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400/80">
            <Link to="/" className="hover:text-white transition-colors">HOME</Link>
            <span className="text-white/20">/</span>
            <span className="text-white">UPCOMING ACTIVITIES</span>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-emerald-950 mb-6 tracking-tight">Key <span className="text-emerald-600 font-serif italic font-medium">Events</span> 2026</h2>
              <p className="text-lg text-gray-500 font-serif italic">Mark your calendars for our upcoming initiatives across the island.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {UPCOMING_ACTIVITIES.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col bg-emerald-50/30 rounded-[3.5rem] border border-transparent hover:border-emerald-100 hover:bg-white hover:shadow-2xl hover:shadow-emerald-900/5 transition-all overflow-hidden"
              >
                {/* Visual Side */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img 
                    src={activity.image} 
                    alt={activity.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-emerald-950/20 to-transparent"></div>
                  <div className="absolute top-8 right-8">
                     <span className="px-3 py-1.5 bg-white/20 backdrop-blur-md text-white text-[9px] font-bold rounded-full uppercase tracking-widest border border-white/20">
                      {activity.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2 text-[10px] font-bold text-white uppercase tracking-widest bg-emerald-600 px-4 py-2 rounded-xl shadow-lg shadow-emerald-900/20">
                        <Calendar className="w-3 h-3" /> {activity.date}
                      </div>
                      <div className="flex items-center gap-2 text-[10px] font-bold text-white uppercase tracking-widest bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                        <Clock className="w-3 h-3" /> {activity.time}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-10 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">
                    <div className="flex items-center gap-1.5"><MapPin className="w-3 h-3 text-emerald-600" /> {activity.location}</div>
                    <div className="w-1 h-1 bg-emerald-200 rounded-full"></div>
                    <div className="flex items-center gap-1.5"><Users className="w-3 h-3 text-emerald-600" /> {activity.capacity}</div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-emerald-950 mb-6 leading-tight group-hover:text-emerald-700 transition-colors">
                    {activity.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed font-medium border-l border-emerald-100 pl-6">
                    {activity.description}
                  </p>


                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Note Section */}
      <section className="bg-emerald-50/50 py-24 mb-24 rounded-[4rem] mx-6">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-3xl shadow-xl shadow-emerald-900/5 text-emerald-600 mb-10">
              <Info className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-emerald-950 mb-8 tracking-tight italic font-serif">Community <span className="text-emerald-600">Catalysts</span></h2>
            <p className="text-lg text-emerald-900/60 leading-relaxed font-serif italic mb-12 max-w-2xl mx-auto">
              Do you want to host an awareness program in your local community? Our expert team can provide training, resources, and guidance to help you organize impactful programs in your local area.
            </p>
            <Link 
              to="/contact-us" 
              className="px-12 py-5 bg-emerald-950 text-white rounded-2xl font-bold text-xs uppercase tracking-[0.2em] shadow-xl shadow-emerald-950/20 hover:scale-105 transition-all inline-block"
            >
              Collaborate With Us
            </Link>
        </div>
      </section>
    </div>
  );
}
