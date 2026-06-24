import { motion } from "framer-motion";
import banyanLogo from "../../assets/images/banyan-logo.png";
import heroBg from "../../assets/images/hero-bg.png";

// Apple-style cubic-bezier ease curve
const appleEase = [0.25, 0.1, 0.25, 1] as const;

export function Hero() {
  return (
    <section className="relative w-full h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-black mt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 flex justify-center">
        <img 
          src={heroBg}
          alt="GenBright Environments"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Center Glassy Column */}
        <div className="relative z-10 w-full md:w-[45%] lg:w-[38%] h-full bg-black/50 backdrop-blur-md border-x border-white/5" />
        {/* Optional subtle overlays for left/right if needed, but keeping them mostly clear */}
        <div className="absolute inset-0 bg-black/10 z-0" />
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto h-full w-full pb-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: appleEase }}
          className="flex flex-col items-center mb-6 mt-2 md:mt-4"
        >
          <div className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center">
            <img 
              src={banyanLogo} 
              alt="Banyara Tree Logo" 
              className="w-full h-full object-contain mix-blend-screen opacity-90 brightness-110 contrast-125"
            />
          </div>
          <span className="text-base md:text-xl text-white/90 tracking-widest font-medium uppercase mt-0 md:mt-1">
            Banyara
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: appleEase }}
          className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white font-semibold tracking-tight mb-8"
        >
          Childhood<br className="md:hidden" /> deserves better.
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: appleEase }}
          className="flex flex-col items-center gap-8 mb-12"
        >
          <p className="text-lg md:text-xl leading-relaxed text-white/90 max-w-3xl font-medium tracking-tight">
            Not more pressure. Not more worksheets.<br className="hidden md:block" />
            Not mere rushing. Just more wonder.
          </p>
          
          <h3 className="text-xl md:text-2xl text-white font-semibold tracking-wide">
            Look Within. Look Around. Look Beyond.
          </h3>
        </motion.div>

        <motion.button 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: appleEase }}
          className="bg-[#f2efdd] hover:bg-white text-black px-6 py-2.5 rounded-md text-base font-bold tracking-wide transition-all duration-300 shadow-lg"
        >
          [Book a Campus Visit]
        </motion.button>
      </div>
      
    </section>
  );
}
