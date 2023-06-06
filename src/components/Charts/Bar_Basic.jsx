import React from "react";
import Chart from "react-apexcharts";

//  const series = [44, 55, 41, 17, 15];
// const series= [{
//   name: 'Net Profit',
//   data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
// }, {
//   name: 'Revenue',
//   data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
// }, {
//   name: 'Free Cash Flow',
//   data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
// }];

 const options = {
    chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },
  yaxis: {
    title: {
      text: '$ (thousands)'
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands"
      }
    }
  }
  };

 export default function Bar_({series}) {
 return (
  <div>
  <Chart options={options} series={series} type="bar" height={300}  width={500}/>
  </div>
 );
 }