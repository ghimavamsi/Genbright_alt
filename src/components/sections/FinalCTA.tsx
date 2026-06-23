import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function FinalCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const verbs = [
    "Think Deeply.",
    "Feel Fully.",
    "Move Freely.",
    "Pause With Purpose.",
    "Look Within.",
    "Look Around.",
    "Look Beyond."
  ];

  return (
    <section ref={containerRef} className="py-32 md:py-48 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Intro */}
        <div className="mb-24 md:mb-40 text-center max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif italic mb-8 text-[#d8e3d0]" 
            style={{ fontFamily: "'Lora', serif" }}
          >
            If this feels different,<br/>it's because it is.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-3xl font-light leading-relaxed" 
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            GenBright isn't preparing children only for exams.<br/>
            <span className="font-medium text-white">We're preparing them for life.</span>
          </motion.p>
        </div>

        {/* The Rhythmic Stack */}
        <div className="flex flex-col items-center justify-center space-y-2 md:space-y-4">
          {verbs.map((verb, i) => {
            // Calculate a staggered opacity based on scroll progress
            const start = i * 0.1;
            const end = start + 0.2;
            const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
            const y = useTransform(scrollYProgress, [start, end], [20, 0]);
            
            return (
              <motion.h1 
                key={verb}
                style={{ opacity, y, fontFamily: "'Outfit', sans-serif" }}
                className="text-5xl md:text-8xl lg:text-[100px] font-bold tracking-tighter uppercase text-center"
              >
                {verb}
              </motion.h1>
            );
          })}
        </div>

        {/* Final Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-32 text-center"
        >
          <button className="bg-[#4a6b36] hover:bg-[#3a542a] text-white px-10 py-5 rounded-full text-xl md:text-2xl font-bold tracking-wide transition-all duration-300 shadow-xl shadow-[#4a6b36]/20 hover:scale-105">
            Join The Waitlist
          </button>
        </motion.div>

      </div>
    </section>
  );
}
