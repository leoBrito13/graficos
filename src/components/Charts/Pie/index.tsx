import React, { useEffect, useState, useRef } from "react";
import { Chart } from "chart.js/auto";
import { IGrafico } from "../../interfaces/IGrafico";
import loadData from "../../Utils/loadData";
import "./index.css";

interface Props {
  label: string;
  tipo: string; // Defina os tipos permitidos aqui
  datainicio: string;
  datafim: string;
}

const GraficoPie = (props: Props) => {
  const [data, setData] = useState<IGrafico>({
    coluna1: 0,
    coluna2: 0,
    coluna3: 0,
    coluna4: 0,
    coluna5: 0,
  });
  const [loading, setLoading] = useState(false);
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<any | null>(null); // Referência para o gráfico Chart.js
  useEffect(() => {
    // Função para carregar os dados do arquivo JSON
    async function fetchData() {
      try {
        setLoading(true);
        const dados = await loadData(
          props.tipo,
          props.datainicio,
          props.datafim
        );
        setData(dados);
      } catch (error) {
        // Trate qualquer erro que possa ocorrer durante a busca de dados
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [props.datainicio, props.datafim]);

  useEffect(() => {
    // Verifique se o elemento de referência existe
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        // Destrói o gráfico existente, se houver
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
        chartInstance.current = new Chart(ctx, {
          type: "pie",
          data: {
            labels: Object.keys(data),
            datasets: [
              {
                data: Object.values(data),
                backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56",
                  "#32CD32",
                  "#BDB76B",
                  "#D2691E",
                  "#9400D3",
                  "#FFD700",
                ], // Cores para cada fatia do gráfico
              },
            ],
          },
        });
      }
    }
  }, [data]);

  return (
    <div>
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div>
          <h2 className="titulo__pie">{props.label}</h2>
          <canvas
            id={props.tipo}
            ref={chartRef}
            width={400}
            height={400}></canvas>
        </div>
      )}
    </div>
  );
};

export default GraficoPie;
