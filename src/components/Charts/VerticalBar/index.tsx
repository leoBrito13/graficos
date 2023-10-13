import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { IVerticalChart } from "../../interfaces/IVerticalChart";
import tratarDadosCombinados from "../../Utils/tratarDadosCombinados";

interface Props {
  titulo?:string;
  legendas?: string[];
  tipos: string[];
  dataInicio: string;
  dataFim: string;
  tratarDados: boolean;
}

const VerticalBar = (props: Props) => {
  const [colunas, setColunas] = useState<IVerticalChart>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchDataCombinado() {
      try {
        setLoading(true);
        const domain = window.location.hostname;
        const cacheKey = `cachedData_${domain}_verticalBar_${props.tipos.join("_")}_${props.dataInicio}_${props.dataFim}`;
        const cachedData = sessionStorage.getItem(cacheKey);
        if (cachedData) {
          const parsedData = JSON.parse(cachedData);
          setColunas(parsedData);
        } else {
          const colunas = await tratarDadosCombinados(
            props.tipos,
            props.dataInicio,
            props.dataFim,
            props.tratarDados);
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

  let labels;
  if (props.legendas === undefined) {
    labels = Object.keys(colunas);
  } else {
    labels = props.legendas;
  }

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false, // Define a legenda como oculta
      },
      title: {
        display: true,
        text: props.titulo === undefined ?`${labels.join(" | ")}`:props.titulo,
      },
    },
    scales: {
      x: {
        stacked: true, // Empilhar as barras horizontalmente
      },
      y: {
        stacked: true, // Empilhar as barras verticalmente
      },
    },
  };

  const keys = Object.keys(colunas);
  const data = {
    labels,
    datasets: [
      {
        data: keys.map((key) => colunas[key].total),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <div>
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <Bar className="grafico_verticalbar" options={options} data={data} />
      )}
    </div>
  );
};

export default VerticalBar;
