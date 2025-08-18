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

  return (
    <main>
      <section>
        <Hero showModal={showModal} setShowModal={setShowModal} />
      </section>
      <section>
        <AboutUs />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <NewServices />
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
