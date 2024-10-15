'use client'; // Necesario para habilitar hooks en componentes de cliente

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/Header' // Corrige la importación de useRouter

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // Aquí se monta correctamente el router en cliente

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Lógica de validación con la base de datos simulada
    if (email === 'usuario@project.com' && password === '123456') {
      router.push('/dashboard'); // Redirige a la página del dashboard
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div>
        <Header />  
    
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-6">Iniciar Sesión</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium">Correo Electrónico</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-500 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="usuario@project.com"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Contraseña</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-500 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;
