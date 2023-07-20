import React from "react";
import "./LeaderBoard.css";

export default function LeaderBoard() {
  const data = [
    {
      Rank: "#1",
      User: "dscsc...",
      Pool: "Total Pool",
      Volume: "3.10/ $23.98",
      Profit: "150%",
    },
    {
      Rank: "#2",
      User: "dscsc...",
      Pool: "Total Pool",
      Volume: "3.10/ $23.98",
      Profit: "150%",
    },
    {
      Rank: "#3",
      User: "dscsc...",
      Pool: "Total Pool",
      Volume: "3.10/ $23.98",
      Profit: "150%",
    },
    {
      Rank: "#4",
      User: "dscsc...",
      Pool: "Total Pool",
      Volume: "3.10/ $23.98",
      Profit: "150%",
    },
    {
      Rank: "#5",
      User: "dscsc...",
      Pool: "Total Pool",
      Volume: "3.10/ $23.98",
      Profit: "150%",
    },
    {
      Rank: "#6",
      User: "dscsc...",
      Pool: "Total Pool",
      Volume: "3.10/ $23.98",
      Profit: "150%",
    },
    {
      Rank: "#7",
      User: "dscsc...",
      Pool: "Total Pool",
      Volume: "3.10/ $23.98",
      Profit: "150%",
    },
    {
      Rank: "#8",
      User: "dscsc...",
      Pool: "Total Pool",
      Volume: "3.10/ $23.98",
      Profit: "150%",
    },
    {
      Rank: "#10",
      User: "dscsc...",
      Pool: "Total Pool",
      Volume: "3.10/ $23.98",
      Profit: "150%",
    },
  ];
  return (
    <div>
      <div className="leader-Board-Container">
        <div className="leader-Board-text">
          <h1>Leader Board</h1>
        </div>
        {/* <div className="table-container">
          <div className="rank-user-pool-volume-profit-header">
            <div className="rank">Rank</div>
            <div className="user">User</div>
            <div className="pool">Pool</div>
            <div className="volume">Volume</div>
            <div className="profit">Profit</div>
          </div>
        </div> */}

        
          <table style={{margin:'auto', width:'90%'}} class="table table-dark ">
            <thead>
              <tr>
                <th>Rank</th>
                <th>User</th>
                <th>Pool</th>
                <th>Volume</th>
                <th>Profit</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.Rank}</td>
                  <td>{item.User}</td>
                  <td>{item.Pool}</td>
                  <td>{item.Volume}</td>
                  <td style={{ color: "#03AC00" }}>{item.Profit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        
      </div>
    </div>
  );
}
