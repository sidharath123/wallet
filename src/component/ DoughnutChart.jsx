import React from "react";

import './DoughnutChart.css'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  
 
  ResponsiveContainer,
} from 'recharts';
export default function DoughnutChart() {
 
  const data = [
    {
      name: '0',
      amount: '39',
      uv: 10,
      pv: 2400,
      amt: 2400,
    },
    {
      name: '10',
      uv: 20,
      pv: 1398,
      amt: 2210,
    },
    {
      name: '20',
      uv: 30,
      pv: 9800,
      amt: 2290,
    },
    {
      name: '30',
      uv: 40,
      pv: 3908,
      amt: 2000,
    },
    {
      name: '40',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: '50',
      uv: 2390,
      pv: 3800,
      amt: 200,
    },
    {
      name: '60',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  

  return (
    <div>
      {/* <div
        className="daily-weekly-monthly-container"
        style={{
          backgroundColor: "none",
          display: "flex",
          flexDirection: "row",
          margin: "22px",
          padding: "10px",
          gap: "10px",
          justifyContent: "right",
          color: "#FFFFFF",
          fontSize: "15px",
        }}
      >
        <div className="daily">Daily</div>
        <div className="weekly">Weekly</div>
        <div className="monthly">Monthly</div>
      </div> */}
      <div className="chart-Container">
      <ResponsiveContainer width="100%" height={400}>
          <LineChart
            width={900}
            height={900}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis dataKey="amount" />
            <Tooltip />
            <Line type="monotone" dataKey="name" stroke="#82ca9d" fill="#82ca9d" />
            
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
