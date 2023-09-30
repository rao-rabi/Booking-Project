import {
  Navbar,
  Gallery,
  Details,
  Services,
  Calendar,
  FamilyDetails,
  Ratings,
  Reviews,
  Footer,
} from "./Components/index";

function App() {
  return (
    <>
      <Navbar />
      <Gallery />
      <div className="lg:flex lg:justify-start">
        <Details />
        <vr className="border-cyan-200 border mt-14" />
        <Services />
      </div>
      <div className="lg:flex py-7 my-6 bg-slate-100 bg-opacity-30">
        <Calendar />
        <FamilyDetails />
      </div>
      <div className="md:flex">
        <Ratings />
        <Reviews />
      </div>
      <Footer />
    </>
  );
}

export default App;
