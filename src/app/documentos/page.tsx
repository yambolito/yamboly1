// sr<<c/app/documentos/page.tsx
"use client";

import React from 'react';
import Link from 'next/link'; // Importa Link de Next.js
import Header from '../components/Header'; // Ajusta la ruta según tu estructura de carpetas
import Image from 'next/image'; // Ajusta la ruta según tu estructura de carpetas

const Documentos: React.FC = () => {
  return (
    <div className="bg-[#00d9f1fb] text-center">
      
        <Header />
      

      <main className="bg-[#15ebfa] py-10">
        <h1 className="text-3xl font-bold mb-8">Documentos SSOMA</h1>
        <ul className="space-y-4">
          <li>
            <Link href="/prueba/images/reglamento.pdf" download="reglamento.pdf">
            
                Descargar Reglamento de seguridad y salud en el trabajo
            
            </Link>
          </li>
        </ul>
        <Link href="https://yamboly.com/ssoma.com/index.php?action=Documentos">
          DESCAEGA RISST
        </Link>
      </main>

 
    </div>
  );
};

export default Documentos;
