import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import Card from "../card/Card";

function Carousel({ data, iconCarousel, options , width }) {
  return (
    <Slider {...options}>
      {data.map((item) => (
        <Card
          img={item?.img}
          title={item?.title}
          iconCarousel={iconCarousel ? iconCarousel : ""}
          text={item?.text}
          width={width}
        />
      ))}
    </Slider>
  );
}

export default Carousel;
