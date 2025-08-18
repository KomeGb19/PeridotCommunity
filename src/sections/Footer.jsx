import { navLinks } from "../constants";

const Footer = () => {
  return (
    <section className="relative bg-deep-purple flex justify-center items-center p-4 sm:p-5">
      <div className="flex flex-wrap justify-center items-center bg-accent-purple w-full  rounded-full">
        <div className="flex flex-row max-sm:flex-col justify-between items-center text-deep-purple w-full text-xs p-4 max-sm:p-2">
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
