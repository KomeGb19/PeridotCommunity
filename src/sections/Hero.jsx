import React from "react";
import { heroImage2 } from "../assets/images";
import HeroButton from "../components/HeroButton";
import { certification2, heroLine, join } from "../assets/icons";
import Nav from "../components/Nav";

const Hero = () => {
  return (
    <div id="home">
      <Nav />
      <section className="flex justify-center items-center lg:flex-row flex-col-reverse p-2 relative pb-10 max-sm:px-4 max-md:pb-6">
        <div className="flex justify-center flex-col sm:px-16 px-8 max-sm:px-4 max-md:px-6">
          <h1 className="text-left text-8xl font-afacad font-semibold text-deep-purple max-w-xl mb-3 max-sm:text-4xl max-sm:max-w-full max-md:text-6xl max-md:max-w-lg">
            Dedicated Healthcare for a Caring Home
          </h1>
          <p className="text-lg font-anek text-deep-purple max-w-lg mb-8 max-sm:text-base max-sm:max-w-full max-md:text-lg max-md:max-w-md">
            Your trusted partner in home care services. Comfort, care, and
            compassion delivered to your doorstep.
          </p>
          <div className="flex justify-start items-center gap-8 max-sm:flex-col max-sm:gap-4 max-md:gap-6">
            <HeroButton label="Join Our Community" iconURL={join} />
            <HeroButton
              label="Learn More"
              backgroundColor="bg-deep-purple"
              textColor="text-white"
            />
          </div>
        </div>
        <div className="flex justify-center items-center max-lg:bg-white bg-highlight-purple w-[520px] h-[520px] max-xl:w-[380px] max-xl:h-[380px] max-md:w-[320px] max-md:h-[320px] max-sm:w-[300px] max-sm:h-[300px] rounded-full bg-cover">
          <img
            src={heroImage2}
            alt="heroImage"
            className="w-[360px] h-[360px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] max-md:w-[300px] max-md:h-[300px] max-sm:w-[280px] max-sm:h-[280px]"
          />
        </div>
        <div className="absolute z-0 max-sm:hidden max-md:hidden">
          <img src={heroLine} alt="heroLine" />
        </div>
        <div className="absolute left-[930px] top-[400px] l:hidden">
          <img src={certification2} width={200} />
        </div>
      </section>
    </div>
  );
};

export default Hero;
