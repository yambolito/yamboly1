"use client";

import { useState } from 'react';

const AddProduct: React.FC = () => {
  const [productName, setProductName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí enviarías el producto a la base de datos o API
    alert(`Producto agregado: ${productName}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        placeholder="Nombre del producto"
        className="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-500 focus:outline-none"
        required
      />
      <button
        type="submit"
        className="w-full py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600"
      >
        Agregar Producto
      </button>
    </form>
  );
};

export default AddProduct;
