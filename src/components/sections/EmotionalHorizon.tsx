import { motion, type Variants } from "framer-motion";
import { Shield, Heart, Sparkles } from "lucide-react";

const appleEase = [0.25, 0.1, 0.25, 1] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: appleEase } }
};

export function EmotionalHorizon() {
  return (
    <section className="py-20 md:py-24 bg-white text-primary relative overflow-hidden border-b border-[#d2d2d7]/50">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: appleEase }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-8 tracking-tight text-primary">
            One day,<br className="md:hidden"/> your child will leave school.
          </h2>
          <p className="text-xl md:text-2xl font-medium text-[#86868b] leading-relaxed">
            When they do, we hope they leave with far more than just knowledge. We hope they leave with:
          </p>
        </motion.div>

        {/* 3 Pillars */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-20"
        >
          {/* Pillar 1 */}
          <motion.div variants={itemVariants} className="bg-background rounded-[32px] p-8 md:p-12 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-500">
            <div className="w-20 h-20 rounded-full bg-white border border-[#d2d2d7]/50 flex items-center justify-center mb-8 shadow-sm">
              <Shield className="w-8 h-8 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-primary tracking-tight">Courage</h3>
            <p className="text-[#86868b] font-medium leading-relaxed">To face the unknown, take risks, and stand up for what is right.</p>
          </motion.div>

          {/* Pillar 2 */}
          <motion.div variants={itemVariants} className="bg-background rounded-[32px] p-8 md:p-12 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-500">
            <div className="w-20 h-20 rounded-full bg-white border border-[#d2d2d7]/50 flex items-center justify-center mb-8 shadow-sm">
              <Heart className="w-8 h-8 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-primary tracking-tight">Compassion</h3>
            <p className="text-[#86868b] font-medium leading-relaxed">To deeply understand others and build a more empathetic world.</p>
          </motion.div>

          {/* Pillar 3 */}
          <motion.div variants={itemVariants} className="bg-background rounded-[32px] p-8 md:p-12 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-500">
            <div className="w-20 h-20 rounded-full bg-white border border-[#d2d2d7]/50 flex items-center justify-center mb-8 shadow-sm">
              <Sparkles className="w-8 h-8 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-primary tracking-tight">Confidence</h3>
            <p className="text-[#86868b] font-medium leading-relaxed">To trust in their own unique abilities and chart their own path.</p>
          </motion.div>
        </motion.div>

        {/* Conclusion */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: appleEase }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-primary">
            And a deep belief<br/>that they matter.
          </h2>
        </motion.div>

      </div>
    </section>
  );
}
