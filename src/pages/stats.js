import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Date", "Current Month", "Past Month"],
  ["1", 100, 400],
  ["", 500, 560],
  ["7", 700, 1000],
  ["", 1030, 540],
  ["14", 902, 240],
  ["", 2000, 560],
  ["21", 1700, 1000],
  ["", 902, 240],
  ["28", 2000, 560],
];

export const options = {
  title: "",
  hAxis: { title: "", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 0 },
  chartArea: { width: "70%", height: "80%" },
  backgroundColor: "#f1f1f1"
};

function StatChart() {
  return (
    <Chart
      chartType="AreaChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
export default StatChart;
