import React from "react";
import Chart from "react-apexcharts";

 const options = {
   
    chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight',
    colors: ['#77B6EA', '#545454', '#000']
  },
  title: {
    text: 'Product Trends by Month',
    align: 'left'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], 
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },
  colors: ['#77B6EA', '#545454', '#000'],
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands"
      }
    }
  }
  };
 export default function Line_Chart({series}) {
    return (
        <div>
        <Chart options={options} series={series} type="line" height={300} width={500}/>
        </div>
    );
 }