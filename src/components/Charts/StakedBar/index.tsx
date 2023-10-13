import React, { useEffect, useState } from "react";
import "./index.css";
import { Bar } from "react-chartjs-2";
import { IVerticalChart } from "../../interfaces/IVerticalChart";
import tratarDadosCombinados from "../../Utils/tratarDadosCombinados";

interface Props {
  titulo: string[];
  tipos: string[];
  legendas:string[];
  dataInicio: string;
  dataFim: string;
  tratarDados: boolean;
}

const StakedBar = (props: Props) => {
  const [colunas, setColunas] = useState<IVerticalChart>({});
  const [loading, setLoading] = useState(false);
  const options = {
    plugins: {
      title: {
        display: true,
        text: `${props.legendas.join(" | ")}`,
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  useEffect(() => {
    async function fetchDataCombinado() {
      try {
        setLoading(true);
        const domain = window.location.hostname;
        const cacheKey = `cachedData_${domain}_stakedBar_${props.tipos.join('_')}_${props.dataInicio}_${props.dataFim}`;
        const cachedData = sessionStorage.getItem(cacheKey);
        if (cachedData) {
          const parsedData = JSON.parse(cachedData);
          setColunas(parsedData);
        } else {
          const colunas = await tratarDadosCombinados(
            props.tipos,
            props.dataInicio,
            props.dataFim,
            props.tratarDados,
            props.legendas
            );
          setColunas(colunas as IVerticalChart);
          sessionStorage.setItem(cacheKey, JSON.stringify(colunas));
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  
    fetchDataCombinado();
  }, [props.dataInicio, props.dataFim, props.tipos]);

  // Extrair os tipos do objeto colunas
  const coresPreDefinidas = [
    "#FF6384",
    "#36A2EB",
    "#FFCE56",
    "#32CD32",
    "#BDB76B",
    "#D2691E",
    "#9400D3",
    "#FFD700",
  ];
  const tipos = Object.keys(colunas);
  const labels = props.titulo;
  // Mapear os tipos para gerar datasets dinâmicos
  const datasets = tipos.map((tipo, index) => ({
    label: tipo,
    data: [colunas[tipo].total], // Dados em uma única coluna
    backgroundColor: coresPreDefinidas[index % coresPreDefinidas.length],
  }));

  const data = {
    labels,
    datasets,
  };

  return (
    <div>
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div>
          <Bar className="grafico_stackedbar" options={options} data={data} />
        </div>
      )}
    </div>
  );
};

export default StakedBar;
