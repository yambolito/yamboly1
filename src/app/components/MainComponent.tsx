"use client";

import { useState } from 'react';

const MainComponent: React.FC = () => {
    const [firma, setFirma] = useState<string>('');

    const borrarFirma = () => {
        const canvas = document.getElementById('canvas-firma') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d');
        if (ctx) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            setFirma(''); // Resetea el estado de la firma
        }
    };

    const guardarFirmaMouse = () => {
        const canvas = document.getElementById('canvas-firma') as HTMLCanvasElement;
        const dataURL = canvas.toDataURL();
        setFirma(dataURL); // Guarda la firma en el estado
    };

    const guardarFirmaTouch = () => {
        const canvas = document.getElementById('canvas-firma') as HTMLCanvasElement;
        const dataURL = canvas.toDataURL();
        setFirma(dataURL); // Guarda la firma en el estado
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Aquí puedes enviar los datos a tu API o manejar el envío
        console.log(firma); // Solo para ver la firma guardada en base64
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <button
                onClick={() => document.getElementById('formulario')?.classList.toggle('hidden')}
                className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
            >
                Agregar Nuevo Personal
            </button>
            <form id="formulario" className="hidden" onSubmit={handleSubmit}>
                <h2 className="text-xl font-semibold mb-4">Registro de Personal</h2>
                
                <div className="mb-4">
                    <label className="block mb-1" htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-1" htmlFor="cargo">Cargo:</label>
                    <input
                        type="text"
                        id="cargo"
                        name="cargo"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        required
                    />
                </div>
                <div className="mb-4">
                <div className="mb-4">
                    <label className="block mb-1" htmlFor="sede">Sede:</label>
                    <select
                        id="sede"
                        name="sede"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        required
                    >
                        <option value="">Escoge su sede</option>
                        <option value="lima">Lima</option>
                        <option value="arequipa">Arequipa</option>
                        <option value="cusco">Cusco</option>
                        <option value="trujillo">Trujillo</option>
                    </select>
                </div>
                </div>
                <div className="mb-4">
                    <label className="block mb-1" htmlFor="ocupacion">Ocupacion:</label>
                    <input
                        type="text"
                        id="cargo"
                        name="cargo"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1" htmlFor="area">Area de Trabajo:</label>
                    <input
                        type="text"
                        id="cargo"
                        name="cargo"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1" htmlFor="cumpleanos">Fecha de Cumpleaños:</label>
                    <input
                        type="date"
                        id="cumpleaños"
                        name="cumpleaños"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        required
                    />
                    
                </div>
                <div className="mb-4">
                    <label className="block mb-1" htmlFor="ingreso">Fecha de ingreso:</label>
                    <input
                        type="date"
                        id="ingreso"
                        name="ingreso"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1" htmlFor="estado">Estado:</label>
                    <select
                        id="estado"
                        name="estado"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        required
                    >
                        <option value="Activo">Activo</option>
                        <option value="Retirado">Retirado</option>
                      
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block mb-1" htmlFor="estado">Estado de EPP:</label>
                    <select
                        id="estado de epp"
                        name="estado de epp"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        required
                    >
                        <option value="Activo">Activo</option>
                        <option value="Devuelto">Devuelto</option>
                      
                    </select>
                </div>

                <h3 className="text-lg font-semibold mb-2">Equipos de Seguridad:</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="item mb-4">
                        <label>
                            <input type="checkbox" name="casco" value="1" /> Casco
                        </label>
                        <label className="block">Fecha de Entrega:</label>
                        <input
                            type="date"
                            name="fecha_entrega_ca"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        />
                        <label className="block">Fecha de Cambio:</label>
                        <input
                            type="date"
                            name="cambio_ca"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        />
                    </div>

                    <div className="item mb-4">
                        <label>
                            <input type="checkbox" name="guantes" value="1" /> Guantes
                        </label>
                        <label className="block">Fecha de Entrega:</label>
                        <input
                            type="date"
                            name="fecha_entrega_gu"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        />
                        <label className="block">Fecha de Cambio:</label>
                        <input
                            type="date"
                            name="cambio_gu"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        />
                    </div>
                    <div className="item mb-4">
                        <label>
                            <input type="checkbox" name="guantes" value="1" /> Guantes
                        </label>
                        <label className="block">Fecha de Entrega:</label>
                        <input
                            type="date"
                            name="fecha_entrega_gu"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        />
                        <label className="block">Fecha de Cambio:</label>
                        <input
                            type="date"
                            name="cambio_gu"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        />
                    </div>
                    <div className="item mb-4">
                        <label>
                            <input type="checkbox" name="guantes" value="1" /> Guantes
                        </label>
                        <label className="block">Fecha de Entrega:</label>
                        <input
                            type="date"
                            name="fecha_entrega_gu"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        />
                        <label className="block">Fecha de Cambio:</label>
                        <input
                            type="date"
                            name="cambio_gu"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        />
                    </div>
                    <div className="item mb-4">
                        <label>
                            <input type="checkbox" name="guantes" value="1" /> Guantes
                        </label>
                        <label className="block">Fecha de Entrega:</label>
                        <input
                            type="date"
                            name="fecha_entrega_gu"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        />
                        <label className="block">Fecha de Cambio:</label>
                        <input
                            type="date"
                            name="cambio_gu"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        />
                    </div>
                    <div className="item mb-4">
                        <label>
                            <input type="checkbox" name="guantes" value="1" /> Guantes
                        </label>
                        <label className="block">Fecha de Entrega:</label>
                        <input
                            type="date"
                            name="fecha_entrega_gu"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        />
                        <label className="block">Fecha de Cambio:</label>
                        <input
                            type="date"
                            name="cambio_gu"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        />
                    </div>
                    <div className="item mb-4">
                        <label>
                            <input type="checkbox" name="guantes" value="1" /> Guantes
                        </label>
                        <label className="block">Fecha de Entrega:</label>
                        <input
                            type="date"
                            name="fecha_entrega_gu"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        />
                        <label className="block">Fecha de Cambio:</label>
                        <input
                            type="date"
                            name="cambio_gu"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        />
                    </div>
                    <div className="item mb-4">
                        <label>
                            <input type="checkbox" name="guantes" value="1" /> Guantes
                        </label>
                        <label className="block">Fecha de Entrega:</label>
                        <input
                            type="date"
                            name="fecha_entrega_gu"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        />
                        <label className="block">Fecha de Cambio:</label>
                        <input
                            type="date"
                            name="cambio_gu"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        />
                    </div>
                    <div className="item mb-4">
                        <label>
                            <input type="checkbox" name="guantes" value="1" /> Guantes
                        </label>
                        <label className="block">Fecha de Entrega:</label>
                        <input
                            type="date"
                            name="fecha_entrega_gu"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        />
                        <label className="block">Fecha de Cambio:</label>
                        <input
                            type="date"
                            name="cambio_gu"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        />
                    </div>
                    <div className="item mb-4">
                        <label>
                            <input type="checkbox" name="guantes" value="1" /> Guantes
                        </label>
                        <label className="block">Fecha de Entrega:</label>
                        <input
                            type="date"
                            name="fecha_entrega_gu"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        />
                        <label className="block">Fecha de Cambio:</label>
                        <input
                            type="date"
                            name="cambio_gu"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        />
                    </div>
                    <div className="item mb-4">
                        <label>
                            <input type="checkbox" name="guantes" value="1" /> Guantes
                        </label>
                        <label className="block">Fecha de Entrega:</label>
                        <input
                            type="date"
                            name="fecha_entrega_gu"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        />
                        <label className="block">Fecha de Cambio:</label>
                        <input
                            type="date"
                            name="cambio_gu"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        />
                    </div>
                    <div className="item mb-4">
                        <label>
                            <input type="checkbox" name="guantes" value="1" /> Guantes
                        </label>
                        <label className="block">Fecha de Entrega:</label>
                        <input
                            type="date"
                            name="fecha_entrega_gu"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        />
                        <label className="block">Fecha de Cambio:</label>
                        <input
                            type="date"
                            name="cambio_gu"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        />
                    </div>
                    <div className="item mb-4">
                        <label>
                            <input type="checkbox" name="guantes" value="1" /> Guantes
                        </label>
                        <label className="block">Fecha de Entrega:</label>
                        <input
                            type="date"
                            name="fecha_entrega_gu"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        />
                        <label className="block">Fecha de Cambio:</label>
                        <input
                            type="date"
                            name="cambio_gu"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        />
                    </div>
                    <div className="item mb-4">
                        <label>
                            <input type="checkbox" name="guantes" value="1" /> Guantes
                        </label>
                        <label className="block">Fecha de Entrega:</label>
                        <input
                            type="date"
                            name="fecha_entrega_gu"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        />
                        <label className="block">Fecha de Cambio:</label>
                        <input
                            type="date"
                            name="cambio_gu"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        />
                    </div>
                    <div className="item mb-4">
                        <label>
                            <input type="checkbox" name="guantes" value="1" /> Guantes
                        </label>
                        <label className="block">Fecha de Entrega:</label>
                        <input
                            type="date"
                            name="fecha_entrega_gu"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        />
                        <label className="block">Fecha de Cambio:</label>
                        <input
                            type="date"
                            name="cambio_gu"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        />
                    </div>
                    <div className="item mb-4">
                        <label>
                            <input type="checkbox" name="guantes" value="1" /> Guantes
                        </label>
                        <label className="block">Fecha de Entrega:</label>
                        <input
                            type="date"
                            name="fecha_entrega_gu"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        />
                        <label className="block">Fecha de Cambio:</label>
                        <input
                            type="date"
                            name="cambio_gu"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        />
                    </div>
                </div>

                <h3 className="text-lg font-semibold mb-2">Firma:</h3>
                <canvas
                    id="canvas-firma"
                    width="300"
                    height="100"
                    className="border border-gray-300 mb-4"
                    onMouseUp={guardarFirmaMouse}
                    onTouchEnd={guardarFirmaTouch}
                />
                <button
                    type="button"
                    onClick={borrarFirma}
                    className="bg-red-500 text-white px-2 py-1 rounded mb-4"
                >
                    Borrar Firma
                </button>
                <input type="hidden" name="firma" value={firma} />

                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
                    Registrar Personal
                </button>
            </form>
        </div>
    );
};

export default MainComponent;
