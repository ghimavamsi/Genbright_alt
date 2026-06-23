import { motion } from "framer-motion";

const appleEase = [0.25, 0.1, 0.25, 1] as const;

export function Philosophy() {
  const storyLines = [
    "Before children can excel, they need to understand themselves.",
    "Before they can lead others, they need empathy.",
    "Before they can change the world, they need curiosity."
  ];

  return (
    <section className="py-20 md:py-24 bg-white flex flex-col items-center px-4">
      <div className="max-w-[1000px] w-full text-center flex flex-col items-center">
        
        {/* 1. Opening Statement */}
        <div className="mb-20 md:mb-32 w-full">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: appleEase }}
            className="text-4xl md:text-6xl font-medium text-[#86868b] leading-[1.1] mb-2 tracking-tight"
          >
            We don't start with subjects.
          </motion.h2>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: appleEase }}
            className="text-5xl md:text-7xl font-semibold text-primary leading-[1.1] tracking-tight"
          >
            We start with children.
          </motion.h2>
        </div>

        {/* 2. Progressive Storytelling Lines */}
        <div className="w-full max-w-[800px] flex flex-col gap-12 md:gap-20 mb-20 md:mb-32">
          {storyLines.map((line, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: appleEase }}
              className="text-[28px] md:text-[40px] font-medium text-primary leading-[1.3] tracking-tight"
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* 3. Transition to Foundations */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: appleEase }}
          className="text-[#86868b] text-[20px] md:text-[24px] max-w-[600px] leading-relaxed font-medium"
        >
          That's why every GenBright experience<br className="hidden md:block"/>
          is built around four foundations.
        </motion.p>

      </div>
    </section>
  );
}
