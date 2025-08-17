import React from "react";
import { footerLine } from "../assets/icons";
import { navLinks } from "../constants";

const Footer = () => {
  return (
    <section className="relative bg-deep-purple flex justify-center items-center p-4 sm:p-5">
      <div className="flex flex-wrap justify-between items-center bg-accent-purple w-full max-w-5xl px-4 sm:px-8 md:px-12 py-4 sm:py-5 rounded-full">
        <div className="flex flex-wrap justify-between items-center text-deep-purple w-full text-xs sm:text-sm gap-y-2 gap-x-4">
          <p>Terms of Service</p>
          <p className="mx-auto">
            Copyright &copy; {new Date().getFullYear()} Peridot Community
            Support
          </p>
          {navLinks
            .filter((item) => item.label === "support@peridotcareservices.com")
            .map((item) => (
              <a
                key={item.id}
                href={`mailto:${item.label}`}
                className="underline"
              >
                {item.label}
              </a>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
