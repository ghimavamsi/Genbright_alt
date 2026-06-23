import { motion, type Variants } from "framer-motion";
import indianKids from "../../assets/images/indian_kids_jumping_books_1782192777427.png";
import centerFellow from "../../assets/images/centre_fellow_1782128157276.png";
import indianBoy from "../../assets/images/indian_boy_horizon.png";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-[#fdfbf7] text-[#2c3d28] overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12">

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

          {/* Left Side: Text List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2"
          >
            <motion.h3
              variants={itemVariants}
              className="text-sm md:text-base font-bold tracking-[0.2em] text-[#7b9369] uppercase mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Why Parents Choose GenBright
            </motion.h3>

            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-5xl font-light mb-12"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              They choose us because...
            </motion.h2>

            <div className="flex flex-col gap-6 md:gap-8 ml-2 md:ml-6 mb-16 border-l-2 border-[#e8efe3] pl-6 md:pl-10">
              <motion.div variants={itemVariants}>
                <h1 className="text-4xl md:text-6xl font-serif tracking-tight" style={{ fontFamily: "'Lora', serif" }}>
                  Their child is <span className="italic text-[#4a6b36]">known.</span>
                </h1>
              </motion.div>
              <motion.div variants={itemVariants}>
                <h1 className="text-4xl md:text-6xl font-serif tracking-tight" style={{ fontFamily: "'Lora', serif" }}>
                  Their child is <span className="italic text-[#4a6b36]">heard.</span>
                </h1>
              </motion.div>
              <motion.div variants={itemVariants}>
                <h1 className="text-4xl md:text-6xl font-serif tracking-tight" style={{ fontFamily: "'Lora', serif" }}>
                  Their child is <span className="italic text-[#4a6b36]">encouraged.</span>
                </h1>
              </motion.div>
              <motion.div variants={itemVariants}>
                <h1 className="text-4xl md:text-6xl font-serif tracking-tight" style={{ fontFamily: "'Lora', serif" }}>
                  Their child <span className="italic text-[#4a6b36]">belongs.</span>
                </h1>
              </motion.div>
            </div>

            <motion.div variants={itemVariants}>
              <p className="text-xl md:text-3xl font-light text-[#555]" style={{ fontFamily: "'Outfit', sans-serif" }}>
                And because learning feels <span className="font-medium text-[#4a6b36]">joyful again.</span>
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side: Asymmetric Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-1/2 grid grid-cols-2 gap-4 md:gap-6"
          >
            <div className="flex flex-col gap-4 md:gap-6 mt-12 md:mt-24">
              <img
                src={indianKids}
                alt="Children playing"
                className="w-full h-[250px] md:h-[350px] object-cover rounded-3xl shadow-lg hover:scale-[1.02] transition-transform duration-500"
              />
              <img
                src={centerFellow}
                alt="Child smiling"
                className="w-full h-[200px] md:h-[280px] object-cover rounded-3xl shadow-lg hover:scale-[1.02] transition-transform duration-500 bg-[#f4f7f0]"
              />
            </div>
            <div className="flex flex-col gap-4 md:gap-6 mb-12 md:mb-24">
              <img
                src={indianBoy}
                alt="Child exploring nature"
                className="w-full h-[400px] md:h-[550px] object-cover rounded-3xl shadow-lg hover:scale-[1.02] transition-transform duration-500 bg-[#f4f7f0]"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
