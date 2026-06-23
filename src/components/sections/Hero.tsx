import { motion } from "framer-motion";
import banyanLogo from "../../assets/images/banyan-logo.png";
import heroBg from "../../assets/images/hero-bg.png";

// Apple-style cubic-bezier ease curve
const appleEase = [0.25, 0.1, 0.25, 1] as const;

export function Hero() {
  return (
    <section className="relative w-full h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-black mt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src={heroBg}
          alt="GenBright Environments"
          className="w-full h-full object-cover opacity-80 object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto h-full w-full pb-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: appleEase }}
          className="flex flex-col items-center mb-6"
        >
          <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
            <img 
              src={banyanLogo} 
              alt="Banyara Tree Logo" 
              className="w-full h-full object-contain mix-blend-screen opacity-90 brightness-110 contrast-125"
            />
          </div>
          <span className="text-lg md:text-2xl text-white/90 tracking-widest font-medium uppercase mt-[-10px] md:mt-[-15px]">
            Banyara
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: appleEase }}
          className="text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-white font-semibold tracking-tight mb-8"
        >
          Childhood<br className="md:hidden" /> deserves better.
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: appleEase }}
          className="flex flex-col items-center gap-6 mb-12"
        >
          <p className="text-xl md:text-2xl leading-relaxed text-[#a1a1a6] max-w-3xl font-medium tracking-tight">
            Not more pressure. Not more worksheets.<br className="hidden md:block" />
            Not mere rushing. Just more wonder.
          </p>
        </motion.div>

        <motion.button 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: appleEase }}
          className="bg-white hover:bg-background text-black px-8 py-4 rounded-full text-base font-semibold tracking-wide transition-all duration-300"
        >
          Book a Campus Visit
        </motion.button>
      </div>
      
    </section>
  );
}
