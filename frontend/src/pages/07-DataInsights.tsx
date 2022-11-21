import React, { useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
// import Barchart from "../components/07-Barchart";
import userData from "../jsonFiles/DataInsights.json";
// type DataSetType = {
//   label: String;
//   data: Number[];
// };

// type UserDataType = {
//   labels: Number[];
//   datasets: DataSetType[];
// };

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: ["3", "2", "1", "3", "2", "1", "3"],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: ["1", "2", "3", "1", "2", "3", "100"],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const DataInsights = () => {
  const [userDataChart, setUserDataJson] = useState({
    labels: userData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: userData.map((data) => data.userGain),
        // backgroundColor: [
        //   "rgba(75,192,192,1)",
        //   "#ecf0f1",
        //   "#50AF95",
        //   "#f3ba2f",
        //   "#2a71d0",
        // ],
        // borderColor: "black",
        // borderWidth: 2,
      },
    ],
  });

  return (
    <div>
      {/* <Barchart chartData={userDataChart} /> */}
      <h1>hihi</h1>
      <Bar options={options} data={data} />
    </div>
  );
};

export default DataInsights;
