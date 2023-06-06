import React from "react";
import Chart from "react-apexcharts";

 const options = {
 chart: {
 type: "donut"
 },
 colors: [  '#C0392B', '#E74C3C', '#9B59B6',
            '#8E44AD', '#2980B9', '#3498DB',
            '#1ABC9C', '#16A085', '#27AE60'
        ],
 labels : [],
 tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands"
      }
    }
  }
 };

 export default function PieDonut({series,L}) {
    // options.labels = labels
    // options.labels = [];
    options.labels = L;
 return (
  <div>
  <Chart options={options} series={series} type="donut" height={300} />
  </div>
 );
 }