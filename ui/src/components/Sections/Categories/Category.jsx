import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import Card from "../../Card/Card";

const Category = ({ title, data }) => {
  return (
    <>
      <SectionHeading title={title} />
      <div className="flex px-8">
        {data &&
          data?.map((item, index) => {
            return (
              <Card
                key={item.title + index}
                title={item.title}
                image={item.image}
                description={item.description}
                actionArrow={true}
                height={"240px"}
                width={"200px"}
              />
            );
          })}
      </div>
    </>
  );
};

export default Category;
