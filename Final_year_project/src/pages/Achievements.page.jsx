import React from "react";
import { AnimatePresence } from "framer-motion";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router";
import { 
  Award, 
  Users, 
  Globe, 
  CheckCircle2, 
  FileText, 
  Download, 
  MapPin, 
  Calendar,
  ArrowUpRight
} from "lucide-react";
import { PROJECTS, getCategoryIcon, getCategoryLabel } from "../constants";

export default function Achievements() {
  // Get all completed projects
  const completedProjects = PROJECTS.filter(p => p.status === "completed");

  const handleDownloadPDF = (title) => {
    // Mock PDF download
    console.log(`Downloading case study for: ${title}`);
    // In a real app, this would trigger a download
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
            <Award className="w-3 h-3 text-emerald-400" /> 
            <span>Milestones & Impact</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1] tracking-tight max-w-4xl"
          >
            Our Journey of <br />
            <span className="text-emerald-400 font-serif italic font-medium">Sustainable</span> Impact
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-emerald-100/60 max-w-2xl leading-relaxed font-serif italic mb-12"
          >
            Since our inception, we have been committed to transparency and direct action. Every completed project is a testament to the power of community collaboration and verified support.
          </motion.p>
          
          <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400/80">
            <Link to="/" className="hover:text-white transition-colors">HOME</Link>
            <span className="text-white/20">/</span>
            <span className="text-white">PROJECT ACHIEVEMENTS</span>
          </div>
        </div>
      </section>

      {/* Impact Stats Bento Grid */}
      <section className="-mt-16 relative z-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Transparency", val: "100%", sub: "Verified Fund Trail", icon: Globe },
              { label: "Successful Deliveries", val: "25+", sub: "Completed Projects", icon: CheckCircle2 },
              { label: "Lives Impacted", val: "15k+", sub: "Communities Reached", icon: Users },
              { label: "Island-Wide", val: "25/25", sub: "Districts Served", icon: Award },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-[0_20px_50px_-15px_rgba(6,78,59,0.12)] border border-emerald-50 group hover:border-emerald-600/20 transition-all"
              >
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-4xl font-bold font-display text-emerald-950 mb-2 leading-none">{stat.val}</div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-relaxed">
                  {stat.label} <br />
                  <span className="text-emerald-600/60 lowercase font-serif italic text-xs tracking-normal mt-1 block">{stat.sub}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Cards List */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-emerald-950 mb-6 tracking-tight">Case Studies & <span className="text-emerald-600 font-serif italic font-medium">Outcomes</span></h2>
              <p className="text-lg text-gray-500 font-serif italic">Detailed insights into our most impactful completed projects across the island.</p>
            </div>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-emerald-50 text-emerald-700 rounded-2xl font-bold text-[10px] uppercase tracking-widest border border-emerald-100 hover:bg-emerald-100 transition-all">Latest Reports</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {completedProjects.map((project, index) => {
              const CategoryIcon = getCategoryIcon(project.category);
              return (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex flex-col h-full bg-emerald-50/30 rounded-[3.5rem] border border-transparent hover:border-emerald-100 hover:bg-white hover:shadow-2xl hover:shadow-emerald-900/5 transition-all overflow-hidden"
                >
                  {/* Card Image Header */}
                  <div className="relative h-64 overflow-hidden rounded-t-[3.5rem]">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent"></div>
                    <div className="absolute bottom-8 left-8">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-600 text-white rounded-full text-[9px] font-bold uppercase tracking-widest whitespace-nowrap overflow-hidden">
                        <CategoryIcon className="w-3 h-3" /> 
                        <span>{getCategoryLabel(project.category)}</span>
                      </div>
                    </div>
                    <div className="absolute top-8 right-8 text-white/50 text-[10px] font-bold uppercase tracking-[0.2em]">
                      Ref: #{project.id.slice(0, 5).toUpperCase()}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-10 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        <div className="flex items-center gap-1.5"><MapPin className="w-3 h-3" /> {project.location}</div>
                        <div className="w-1 h-1 bg-emerald-200 rounded-full"></div>
                        <div className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> Completed {project.end_date ? new Date(project.end_date).getFullYear() : '2023'}</div>
                      </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-emerald-950 mb-6 leading-tight group-hover:text-emerald-700 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-500 text-sm leading-relaxed mb-10 line-clamp-3 font-medium border-l border-emerald-100 pl-6">
                      {project.description}
                    </p>

                    <div className="mt-auto pt-8 border-t border-emerald-100 flex items-center justify-between">
                      <button 
                        onClick={() => handleDownloadPDF(project.title)}
                        className="inline-flex items-center gap-3 text-[10px] font-bold text-emerald-600 uppercase tracking-widest hover:gap-4 transition-all"
                      >
                        <FileText className="w-4 h-4" /> Download Report
                      </button>
                      <Link 
                        to={`/projects/${project.id}`}
                        className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald-900 border border-emerald-50 shadow-sm hover:bg-emerald-950 hover:text-white transition-all group/link"
                      >
                        <ArrowUpRight className="w-5 h-5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}