import { motion } from "framer-motion";
import { Play } from "lucide-react";

export function FounderMessage() {
  return (
    <section className="py-24 md:py-32 bg-[#111] text-white">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center">
          <h3 className="text-sm md:text-base font-bold tracking-[0.2em] text-[#889d79] uppercase mb-4">A Message From The Founder</h3>
        </div>

        {/* Cinematic Video Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video w-full rounded-3xl overflow-hidden group cursor-pointer mb-16 shadow-2xl shadow-black/50"
        >
          {/* Placeholder Image */}
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
            alt="Founder Video Thumbnail" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
          />
          
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
              <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-2" fill="white" />
            </div>
          </div>
        </motion.div>

        {/* The Quote */}
        <div className="max-w-4xl mx-auto text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl font-serif italic leading-relaxed text-[#d8e3d0]"
            style={{ fontFamily: "'Lora', serif" }}
          >
            "I built GenBright because I wanted children to experience the kind of childhood that inspires a lifetime of learning."
          </motion.p>
        </div>

      </div>
    </section>
  );
}
