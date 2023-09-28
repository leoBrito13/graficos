import React from 'react';
import "./index.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Balanço',
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

const colunas = [
  {
    "vendas":230,
    "locacao": 150,
    "lancamentos": 200
  },
  {
    "vendas":530,
    "locacao": 350,
    "lancamentos": 250
  },
]
const labels = ['Janeiro', 'Fevereiro'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Vendas',
      data: colunas.map(obj => obj.vendas),
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Locação',
      data: colunas.map(obj => obj.locacao),
      backgroundColor: 'rgb(75, 192, 192)',
    },
    {
      label: 'Lançamentos',
      data: colunas.map(obj => obj.lancamentos),
      backgroundColor: 'rgb(53, 162, 235)',
    },
  ],
};

function StakedBar() {
  return <Bar className='grafico_stakedbar' options={options} data={data} />;
}

export default StakedBar;