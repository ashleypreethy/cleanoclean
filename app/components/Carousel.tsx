// components/Carousel.tsx
import { useEffect, useState } from 'react';

interface CarouselProps {
  items: React.ReactNode[];
  currentIndex: number;
}

const Carousel: React.FC<CarouselProps> = ({ items, currentIndex }) => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getVisibleItems = () => {
    if (windowWidth >= 1024) return 3; // Large screens: 3 items
    if (windowWidth >= 768) return 2; // Medium screens: 2 items
    return 1; // Small screens: 1 item
  };

  const visibleItems = getVisibleItems();

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-300 ease-out space-x-4"
        style={{ transform: `translateX(-${(currentIndex / visibleItems) * 100}%)` }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex-shrink-0 ${visibleItems === 3 ? 'w-1/3' : visibleItems === 2 ? 'w-1/2' : 'w-full'}`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
