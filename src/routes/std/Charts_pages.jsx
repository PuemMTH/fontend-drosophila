import React from 'react'
import { useNavigate } from 'react-router-dom'
import PieDonut from '../../components/Charts/PieDonut'
import Bar from '../../components/Charts/Bar_Basic'
function Charts_pages() {
    const series= [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        labels: ['A1', 'B1', 'C1', 'D1',"E1", "F1", "G1","H1", "I1"]
      }, {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        labels: ['A2', 'B2', 'C2', 'D2',"E2", "F2", "G2","H2", "I2"]
      }, {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
        labels: ['A3', 'B3', 'C3', 'D3',"E3", "F3", "G3","H3", "I3"]
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
                
                
                <div class=" p-8 rounded overflow-hidden shadow-lg">
                    <Bar series = {series}/>           
                </div>
            </div>
        </div>
    )
  }
  

export default Charts_pages
