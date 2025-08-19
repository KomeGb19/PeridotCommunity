import { phone, phone2, peridot2 } from "../assets/icons";
import { navLinks } from "../constants";
import { hamburger2, closemenu } from "../assets/icons";
import HeaderButton from "./HeaderButton";
import { useState, useEffect } from "react";

const Nav = ({ setShowModal, isHovered, setIsHovered }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleNavBar = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const headerButton = (
    <HeaderButton
      label="Talk to Us"
      iconURL={phone}
      hoverIconURL={phone2}
      setShowModal={setShowModal}
      isHovered={isHovered}
      setIsHovered={setIsHovered}
    />
  );

  return (
    <header className="bg-peridot-purple relative my-6 mx-12 max-sm:mx-6 rounded-full min-w-[300px] backdrop-blur-lg z-50">
      <nav className="flex justify-between items-center gap-20 px-9 py-3">
        <a href="/">
          <img src={peridot2} alt="Logo" width={80} height={80} />
        </a>
        <ul className="hidden custom:flex justify-center items-center gap-10">
          {navLinks
            .filter((item) => item.label !== "support@peridotcareservices.com")
            .map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-afacad text-deep-purple text-[16px] xl:text-[20px] hover:bg-deep-purple hover:text-white hover:p-1 hover:rounded-md transition-all duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
        </ul>

        <div className="hidden max-custom:flex">
          <button className="" onClick={toggleNavBar}>
            <img
              src={mobileMenuOpen ? closemenu : hamburger2}
              alt="Menu"
              width={24}
              height={24}
            />
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="fixed top-20 left-0 right-0 z-50 bg-peridot-purple w-full p-6 flex flex-col justify-center items-center custom:hidden rounded-xl text-deep-purple">
            <ul className="flex flex-col items-center gap-6 w-full">
              {navLinks
                .filter(
                  (item) => item.label !== "support@peridotcareservices.com"
                )
                .map((item) => (
                  <li key={item.label} className="w-full text-center">
                    <a
                      href={item.href}
                      className="font-afacad text-deep-purple text-base hover:bg-deep-purple hover:text-white hover:p-1 hover:rounded-md transition-all duration-300 inline-block w-full"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        )}
        {headerButton}
      </nav>
    </header>
  );
};

export default Nav;
