import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { IGraficosLine } from "../../interfaces/IGraficosLine";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: "Chart.js Line Chart - Multi Axis",
    },
  },
  scales: {
    y: {
      type: "linear" as const,
      display: true,
      position: "left" as const,
    },
    y1: {
      type: "linear" as const,
      display: true,
      position: "right" as const,
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

export function MultiAxis(props: IGraficosLine) {
  const { dataInicio, dataFim } = props;

  const dataInicioObj = new Date(dataInicio);
  const dataFimObj = new Date(dataFim);

  const labels = [];
  const currentDate = new Date(dataInicioObj);

  while (currentDate <= dataFimObj) {
    const month = currentDate.toLocaleString('default', { month: 'long' });
    labels.push(month);
    currentDate.setMonth(currentDate.getMonth() + 1);
  }

  const colunas = [
    {
      posts: {
        total: "12",
      },
      acessos_organicos: {
        total: "270",
      },
      conversao: {
        total: "50",
      },
    }
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Posts",
        data: colunas.map((coluna) => coluna.posts.total),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "y",
      },
      {
        label: "Acessos Orgânicos",
        data: colunas.map((coluna) => coluna.acessos_organicos.total),
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgb(75, 192, 192)",
        yAxisID: "y1",
      },
      {
        label: "Conversão",
        data: colunas.map((coluna) => coluna.conversao.total),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgb(53, 162, 235)",
        yAxisID: "y1",
      },
    ],
  };

  return <Line options={options} data={data} />;
}

