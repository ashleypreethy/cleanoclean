"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import Carousel from './Carousel';
import Card from './Card'; // Adjust the path if necessary
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import icons

const OurServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselItems.length - 3 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= carouselItems.length - 3 ? 0 : prevIndex + 1));
  };

  const carouselItems = [
    <Card 
      key="1" 
      imageSrc="/homecleaning.jpeg" 
      heading="Home Cleaning" 
      description="Description for Home Cleaning Experience a spotless home with our professional cleaning services." 
      buttonText="See More" 
    />,
    <Card 
      key="2" 
      imageSrc="/bathroomcleaning.jpg" 
      heading="Bathroom Cleaning" 
      description="Description for Bathroom Cleaning Experience a spotless home with our professional cleaning services." 
      buttonText="See More" 
    />,
    <Card 
      key="3" 
      imageSrc="/kitchenclean.jpeg" 
      heading="Kitchen Cleaning" 
      description="Description for Kitchen Cleaning Experience a spotless home with our professional cleaning services." 
      buttonText="See More" 
    />,
    <Card 
      key="4" 
      imageSrc="/clean.jpeg" 
      heading="Office Cleaning" 
      description="Description for Office Cleaning Experience a spotless home with our professional cleaning services." 
      buttonText="See More" 
    />,
    <Card 
      key="5" 
      imageSrc="/cleaning.jpeg" 
      heading="Deep Cleaning" 
      description="Description for Deep Cleaning Experience a spotless home with our professional cleaning services." 
      buttonText="See More" 
    />,
    <Card 
      key="6" 
      imageSrc="/kitchenclean.jpeg" 
      heading="Kitchen Cleaning " 
      description="Description for Kitchen Cleaning Experience a spotless home with our professional cleaning services." 
      buttonText="See More" 
    />,
  ];

  return (
    <div className="m-5 md:m-20">
      <div className="flex items-center justify-center mt-10 space-x-4">
        <Image 
          src="/greencleanicon.png" 
          alt="GreenIcon" 
          width={30} 
          height={30}
          className="block"
        />
        <p className="text-green-500 font-bold text-lg md:text-xl lg:text-2xl">
          OUR SERVICES
        </p>
      </div>
      <div className="mt-5 relative text-center">
        <p className="text-black font-bold text-xl md:text-3xl lg:text-5xl">
          Trusted Cleaning 
          <span className="text-blue-500 font-bold"> Services</span><br /> At Your Door Steps
        </p>
        <div className="flex justify-center space-x-4 mt-2 md:absolute md:top-0 md:right-0 md:space-x-4">
          <button
            className="p-4 bg-blue-200 text-white rounded-lg hover:bg-blue-400"
            onClick={prevSlide}
            aria-label="Previous Slide"
          >
            <FaChevronLeft />
          </button>
          <button
            className="p-4 bg-blue-200 text-white rounded-lg hover:bg-blue-400"
            onClick={nextSlide}
            aria-label="Next Slide"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
      <div className="relative mt-10">
        <Carousel items={carouselItems} currentIndex={currentIndex} />
      </div>
    </div>
  );
};

export default OurServices;
