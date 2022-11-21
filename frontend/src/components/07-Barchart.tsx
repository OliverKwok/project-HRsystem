import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function Barchart({ chartData }: { chartData: any }) {
  return <Bar data={chartData} />;
}

export default Barchart;
