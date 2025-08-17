import React from "react";
import { heroImage2 } from "../assets/images";
import HeroButton from "../components/HeroButton";
import { certification2, heroLine, join } from "../assets/icons";
import Nav from "../components/Nav";

const Hero = () => {
  return (
    <div id="home">
      <Nav />
      <section className="flex justify-center items-center xl:flex-row flex-col-reverse  p-2 relative pb-10">
        <div className="flex justify-center flex-col sm:px-16 px-8">
          <h1 className="text-left text-8xl font-afacad font-semibold text-deep-purple max-w-xl mb-3">
            Dedicated Healthcare for a Caring Home
          </h1>
          <p className=" text-lg font-anek text-deep-purple max-w-lg mb-8">
            Your trusted partner in home care services. Comfort, care, and
            compassion delivered to your doorstep.
          </p>
          <div className="flex justify-start items-center gap-8">
            <HeroButton label="Join Our Community" iconURL={join} />
            <HeroButton
              label="Learn More"
              backgroundColor="bg-deep-purple"
              textColor="text-white"
            />
          </div>
        </div>
        <div className="flex justify-center items-center max-lg:bg-white bg-highlight-purple w-[520px] h-[520px] max-xl:w-[380px] max-xl:h-[380px] rounded-full bg-cover">
          <img
            src={heroImage2}
            alt="heroImage"
            className="w-[360px] h-[360px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]"
          />
        </div>
        <div className="absolute z-0">
          <img src={heroLine} alt="heroLine" />
        </div>
        <div className="absolute left-[930px] top-[400px]">
          <img src={certification2} width={200} />
        </div>
      </section>
    </div>
  );
};

export default Hero;
