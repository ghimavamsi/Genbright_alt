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
    bgClass: "bg-[#f0f4f8]",
    textClass: "text-[#2b4a68]",
  },
  {
    id: "feel",
    title: "FEEL",
    quote: '"I understand\nhow you feel."',
    description: "The beginning of\nevery meaningful\nrelationship.",
    image: feelImg,
    bgClass: "bg-[#fff5f0]",
    textClass: "text-[#9a5639]",
  },
  {
    id: "move",
    title: "MOVE",
    quote: '"Let\'s try."',
    description: "The beginning of\nconfidence.",
    image: moveImg,
    bgClass: "bg-[#f0fdf4]",
    textClass: "text-[#2d5a3f]",
  },
  {
    id: "pause",
    title: "PAUSE",
    quote: '"I noticed."',
    description: "The beginning of\nwisdom.",
    image: pauseImg,
    bgClass: "bg-[#f5f3ff]",
    textClass: "text-[#4c3c78]",
  }
];

export function Foundations() {
  return (
    <section className="py-24 bg-white flex flex-col items-center px-6 md:px-12 lg:px-20">
      <div className="max-w-[1200px] w-full">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center text-[#555] uppercase text-[15px] md:text-[18px] tracking-[4px] font-medium mb-16"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          FOUR FOUNDATIONS. A LIFETIME OF IMPACT.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {foundations.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.25 }}
              className={`${item.bgClass} ${item.textClass} rounded-[24px] md:rounded-[32px] overflow-hidden relative group shadow-sm aspect-square`}
            >
              <div className="p-6 md:p-8 flex flex-col z-10 relative w-[90%] md:w-[85%]">
                <h3 className="font-serif text-[20px] md:text-[24px] xl:text-[26px] mb-3 md:mb-4 tracking-wide" style={{ fontFamily: "'Lora', serif" }}>{item.title}</h3>
                <p className="font-semibold text-[13px] md:text-[14px] leading-snug mb-2 md:mb-3 whitespace-pre-line" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {item.quote}
                </p>
                <p className="text-[12px] md:text-[13px] leading-relaxed opacity-85 whitespace-pre-line font-light" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {item.description}
                </p>
              </div>
              
              <div className="absolute bottom-0 right-0 w-[70%] h-[70%] md:w-[75%] md:h-[75%] pointer-events-none">
                {/* mix-blend-multiply helps the generated studio background blend seamlessly into the card's background color */}
                <img 
                  src={item.image} 
                  alt={`Child demonstrating ${item.title}`}
                  className="w-full h-full object-contain object-bottom-right mix-blend-darken brightness-105 contrast-105 transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
