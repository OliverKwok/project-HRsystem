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
        text: "Year 2022",
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
        label: "Marketing",
        data: [1, 2, 3, 4, 5, 6, 7],
        backgroundColor: "#06d6a0",
      },
      {
        label: "Finance",
        data: [1, 1, 3, 6, 3, 2, 1],
        backgroundColor: "#1b9aaa",
      },
      {
        label: "Management",
        data: [5, 1, 2, 1, 2, 4, 2],
        backgroundColor: "#ef476f",
      },
      {
        label: "Human Resources",
        data: [1, 2, 1, 2, 4, 2, 5],
        backgroundColor: "#ffc43d",
      },
      {
        label: "Sales",
        data: [2, 1, 2, 4, 2, 3, 2],
        backgroundColor: "#1d4e89",
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
