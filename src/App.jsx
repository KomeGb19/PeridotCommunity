import {
  Hero,
  AboutUs,
  ContactUs,
  Footer,
  Teams,
  NewServices,
  Services,
} from "./sections";
import { useState } from "react";
import Modal from "./components/Modal";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <main>
      <section>
        <Hero
          showModal={showModal}
          setShowModal={setShowModal}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
      </section>
      <section>
        <AboutUs />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <NewServices
          showModal={showModal}
          setShowModal={setShowModal}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
      </section>
      <section>
        <ContactUs showModal={showModal} setShowModal={setShowModal} />
      </section>
      <section>
        <Teams />
      </section>
      <section>
        <Footer />
      </section>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </main>
  );
};

export default App;
