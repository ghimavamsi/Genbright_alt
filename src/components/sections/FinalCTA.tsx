import { motion } from "framer-motion";

const appleEase = [0.25, 0.1, 0.25, 1] as const;

export function FinalCTA() {
  return (
    <section className="py-20 md:py-24 bg-white text-primary border-t border-[#d2d2d7]/50">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: appleEase }}
          className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20"
        >
          
          {/* Left Text Content */}
          <div className="w-full lg:w-2/3 text-center lg:text-left">
            <h3 className="text-[13px] md:text-[14px] font-semibold tracking-widest text-[#86868b] uppercase mb-4">
              The Future Begins Here
            </h3>
            
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-4 text-primary tracking-tight">
              If this feels different, it's because it is.
            </h2>
            
            <p className="text-xl md:text-2xl font-medium text-[#86868b]">
              GenBright isn't preparing children only for exams. <br className="hidden md:block"/>
              <span className="font-semibold text-primary">We're preparing them for life.</span>
            </p>
          </div>

          {/* Right Button Action */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end relative">
            
            {/* Animated Button */}
            <motion.button 
              animate={{ 
                y: [0, -5, 0],
                boxShadow: [
                  "0px 10px 20px rgba(0, 0, 0, 0.05)",
                  "0px 20px 30px rgba(0, 0, 0, 0.1)",
                  "0px 10px 20px rgba(0, 0, 0, 0.05)"
                ]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="group relative bg-primary hover:bg-[#000000] text-white px-10 py-5 rounded-full text-[17px] font-semibold tracking-tight transition-colors duration-300 overflow-hidden"
            >
              <span className="relative z-10">Join The Waitlist</span>
              {/* Subtle hover sweep effect inside button */}
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
            </motion.button>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
