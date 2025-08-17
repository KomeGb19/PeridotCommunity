import { phone, peridot2 } from "../assets/icons";
import { navLinks } from "../constants";
import { hamburger2, closemenu } from "../assets/icons";
import HeaderButton from "./HeaderButton";
import { useState } from "react";

const Nav = () => {
  const [mobileMenuOpen, setmobileMenuOpen] = useState(false);

  const toggleNavBar = () => {
    setmobileMenuOpen(!mobileMenuOpen);
  };
  const headerButton = <HeaderButton label="Talk to Us" iconURL={phone} />;

  return (
    <header className="bg-peridot-purple relative z-10 my-6 mx-12 rounded-[161px] backdrop-blur-lg">
      <nav className="max-container flex justify-between items-center px-9 py-3">
        <a href="/">
          <img src={peridot2} alt="Logo" width={100} height={100} />
        </a>
        <ul className="hidden lg:flex justify-center items-center gap-10">
          {navLinks
            .filter((item) => item.label !== "support@peridotcareservices.com")
            .map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-afacad text-deep-purple text-[20px] hover:bg-deep-purple hover:text-white hover:p-1 hover:rounded-md transition-all duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
        </ul>

        {/* Hamburger Menu */}
        <div className="hidden max-lg:flex">
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
          <div className="fixed top-20 right-0 z-2 bg-peridot-purple w-full p-12 opacity-80 flex flex-col justify-center items-center lg:hidden rounded-xl text-deep-purple">
            <ul className="flex flex-col items-center gap-6">
              {navLinks
                .filter(
                  (item) => item.label !== "support@peridotcareservices.com"
                )
                .map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="font-anek text-deep-purple text-base  hover:bg-deep-purple hover:text-white hover:p-1 hover:rounded-md transition-all duration-300"
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
