import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { IGrafico } from '../../interfaces/IGrafico';
import { IBarchart } from '../../interfaces/IBarchart';
import loadData from '../../Utils/loadData';

interface Props {
  tipo: string; // Defina os tipos permitidos aqui
  coluna1: string,
  coluna2: string
}

const GraficoBar = ({ tipo,coluna1,coluna2 }: Props) => {
  const [data, setData] = useState<IBarchart>({
    label:"",
    valor1: 0,
    valor2: 0,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const dados = await loadData(tipo); // Chame a função importada
        setData(dados);
      } catch (error) {
        // Trate qualquer erro que possa ocorrer durante a busca de dados
        console.error(error);
      }
    }
    fetchData();
  }, [tipo]);
  let labels = Object.values(data);
  labels = Object.values(labels).map(objeto => objeto.label);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>{tipo.charAt(0).toUpperCase() + tipo.slice(1)}</h2>
      <div>
        <Bar
          data={{
            labels: labels,
            datasets: [
              {
                label: coluna1,
                backgroundColor: ['#FF6384'], // Cores para cada fatia do gráfico
                data: Object.values(data).map(objeto => objeto.valor1),
              },
              {
                label: coluna2,
                backgroundColor: [ '#36A2EB'], // Cores para cada fatia do gráfico
                data: Object.values(data).map(objeto => objeto.valor2),
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default GraficoBar;
