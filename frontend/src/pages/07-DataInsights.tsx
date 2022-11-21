import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
// import Barchart from "../components/07-Barchart";
import userData from "../jsonFiles/DataInsights.json";

const DataInsights = () => {
  // const [{ userData }, setUserData] = useState<any>({
  //   labels: userData.map((data: any) => data.year),
  //   datasets: [
  //     {
  //       label: "Users Gained",
  //       data: userData.map((data: any) => data.userGain),
  //     },
  //   ],
  // });

  return (
    <>
      <div>{/* <Barchart chartData={userData} /> */}</div>;
    </>
  );
};

export default DataInsights;
