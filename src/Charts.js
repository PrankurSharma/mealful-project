import React from 'react';
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

function Charts({ ctrObj }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart Representing No. of reservations for the Given Date',
      },
    },
  };
    const labels = Object.keys(ctrObj);
    const data = {
    labels,
    datasets: [
        {
        label: 'No. of reservations',
        data: Object.values(ctrObj),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
    ],
    };
  return <Bar options={options} data={data} />;
}


export default Charts;