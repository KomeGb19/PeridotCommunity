import React from "react";
import { peridotPurple } from "../assets/images";
import ServicesButton from "../components/ServicesButton";
import { motion } from "framer-motion";

const NewServices = () => {
  const slideLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const slideRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="w-full flex justify-center items-center flex-col bg-highlight-purple pb-20">
      <motion.div
        className="flex justify-center items-center bg-deep-purple w-56 h-16 rounded-[94px] pt-2.5 mb-12 mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        variants={slideLeft}
      >
        <h3 className="text-white font-anek font-semibold text-2xl text-center">
          Our Services
        </h3>
      </motion.div>

      <div className="flex flex-col xl:flex-row justify-center items-center gap-10 xl:gap-20 w-full px-4">
        <motion.div
          className="flex justify-center items-center bg-[#F8F3FF] w-full max-w-[412px] h-[180px] sm:h-[228px] border-deep-purple border rounded-[20px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          variants={slideLeft}
        >
          <img
            src={peridotPurple}
            alt="Peridot Logo"
            className="w-[140px] h-[56px] sm:w-[200px] sm:h-[80px]"
          />
        </motion.div>

        <motion.div
          className="flex justify-center items-center flex-col xl:items-start w-full max-w-[550px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          variants={slideRight}
        >
          <p className="text-base sm:text-lg text-deep-purple font-afacad w-full p-4 xl:p-0 text-center xl:text-left mb-10">
            At Peridot we provide compassionate and personalized home care
            services designed to meet the unique needs of individuals and
            families.
          </p>
          <ServicesButton />
        </motion.div>
      </div>
    </section>
  );
};

export default NewServices;
