'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Logo from '../public/Picture1.png';

interface Persona {
  nombre: string;
  fechaNacimiento: string;
  foto?: string;
  mensaje: string;
}

const personas: Persona[] = [
  {
    nombre: "VILLANUEVA TOVAR CELIA SOLEDAD",
    fechaNacimiento: "1990-02-01",
    foto: "",
    mensaje: "¡Feliz cumpleaños, CELIA! En Yamboly valoramos tu dedicación y esfuerzo. ¡Disfruta tu día al máximo! 🎉🥳",
  },
  {
    nombre: "FIGUEROA ROMERO DOUGLAS FERNANDO",
    fechaNacimiento: "1990-10-11",
    foto: "/yambolyssoma/carpeta1/duglas1.jpg",
    mensaje: "¡Feliz cumpleaños, DOUGLAS! En Yamboly valoramos tu dedicación y esfuerzo. ¡Disfruta tu día al máximo! 🎉🥳",
  },
  // Más personas aquí...
];

const Home = () => {
  const [currentPersona, setCurrentPersona] = useState<Persona | null>(null);

  useEffect(() => {
    const today = new Date().toISOString().slice(5, 10);
    const personaCumple = personas.find(
      (persona) => persona.fechaNacimiento.slice(5, 10) === today
    );
    if (personaCumple) {
      setCurrentPersona(personaCumple);
    }
  }, []);

  const playBirthdayMusic = () => {
    const audio = document.getElementById('birthdayAudio') as HTMLAudioElement;
    audio.play();
  };

  return (
    <>
      <div className="relative flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
        {/* Fondo de video */}
        <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="../public/fondo.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>

        {/* Audio */}
        <audio id="birthdayAudio">
          <source src="/CUMPLEAÑOS.mp3" type="audio/mp3" />
          Tu navegador no soporta el audio.
        </audio>

        {/* Logo */}
        <Image
          className="w-1/5 mb-6"
          src={Logo}
          alt="Yamboly Logo"
        />

        {/* Título */}
        <h1 className="text-5xl font-serif">¡FELIZ CUMPLEAÑOS!</h1>

        {/* Slider */}
        {currentPersona && (
          <div className="mt-8 p-6 bg-white bg-opacity-80 rounded-lg shadow-lg text-center max-w-md mx-auto">
            {currentPersona.foto && (
              <Image
                src={currentPersona.foto}
                alt={currentPersona.nombre}
                className="w-32 h-32 mx-auto rounded-full mb-4"
                width={128}
                height={128}
              />
            )}
            <h2 className="text-3xl font-bold text-blue-500">
              {currentPersona.nombre}
            </h2>
            <p className="text-lg text-blue-600 mt-2">
              {currentPersona.mensaje}
            </p>
          </div>
        )}

        <button
          onClick={playBirthdayMusic}
          className="mt-8 bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300"
        >
          ¡Haz clic aquí! 🥳
        </button>
      </div>
    </>
  );
};

export default Home;
