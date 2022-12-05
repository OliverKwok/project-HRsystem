import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart() {
  const [inputData, setInputData] = useState<any>();

  const data = {
    labels: [
      "contract",
      "perm",
      "probation",
      "resigned",
      "retired",
      "terminated",
    ],
    datasets: [
      {
        label: "Job Status of Employees",
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
        data: inputData,
      },
    ],
  };

  useEffect(() => {
    const requestOptions = {
      method: "Get",
    };
    fetch(`${process.env.REACT_APP_BACKEND_URL}/data/JobStatus`, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setInputData(data);
      });
  }, []);

  return (
    <>
      <Doughnut data={data} />
    </>
  );
}
