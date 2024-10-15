"use client";

import { useState } from 'react';
import Header from '../components/Header'

export default function RegistroEvidencias() {
    const [inspecciones, setInspecciones] = useState([]);
    const [formData, setFormData] = useState({
        item: '',
        mes: '',
        evidencia: '',
        lugar: '',
        fotografia_evidencia: '',
        evaluacion_riesgo: 'Bajo',
        acciones_correctivas: '',
        responsable: '',
        fecha_observacion: '',
        fecha_vencimiento: '',
        fecha_cumplimiento: '',
        estado: 'Pendiente',
        foto_evidencia: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Agregar la nueva inspección al estado
        setInspecciones([...inspecciones, { ...formData, id: inspecciones.length + 1 }]);
        
        // Limpiar el formulario después de guardar
        setFormData({
            item: '',
            mes: '',
            evidencia: '',
            lugar: '',
            fotografia_evidencia: '',
            evaluacion_riesgo: 'Bajo',
            acciones_correctivas: '',
            responsable: '',
            fecha_observacion: '',
            fecha_vencimiento: '',
            fecha_cumplimiento: '',
            estado: 'Pendiente',
            foto_evidencia: ''
        });
    };

    return (
        <div className="bg-[#00d9f1fb] text-center">
            <Header />

            <main className="bg-[#15ebfa] p-4">
                {/* Reemplaza esta parte con tu lógica de verificación de cliente */}
                {true ? ( // Cambia esto con la condición adecuada
                    <form className="space-y-4" onSubmit={handleSubmit} encType="multipart/form-data">
                        <label htmlFor="item">Item:</label>
                        <input
                            type="text"
                            id="item"
                            name="item"
                            required
                            value={formData.item}
                            onChange={handleChange}
                            className="border p-2 w-full"
                        />

                        <label htmlFor="mes">Mes:</label>
                        <input
                            type="text"
                            id="mes"
                            name="mes"
                            required
                            value={formData.mes}
                            onChange={handleChange}
                            className="border p-2 w-full"
                        />

                        <label htmlFor="evidencia">Evidencia:</label>
                        <textarea
                            id="evidencia"
                            name="evidencia"
                            required
                            value={formData.evidencia}
                            onChange={handleChange}
                            className="border p-2 w-full"
                        ></textarea>

                        <label htmlFor="lugar">Lugar:</label>
                        <input
                            type="text"
                            id="lugar"
                            name="lugar"
                            required
                            value={formData.lugar}
                            onChange={handleChange}
                            className="border p-2 w-full"
                        />

                        <label htmlFor="fotografia_evidencia">Fotografía de Evidencia:</label>
                        <input
                            type="file"
                            id="fotografia_evidencia"
                            name="fotografia_evidencia"
                            accept="image/*"
                            onChange={(e) => setFormData({ ...formData, fotografia_evidencia: e.target.files[0] })}
                            className="border p-2 w-full"
                        />

                        <label htmlFor="evaluacion_riesgo">Evaluación de Riesgo:</label>
                        <select
                            id="evaluacion_riesgo"
                            name="evaluacion_riesgo"
                            required
                            value={formData.evaluacion_riesgo}
                            onChange={handleChange}
                            className="border p-2 w-full"
                        >
                            <option value="Bajo">Bajo</option>
                            <option value="Medio">Medio</option>
                            <option value="Alto">Alto</option>
                        </select>

                        <label htmlFor="acciones_correctivas">Acciones Correctivas:</label>
                        <textarea
                            id="acciones_correctivas"
                            name="acciones_correctivas"
                            required
                            value={formData.acciones_correctivas}
                            onChange={handleChange}
                            className="border p-2 w-full"
                        ></textarea>

                        <label htmlFor="responsable">Responsable:</label>
                        <input
                            type="text"
                            id="responsable"
                            name="responsable"
                            required
                            value={formData.responsable}
                            onChange={handleChange}
                            className="border p-2 w-full"
                        />

                        <label htmlFor="fecha_observacion">Fecha de Observación:</label>
                        <input
                            type="date"
                            id="fecha_observacion"
                            name="fecha_observacion"
                            required
                            value={formData.fecha_observacion}
                            onChange={handleChange}
                            className="border p-2 w-full"
                        />

                        <label htmlFor="fecha_vencimiento">Fecha de Vencimiento:</label>
                        <input
                            type="date"
                            id="fecha_vencimiento"
                            name="fecha_vencimiento"
                            required
                            value={formData.fecha_vencimiento}
                            onChange={handleChange}
                            className="border p-2 w-full"
                        />

                        <label htmlFor="fecha_cumplimiento">Fecha de Cumplimiento:</label>
                        <input
                            type="date"
                            id="fecha_cumplimiento"
                            name="fecha_cumplimiento"
                            value={formData.fecha_cumplimiento}
                            onChange={handleChange}
                            className="border p-2 w-full"
                        />

                        <label htmlFor="estado">Estado:</label>
                        <select
                            id="estado"
                            name="estado"
                            required
                            value={formData.estado}
                            onChange={handleChange}
                            className="border p-2 w-full"
                        >
                            <option value="Pendiente">Pendiente</option>
                            <option value="En progreso">En progreso</option>
                            <option value="Completado">Completado</option>
                        </select>

                        <label htmlFor="foto_evidencia">Foto de Cumplimiento:</label>
                        <input
                            type="file"
                            id="foto_evidencia"
                            name="foto_evidencia"
                            accept="image/*"
                            onChange={(e) => setFormData({ ...formData, foto_evidencia: e.target.files[0] })}
                            className="border p-2 w-full"
                        />

                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Guardar</button>
                    </form>
                ) : null}

                <h2 className="mt-6 text-2xl">Tabla de Inspecciones</h2>
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="border bg-blue-500 text-white">Item</th>
                            <th className="border bg-blue-500 text-white">Mes</th>
                            <th className="border bg-blue-500 text-white">Evidencia</th>
                            <th className="border bg-blue-500 text-white">Lugar</th>
                            <th className="border bg-blue-500 text-white">Fotografía de Evidencia</th>
                            <th className="border bg-blue-500 text-white">Evaluación de Riesgo</th>
                            <th className="border bg-blue-500 text-white">Acciones Correctivas</th>
                            <th className="border bg-blue-500 text-white">Responsable</th>
                            <th className="border bg-blue-500 text-white">Fecha de Observación</th>
                            <th className="border bg-blue-500 text-white">Fecha de Vencimiento</th>
                            <th className="border bg-blue-500 text-white">Fecha de Cumplimiento</th>
                            <th className="border bg-blue-500 text-white">Estado</th>
                            <th className="border bg-blue-500 text-white">Foto de Cumplimiento</th>
                            <th className="border bg-blue-500 text-white">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inspecciones.map((inspeccion) => (
                            <tr key={inspeccion.id}>
                                <td className="border">{inspeccion.item}</td>
                                <td className="border">{inspeccion.mes}</td>
                                <td className="border">{inspeccion.evidencia}</td>
                                <td className="border">{inspeccion.lugar}</td>
                                <td className="border">{inspeccion.fotografia_evidencia ? inspeccion.fotografia_evidencia.name : 'Sin foto'}</td>
                                <td className="border">{inspeccion.evaluacion_riesgo}</td>
                                <td className="border">{inspeccion.acciones_correctivas}</td>
                                <td className="border">{inspeccion.responsable}</td>
                                <td className="border">{inspeccion.fecha_observacion}</td>
                                <td className="border">{inspeccion.fecha_vencimiento}</td>
                                <td className="border">{inspeccion.fecha_cumplimiento}</td>
                                <td className="border">{inspeccion.estado}</td>
                                <td className="border">{inspeccion.foto_evidencia ? inspeccion.foto_evidencia.name : 'Sin foto'}</td>
                                <td className="border">
                                    {/* Agrega aquí los botones de modificar o eliminar según sea necesario */}
                                    <button className="bg-yellow-500 text-white py-1 px-2 rounded">Modificar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
}
