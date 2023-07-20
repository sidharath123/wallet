import React from "react";
import "./LiveBets.css";
import { Select } from 'antd';
import actImage from './Images/act.jpg'
import gvtImage from './Images/gvt.jpg'
import Activity from "./Activity";
export default function LiveBets() {
  const { Option } = Select;
    const data =[1,2,4,5,6,7,8,9].map((curElm)=>{
      return (
        {
          Chain: <span ><img src={actImage} alt="" /><span style={{paddingLeft:"20px"}}>polygon</span> </span> ,
          User: "nsdbsm..",
          Pool: "Total Pool",
          DateTime: "3.10/ $3.00",
          Currency: <span ><img src={gvtImage} alt="" /><span style={{paddingLeft:"20px"}}>USDT</span> </span>,
          // Currency:"USDT",
          Volume:"3.10/ $3.00",
          Profit: "20.76%",
        }
    
      )
    })
        

  return (
    <div>
     
<div className="liveBets-Daily-Container">
         <div className="contribution-liveBets-daily">
        <div className="contribution-text">Contribution</div>
        <div className="liveBets">Live-Bets</div>
        <div className="daily">

        <Select defaultValue="Daily" style={{ width: 100 }} >
            <Option value="Daily">Daily</Option>
            <Option value="Weekly">Weekly</Option>
            <Option value="Monthly">Monthly</Option>
            </Select>

        </div>
        </div>

        
          <table style={{margin:'auto', width:'90%'}} class="table table-dark ">
            <thead>
              <tr>
                <th>Chain</th>
                <th>User</th>
                <th>Pool</th>
                <th>DateTime</th>
                <th>Currency</th>
                <th>Volume</th>
                <th>Profit</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.Chain}</td>
                  <td>{item.User}</td>
                  <td>{item.Pool}</td>
                  <td>{item.DateTime}</td>
                  <td>{item.Currency}</td>
                  <td>{item.Volume}</td>
                  <td style={{ color: "#03AC00" }}>{item.Profit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        
      </div>
      <Activity />
    </div>


  );
}
