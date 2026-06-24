import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { 
  Sprout, Hammer, Music, Brain, Users, PenTool, Rocket, 
  Activity, Mic, Monitor, Flame, TreePine, Compass
} from "lucide-react";

const appleEase = [0.25, 0.1, 0.25, 1] as const;

const centers = [
  { id: "farm", name: "Farm", desc: "Where children plant, grow, and learn sustainability hands-on.", icon: Sprout, image: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?auto=format&fit=crop&q=80&w=600", color: "text-emerald-500" },
  { id: "forge", name: "Forge", desc: "Our high-tech makerspace for engineering and building solutions.", icon: Hammer, image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600", color: "text-orange-500" },
  { id: "flow", name: "Flow", desc: "A creative sanctuary for music, rhythm, and expressive dance.", icon: Music, image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=600", color: "text-pink-500" },
  { id: "focus", name: "Focus", desc: "Quiet library spaces designed for deep reading and reflection.", icon: Brain, image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=600", color: "text-indigo-500" },
  { id: "fellow", name: "Fellow", desc: "Open collaborative hubs to build teamwork and leadership.", icon: Users, image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600", color: "text-blue-500" },
  { id: "form", name: "Form", desc: "Studios for fine arts, sculpture, and boundless creativity.", icon: PenTool, image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=600", color: "text-rose-500" },
  { id: "fly", name: "Fly", desc: "Science labs equipped to explore the physical universe and beyond.", icon: Rocket, image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600", color: "text-cyan-500" },
  { id: "field", name: "Field", desc: "Expansive athletics facilities for physical health and sports.", icon: Activity, image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&q=80&w=600", color: "text-lime-500" },
  { id: "forum", name: "Forum", desc: "An amphitheater for public speaking, debate, and theatre.", icon: Mic, image: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&q=80&w=600", color: "text-violet-500" },
  { id: "frame", name: "Frame", desc: "Digital media and coding labs to build the future.", icon: Monitor, image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600", color: "text-sky-500" },
  { id: "flame", name: "Flame", desc: "Culinary arts kitchen to learn nutrition and food science.", icon: Flame, image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=600", color: "text-red-500" },
  { id: "forest", name: "Forest", desc: "Outdoor nature trails for biological and environmental study.", icon: TreePine, image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=600", color: "text-teal-600" },
  { id: "found", name: "Found", desc: "History and archaeology zones to uncover the past.", icon: Compass, image: "https://images.unsplash.com/photo-1555529733-0e670560f7e1?auto=format&fit=crop&q=80&w=600", color: "text-amber-500" },
];

function CardList() {
  return (
    <div className="flex gap-4 md:gap-6 px-2 md:px-3 shrink-0">
      {centers.map((center) => {
        const Icon = center.icon;
        return (
          <div 
            key={center.id} 
            className="w-[240px] md:w-[280px] shrink-0 bg-white rounded-[28px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col border border-[#d2d2d7]/50 cursor-pointer"
          >
            {/* Image Half */}
            <div className="h-[160px] md:h-[180px] w-full overflow-hidden relative bg-black/5">
              <img 
                src={center.image} 
                alt={center.name}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-90 group-hover:opacity-100" 
              />
            </div>
            
            {/* Text Half */}
            <div className="p-5 md:p-6 flex flex-col bg-white relative">
              <div className="flex items-center gap-3 mb-2">
                <div className={`flex items-center justify-center transition-transform duration-500 group-hover:scale-110 ${center.color}`}>
                  <Icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-primary">
                  {center.name}
                </h3>
              </div>
              <p className="text-[#86868b] leading-relaxed text-xs md:text-sm font-medium group-hover:text-primary transition-colors duration-300">
                {center.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function LearningCentres() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const scroll = () => {
      if (scrollRef.current && !isHovered && !isDragging) {
        scrollRef.current.scrollLeft += 1;
        
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, isDragging]);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    if (scrollRef.current) {
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeftPos(scrollRef.current.scrollLeft);
    }
  };

  const onMouseLeaveContainer = () => {
    setIsHovered(false);
    setIsDragging(false);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftPos - walk;
  };

  return (
    <section className="py-12 md:py-16 bg-[#fbfbfd] text-primary overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: appleEase }}
            className="text-[12px] md:text-[13px] font-semibold tracking-widest text-[#86868b] uppercase mb-3"
          >
            The 13 Learning Centres
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15, ease: appleEase }}
            className="text-3xl md:text-5xl font-semibold leading-tight text-primary tracking-tight" 
          >
            What if learning <br/>had no walls?
          </motion.h2>
        </div>

      </div>

      {/* Auto-Scrolling Marquee */}
      <div className="relative w-full py-4 mt-2">
        <style>{`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
        
        <div 
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={onMouseLeaveContainer}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
          className={`flex overflow-x-auto hide-scrollbar w-full ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        >
          <CardList />
          <CardList />
        </div>
        
        {/* Fading Edges to blend with background */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-48 bg-linear-to-r from-[#fbfbfd] to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-48 bg-linear-to-l from-[#fbfbfd] to-transparent pointer-events-none z-10" />
      </div>

      <div className="max-w-[1300px] mx-auto px-4 md:px-8">
        {/* Footer closing text */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: appleEase }}
          className="mt-10 md:mt-12 text-center"
        >
          <h2 className="text-2xl md:text-4xl font-semibold leading-tight mb-3 text-primary tracking-tight">
            Because children aren't one-dimensional.
          </h2>
          <p className="text-base md:text-lg font-medium text-[#86868b]">
            Their learning shouldn't be either.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
