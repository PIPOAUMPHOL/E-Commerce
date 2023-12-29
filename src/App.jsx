import Nav from "./components/Nav";
import SectionFeaturedProducts from "./components/section/FeaturedProducts";
import Footer from "./components/Footer";
import SectionProductCategories from "./components/section/ProductCategories";
import SectionSubcribeNewsletter from "./components/section/SubscribeNewsletter";

function App() {
  return (
    <>
      <Nav />
      <SectionFeaturedProducts />
      <SectionProductCategories />
      <SectionSubcribeNewsletter />
      <Footer />
    </>
  );
}

export default App;
