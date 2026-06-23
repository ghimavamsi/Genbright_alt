import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function EmotionalHorizon() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax for the background image
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  // Opacities for the sentences
  const o1 = useTransform(scrollYProgress, [0.1, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const o2 = useTransform(scrollYProgress, [0.25, 0.35, 0.9, 1], [0, 1, 1, 0]);
  const o3 = useTransform(scrollYProgress, [0.4, 0.5, 0.9, 1], [0, 1, 1, 0]);
  const o4 = useTransform(scrollYProgress, [0.55, 0.65, 0.9, 1], [0, 1, 1, 0]);
  const o5 = useTransform(scrollYProgress, [0.7, 0.8, 0.9, 1], [0, 1, 1, 0]);

  // Slides for the sentences
  const y1 = useTransform(scrollYProgress, [0.1, 0.2], [30, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.35], [30, 0]);
  const y3 = useTransform(scrollYProgress, [0.4, 0.5], [30, 0]);
  const y4 = useTransform(scrollYProgress, [0.55, 0.65], [30, 0]);
  const y5 = useTransform(scrollYProgress, [0.7, 0.8], [30, 0]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-black text-white">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Parallax Background Image */}
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 z-0 scale-110"
        >
          {/* Using a high-quality Unsplash placeholder for "child looking at horizon" */}
          <div className="absolute inset-0 bg-black/40 z-10" /> {/* Dark overlay for text readability */}
          <img 
            src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=2038&auto=format&fit=crop" 
            alt="Child looking at horizon" 
            className="w-full h-full object-cover object-top opacity-80"
          />
        </motion.div>

        {/* Text Overlay Container */}
        <div className="relative z-20 max-w-5xl w-full px-6 flex flex-col items-center text-center">
          <motion.div style={{ opacity: o1, y: y1 }} className="mb-12">
            <h2 className="text-4xl md:text-7xl font-serif leading-tight drop-shadow-2xl" style={{ fontFamily: "'Lora', serif" }}>
              One day,<br/>your child will leave school.
            </h2>
          </motion.div>

          <motion.div style={{ opacity: o2, y: y2 }} className="mb-12">
            <p className="text-2xl md:text-4xl font-light drop-shadow-xl" style={{ fontFamily: "'Outfit', sans-serif" }}>
              When they do,<br/>we hope they leave with more than knowledge.
            </p>
          </motion.div>

          <motion.div style={{ opacity: o3, y: y3 }} className="mb-4">
            <h3 className="text-3xl md:text-5xl font-serif italic text-[#d8e3d0] drop-shadow-lg" style={{ fontFamily: "'Lora', serif" }}>
              We hope they leave with courage.
            </h3>
          </motion.div>

          <motion.div style={{ opacity: o4, y: y4 }} className="flex gap-4 md:gap-8 mb-12">
            <h3 className="text-3xl md:text-5xl font-serif italic text-[#d8e3d0] drop-shadow-lg" style={{ fontFamily: "'Lora', serif" }}>Compassion.</h3>
            <h3 className="text-3xl md:text-5xl font-serif italic text-[#d8e3d0] drop-shadow-lg" style={{ fontFamily: "'Lora', serif" }}>Confidence.</h3>
          </motion.div>

          <motion.div style={{ opacity: o5, y: y5 }}>
            <h2 className="text-5xl md:text-8xl font-serif font-bold tracking-tight drop-shadow-2xl" style={{ fontFamily: "'Lora', serif" }}>
              And a deep belief<br/>that they matter.
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
