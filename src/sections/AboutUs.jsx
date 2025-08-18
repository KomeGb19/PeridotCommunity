import AboutCard from "../components/AboutCard";
import { aboutUs } from "../constants";
import { motion } from "framer-motion";

const AboutUs = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const zoomIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section
      id="about-us"
      className="max-container flex justify-center items-center flex-col pt-10 pb-20"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        variants={fadeUp}
        className="flex justify-center items-center bg-peridot-purple w-[275px] h-[64px] rounded-[94px] pt-2.5 mb-[40px]"
      >
        <h3 className="text-deep-purple font-anek font-semibold text-2xl text-center">
          Why Choose Us?
        </h3>
      </motion.div>

      <div className="flex justify-between items-center flex-row gap-6 lg:gap-10 max-lg:flex-col">
        {aboutUs.map((cards, index) => (
          <motion.div
            key={cards.label}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            variants={zoomIn}
          >
            <AboutCard {...cards} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
