import { motion } from "framer-motion";

const images = [
  { url: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=2072&auto=format&fit=crop", text: "Nature-rich learning spaces", colSpan: "col-span-12 md:col-span-8", rowSpan: "row-span-2" },
  { url: "https://images.unsplash.com/photo-1605372424354-9bbbf50ce0bb?q=80&w=2070&auto=format&fit=crop", text: "Outdoor classrooms", colSpan: "col-span-12 md:col-span-4", rowSpan: "row-span-1" },
  { url: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop", text: "Sports and movement", colSpan: "col-span-12 md:col-span-4", rowSpan: "row-span-1" },
  { url: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop", text: "Creative studios", colSpan: "col-span-12 md:col-span-6", rowSpan: "row-span-1" },
  { url: "https://images.unsplash.com/photo-1595841696650-621cae8b091f?q=80&w=2070&auto=format&fit=crop", text: "Farm experiences", colSpan: "col-span-12 md:col-span-6", rowSpan: "row-span-1" },
];

export function Campus() {
  return (
    <section className="py-24 md:py-32 bg-white text-[#111]">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16 md:mb-24 text-center md:text-left">
          <h3 className="text-sm md:text-base font-bold tracking-[0.2em] text-[#7b9369] uppercase mb-6">The Campus</h3>
          <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-6" style={{ fontFamily: "'Lora', serif" }}>
            A campus designed for <span className="italic text-[#4a6b36]">childhood.</span>
          </h2>
          <p className="text-xl md:text-3xl font-light text-[#2c3d28]" style={{ fontFamily: "'Outfit', sans-serif" }}>
            8 acres of exploration. Moments of wonder around every corner.
          </p>
        </div>

        {/* Bento Box Gallery */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative rounded-3xl overflow-hidden group cursor-pointer ${img.colSpan} ${img.rowSpan}`}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10" />
              <img 
                src={img.url} 
                alt={img.text} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 z-20 flex items-end p-8">
                <h3 className="text-white text-2xl md:text-3xl font-medium tracking-tight translate-y-4 group-hover:translate-y-0 opacity-80 group-hover:opacity-100 transition-all duration-500" style={{ fontFamily: "'Outfit', sans-serif" }}>
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
