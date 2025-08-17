import {
  Hero,
  AboutUs,
  ContactUs,
  Footer,
  Teams,
  NewServices,
} from "./sections";

const App = () => {
  return (
    <main>
      <section>
        <Hero />
      </section>
      <section>
        <AboutUs />
      </section>
      <section>
        <NewServices />
      </section>
      <section>
        <ContactUs />
      </section>
      <section>
        <Teams />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
};

export default App;
