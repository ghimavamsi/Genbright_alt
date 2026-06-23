import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const questions = [
  "Will my child be happy?",
  "Will they be confident?",
  "Will they be kind?",
  "Will they love learning?",
  "Will they be ready for a world\nthat doesn't even exist yet?"
];

export function Questions() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 60%", "end 60%"]
  });

  const statementOpacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);
  const statementY = useTransform(scrollYProgress, [0.9, 1], [20, 0]);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white flex flex-col items-center px-4">
      <div className="max-w-[900px] w-full text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-[#999] uppercase text-[14px] tracking-[3px] font-medium mb-8 md:mb-12"
        >
          A PARENT'S QUESTION
        </motion.p>
        
        <div className="flex flex-col gap-6 md:gap-10">
          {questions.map((question, index) => {
            const start = index / questions.length;
            const end = start + (0.5 / questions.length);
            
            // Map the overall scroll progress to the color of this specific line
            const color = useTransform(
              scrollYProgress,
              [start, end],
              ["#d2d2d7", "#000000"]
            );

            return (
              <motion.h2 
                key={index}
                className="text-4xl md:text-6xl lg:text-[72px] font-medium leading-[1.2] tracking-tight whitespace-pre-line"
                style={{ fontFamily: "'Outfit', sans-serif", color }}
              >
                {question}
              </motion.h2>
            );
          })}
        </div>

        <motion.p
          style={{ opacity: statementOpacity, y: statementY }}
          className="text-[#555] text-[24px] font-normal max-w-[600px] mx-auto mt-[80px]"
        >
          "At GenBright, these questions shape everything we do."
        </motion.p>
      </div>
    </section>
  );
}
