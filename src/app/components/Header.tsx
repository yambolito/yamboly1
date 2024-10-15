

import Link from 'next/link';
import IMGE  from './Picture1.png'
import Image from 'next/image';
const Header = () => {
  return (
    <header className="bg-cyan-400 p-5 text-center">
      <div className="text-2xl font-bold text-black mb-5">
        Días sin accidentes: <span className="text-3xl">11</span>
      </div>
      <div>
      <div className="flex justify-center">
  <Image src={IMGE} alt="Logo" className="h-20 w-20" />
</div>
        <h1 className="text-3xl font-bold text-black">
          Sistema de Gestión de SSOMA
        </h1>
      </div>
      <nav className="space-x-4">
        <Link href="/" className="btn">
          Agregar Personal
        </Link>
        <Link href="/busqueda" className="btn">
          Búsqueda Personal
        </Link>
        <Link href="/cumples" className="btn">
          Cumples
        </Link>
        <Link href="/documentos" className="btn">
          Documentos
        </Link>
        <Link href="/estadisticas" className="btn">
          Estadísticas
        </Link>
        <Link href="/eventos" className="btn">
          Eventos
        </Link>
        <Link href="/inspecciones" className="btn">
          Inspecciones
        </Link>
        <Link href="/inventario" className="btn">
          Inventario
        </Link>
        <Link href="/login" className="btn">
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Header;
