import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import IMG1 from "../../Images/green3.jpg";
import IMG2 from "../../Images/green2.jpg";
import IMG3 from "../../Images/green.jpg";
const Carusal = () => {
  return (
    <div>
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div>
          <img
            height={350}
            className=" w-100   object-cover object-center"
            src={IMG1}
            alt=""
          />
        </div>
        <div>
          <img
            height={350}
            className="h-64 w-100 object-cover object-center"
            src={IMG2}
            alt=""
          />
        </div>
        <div>
          <img
            height={350}
            className="h-64 w-100 object-cover object-center"
            src={IMG3}
            alt=""
          />
          {/*  <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    </div>
  );
};

export default Carusal;
