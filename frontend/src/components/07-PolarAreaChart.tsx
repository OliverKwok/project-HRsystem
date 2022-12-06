import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export default function PolarAreaChart() {
  const [inputData, setInputData] = useState<any>();
  const [inputName, setInputName] = useState<any>();

  const data = {
    labels: inputName,
    // labels: ["Marketing", "Finance", "Management", "Human Resources", "Sale"],
    datasets: [
      {
        label: "Cost of Department",
        data: inputData,
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    const requestOptions = {
      method: "Get",
    };
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/data/departmentName`,
      requestOptions
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setInputName(data);
      });
  }, []);

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

  return <PolarArea data={data} />;
}
