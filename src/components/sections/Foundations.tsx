import { motion } from "framer-motion";
import thinkImg from "../../assets/images/think.png";
import feelImg from "../../assets/images/feel.png";
import moveImg from "../../assets/images/move.png";
import pauseImg from "../../assets/images/pause.png";

const appleEase = [0.25, 0.1, 0.25, 1] as const;

const foundations = [
  {
    id: "think",
    title: "THINK",
    quote: '"I wonder why..."',
    description: "The beginning of\nevery discovery.",
    image: thinkImg,
    bgClass: "bg-background", 
    textClass: "text-primary",
  },
  {
    id: "feel",
    title: "FEEL",
    quote: '"I understand\nhow you feel."',
    description: "The beginning of\nevery meaningful\nrelationship.",
    image: feelImg,
    bgClass: "bg-background", 
    textClass: "text-primary",
  },
  {
    id: "move",
    title: "MOVE",
    quote: '"Let\'s try."',
    description: "The beginning of\nconfidence.",
    image: moveImg,
    bgClass: "bg-background", 
    textClass: "text-primary",
  },
  {
    id: "pause",
    title: "PAUSE",
    quote: '"I noticed."',
    description: "The beginning of\nwisdom.",
    image: pauseImg,
    bgClass: "bg-background", 
    textClass: "text-primary",
  }
];

export function Foundations() {
  return (
    <section className="py-20 bg-white flex flex-col items-center px-4 md:px-8">
      <div className="max-w-[1100px] w-full">
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: appleEase }}
          className="text-center text-[#86868b] uppercase text-[13px] md:text-[14px] tracking-widest font-semibold mb-12"
        >
          FOUR FOUNDATIONS. A LIFETIME OF IMPACT.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
          {foundations.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: index * 0.15, ease: appleEase }}
              className={`${item.bgClass} ${item.textClass} border border-[#d2d2d7]/30 rounded-3xl overflow-hidden relative group h-[260px] md:h-[300px] w-full flex flex-col`}
            >
              <div className="p-6 md:p-8 flex flex-col z-10 relative h-full">
                <h3 className="text-2xl md:text-3xl font-serif mb-6 tracking-tight" style={{ fontFamily: "'Lora', serif" }}>
                  {item.title}
                </h3>
                <p className="font-medium text-sm md:text-[15px] leading-tight mb-3 whitespace-pre-line text-primary">
                  {item.quote}
                </p>
                <p className="text-sm md:text-[15px] leading-relaxed whitespace-pre-line text-[#86868b]">
                  {item.description}
                </p>
              </div>
              
              <div className="absolute bottom-4 right-4 w-[60%] h-[60%] pointer-events-none opacity-80 mix-blend-multiply">
                <img 
                  src={item.image} 
                  alt={`Abstract geometric shape for ${item.title}`}
                  className="w-full h-full object-contain object-bottom drop-shadow-sm transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
