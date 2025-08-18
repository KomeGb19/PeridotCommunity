import React from "react";
import { ctaBanner } from "../assets/images";
import CtaButton from "../components/CtaButton";
import { motion } from "framer-motion";

const ContactUs = ({ setShowModal }) => {
  return (
    <section
      id="contact-us"
      className="relative min-h-screen w-full overflow-hidden"
    >
      <motion.img
        src={ctaBanner}
        alt="Background Image"
        className="absolute inset-0 w-full h-full object-cover filter blur-sm"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      />

      <motion.div
        className="absolute inset-0 bg-black bg-opacity-80"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.8 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />

      <div className="flex flex-col justify-center items-center absolute inset-0 px-4">
        <motion.h2
          className="font-anek text-2xl sm:text-3xl md:text-4xl text-center text-white w-full max-w-2xl mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          Your loved ones’ safety and comfort are at the heart of everything we
          do.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
        >
          <CtaButton label="Talk to Us Today" setShowModal={setShowModal} />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
