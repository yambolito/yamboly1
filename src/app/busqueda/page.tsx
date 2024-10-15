"use client";

// Importar módulos necesarios
import { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import Header from '../components/Header';// Puedes usar axios o fetch para obtener datos

// Función para obtener la última foto
const obtenerUltimaFoto = async () => {
  try {
    const response = await axios.get('/api/ultimaFoto'); // Crear una API en Next.js para obtener datos
    return response.data.foto_captura;
  } catch (error) {
    console.error('Error fetching the photo:', error);
    return null;
  }
};

const BusquedaPersonal = () => {
  const [ultimaFoto, setUltimaFoto] = useState<string | null>(null);
  const [personas, setPersonas] = useState<any[]>([]); // Ajustar el tipo de datos según sea necesario
  const [formData, setFormData] = useState({
    nombre: '',
    area_trabajo: '',
    fecha_entrega_bb: '',
  });

  // Al cargar el componente, obtener la última foto
  useEffect(() => {
    const fetchFoto = async () => {
      const foto = await obtenerUltimaFoto();
      setUltimaFoto(foto);
    };
    fetchFoto();
  }, []);

  // Función para manejar cambios en los inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.get('/api/busqueda', {
        params: formData,
      });
      setPersonas(response.data); // Suponiendo que la API devuelve un array de personas
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <Header />
      <form id="searchForm" onSubmit={handleSubmit}>
        <label htmlFor="nombre">Buscar por nombre:</label>
        <input type="text" id="nombre" name="nombre" onChange={handleChange} />

        <label htmlFor="area_trabajo">Buscar por área de trabajo:</label>
        <input type="text" id="area_trabajo" name="area_trabajo" onChange={handleChange} />

        <label htmlFor="fecha_entrega_bb">BUSCAR POR FECHA</label>
        <input type="date" id="fecha_entrega_bb" name="fecha_entrega_bb" onChange={handleChange} />

        <input type="submit" value="Buscar" />
      </form>

      {/* Resultados de la búsqueda */}
      <div id="personList" className="person-list">
        {personas.length > 0 ? (
          <div className="marco">
            <h2>Resultados de la búsqueda</h2>
            <ul id="personListUl">
              {personas.map((persona) => (
                <li key={persona.id}>
                  <div className="photo">
                    <Image src={persona.foto} alt={persona.name} width={100} height={100} />
                  </div>
                  <span>
                    Estado: <span className={persona.estado === 'activo' ? 'estado-activo' : 'estado-retirado'}>{persona.estado}</span><br />
                    Nombre: {persona.name}<br />
                    Edad: {persona.edad}<br />
                    Ocupación: {persona.ocupacion}<br />
                    Área: {persona.area_trabajo}<br />
                    Sede: {persona.sede}<br />
                    Fecha de ingreso: {persona.fecha_ingreso}<br />
                    Fecha de cumpleaños: {persona.fecha_cumple}<br />
                  </span>
                  <h2>Equipos de Seguridad</h2>
                  {/* Aquí puedes agregar más lógica para equipos de seguridad */}
                  <h2>Firma</h2>
                  <Image src={persona.firmar} alt="Firma" width={300} height={150} />
                  <h2>Foto evidencia</h2>
                  <Image src={ultimaFoto ? ultimaFoto : '/default-image.jpg'} alt="Última Foto" width={300} height={225} />
                  <br />
                  Fecha de firma: {persona.fecha}
                  <a href={`/views/mpersonal/${persona.id}`} className="btn-modificar">Modificar Datos</a>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No se encontraron resultados para la búsqueda.</p>
        )}
      </div>
    </div>
  );
};

export default BusquedaPersonal;
