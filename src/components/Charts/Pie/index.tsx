import React, { useEffect, useState, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import { IGrafico } from '../../interfaces/IGrafico';
import { Pie } from 'react-chartjs-2';

interface Props {
  tipo: string; // Defina os tipos permitidos aqui
}

const GraficoPie = ({tipo}:Props) => {

  const [data, setData] = useState<IGrafico>({
    coluna1: 0,
    coluna2: 0,
  });
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<any | null>(null); // Referência para o gráfico Chart.js
  useEffect(() => {
    // Função para carregar os dados do arquivo JSON
    const loadData = async () => {
      try {
        //const response = await fetch(`/data-management/graficos/dist/data/${tipo}.json`);
        const response = await fetch(`/data/${tipo}.json`);
        if (!response.ok) {
          throw new Error('Erro ao carregar JSON');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Erro ao carregar JSON:', error);
      }
    };

    // Chama a função para carregar os dados
    loadData();
  }, [tipo]);

  useEffect(() => {
    // Verifique se o elemento de referência existe
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        // Destrói o gráfico existente, se houver
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
        chartInstance.current = new Chart(ctx, {
          type: 'pie',
          data: {
            labels: Object.keys(data),
            datasets: [
              {
                data: Object.values(data),
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56','#32CD32','#BDB76B','#D2691E','#9400D3','#FFD700'], // Cores para cada fatia do gráfico
              },
            ],
          },
        });
      }
    }
  }, [data]);

  return (
    <div>
      <h2 style={{textAlign:"center"}}>{tipo.charAt(0).toUpperCase() + tipo.slice(1)}</h2>
      <canvas ref={chartRef} width={400} height={400}></canvas>
    </div>
  );
};

export default GraficoPie;
