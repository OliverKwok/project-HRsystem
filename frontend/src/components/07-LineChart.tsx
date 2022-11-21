import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  //   CategoryScale,
  //   LinearScale,
  //   BarElement,
  //   Title,
  //   Tooltip,
  //   Legend,
} from "chart.js/auto";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

function LineChart({ chartData }: { chartData: any }) {
  return <Line data={chartData} />;
}

export default LineChart;
