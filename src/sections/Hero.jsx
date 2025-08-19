import React from "react";
import { heroImage2 } from "../assets/images";
import HeroButton from "../components/HeroButton";
import { certification2, heroLine, join } from "../assets/icons";
import Nav from "../components/Nav";
import { motion } from "framer-motion";

const Hero = ({ setShowModal, isHovered, setIsHovered }) => {
  // Variants
  const slideLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div id="home" className="relative">
      <Nav
        setShowModal={setShowModal}
        isHovered={isHovered}
        setIsHovered={setIsHovered}
      />
      <section className="flex justify-center items-center lg:flex-row flex-col-reverse p-2 relative pb-10 max-sm:px-4 max-md:pb-6 ">
        <motion.div
          className="flex justify-center flex-col p-2"
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          variants={slideLeft}
        >
          <motion.h1
            className="text-left text-8xl font-afacad font-semibold text-deep-purple max-w-xl mb-3 max-sm:text-3xl max-sm:max-w-full max-md:text-6xl max-md:max-w-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Dedicated Healthcare for a Caring Home
          </motion.h1>

          <motion.p
            className="text-lg font-anek text-deep-purple max-w-lg mb-8 max-sm:text-base max-sm:max-w-full max-md:text-lg max-md:max-w-md"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Your trusted partner in home care services. Comfort, care, and
            compassion delivered to your doorstep.
          </motion.p>

          <motion.div
            className="flex justify-start items-center gap-8 max-sm:flex-col max-sm:gap-4 max-md:gap-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <HeroButton
              label="Join Our Community"
              iconURL={join}
              setShowModal={setShowModal}
              backgroundColor="bg-primary2"
              textColor="text-deep-purple"
            />
            <HeroButton
              label="Learn More"
              backgroundColor="bg-deep-purple"
              textColor="text-white"
              setShowModal={setShowModal}
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center items-center max-lg:bg-white bg-highlight-purple w-[520px] h-[520px] max-sm:w-[300px] max-sm:h-[300px]  rounded-full bg-cover z-10"
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.8, type: "spring" }}
          variants={scaleUp}
        >
          <img
            src={heroImage2}
            alt="heroImage"
            className="w-[360px] h-[360px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] max-md:w-[300px] max-md:h-[300px] max-sm:w-[280px] max-sm:h-[280px]"
          />
        </motion.div>

        <motion.div
          className="absolute pointer-events-none z-0 max-sm:hidden max-md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
        >
          <img src={heroLine} alt="heroLine" />
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;
