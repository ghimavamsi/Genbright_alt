import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import banyanLogo from "../../assets/images/banyan-logo.png";

export function Storytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Phase Opacities (Fixed with clamped ranges so negative extrapolation doesn't break CSS opacity)
  const opacityP1 = useTransform(scrollYProgress, [0, 0.1, 0.15, 1], [1, 1, 0, 0]);
  const opacityP2 = useTransform(scrollYProgress, [0, 0.15, 0.2, 0.25, 0.3, 1], [0, 0, 1, 1, 0, 0]);
  const opacityP3 = useTransform(scrollYProgress, [0, 0.3, 0.35, 0.4, 0.45, 1], [0, 0, 1, 1, 0, 0]);
  const opacityP4 = useTransform(scrollYProgress, [0, 0.45, 0.5, 0.55, 0.6, 1], [0, 0, 1, 1, 0, 0]);
  const opacityP5 = useTransform(scrollYProgress, [0, 0.6, 0.65, 0.7, 0.75, 1], [0, 0, 1, 1, 0, 0]);
  const opacityP6 = useTransform(scrollYProgress, [0, 0.75, 0.8, 1], [0, 0, 1, 1]);

  // Phase Y-Transforms
  const yP1 = useTransform(scrollYProgress, [0, 0.15], [0, -50]);
  const yP2 = useTransform(scrollYProgress, [0.15, 0.2, 0.25, 0.3], [50, 0, 0, -50]);
  const yP3 = useTransform(scrollYProgress, [0.3, 0.35, 0.4, 0.45], [50, 0, 0, -50]);
  const yP4 = useTransform(scrollYProgress, [0.45, 0.5, 0.55, 0.6], [50, 0, 0, -50]);
  const yP5 = useTransform(scrollYProgress, [0.6, 0.65, 0.7, 0.75], [50, 0, 0, -50]);
  const yP6 = useTransform(scrollYProgress, [0.75, 0.8], [50, 0]);

  // Premium Tree Growth Animations
  const treeScale = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 0.85, 1], [0.1, 0.4, 0.7, 1.0, 1.2, 1.3, 1.3]);
  const treeY = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [250, 150, 50, 0, -20, -20]);
  const treeOpacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [0, 0.8, 1]);

  // Mascot Speech Logic
  const [speechText, setSpeechText] = useState("Hi! I'm Banyara!");
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    if (p < 0.15) setSpeechText("A journey starts small...");
    else if (p < 0.3) setSpeechText("Roots build our foundation.");
    else if (p < 0.5) setSpeechText("Growing stronger every day!");
    else if (p < 0.75) setSpeechText("Branching out to explore!");
    else setSpeechText("Endless possibilities!");
  });

  // Magical floating particles
  const particles = useRef(Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    scale: Math.random() * 0.6 + 0.4,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * -20
  }))).current;

  return (
    <section ref={containerRef} className="relative h-[450vh] bg-background text-[#2c3d28]">
      <div className="sticky top-0 h-screen w-full flex flex-col overflow-hidden">

        {/* Top Visual Pane */}
        <div className="w-full h-[60vh] md:h-[65vh] relative flex items-center justify-center overflow-hidden">

          {/* Magical Particles */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-60">
            {particles.map((p) => (
              <motion.div
                key={p.id}
                className="absolute w-3 h-3 rounded-full bg-[#889d79] mix-blend-multiply blur-[1px]"
                style={{ left: p.left, top: p.top, scale: p.scale }}
                animate={{
                  y: [0, -500],
                  opacity: [0, 0.6, 0],
                  x: [0, Math.sin(p.id) * 50]
                }}
                transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "linear" }}
              />
            ))}
          </div>

          {/* Premium Growing Tree Animation */}
          <motion.div
            style={{ scale: treeScale, y: treeY, opacity: treeOpacity }}
            className="absolute bottom-0 w-[90%] h-[90%] max-w-[600px] flex items-end justify-center origin-bottom z-10 transition-all duration-300"
          >
            <img
              src={banyanLogo}
              alt="Growing Banyan Tree"
              className="w-full h-full object-contain object-bottom mix-blend-multiply drop-shadow-[0_30px_40px_rgba(44,61,40,0.3)]"
            />
          </motion.div>

          {/* Mascot overlay */}
          <div className="absolute bottom-4 md:bottom-10 z-20 flex flex-col items-center">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center"
            >
              {/* Speech Bubble */}
              <div className="bg-white px-4 py-3 rounded-2xl shadow-xl mb-4 text-[#2c3d28] font-bold text-sm md:text-base relative w-max max-w-[200px] text-center transition-all duration-300">
                {speechText}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 shadow-md"></div>
              </div>
              <img
                src="/banyara-mascot.png"
                alt="Banyara Mascot"
                className="w-40 md:w-56 h-auto mix-blend-multiply drop-shadow-2xl"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </motion.div>
          </div>
        </div>

        {/* Bottom Story Pane */}
        <div className="w-full h-[40vh] md:h-[35vh] relative flex items-center justify-center p-6 md:p-12 overflow-hidden">

          <motion.div style={{ opacity: opacityP1, y: yP1 }} className="absolute max-w-2xl px-4 text-center pointer-events-none flex flex-col items-center">
            <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-[#7b9369]">Meet Banyara</h3>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight" style={{ fontFamily: "'Lora', serif" }}>
              A banyan tree doesn't grow overnight.
            </h2>
            <p className="text-xl md:text-2xl font-light opacity-90" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Neither does a child.
            </p>
          </motion.div>

          <motion.div style={{ opacity: opacityP2, y: yP2 }} className="absolute max-w-2xl px-4 text-center pointer-events-none flex flex-col items-center">
            <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-[#7b9369]">Roots First</h3>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight" style={{ fontFamily: "'Lora', serif" }}>
              Every journey begins with strong foundations.
            </h2>
            <div className="flex flex-wrap gap-3 justify-center w-full">
              {['Kindness', 'Confidence', 'Curiosity', 'Resilience'].map(tag => (
                <span key={tag} className="px-4 py-2 bg-white rounded-full text-sm font-medium shadow-sm">{tag}</span>
              ))}
            </div>
          </motion.div>

          <motion.div style={{ opacity: opacityP3, y: yP3 }} className="absolute max-w-2xl px-4 text-center pointer-events-none flex flex-col items-center">
            <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-[#7b9369]">Growing Strong</h3>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight" style={{ fontFamily: "'Lora', serif" }}>
              Then Comes Strength
            </h2>
            <p className="text-xl md:text-2xl font-light opacity-90 leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Growth happens one question, one challenge, and one discovery at a time.
            </p>
          </motion.div>

          <motion.div style={{ opacity: opacityP4, y: yP4 }} className="absolute max-w-2xl px-4 text-center pointer-events-none flex flex-col items-center">
            <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-[#7b9369]">Branching Out</h3>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight" style={{ fontFamily: "'Lora', serif" }}>
              Then Branches
            </h2>
            <p className="text-lg md:text-xl font-light opacity-90 mb-6 leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Every child grows differently. Each branch represents a unique pathway.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-xl">
              {['Creators', 'Explorers', 'Innovators', 'Leaders'].map(tag => (
                <div key={tag} className="bg-white p-4 rounded-xl shadow-sm text-center font-medium">{tag}</div>
              ))}
            </div>
          </motion.div>

          <motion.div style={{ opacity: opacityP5, y: yP5 }} className="absolute max-w-2xl px-4 text-center pointer-events-none flex flex-col items-center">
            <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-[#7b9369]">The Canopy</h3>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight" style={{ fontFamily: "'Lora', serif" }}>
              Then Possibilities
            </h2>
            <p className="text-lg md:text-xl font-light opacity-90 mb-6 leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Every new skill, friendship, and dream adds another leaf to their journey.
            </p>
          </motion.div>

          <motion.div style={{ opacity: opacityP6, y: yP6 }} className="absolute max-w-2xl px-4 text-center pointer-events-none flex flex-col items-center">
            <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-[#7b9369]">The Reveal</h3>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight" style={{ fontFamily: "'Lora', serif" }}>
              One Child.<br />Endless Possibilities.
            </h2>
            <p className="text-lg md:text-xl font-light opacity-90 mb-8 leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Banyara journeys alongside every GenBright child, helping them build strong roots, explore boldly, and grow into their fullest potential.
            </p>
            <div className="flex gap-4 justify-center w-full">
              <span className="font-bold border-b-2 border-[#2c3d28] pb-1">Stay Grounded.</span>
              <span className="font-bold border-b-2 border-[#2c3d28] pb-1">Stay Curious.</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
