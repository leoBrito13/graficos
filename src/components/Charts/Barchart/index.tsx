import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { IGrafico } from '../../interfaces/IGrafico';

interface Props {
  tipo: string; // Defina os tipos permitidos aqui
}

const GraficoBar = ({ tipo }: Props) => {
  const [data, setData] = useState<IGrafico>({
    coluna1: 0,
    coluna2: 0,
  });

  useEffect(() => {
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

    loadData();
  }, [tipo]);

  const labels = Object.keys(data);
  
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>{tipo.charAt(0).toUpperCase() + tipo.slice(1)}</h2>
      <div>
        <Bar
          data={{
            labels: labels,
            datasets: [
              {
                label: "Vendas",
                backgroundColor: ['#FF6384'], // Cores para cada fatia do gráfico
                data: Object.values(data),
              },
              {
                label: "Locação",
                backgroundColor: [ '#36A2EB'], // Cores para cada fatia do gráfico
                data: Object.values(data),
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default GraficoBar;
