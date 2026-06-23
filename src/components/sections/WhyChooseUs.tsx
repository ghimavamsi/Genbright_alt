import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Highlight points
  const p1 = useTransform(scrollYProgress, [0.1, 0.2, 0.9, 1], [0.2, 1, 1, 0]);
  const p2 = useTransform(scrollYProgress, [0.3, 0.4, 0.9, 1], [0.2, 1, 1, 0]);
  const p3 = useTransform(scrollYProgress, [0.5, 0.6, 0.9, 1], [0.2, 1, 1, 0]);
  const p4 = useTransform(scrollYProgress, [0.7, 0.8, 0.9, 1], [0.2, 1, 1, 0]);

  // Final sentence
  const finalOpacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);
  const finalY = useTransform(scrollYProgress, [0.85, 0.95], [20, 0]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-[#f8f9f6] text-[#2c3d28]">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center px-6">
        
        <div className="max-w-4xl w-full">
          <h3 className="text-sm md:text-base font-bold tracking-[0.2em] text-[#7b9369] uppercase mb-12 text-center">Why Parents Choose GenBright</h3>
          
          <h2 className="text-3xl md:text-5xl font-light mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
            They choose us because...
          </h2>

          <div className="flex flex-col gap-4 md:gap-6 ml-4 md:ml-12 mb-16">
            <motion.h1 style={{ opacity: p1, fontFamily: "'Lora', serif" }} className="text-5xl md:text-8xl font-serif tracking-tight">
              Their child is <span className="italic text-[#4a6b36]">known.</span>
            </motion.h1>
            <motion.h1 style={{ opacity: p2, fontFamily: "'Lora', serif" }} className="text-5xl md:text-8xl font-serif tracking-tight">
              Their child is <span className="italic text-[#4a6b36]">heard.</span>
            </motion.h1>
            <motion.h1 style={{ opacity: p3, fontFamily: "'Lora', serif" }} className="text-5xl md:text-8xl font-serif tracking-tight">
              Their child is <span className="italic text-[#4a6b36]">encouraged.</span>
            </motion.h1>
            <motion.h1 style={{ opacity: p4, fontFamily: "'Lora', serif" }} className="text-5xl md:text-8xl font-serif tracking-tight">
              Their child <span className="italic text-[#4a6b36]">belongs.</span>
            </motion.h1>
          </div>

          <motion.div style={{ opacity: finalOpacity, y: finalY }} className="text-center">
            <p className="text-2xl md:text-4xl font-light border-t border-[#d8e3d0] pt-12" style={{ fontFamily: "'Outfit', sans-serif" }}>
              And because learning feels <span className="font-medium text-[#4a6b36]">joyful again.</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
