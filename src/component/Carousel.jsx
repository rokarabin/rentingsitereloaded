import React from 'react'
import { Carousel } from "react-responsive-carousel";

const Carousell = () => {
  return (
    <>
   <Carousel autoPlay>
    <div>
      <img alt="" src="/carousel/car.jpg" />
      <p className="legend">Cars Category</p>
    </div>
    <div>
      <img alt="" src="/carousel/cucle.jpg" />
      <p className="legend">Cycle</p>
    </div>
    <div>
      <img alt="" src="/carousel/duke.jpg" />
      <p className="legend">MotorBike</p>
    </div>
    
    </Carousel>
 </>
  )
}

export default Carousell