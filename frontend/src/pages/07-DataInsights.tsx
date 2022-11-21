import React, { useState } from "react";
// import { Bar } from "react-chartjs-2";
import Barchart from "../components/07-Barchart";
import userData from "../jsonFiles/DataInsights.json";

// type DataSetType = {
//   label: String;
//   data: Number[];
// };

// type UserDataType = {
//   labels: Number[];
//   datasets: DataSetType[];
// };

const DataInsights = () => {
  const [userDataChart, setUserDataJson] = useState({
    labels: userData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: userData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div>
      <Barchart chartData={userDataChart} />
    </div>
  );
};

export default DataInsights;
