import React from "react";
import Chart from "react-apexcharts";

 const options = {
    options: {
      chart: {
        height: 350,
        type: 'scatter',
        zoom: {
          enabled: true,
          type: 'xy'
        }
      },
      xaxis: {
        tickAmount: 10,
        labels: {
          formatter: function(val) {
            return parseFloat(val).toFixed(1)
          }
        }
      },
      yaxis: {
        tickAmount: 7
      }
    },
  
  
  };
 export default function Scatter_Charts({series}) {
 return (
  <div>
  <Chart options={options} series={series} type="donut" height={300} />
  </div>
 );
 }