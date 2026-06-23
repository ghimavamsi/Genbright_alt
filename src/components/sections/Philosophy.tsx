import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const storyLines = [
  "Before children can excel,\nthey need to understand themselves.",
  "Before they can lead others,\nthey need empathy.",
  "Before they can change the world,\nthey need curiosity."
];

export function Philosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 35%"]
  });

  return (
    <section className="py-10 md:py-16 bg-white flex flex-col items-center px-4">
      <div className="max-w-[1000px] w-full text-center flex flex-col items-center">
        
        {/* 1. Opening Statement */}
        <div className="mb-12 md:mb-16 mt-4 md:mt-8 w-full">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-[64px] font-normal text-[#999] leading-[1.2] mb-4 tracking-tight"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            We don’t start with subjects.
          </motion.h2>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[84px] font-semibold text-[#111] leading-[1.1] tracking-tight"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            We start with children.
          </motion.h2>
        </div>

        {/* 2. Progressive Storytelling Lines */}
        <div ref={containerRef} className="flex flex-col gap-[50px] max-w-[800px] w-full items-center py-[50px]">
          {storyLines.map((line, index) => {
            const step = 1 / storyLines.length;
            const start = index * step;
            const end = start + step * 0.8;
            
            const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
            const y = useTransform(scrollYProgress, [start, end], [40, 0]);

            return (
              <motion.p
                key={index}
                style={{ opacity, y, fontFamily: "'Outfit', sans-serif" }}
                className="text-[32px] font-normal text-[#444] leading-[1.4] whitespace-pre-line"
              >
                {line}
              </motion.p>
            );
          })}
        </div>

        {/* 3. Transition to Foundations */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[#666] text-[24px] max-w-[600px] leading-relaxed mt-12 md:mt-20"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          That’s why every GenBright experience<br className="hidden md:block"/>
          is built around four foundations.
        </motion.p>

      </div>
    </section>
  );
}
