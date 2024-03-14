/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import data from "../data.json";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Label,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import "../App.css"

export default function ChartDisplay() {
  const [colors, setColors] = useState([])

  function makeColorsArray() {
    const now = new Date()
    // day of the week is returned Sunday to Saturday, index 0 to 6
    const day = now.getDay()
    let colorsArray = []
    for (let i = 0; i < data.length; i++) {
      if (i != parseInt(day)) {
        colorsArray.push("var(--soft-red)")
      } else {
        colorsArray.push("var(--cyan)")
      }
    }
    // Make the array Monday to Sunday
    let firstElement = colorsArray.shift()
    colorsArray.push(firstElement)
    setColors(colorsArray)
  }  
 

  useEffect(() => {
   makeColorsArray()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`$${payload[0].value}`}</p>        
        </div>
      );
    }  
    return null;
  };

  
  return (
    <div className="chart-container">
      <h1>Spending - last 7 days</h1>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >         
          <XAxis dataKey="day" />         
          <Tooltip 
            cursor={false}          
            position={{ y: 90 }}
            offset={-29}
            content={<CustomTooltip active={onmouseover} payload="amount"/>}
          />        
          <Bar dataKey="amount">
            {
              data.map((entry, index) => (
                <Cell key={`cell-$(index)`} fill={colors[index]}/>
              ))
            }
          </Bar>
        </BarChart>
      </ResponsiveContainer>    
    </div>
  );
}
