// components/Card.tsx
import React from 'react';
import Image from 'next/image';
import Button from './Button'; // Adjust the path if necessary

interface CardProps {
  imageSrc: string;
  heading: string;
  description: string;
  buttonText: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, heading, description, buttonText }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden text-center">
      <div className="relative w-full h-48">
        <Image
          src={imageSrc}
          alt={heading}
          layout="fill"
          objectFit="cover"
          className="w-full h-full transition-transform transform hover:scale-105"
        />
      </div>
      <div className="p-4 flex flex-col items-center">
        <h3 className="text-xl font-semibold mb-2">{heading}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <Button type="button" title={buttonText} icon="/arrow-right.svg" variant="btn_dark_hovergreen" />
      </div>
    </div>
  );
};

export default Card;
