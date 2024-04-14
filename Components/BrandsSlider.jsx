"use client"
import Image from 'next/image';
import TripAdvisor from '../public/TripAdvisor.svg';
import Expedia from '../public/Expedia.svg';
import BookingCom from '../public/BookingCom.svg';
import airbnb from '../public/AirBnb.svg';
import Rbitz from '../public/Rbitz.svg';
import React from "react";
import Slider from 'react-slick';



const BrandsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
     
        <Image src={TripAdvisor} alt="TAImage" width={100} height={100} />
     
   
        <Image src={Expedia} alt="EXImage" width={100} height={100} />
     
   
        <Image src={BookingCom} alt="BCImage" width={100} height={100} />
   
   
        <Image src={airbnb} alt="ABImage" width={100} height={100} />
    
        <Image src={Rbitz} alt="RbitzImage" width={100} height={100} />
     
    </Slider>
  );
};

export default BrandsSection;
