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
    datasets: [
      {
        label: "Cost of Department",
        data: inputData,
        backgroundColor: [
          "#0affc2",
          "#00ccf5",
          "#ff7700",
          "#f50076",
          "#ffcf00",
          "#52a1a3",
        ],
        borderWidth: 0,
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
