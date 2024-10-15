// components/Reporte.tsx
"use client";

import React from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

interface MonthlyIncident {
  month: string;
  incidents: number;
}

interface AccidentData {
  frequency_index: number;
  severity_index: number;
  accidentability_index: number;
  trained: number;
  op_workers: number;
  adm_workers: number;
}

interface ReporteProps {
  monthlyIncidents: MonthlyIncident[];
  accidentData: AccidentData[];
}

const Reporte: React.FC<ReporteProps> = ({ monthlyIncidents, accidentData }) => {
  
  // Gráfico de Incidentes Mensuales
  React.useEffect(() => {
    const ctx = document.getElementById('incidentChart') as HTMLCanvasElement;
    const incidentChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: monthlyIncidents.map(item => item.month),
        datasets: [{
          label: 'Incidentes',
          data: monthlyIncidents.map(item => item.incidents),
          backgroundColor: 'rgba(75, 192, 192, 0.5)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        }],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      incidentChart.destroy();
    };
  }, [monthlyIncidents]);

  // Gráfico de Accidentabilidad
  React.useEffect(() => {
    const ctx = document.getElementById('accidentChart') as HTMLCanvasElement;
    const accidentChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: accidentData.map((_, index) => `Data ${index + 1}`),
        datasets: [
          {
            label: 'Índice de Frecuencia',
            data: accidentData.map(item => item.frequency_index),
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            fill: false,
          },
          {
            label: 'Índice de Severidad',
            data: accidentData.map(item => item.severity_index),
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            fill: false,
          },
          {
            label: 'Índice de Accidentabilidad',
            data: accidentData.map(item => item.accidentability_index),
            borderColor: 'rgba(255, 206, 86, 1)',
            backgroundColor: 'rgba(255, 206, 86, 0.5)',
            fill: false,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      accidentChart.destroy();
    };
  }, [accidentData]);

  // Gráfico de Capacitación
  React.useEffect(() => {
    const ctx = document.getElementById('trainingChart') as HTMLCanvasElement;
    const trainingChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Personal Operativo', 'Personal Administrativo'],
        datasets: [{
          label: 'Capacitados',
          data: [accidentData.reduce((acc, item) => acc + item.trained, 0), 
                 accidentData.reduce((acc, item) => acc + item.adm_workers, 0)],
          backgroundColor: ['rgba(75, 192, 192, 0.5)', 'rgba(255, 99, 132, 0.5)'],
        }],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      trainingChart.destroy();
    };
  }, [accidentData]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Reporte de Seguridad y Salud</h1>
      <main className="flex flex-wrap">
        <section className="incident bg-white border border-gray-300 p-5 m-2 w-full sm:w-1/2 lg:w-1/4">
          <h2 className="text-xl font-semibold">INCIDENTES MENSUALES</h2>
          <div id="chart-container-incident">
            <canvas id="incidentChart"></canvas>
          </div>
        </section>

        <section className="accident bg-white border border-gray-300 p-5 m-2 w-full sm:w-1/2 lg:w-1/4">
          <h2 className="text-xl font-semibold">ÍNDICE DE ACCIDENTABILIDAD</h2>
          <div id="chart-container-accident">
            <canvas id="accidentChart"></canvas>
          </div>
        </section>

        <section className="training bg-white border border-gray-300 p-5 m-2 w-full sm:w-1/2 lg:w-1/4">
          <h2 className="text-xl font-semibold">CAPACITACIONES</h2>
          <div id="chart-container-training">
            <canvas id="trainingChart"></canvas>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Reporte;
