import { motion } from "framer-motion";
import campus1 from "../../assets/images/campus1.jpeg";
import campus2 from "../../assets/images/campus2.jpeg";
import campus3 from "../../assets/images/campus3.jpeg";
import campus4 from "../../assets/images/campus4.jpeg";

const appleEase = [0.25, 0.1, 0.25, 1] as const;

const images = [
  { url: campus1, text: "Nature-rich learning spaces", colSpan: "col-span-12 md:col-span-8", rowSpan: "row-span-2" },
  { url: campus2, text: "Outdoor classrooms", colSpan: "col-span-12 md:col-span-4", rowSpan: "row-span-1" },
  { url: campus3, text: "Sports and movement", colSpan: "col-span-12 md:col-span-4", rowSpan: "row-span-1" },
  { url: campus4, text: "Creative studios", colSpan: "col-span-12 md:col-span-12", rowSpan: "row-span-1" },
];

export function Campus() {
  return (
    <section className="py-20 md:py-24 bg-background text-primary border-b border-[#d2d2d7]/50">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16 md:mb-20 text-center md:text-left">
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: appleEase }}
            className="text-[13px] md:text-[14px] font-semibold tracking-widest text-[#86868b] uppercase mb-6"
          >
            The Campus
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.15, ease: appleEase }}
            className="text-4xl md:text-6xl font-semibold leading-tight mb-6 tracking-tight text-primary"
          >
            A campus designed for <span className="text-[#0066cc]">childhood.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3, ease: appleEase }}
            className="text-xl md:text-2xl font-medium text-[#86868b]"
          >
            8 acres of exploration. Moments of wonder around every corner.
          </motion.p>
        </div>

        {/* Bento Box Gallery */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: i * 0.15, ease: appleEase }}
              className={`relative rounded-[32px] overflow-hidden group cursor-pointer ${img.colSpan} ${img.rowSpan} bg-background border border-[#d2d2d7]/30`}
            >
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500 z-10" />
              <img 
                src={img.url} 
                alt={img.text} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 z-20 flex items-end p-8">
                <h3 className="text-white text-2xl md:text-3xl font-semibold tracking-tight translate-y-4 group-hover:translate-y-0 opacity-80 group-hover:opacity-100 transition-all duration-500 drop-shadow-md">
                  {img.text}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
