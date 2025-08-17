import AboutCard from "../components/AboutCard";
import { aboutUs } from "../constants";

const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="max-container flex justify-center items-center flex-col pt-10 pb-10"
    >
      <div className="flex justify-center items-center bg-peridot-purple w-[275px] h-[64px] rounded-[94px] pt-2.5 mb-[72px]">
        <h3 className="text-deep-purple font-anek font-semibold text-2xl text-center">
          Why Choose Us?
        </h3>
      </div>
      <div className="flex justify-center items-center flex-row gap-6 max-lg:flex-col">
        {aboutUs.map((cards) => (
          <AboutCard key={cards.label} {...cards} />
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
