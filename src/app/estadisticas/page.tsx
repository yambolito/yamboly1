// pages/index.tsx
import React from 'react';
import Reporte from '../components/Reporte';

import Header from '../components/Header' 

const IndexPage: React.FC = () => {
  const monthlyIncidents = [
    { month: 'Ene', incidents: 5 },
    { month: 'Feb', incidents: 7 },
    { month: 'Mar', incidents: 4 },
    { month: 'Abr', incidents: 3 },
    { month: 'May', incidents: 6 },
    { month: 'Jun', incidents: 8 },
    // Agrega más datos de incidentes aquí
  ];

  const accidentData = [
    { frequency_index: 2, severity_index: 1, accidentability_index: 0.5, trained: 4, op_workers: 20, adm_workers: 10 },
    { frequency_index: 1, severity_index: 2, accidentability_index: 0.3, trained: 3, op_workers: 25, adm_workers: 15 },
    { frequency_index: 3, severity_index: 1, accidentability_index: 0.4, trained: 5, op_workers: 15, adm_workers: 8 },
    // Agrega más datos de accidentes aquí
  ];

  return (
    <div>
      <Header />
      <Reporte monthlyIncidents={monthlyIncidents} accidentData={accidentData} />
    </div>
  );
};

export default IndexPage;
