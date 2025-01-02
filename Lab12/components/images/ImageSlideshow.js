'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './image-slideshow.module.css';

// Obrazy do pokazu slajdów
const images = [
  { image: 'images/burger.jpg', alt: 'Burger' },
  { image: 'images/curry.jpg', alt: 'Curry' },
  { image: 'images/pizza.jpg', alt: 'Salad' },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slideshow}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${styles.slide} ${
            index === currentImageIndex ? styles.active : ''
          }`}
        >
          <Image
            src={image.image}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            className={styles.image}
          />
        </div>
      ))}
    </div>
  );
}
