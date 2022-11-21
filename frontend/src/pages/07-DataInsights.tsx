import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
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
  const [userDataJson, setUserDataJson] = useState({
    labels: userData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: userData.map((data) => data.userGain),
      },
    ],
  });

  return (
    <>
      <div>
        <Barchart chartData={userData} />
      </div>
    </>
  );
};

export default DataInsights;
