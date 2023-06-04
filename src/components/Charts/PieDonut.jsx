import React from "react";
import Chart from "react-apexcharts";

 const series = [44, 55, 41, 17, 15];
 const options = {
 chart: {
 type: "donut"
 }
 };

 export default function PieDonut() {
 return (
  <div>
  <Chart options={options} series={series} type="donut" height={300} />
  </div>
 );
 }