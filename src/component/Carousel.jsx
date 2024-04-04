
import React from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const  Carousell=()=> {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="caruselitems">

    <Slider {...settings}>
      <div className="carousel">
      <img src="./carousel/car.jpg"  />

      </div>
      <div className="carousel">
      <img src="./carousel/cucle.jpg"  />
      </div>
      <div className="carousel">
      <img src="./carousel/vr.jpg"  />
      </div>
      
    </Slider>
    </div>
    
  );
}

export default Carousell