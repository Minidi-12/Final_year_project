import React from "react";
import { AnimatePresence } from "framer-motion";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router";
import { ArrowRight, Search, Filter, CheckCircle2 } from "lucide-react";
import { PROJECTS, getCategoryLabel } from "../constants";

export default function Projects() {
  const [activeFilter, setActiveFilter] = React.useState("All");
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredProjects = PROJECTS.filter(project => {
    const categoryLabel = getCategoryLabel(project.category);
    const matchesFilter = activeFilter === "All" || 
      (activeFilter === "Community" && categoryLabel === "Community Development") ||
      categoryLabel.includes(activeFilter);
    
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesFilter && matchesSearch;
  }).sort((a, b) => {
    if (a.status === "active" && b.status === "completed") return -1;
    if (a.status === "completed" && b.status === "active") return 1;
    return 0;
  });

  return (
    <div className="min-h-screen bg-[#FDFCFB]">
      {/* Hero Section */}
      <section className="bg-emerald-950 py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100" fill="white" fillOpacity="0.05" />
          </svg>
        </div>
        
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span> Impact Projects
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
          Restoring <span className="text-emerald-400 font-serif italic font-medium">Hope</span> <br />
          Through Direct Action
        </h1>
        <p className="text-lg md:text-xl text-emerald-100/60 max-w-2xl leading-relaxed font-serif italic">
          Connecting verified community needs with the resources and support required to create lasting change across Sri Lanka.
        </p>
      </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="sticky top-0 z-40 bg-white border-b border-emerald-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-900 uppercase tracking-widest">
            <Filter className="w-4 h-4" /> Filters
          </div>
          
          <div className="flex flex-wrap gap-2">
            {["All", "Education", "Health", "Disaster Relief", "Environment", "Community"].map((f) => (
              <button 
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                  activeFilter === f ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/20" : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-emerald-600 transition-colors" />
            <input 
              type="text" 
              placeholder="Search projects..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-gray-50 border border-emerald-50 pl-11 pr-5 py-3 rounded-2xl text-xs font-medium w-full md:w-64 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all"
            />
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-[2rem] overflow-hidden border shadow-xl shadow-emerald-950/5 group transition-all flex flex-col h-full ${
                  project.status === "completed" 
                    ? "border-gray-100 opacity-90 hover:border-gray-300" 
                    : "border-emerald-50 hover:border-emerald-200"
                }`}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      project.status === "completed" ? "grayscale group-hover:grayscale-0" : "group-hover:scale-105"
                    }`}
                  />
                  <div className="absolute top-6 left-6 flex gap-2">
                    <div className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[9px] font-bold text-emerald-900 uppercase tracking-widest shadow-sm">
                      {getCategoryLabel(project.category)}
                    </div>
                    {project.status === "completed" && (
                      <div className="px-3 py-1 bg-emerald-600 rounded-full text-[9px] font-bold text-white uppercase tracking-widest shadow-sm flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Completed
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <h3 className={`text-xl font-bold mb-4 leading-tight transition-colors ${
                    project.status === "completed" ? "text-gray-500" : "text-emerald-950 group-hover:text-emerald-600"
                  }`}>
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium line-clamp-3">
                    {project.description}
                  </p>

                  {/* Impact Progress */}
                  {project.status === "active" && (
                    <div className="mb-8">
                      {(() => {
                        const percentage = Math.min(Math.round((project.fundsRaised / project.budget) * 100), 100);
                        return (
                          <>
                            <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                              <span>Raised: LKR {project.fundsRaised.toLocaleString()}</span>
                              <span className="text-emerald-600">{percentage}%</span>
                            </div>
                            <div className="h-1.5 bg-emerald-50 rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: `${percentage}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="h-full bg-emerald-600 rounded-full"
                              ></motion.div>
                            </div>
                          </>
                        );
                      })()}
                    </div>
                  )}
                  
                  <div className="mt-auto pt-6 border-t border-emerald-50 flex items-center justify-between">
                    <Link 
                      to={`/projects/${project.id}`}
                      className={`inline-flex items-center gap-3 font-bold transition-all text-xs uppercase tracking-widest px-6 py-3 rounded-xl w-full justify-center group/btn shadow-sm ${
                        project.status === "completed"
                         ? "text-gray-400 border border-gray-100 hover:bg-gray-50"
                         : "bg-emerald-950 text-white hover:bg-emerald-900"
                      }`}
                    >
                      {project.status === "completed" ? "View Archive" : "View Project Details"} 
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}