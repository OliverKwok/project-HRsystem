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

export default function StackBarChart() {
  const [inputData, setInputData] = useState<any>();
  // const [inputName, setInputName] = useState<any>();

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Turnove by Department",
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

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [1, 2, 3, 4, 5, 6, 7],
        backgroundColor: "rgb(255, 99, 132)",
      },
      {
        label: "Dataset 2",
        data: [1, 1, 3, 6, 3, 2, 1],
        backgroundColor: "rgb(75, 192, 192)",
      },
      {
        label: "Dataset 3",
        data: [5, 1, 2, 1, 2, 4, 2],
        backgroundColor: "rgb(53, 162, 235)",
      },
    ],
  };

  useEffect(() => {
    const requestOptions = {
      method: "Get",
    };
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/data/departmentCost`,
      requestOptions
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setInputData(data);
      });
  }, []);

  return <Bar options={options} data={data} />;
}
