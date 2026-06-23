import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sprout, Hammer, Music, Brain, Users, PenTool, Rocket } from "lucide-react";

const storyLines = [
  { text: "One day a child is planting vegetables at", highlight: "FARM.", icon: Sprout, color: "text-emerald-600" },
  { text: "The next day they are designing solutions at", highlight: "FORGE.", icon: Hammer, color: "text-orange-600" },
  { text: "The next they are performing at", highlight: "FLOW.", icon: Music, color: "text-blue-600" },
  { text: "Reflecting at", highlight: "FOCUS.", icon: Brain, color: "text-purple-600" },
  { text: "Collaborating at", highlight: "FELLOW.", icon: Users, color: "text-rose-600" },
  { text: "Creating at", highlight: "FORM.", icon: PenTool, color: "text-amber-600" },
  { text: "Exploring possibilities at", highlight: "FLY.", icon: Rocket, color: "text-sky-600" },
];

export function LearningCentres() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative bg-white text-[#111]">
      {/* Introduction */}
      <div className="h-screen flex items-center justify-center sticky top-0 bg-white z-0">
        <motion.div 
          style={{ opacity: useTransform(scrollYProgress, [0, 0.05, 0.1], [1, 1, 0]) }}
          className="text-center px-4 max-w-4xl"
        >
          <h3 className="text-sm md:text-base font-bold tracking-[0.2em] text-[#7b9369] uppercase mb-6">The 13 Learning Centres</h3>
          <h2 className="text-5xl md:text-7xl font-serif leading-tight text-[#2c3d28]" style={{ fontFamily: "'Lora', serif" }}>
            What if learning <br/><span className="italic">had no walls?</span>
          </h2>
        </motion.div>
      </div>

      {/* The Story Scroll */}
      <div className="relative z-10 mt-[-100vh]">
        {/* We use a large spacer to allow scrolling */}
        <div style={{ height: `${storyLines.length * 80}vh` }}>
          {storyLines.map((line, index) => {
            const start = 0.1 + (index * 0.1);
            const peak = start + 0.05;
            const end = peak + 0.05;
            
            // Each line fades in, stays briefly, and fades out
            const opacity = useTransform(scrollYProgress, [start - 0.05, start, peak, end], [0, 1, 1, 0]);
            const y = useTransform(scrollYProgress, [start - 0.05, start, peak, end], [50, 0, 0, -50]);
            const scale = useTransform(scrollYProgress, [start, peak], [0.95, 1]);

            const Icon = line.icon;

            return (
              <motion.div 
                key={index}
                style={{ opacity, y, scale }}
                className="h-screen sticky top-0 flex flex-col items-center justify-center px-4 pointer-events-none"
              >
                <div className="flex flex-col items-center max-w-5xl w-full text-center">
                  <Icon className={`w-16 h-16 md:w-24 md:h-24 mb-8 ${line.color} opacity-20`} strokeWidth={1.5} />
                  <p className="text-3xl md:text-6xl font-light leading-snug" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    {line.text} <br/>
                    <span className={`font-serif font-bold italic ${line.color}`} style={{ fontFamily: "'Lora', serif" }}>
                      {line.highlight}
                    </span>
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Conclusion */}
      <div className="h-screen flex items-center justify-center sticky top-0 bg-[#2c3d28] text-[#f8f9f6] z-20">
        <motion.div 
          style={{ 
            opacity: useTransform(scrollYProgress, [0.85, 0.9, 1], [0, 1, 1]),
            y: useTransform(scrollYProgress, [0.85, 0.9], [50, 0])
          }}
          className="text-center px-4 max-w-4xl"
        >
          <h2 className="text-4xl md:text-7xl font-serif leading-tight mb-8" style={{ fontFamily: "'Lora', serif" }}>
            Because children aren't <br/>one-dimensional.
          </h2>
          <p className="text-xl md:text-3xl font-light opacity-90" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Their learning shouldn't be either.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
