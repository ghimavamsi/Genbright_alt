import { motion } from "framer-motion";
import banyanLogo from "../../assets/images/banyan-logo.png";
import heroBg from "../../assets/images/hero-bg.png";

export function Hero() {
  return (
    <section className="relative w-full h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-[#111] mt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/20 z-10" />
        <img 
          src={heroBg}
          alt="GenBright Environments"
          className="w-full h-full object-cover opacity-90 object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto h-full w-full pb-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center mb-4"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
            <img 
              src={banyanLogo} 
              alt="Banyara Tree Logo" 
              className="w-full h-full object-contain mix-blend-screen opacity-90 brightness-90 contrast-150"
            />
          </div>
          <span className="text-xl md:text-3xl font-serif text-[#e8f1da] tracking-wide mt-[-20px] md:mt-[-30px]">
            Banyara
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-white font-medium mb-6"
          style={{ fontFamily: "'Lora', serif" }}
        >
          Childhood<br className="md:hidden" /> deserves better.
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col items-center gap-4 mb-8"
        >
          <p className="text-base md:text-lg leading-relaxed text-white/95 max-w-3xl font-light tracking-wide" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Not more pressure. Not more worksheets.<br className="hidden md:block" />
            Not mere rushing. Just more wonder.
          </p>

          <p className="text-base md:text-lg font-medium text-white tracking-wide" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Look Within. &nbsp;Look Around. &nbsp;Look Beyond.
          </p>
        </motion.div>

        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="group relative inline-flex items-center justify-center px-6 py-3 bg-[#f8f6e6] text-[#2c3d28] font-bold text-base rounded-sm hover:bg-white transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_30px_rgba(248,246,230,0.3)] hover:-translate-y-1"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          <span className="absolute left-4 opacity-70 group-hover:-translate-x-1 transition-transform">[</span>
          <span className="mx-6 tracking-wide">Book a Campus Visit</span>
          <span className="absolute right-4 opacity-70 group-hover:translate-x-1 transition-transform">]</span>
        </motion.button>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-black/60 to-transparent z-10" />
    </section>
  );
}
