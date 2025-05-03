import HeroSection from './components/HeroSection/HeroSection';
import Navigation from './components/Navigation/Navigation';
import NewArrivals from './components/Sections/NewArrivals';
import './Shop.css';

function Shop() {
  return (
    <div className="Shop">
      <Navigation />
      <HeroSection />
      <NewArrivals />
    </div>
  );
}

export default Shop;
