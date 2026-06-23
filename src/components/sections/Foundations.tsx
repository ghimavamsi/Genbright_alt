import { motion } from "framer-motion";
import thinkImg from "../../assets/images/think.png";
import feelImg from "../../assets/images/feel.png";
import moveImg from "../../assets/images/move.png";
import pauseImg from "../../assets/images/pause.png";

const foundations = [
  {
    id: "think",
    title: "THINK",
    quote: '"I wonder why..."',
    description: "The beginning of\nevery discovery.",
    image: thinkImg,
    bgClass: "bg-[#f4f5f6]", // Light gray/blue
    textClass: "text-[#2b4a68]", // Dark blue
  },
  {
    id: "feel",
    title: "FEEL",
    quote: '"I understand\nhow you feel."',
    description: "The beginning of\nevery meaningful\nrelationship.",
    image: feelImg,
    bgClass: "bg-[#fcf8f4]", // Light orange/peach
    textClass: "text-[#9a5639]", // Dark orange
  },
  {
    id: "move",
    title: "MOVE",
    quote: '"Let\'s try."',
    description: "The beginning of\nconfidence.",
    image: moveImg,
    bgClass: "bg-[#f4f7f4]", // Light green
    textClass: "text-[#2d5a3f]", // Dark green
  },
  {
    id: "pause",
    title: "PAUSE",
    quote: '"I noticed."',
    description: "The beginning of\nwisdom.",
    image: pauseImg,
    bgClass: "bg-[#f7f5f9]", // Light purple
    textClass: "text-[#4c3c78]", // Dark purple
  }
];

export function Foundations() {
  return (
    <section className="py-24 bg-white flex flex-col items-center px-4 md:px-8">
      <div className="max-w-[1400px] w-full">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center text-[#555] uppercase text-[13px] md:text-[14px] tracking-[0.2em] font-semibold mb-12"
          style={{ fontFamily: "'Outfit', sans-serif" }}
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
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className={`${item.bgClass} ${item.textClass} rounded-2xl md:rounded-3xl overflow-hidden relative group h-[340px] md:h-[380px] w-full flex flex-col`}
            >
              <div className="p-8 md:p-10 flex flex-col z-10 relative h-full">
                <h3 className="font-serif text-3xl md:text-4xl mb-8 tracking-wide" style={{ fontFamily: "'Lora', serif" }}>
                  {item.title}
                </h3>
                <p className="font-bold text-sm md:text-[15px] leading-tight mb-4 whitespace-pre-line" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {item.quote}
                </p>
                <p className="text-sm md:text-[15px] leading-relaxed opacity-80 whitespace-pre-line font-light" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {item.description}
                </p>
              </div>
              
              <div className="absolute bottom-4 right-4 w-[65%] h-[60%] pointer-events-none">
                {/* mix-blend-darken ensures images with white backgrounds blend into the soft colored cards perfectly */}
                <img 
                  src={item.image} 
                  alt={`Abstract geometric shape for ${item.title}`}
                  className="w-full h-full object-contain object-bottom mix-blend-darken drop-shadow-md transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
