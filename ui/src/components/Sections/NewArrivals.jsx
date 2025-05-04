import React from "react";
import SectionHeading from "./SectionHeading/SectionHeading";
import Card from "../Card/Card";
import Jeans from "../../assets/img/jeans.jpg";
import Shirts from "../../assets/img/shirts.jpg";
import Kurtis from "../../assets/img/kurtis.jpg";
import Dresses from "../../assets/img/dresses.jpg";
import Carousel from "react-multi-carousel";
import {responsive} from "../../utils/Section.constants";
import './NewArrivals.css'

const items = [
  {
    title: "Jeans",
    image: Jeans,
  },
  {
    title: "Shirts",
    image: Shirts,
  },
  {
    title: "T-Shirts",
    image: Kurtis,
  },
  {
    title: "Dresses",
    image: Dresses,
  },
  {
    title: "Jeans",
    image: Jeans,
  },
  {
    title: "Shirts",
    image: Shirts,
  },
  {
    title: "T-Shirts",
    image: Kurtis,
  },
  {
    title: "Dresses",
    image: Dresses,
  },
];

const NewArrivals = () => {
  return (
    <>
      <SectionHeading title={"New Arivals"} />
      <Carousel responsive={responsive}
                autoPlay={false}
                swipeable={false}
                draggable={false}
                showDots={false}
                infinite={false}
                partialVisbile={false}
                itemClass={'react-slider-custom-item'}
                className="px-8">
        {items &&
          items?.map((item, index) => {
            return (
              <Card
                key={item.title + index}
                title={item.title}
                image={item.image}
              />
            );
          })}
      </Carousel>
    </>
  );
};

export default NewArrivals;
