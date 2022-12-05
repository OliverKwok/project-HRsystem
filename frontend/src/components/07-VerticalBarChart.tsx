import React, { useEffect, useState } from "react";
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

export default function VerticalBarChart() {
  const [inputData, setInputData] = useState<any>();

  const data = {
    labels,
    datasets: [
      {
        label: "Male",
        data: [1, 3, 2, 6, 4],
        // data: inputData.maleArr ? inputData.maleArr : [0, 0, 0, 6, 4],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Female",
        data: [4, 5, 7, 1, 1],
        // data: inputData.femaleArr ? inputData.femaleArr : [0, 6, 6, 1, 0],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  useEffect(() => {
    const requestOptions = {
      method: "Get",
    };
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/data/yearService`,
      requestOptions
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setInputData(data);
      });
  }, []);

  return <Bar options={options} data={data} />;
}
