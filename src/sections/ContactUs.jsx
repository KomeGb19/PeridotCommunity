import React from "react";
import { ctaBanner } from "../assets/images";
import CtaButton from "../components/CtaButton";

const ContactUs = () => {
  return (
    <section id="contact-us" className="relative h-screen w-full">
      <img
        src={ctaBanner}
        alt="Background Image"
        className="absolute inset-0 w-full h-full object-cover filter blur-sm"
      ></img>
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      <div className="flex flex-col justify-center items-center absolute inset-0">
        <h2 className="font-anek text-4xl text-center text-white w-full max-w-2xl px-4 mb-[17px]">
          Your loved ones’ safety and comfort are at the heart of everything we
          do.
        </h2>
        <CtaButton label="Talk to Us Today" />
      </div>
    </section>
  );
};

export default ContactUs;
