"use client"

import Slider from "react-slick"

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const Slide = () => {
  return (
    <Slider {...settings}>
      <div>
        <div className="h-52 bg-black"></div>
        <h3>1</h3>
      </div>
      <div>
        <div className="h-52 bg-black"></div>
        <h3>2</h3>
      </div>
      <div>
        <div className="h-52 bg-black"></div>
        <h3>3</h3>
      </div>
      <div>
        <div className="h-52 bg-black"></div>
        <h3>4</h3>
      </div>
    </Slider>
  )
}

export default Slide
