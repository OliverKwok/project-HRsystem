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
  const [inputDataMale, setInputDataMale] = useState<any>();
  const [inputDataFemale, setInputDataFemale] = useState<any>();

  const data = {
    labels,
    datasets: [
      {
        label: "Male",
        data: inputDataMale,
        backgroundColor: "#006d77",
      },
      {
        label: "Female",
        data: inputDataFemale,
        backgroundColor: "rgba(255, 99, 132)",
      },
    ],
  };

  useEffect(() => {
    const requestOptions = {
      method: "Get",
    };
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/data/yearServiceFemale`,
      requestOptions
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setInputDataFemale(data);
      });

    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/data/yearServiceMale`,
      requestOptions
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setInputDataMale(data);
      });
  }, []);

  return <Bar options={options} data={data} />;
}
