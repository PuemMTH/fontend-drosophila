import React from 'react'
import { useNavigate } from 'react-router-dom'
import PieDonut from '../../components/Charts/PieDonut'

function Charts_pages() {
    const navigate = useNavigate()
    return (
        <div>
            <h1>hello</h1>
            <div>
                <PieDonut/> 
                   
            </div>
        </div>
    )
  }
  

export default Charts_pages
