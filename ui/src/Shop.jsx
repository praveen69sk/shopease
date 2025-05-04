import HeroSection from "./components/HeroSection/HeroSection";
import Navigation from "./components/Navigation/Navigation";
import Category from "./components/Sections/Categories/Category";
import NewArrivals from "./components/Sections/NewArrivals";
import "./Shop.css";
import content from './data/content.json'
import Footer from "./components/Footer/Footer";

function Shop() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <NewArrivals />
      {
        content?.categories && content?.categories?.map((item, index) => {
          return (
            <Category key={item.title + index} {...item}/>
          )
        })
      }
      <Footer content={content?.footer}/>
    </>
  );
}

export default Shop;
