import Nav from "./components/Nav";
import { CustomerReviews, Footer, Hero, PopularProducts, Services, SpecialOffer, Subscribe, SuperQuality } from "./sections";


const App = () => {
  return (
    <main className="relative">
      <Nav></Nav>
      <section className="xl:padding-l wide:padding-r padding-b">
      <Hero></Hero>
      </section>
      <section className="padding">
      <PopularProducts></PopularProducts>
      </section>
      <section className="padding">
      <SuperQuality></SuperQuality>
      </section>
      <section className="padding-x py-10">
     <Services></Services>
      </section>
      <section className="padding">
     <SpecialOffer></SpecialOffer>
      </section>
      <section className="padding bg-pale-blue">
     <CustomerReviews></CustomerReviews>
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
     <Subscribe></Subscribe>
      </section>
      <section className="padding bg-black padding-x padding-t pb-8">
     <Footer></Footer>
      </section>
    </main>
  );
};

export default App;
