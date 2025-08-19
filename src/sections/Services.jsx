import React, { useRef, useEffect, useState } from "react";
import ServicesCard from "../components/ServicesCard";
import { services } from "../constants";
import { motion } from "framer-motion";

const Services = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="our-services"
      className="w-full flex justify-center items-center flex-col bg-primary2 pb-20"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        variants={fadeUp}
        className="flex justify-center items-center bg-peridot-purple w-[275px] h-[64px] pt-2.5 rounded-[94px] m-10"
      >
        <h3 className="text-deep-purple font-anek font-semibold text-2xl text-center">
          What We Offer
        </h3>
      </motion.div>

      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.2 }}
        variants={fadeUp}
        className="text-lg text-deep-purple font-afacad max-w-[847px] text-center px-8 pb-10"
      >
        Discover our range of tailored home care solutions, each designed to
        support your well-being and independence.
      </motion.p>

      <div className="flex justify-center items-center flex-col lg:flex-row gap-[50px]">
        {services.map((cards, index) => (
          <motion.div
            key={cards.label}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            variants={fadeUp}
          >
            <ServicesCard {...cards} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
