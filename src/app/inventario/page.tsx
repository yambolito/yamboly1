// pages/inventory.js
"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header'

// Simula datos de inventario (reemplaza con tu lógica de obtención de datos)
const mockData = [
  { id: 1, Codigo: '001', Descripcion: 'Casco de Seguridad', Stock: 10, quantity: 5 },
  { id: 2, Codigo: '002', Descripcion: 'Guantes de Protección', Stock: 20, quantity: 15 },
];

export default function Inventory() {
  const [datos, setDatos] = useState(mockData);
  const [codigo, setCodigo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [stock, setStock] = useState('');
  const [quantity, setQuantity] = useState('');

  useEffect(() => {
    // Aquí podrías cargar los datos desde tu API o base de datos
    setDatos(mockData);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para guardar el nuevo artículo
    const newItem = {
      id: datos.length + 1,
      Codigo: codigo,
      Descripcion: descripcion,
      Stock: stock,
      quantity: quantity,
    };
    setDatos([...datos, newItem]);
    // Limpiar los campos del formulario
    setCodigo('');
    setDescripcion('');
    setStock('');
    setQuantity('');
  };

  const handleModify = (id) => {
    // Aquí iría la lógica para modificar el artículo
    console.log(`Modificar artículo con ID: ${id}`);
  };

  const handleDelete = (id) => {
    setDatos(datos.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-[#00d9f1fb] text-center">
     <Header/>

      <main className="p-4">
        <form onSubmit={handleSubmit} className="mb-4">
          <label htmlFor="codigo">Código:</label>
          <input
            type="text"
            id="codigo"
            name="codigo"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
            required
            className="border border-gray-300 p-2 mx-2"
          />
          <label htmlFor="descripcion">Descripción del Artículo:</label>
          <input
            type="text"
            id="descripcion"
            name="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
            className="border border-gray-300 p-2 mx-2"
          />
          <label htmlFor="stock">Stock:</label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
            className="border border-gray-300 p-2 mx-2"
          />
          <label htmlFor="quantity">Cantidad Física:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
            className="border border-gray-300 p-2 mx-2"
          />
          <input type="submit" value="Guardar" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer" />
        </form>

        <h2 className="text-2xl mb-4">Tabla de Inventarios</h2>
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2 bg-blue-500 text-white">Código</th>
              <th className="border border-gray-300 p-2 bg-blue-500 text-white">Descripción del Artículo</th>
              <th className="border border-gray-300 p-2 bg-blue-500 text-white">Stock</th>
              <th className="border border-gray-300 p-2 bg-blue-500 text-white">Cantidad Física</th>
              <th className="border border-gray-300 p-2 bg-blue-500 text-white">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {datos.map((dato) => (
              <tr key={dato.id}>
                <td className="border border-gray-300 p-2">{dato.Codigo}</td>
                <td className="border border-gray-300 p-2">{dato.Descripcion}</td>
                <td className="border border-gray-300 p-2">{dato.Stock}</td>
                <td className="border border-gray-300 p-2">{dato.quantity}</td>
                <td className="border border-gray-300 p-2">
                  <button onClick={() => handleModify(dato.id)} className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600">Modificar</button>
                  <button onClick={() => handleDelete(dato.id)} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 ml-2">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

    
    </div>
  );
}
