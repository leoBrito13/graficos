import React from "react";
import "./index.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Posts/Conversão",
    },
  },
};

const VerticalBar = (coluna:{ [key: string]: string }) => {

    const colunas = [
        {
          "Janeiro 2023": "3",
          "Fevereiro 2023": "2",
          "Março 2023": "4",
          "Abril 2023": "4",
          "Maio 2023": "6",
          "Junho 2023": "3",
          "Julho 2023": "2",
          "Agosto 2023": "15",
          "Setembro 2023": "9",
        },
    ];
    const labels = Object.keys(colunas[0])
    const data = {
        labels,
        datasets: [
          {
            label: "Posts",
            data: Object.values(colunas[0]),
            backgroundColor: "#FF6384",
          },
          // {
          //   label: "Conversão",
          //   data: colunas.map((obj) => obj.conversao),
          //   backgroundColor: "#36A2EB",
          // },
        ],
      };

  return <Bar className="grafico_verticalbar" options={options} data={data} />;
};

export default VerticalBar;
