import { motion } from "framer-motion";
import { Play } from "lucide-react";

const appleEase = [0.25, 0.1, 0.25, 1] as const;

export function FounderMessage() {
  return (
    <section className="py-20 md:py-24 bg-background border-b border-[#d2d2d7]/50">
      <div className="max-w-[1000px] mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: appleEase }}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-white border border-[#d2d2d7]/30 rounded-[40px] p-8 md:p-12 shadow-sm hover:shadow-md transition-shadow duration-500"
        >
          
          {/* Circular Video Thumbnail */}
          <div className="relative shrink-0 group cursor-pointer">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" 
                alt="Founder" 
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-black/50 group-hover:scale-105 transition-all duration-300">
                <Play className="w-5 h-5 text-white ml-1" fill="white" />
              </div>
            </div>
          </div>

          {/* Quote Content */}
          <div className="text-center md:text-left flex flex-col justify-center">
            <h3 className="text-[13px] md:text-[14px] font-semibold tracking-widest text-[#86868b] uppercase mb-4">
              A Message From The Founder
            </h3>
            <p className="text-xl md:text-3xl font-medium leading-relaxed text-primary tracking-tight">
              "I built GenBright because I wanted children to experience the kind of childhood that inspires a lifetime of learning."
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
