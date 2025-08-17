import React from "react";
import { footerLine } from "../assets/icons";
import { navLinks } from "../constants";

const Footer = () => {
  return (
    <section className="relative bg-deep-purple flex justify-center items-center p-5">
      <div className="flex justify-between items-center bg-accent-purple w-[1319px] px-12 py-5 rounded-full">
        <div className="flex justify-between items-center text-deep-purple w-full text-sm">
          <p>Terms of Service</p>
          <p>
            Copyright &copy; {new Date().getFullYear()} Peridot Community
            Support
          </p>
          {navLinks
            .filter((item) => item.label == "support@peridotcareservices.com")
            .map((item) => (
              <a key={item.id}>{item.label}</a>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
