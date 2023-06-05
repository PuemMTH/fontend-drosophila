import React from "react";
import Chart from "react-apexcharts";

//  const series = [44, 55, 41, 17, 15
 const options = {
 chart: {
 type: "donut"
 },
//  labels: ['Apple', 'Mango', 'Orange', 'Watermelon',"dss"]
labels : []
 };

 export default function PieDonut({series,L}) {
    // options.labels = labels
    options.labels = L;
 return (
  <div>
  <Chart options={options} series={series} type="donut" height={300} />
  </div>
 );
 }