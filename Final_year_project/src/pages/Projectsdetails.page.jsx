import React from "react";
import { useParams, Link, Navigate } from "react-router";
import { AnimatePresence } from "framer-motion";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  Users, 
  DollarSign, 
  CheckCircle2, 
  Clock,
  Briefcase,
  Share2,
  Heart
} from "lucide-react";
import { PROJECTS, getCategoryLabel, getCategoryIcon } from "../constants";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const progress = Math.min(Math.round((project.fundsRaised / project.budget) * 100), 100);
  const CategoryIcon = getCategoryIcon(project.category);

  return (
    <div className="min-h-screen bg-white selection:bg-emerald-100 selection:text-emerald-900 pb-24 pt-20">
      {/* 1. TOP NAV / HERO OVERLAY */}
      <div className="relative overflow-hidden">
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-emerald-50 rounded-full blur-3xl opacity-50 z-0"></div>
        
        <div className="max-w-7xl mx-auto px-6 pt-12 md:pt-20 pb-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link 
              to="/projects" 
              className="inline-flex items-center gap-3 text-[10px] font-bold text-emerald-600/60 hover:text-emerald-600 transition-all uppercase tracking-[0.3em] mb-12 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to Discover
            </Link>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-end gap-12 lg:gap-20">
            <div className="lg:w-3/5">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-bold uppercase tracking-widest mb-8"
              >
               {React.createElement(getCategoryIcon(project.category), { className: "w-3 h-3" })}
               <span>{getCategoryLabel(project.category)}</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-emerald-950 mb-10 leading-[1.1] tracking-tight"
              >
                {project.title.split(' ').map((word, i) => (
                  <span key={i} className={i === 0 ? "font-serif italic font-medium text-emerald-600 mr-4" : ""}>
                    {word}{" "}
                  </span>
                ))}
              </motion.h1>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-8 text-[11px] font-bold text-gray-400 uppercase tracking-widest border-t border-gray-100 pt-10"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-emerald-600" /> {project.location}
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-emerald-600" /> Since {new Date(project.start_date).getFullYear()}
                </div>
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${project.status === 'active' ? 'bg-emerald-500 animate-pulse' : 'bg-gray-300'}`}></div>
                  Status: <span className="text-emerald-950">{project.status.replace('_', ' ')}</span>
                </div>
              </motion.div>
            </div>

            <div className="lg:w-2/5 w-full">
               <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-emerald-950 text-white p-10 rounded-[3.5rem] shadow-2xl relative overflow-hidden group"
               >
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                    {React.createElement(getCategoryIcon(project.category), { className: "w-3 h-3" })}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-[0.4em] mb-4">Financial Progress</div>
                    <div className="text-4xl font-bold mb-8">LKR {project.fundsRaised.toLocaleString()} <span className="text-lg font-normal text-white/40">/ {project.budget.toLocaleString()}</span></div>
                    
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden mb-4">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="h-full bg-emerald-400 rounded-full shadow-[0_0_15px_rgba(52,211,153,0.5)]"
                      />
                    </div>
                    
                    <div className="flex justify-between text-[10px] font-bold text-white/50 uppercase tracking-widest">
                      <span>{progress}% Impact Ready</span>
                      <span>LKR {(project.budget - project.fundsRaised).toLocaleString()} to Goal</span>
                    </div>
                  </div>
               </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MEDIA & CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Main Narrative */}
          <div className="lg:col-span-8 space-y-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[4rem] overflow-hidden aspect-[16/9] shadow-2xl relative"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[4rem]"></div>
            </motion.div>

            <section className="prose prose-emerald max-w-none">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-px h-12 bg-emerald-200"></div>
                <h2 className="text-2xl font-bold text-emerald-950 uppercase tracking-tight m-0">The Need <span className="text-emerald-600 font-serif italic text-3xl block capitalize">& Context</span></h2>
              </div>
              <p className="text-xl text-gray-700 leading-[1.8] font-serif italic mb-12 whitespace-pre-wrap first-letter:text-7xl first-letter:font-bold first-letter:text-emerald-600 first-letter:mr-3 first-letter:float-left">
                {project.longDescription}
              </p>

              <div className="grid md:grid-cols-2 gap-12 pt-12 border-t border-gray-100">
                <div className="bg-emerald-50/50 p-10 rounded-[3rem]">
                   <h4 className="text-[10px] font-bold text-emerald-800 uppercase tracking-widest mb-6">Execution Strategy</h4>
                   <p className="text-sm text-emerald-950/80 leading-relaxed font-medium">
                     Verified through the local GN office, this project utilizes a direct-impact model where 100% of the funds are applied to the physical resources required for the community's growth.
                   </p>
                </div>
                <div className="bg-gray-50 p-10 rounded-[3rem]">
                   <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">Transparency Commitment</h4>
                   <p className="text-sm text-gray-600 leading-relaxed font-medium">
                     Donors receive real-time updates and photographic evidence of milestone completions, ensuring a closed-loop trust ecosystem.
                   </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Tools */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[3.5rem] border border-emerald-50 shadow-[0_40px_80px_-20px_rgba(6,78,59,0.08)]"
            >
              <h3 className="text-xl font-bold text-emerald-950 mb-8 flex items-center gap-3">
                Action Items
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-emerald-50 rounded-[1.5rem] flex items-center justify-center text-emerald-600 shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-950">{project.volunteers_needed}</div>
                    <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Open Volunteer Slots</div>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-emerald-50 rounded-[1.5rem] flex items-center justify-center text-emerald-600 shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-950">Verified</div>
                    <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">GN Division Approval</div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-10 border-t border-gray-50 flex flex-col gap-4">
                <Link 
                  to="/donate"
                  className="w-full flex items-center justify-center bg-emerald-600 text-white h-16 rounded-2xl font-bold text-xs uppercase tracking-widest shadow-xl shadow-emerald-600/20 hover:bg-emerald-700 transition-all"
                >
                  Contribute Fund
                </Link>
                <Link 
                  to="/volunteer"
                  state={{ selectedProject: project.id }}
                  className="w-full flex items-center justify-center bg-white text-emerald-950 border border-emerald-100 h-16 rounded-2xl font-bold text-xs uppercase tracking-widest hover:border-emerald-600 transition-all"
                >
                  Join the Team
                </Link>
              </div>

              <div className="mt-8 flex items-center justify-center gap-4 text-gray-400">
                <button className="p-3 hover:text-emerald-600 transition-colors"><Share2 className="w-5 h-5" /></button>
                <button className="p-3 hover:text-emerald-600 transition-colors"><Heart className="w-5 h-5" /></button>
              </div>
            </motion.div>

            {/* Required Skills Block */}
            <div className="px-6">
              <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-6">Expertise Needed</h4>
              <div className="flex flex-wrap gap-2">
                {project.requiredSkills.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-4 py-2 bg-gray-50 text-gray-500 rounded-xl text-[10px] font-bold uppercase tracking-tight border border-gray-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FINAL CALL TO ACTION REMOVED */}
    </div>
  );
}
