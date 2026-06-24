import { motion } from "framer-motion";
import { Shield, Heart, Sparkles } from "lucide-react";

const appleEase = [0.25, 0.1, 0.25, 1] as const;

const pillars = [
  { 
    id: 0, 
    title: "Courage", 
    desc: "To face the unknown, take risks, and stand up for what is right.", 
    icon: Shield 
  },
  { 
    id: 1, 
    title: "Compassion", 
    desc: "To deeply understand others and build a more empathetic world.", 
    icon: Heart 
  },
  { 
    id: 2, 
    title: "Confidence", 
    desc: "To trust in their own unique abilities and chart their own path.", 
    icon: Sparkles 
  },
];

export function EmotionalHorizon() {
  return (
    <section className="py-16 md:py-20 bg-background text-primary relative border-b border-[#d2d2d7]/50">
      <div className="max-w-[1300px] mx-auto px-6 relative z-10 flex flex-col md:flex-row items-start">
        
        {/* Left Sticky Header */}
        <div className="w-full md:w-[45%] md:sticky md:top-40 mb-12 md:mb-0 md:pr-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: appleEase }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 tracking-tight text-primary">
              One day,<br/> your child will leave school.
            </h2>
            <p className="text-lg md:text-xl font-medium text-[#86868b] leading-relaxed mb-6">
              When they do, we hope they leave with far more than just knowledge. We hope they leave with:
            </p>
            
            <div className="hidden md:block">
               <motion.h3 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 1, delay: 0.5 }}
                 className="text-2xl lg:text-3xl font-semibold tracking-tight text-primary mt-8"
               >
                And a deep belief<br/>that they matter.
               </motion.h3>
            </div>
          </motion.div>
        </div>

        {/* Right Scrolling Pillars */}
        <div className="w-full md:w-[55%] flex flex-col gap-6 md:gap-8 md:py-8 md:pb-16">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div 
                key={pillar.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: appleEase }}
                className="bg-white rounded-[32px] p-8 md:p-10 flex flex-col shadow-sm border border-[#d2d2d7]/30 hover:shadow-md transition-shadow duration-500"
              >
                <div className="w-16 h-16 rounded-full bg-background border border-[#d2d2d7]/50 flex items-center justify-center mb-6 shadow-inner">
                  <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-primary tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-lg md:text-xl text-[#86868b] font-medium leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Conclusion */}
        <div className="w-full mt-12 md:hidden">
            <h3 className="text-3xl font-semibold tracking-tight text-primary text-center">
              And a deep belief<br/>that they matter.
            </h3>
        </div>

      </div>
    </section>
  );
}
