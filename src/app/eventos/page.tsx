'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import event from '../public/event.jpeg';
import evento from '../public/evento.jpg';
import trabajador from '../public/trabajador.jpeg';
import banner from '../public/banner.jpg';

const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Controla el slide actual

  // Array con las imágenes
  const slides = [
    { src: event, alt: 'Imagen 1' },
    { src: evento, alt: 'Imagen 2' },
    { src: trabajador, alt: 'Imagen 3' },
    { src: banner, alt: 'Imagen 4' }
  ];

  // Función para cambiar automáticamente los slides cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [slides.length]);

  return (
    <div className="min-h-screen bg-[#00d9f1fb] flex flex-col items-center">
      {/* Header */}
      <Header />

      {/* Slider */}
      <main className="relative mt-4 flex justify-center">
        <div className="slider overflow-hidden relative w-[500px] h-[500px]"> {/* Slider de 500px x 500px */}
          <div
            className="slides flex transition-transform duration-1000 ease-linear"
            style={{ transform: `translateX(-${currentSlide * 100}%)`, width: `${slides.length * 100}%` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full h-full" // Aseguramos que cada slide tenga el tamaño completo
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  className="object-contain w-full h-full" // Ajusta la imagen sin recortarla
                  width={500}
                  height={500}
                  style={{ objectFit: 'contain' }} // Asegúrate de que se ajuste adecuadamente al tamaño del slider
                />
              </div>
            ))}
          </div>

          {/* Navigation indicators */}
          <div className="navigation absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <label
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`cursor-pointer w-3 h-3 rounded-full ${
                  currentSlide === index ? 'bg-[#ff5733]' : 'bg-white'
                }`}
              ></label>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
    </div>
  );
};

export default HomePage;
