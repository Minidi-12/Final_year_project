import React from "react";
import { AnimatePresence } from "framer-motion";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router";
import { 
  Megaphone, 
  Shield, 
  Users, 
  Heart,
  Sparkles
} from "lucide-react";

const CAMPAIGNS = [
  {
    id: "end-violence",
    title: "National Campaign to End Violence Against Women",
    description: "Launched as a nationwide initiative, this campaign focuses on mobilizing communities to stand against all forms of gender-based violence. Through street drama and local advocacy, we aim to create a Sri Lanka where every woman lives without fear.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop",
    impact: "1M+ Aware",
    tag: "AWARENESS"
  },
  {
    id: "respect-her",
    title: "Respect Her: Awareness Campaign in Public Transport",
    description: "In collaboration with transport authorities, we've initiated the 'Respect Her' campaign to address harassment in buses and trains. We are training conductors on bystander intervention and providing immediate reporting hotlines.",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=800&auto=format&fit=crop",
    impact: "500+ Routes",
    tag: "TRANSIT"
  },
  {
    id: "break-silence",
    title: "Break the Silence: Community Outreach Program",
    description: "Encouraging neighbours and family members to identify signs of domestic abuse and safely report incidents. We have established 24/7 safe zones and counselling centres in over 10 districts for immediate protection.",
    image: "https://images.unsplash.com/photo-1516534775068-ba3e84529519?q=80&w=800&auto=format&fit=crop",
    impact: "10 Districts",
    tag: "OUTREACH"
  }
];

export default function Campaigns() {
  return (
    <div className="min-h-screen bg-white selection:bg-emerald-100 selection:text-emerald-900 pt-20">
      {/* Hero Section */}
      <section className="bg-emerald-950 py-32 md:py-40 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-emerald-800/20 rounded-full blur-3xl opacity-50 z-0"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-emerald-400/10 rounded-full blur-3xl opacity-30 z-0"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-8"
          >
            <Megaphone className="w-3 h-3 text-emerald-400" /> 
            <span>Advocacy & Movements</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1] tracking-tight max-w-4xl mx-auto"
          >
            Mobilizing <br />
            <span className="text-emerald-400 font-serif italic font-medium">National</span> Movements
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-emerald-100/60 max-w-2xl mx-auto leading-relaxed font-serif italic mb-12"
          >
            Our active campaigns are designed to shift social paradigms and create a safer, more equitable reality for every woman in our society.
          </motion.p>
          
          <div className="flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400/80">
            <Link to="/" className="hover:text-white transition-colors">HOME</Link>
            <span className="text-white/20">/</span>
            <span className="text-white">CAMPAIGNS</span>
          </div>
        </div>
      </section>

      {/* Campaigns Grid */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {CAMPAIGNS.map((campaign, index) => (
              <motion.div
                key={campaign.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col h-full bg-emerald-50/30 rounded-[3.5rem] border border-transparent hover:border-emerald-100 hover:bg-white hover:shadow-2xl hover:shadow-emerald-900/5 transition-all overflow-hidden"
              >
                {/* Image Header */}
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={campaign.image} 
                    alt={campaign.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 to-transparent"></div>
                  <div className="absolute top-8 right-8">
                     <span className="px-3 py-1.5 bg-white/20 backdrop-blur-md text-white text-[9px] font-bold rounded-full uppercase tracking-widest border border-white/20">
                      {campaign.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-8 left-8">
                    <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-1">Impact Goal</div>
                    <div className="text-xl font-bold text-white">{campaign.impact}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-10 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-emerald-950 mb-6 leading-tight group-hover:text-emerald-700 transition-colors">
                    {campaign.title}
                  </h3>
                  
                  <p className="text-gray-500 text-sm leading-relaxed font-medium border-l border-emerald-100 pl-6">
                    {campaign.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Shared Principles / Neat Footer Area */}
      <section className="bg-[#FAFAFA] py-24 mx-6 mb-24 rounded-[4rem]">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-emerald-950 mb-12 tracking-tight">Campaign Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               <div>
                  <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-[0.2em] mb-4">Verification</div>
                  <p className="text-xs text-gray-500 leading-relaxed font-medium">All campaign data and stories are cross-referenced with regional GN reports.</p>
               </div>
               <div>
                  <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-[0.2em] mb-4">Direct Action</div>
                  <p className="text-xs text-gray-500 leading-relaxed font-medium">We move from awareness to physical intervention through local safe-zone networks.</p>
               </div>
               <div>
                  <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-[0.2em] mb-4">Equity First</div>
                  <p className="text-xs text-gray-500 leading-relaxed font-medium">Decisions are led by the communities most affected by systemic abuse.</p>
               </div>
            </div>
        </div>
      </section>
    </div>
  );
}

