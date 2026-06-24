import { motion, type Variants } from "framer-motion";
import { 
  Sprout, Hammer, Music, Brain, Users, PenTool, Rocket, 
  Activity, Mic, Monitor, Flame, TreePine, Compass 
} from "lucide-react";

const appleEase = [0.25, 0.1, 0.25, 1] as const;

const centers = [
  { id: "farm", name: "Farm", desc: "Where children plant, grow, and learn sustainability hands-on.", icon: Sprout, colSpan: "col-span-1 md:col-span-2 lg:col-span-2", color: "text-emerald-500" },
  { id: "forge", name: "Forge", desc: "Our high-tech makerspace for engineering and building solutions.", icon: Hammer, colSpan: "col-span-1 md:col-span-1 lg:col-span-1", color: "text-orange-500" },
  { id: "flow", name: "Flow", desc: "A creative sanctuary for music, rhythm, and expressive dance.", icon: Music, colSpan: "col-span-1 md:col-span-1 lg:col-span-1", color: "text-pink-500" },
  { id: "focus", name: "Focus", desc: "Quiet library spaces designed for deep reading and reflection.", icon: Brain, colSpan: "col-span-1 md:col-span-2 lg:col-span-2", color: "text-indigo-500" },
  { id: "fellow", name: "Fellow", desc: "Open collaborative hubs to build teamwork and leadership.", icon: Users, colSpan: "col-span-1 md:col-span-1 lg:col-span-1", color: "text-blue-500" },
  { id: "form", name: "Form", desc: "Studios for fine arts, sculpture, and boundless creativity.", icon: PenTool, colSpan: "col-span-1 md:col-span-1 lg:col-span-1", color: "text-rose-500" },
  { id: "fly", name: "Fly", desc: "Science labs equipped to explore the physical universe and beyond.", icon: Rocket, colSpan: "col-span-1 md:col-span-2 lg:col-span-2", color: "text-cyan-500" },
  { id: "field", name: "Field", desc: "Expansive athletics facilities for physical health and sports.", icon: Activity, colSpan: "col-span-1 md:col-span-2 lg:col-span-2", color: "text-lime-500" },
  { id: "forum", name: "Forum", desc: "An amphitheater for public speaking, debate, and theatre.", icon: Mic, colSpan: "col-span-1 md:col-span-1 lg:col-span-1", color: "text-violet-500" },
  { id: "frame", name: "Frame", desc: "Digital media and coding labs to build the future.", icon: Monitor, colSpan: "col-span-1 md:col-span-1 lg:col-span-1", color: "text-sky-500" },
  { id: "flame", name: "Flame", desc: "Culinary arts kitchen to learn nutrition and food science.", icon: Flame, colSpan: "col-span-1 md:col-span-2 lg:col-span-1", color: "text-red-500" },
  { id: "forest", name: "Forest", desc: "Outdoor nature trails for biological and environmental study.", icon: TreePine, colSpan: "col-span-1 md:col-span-1 lg:col-span-2", color: "text-teal-600" },
  { id: "found", name: "Found", desc: "History and archaeology zones to uncover the past.", icon: Compass, colSpan: "col-span-1 md:col-span-2 lg:col-span-1", color: "text-amber-500" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: appleEase }
  }
};

export function LearningCentres() {
  return (
    <section className="py-20 bg-white text-primary overflow-hidden border-b border-[#d2d2d7]/50">
      <div className="max-w-[1300px] mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: appleEase }}
            className="text-[13px] md:text-[14px] font-semibold tracking-widest text-[#86868b] uppercase mb-6"
          >
            The 13 Learning Centres
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15, ease: appleEase }}
            className="text-4xl md:text-6xl font-semibold leading-tight text-primary tracking-tight" 
          >
            What if learning <br/>had no walls?
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[140px] md:auto-rows-[160px]"
        >
          {centers.map((center) => {
            const Icon = center.icon;
            return (
              <motion.div 
                key={center.id}
                variants={itemVariants}
                className={`bg-white border border-[#d2d2d7]/50 ${center.colSpan} rounded-[24px] p-5 md:p-6 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-lg transition-all duration-500 cursor-pointer overflow-hidden relative`}
              >
                <div className={`absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500 group-hover:scale-110 transform origin-top-right ${center.color}`}>
                  <Icon className="w-32 h-32" strokeWidth={1} />
                </div>
                
                <div className={`z-10 bg-background w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-transform duration-500 ${center.color}`}>
                  <Icon className="w-5 h-5" strokeWidth={2} />
                </div>
                
                <div className="z-10 mt-auto">
                  <h3 className="text-xl md:text-2xl font-semibold mb-1 tracking-tight text-primary">
                    {center.name}
                  </h3>
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                    <p className="text-sm leading-relaxed opacity-0 group-hover:opacity-100 overflow-hidden transition-opacity duration-500 delay-100 font-medium text-[#86868b]">
                      {center.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: appleEase }}
          className="mt-24 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-4 text-primary tracking-tight">
            Because children aren't one-dimensional.
          </h2>
          <p className="text-lg md:text-xl font-medium text-[#86868b]">
            Their learning shouldn't be either.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
