import HeroSection from "./components/HeroSection/HeroSection";
import Navigation from "./components/Navigation/Navigation";
import Category from "./components/Sections/Categories/Category";
import NewArrivals from "./components/Sections/NewArrivals";
import "./Shop.css";
import content from './data/content.json'

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
    </>
  );
}

export default Shop;
