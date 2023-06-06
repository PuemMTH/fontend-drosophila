import React from 'react'
import { useNavigate } from 'react-router-dom'
import PieDonut from '../../components/Charts/PieDonut'
import Bar from '../../components/Charts/Bar_Basic'
import Line_ from '../../components/Charts/Line_Chart';
import Scatter_Charts from '../../components/Charts/Scatter_Charts';
function Charts_pages() {
    const series= [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        labels: ['Feb 1', 'Ma 1', 'Apr 1', 'May 1', 'Jun 1', 'Jul 1', 'Aug 1', 'Sep 1', 'Oct 1']
      }, {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        labels: ['Feb 2', 'Mar 2', 'Apr 2', 'May 2', 'Jun 2', 'Jul 2', 'Aug 2', 'Sep 2', 'Oct 2']
      }, {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
        labels: ['Feb 3', 'Mar 3', 'Apr 3', 'May 3', 'Jun 3', 'Jul 3', 'Aug 3', 'Sep 3', 'Oct 3']
      }];

    const navigate = useNavigate()
    return (
        <div class="grid justify-items-center">
            <h1>hello this page is Dasbord</h1>
            <div class="grid justify-items-center">
                <div class="flex">
                    <div class="p-8 rounded overflow-hidden shadow-lg ">
                        <h1>{series[0].name}</h1>
                        <PieDonut series = {series[0].data} L = {series[0].labels}/>           
                    </div>
                    <div class="p-8 rounded overflow-hidden shadow-lg ">
                        <h1>{series[1].name}</h1>
                        <PieDonut series = {series[1].data} L = {series[1].labels}/>           
                    </div>
                    <div class="p-8 rounded overflow-hidden shadow-lg ">
                        <h1>{series[2].name}</h1>
                        <PieDonut series = {series[2].data} L = {series[2].labels}/>           
                    </div>
                </div>
                
                
                <div class="flex" >
                    <div class=" p-8 rounded overflow-hidden shadow-lg">
                        <Bar series = {series}/>                  
                    </div>
                    <div class=" p-8 rounded overflow-hidden shadow-lg">      
                        <Line_ series = {series}/>     
                    </div>
                </div>
                {/* <div class=" p-8 rounded overflow-hidden shadow-lg">      
                        <Scatter_Charts series = {series}/>     
                </div> */}
            </div>
        </div>
    )
  }
  

export default Charts_pages
