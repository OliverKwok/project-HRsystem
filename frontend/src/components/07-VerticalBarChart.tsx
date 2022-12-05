import React from "react";
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
      display: false,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["<1 year", "1-3 years", "3-5 years", "5-8 years", ">8 years"];

export const data = {
  labels,
  datasets: [
    {
      label: "Male",
      data: [1, 2, 3, 4, 5],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Female",
      data: [5, 4, 3, 2, 1],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export default function VerticalBarChart() {
  return <Bar options={options} data={data} />;
}
