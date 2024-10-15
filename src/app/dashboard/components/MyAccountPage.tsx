import React from 'react';

const MyAccountPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex">
          {/* Sidebar */}
          <div className="w-1/4 bg-gray-200 p-4">
            <h2 className="font-bold text-lg mb-4">Mi Cuenta</h2>
            <ul className="space-y-2">
              <li className="hover:bg-gray-300 p-2 rounded cursor-pointer">General</li>
              <li className="hover:bg-gray-300 p-2 rounded cursor-pointer">Pedidos</li>
              <li className="hover:bg-gray-300 p-2 rounded cursor-pointer">Pago</li>
              <li className="hover:bg-gray-300 p-2 rounded cursor-pointer">Reembolsos y devoluciones</li>
              <li className="hover:bg-gray-300 p-2 rounded cursor-pointer">Valoraciones</li>
              <li className="hover:bg-gray-300 p-2 rounded cursor-pointer">Ajustes</li>
              <li className="hover:bg-gray-300 p-2 rounded cursor-pointer">Dirección de envío</li>
              <li className="hover:bg-gray-300 p-2 rounded cursor-pointer">Centro de mensajes</li>
              <li className="hover:bg-gray-300 p-2 rounded cursor-pointer">Invitar a amigos</li>
              <li className="hover:bg-gray-300 p-2 rounded cursor-pointer">Centro de ayuda</li>
              <li className="hover:bg-gray-300 p-2 rounded cursor-pointer">Centro de reclamaciones</li>
              <li className="hover:bg-gray-300 p-2 rounded cursor-pointer">Sugerencias</li>
              <li className="hover:bg-gray-300 p-2 rounded cursor-pointer">Centro de dropshipping</li>
              <li className="hover:bg-gray-300 p-2 rounded cursor-pointer">Información sobre sanciones</li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="w-3/4 p-6">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                <span>No Photo</span>
              </div>
              <div className="ml-4">
                <h2 className="text-2xl font-bold">Alexander Chagua</h2>
              </div>
            </div>

            <div className="mb-6">
              <div className="grid grid-cols-4 gap-4">
                <div className="p-4 bg-orange-200 rounded text-center">
                  <span>Pendientes de pago</span>
                </div>
                <div className="p-4 bg-orange-200 rounded text-center">
                  <span>Pendientes de envío</span>
                </div>
                <div className="p-4 bg-orange-200 rounded text-center">
                  <span>Enviado</span>
                </div>
                <div className="p-4 bg-orange-200 rounded text-center">
                  <span>Pendientes de valoración</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-4">Pedidos</h3>
              <ul className="space-y-2">
                <li className="p-4 bg-gray-100 rounded cursor-pointer hover:bg-gray-200">Apelaciones</li>
                <li className="p-4 bg-gray-100 rounded cursor-pointer hover:bg-gray-200">Reembolsos y devoluciones</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccountPage;
