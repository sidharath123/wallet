import React from "react";
import "./PoolInfo.css";
import RedImg from "./Images/Red.png";
import YellowImg from "./Images/yellow.png";
import GreenImg from "./Images/green.png";
import DoughnutChart from "./ DoughnutChart";
export default function PoolInfo() {
  return (
    <div>
      <h1>this is pool info section</h1>
      <div className="info-container">
        <div className="casino-text">
          <h1>casino</h1>
        </div>
        <div className="pool-Info-text">
          <h2>Pool Info</h2>
        </div>
        <div className="pool-Volume-text">
          <h2>Pool Volume</h2>
        </div>
        <div className="pool-info-container"></div>
        <div className="pool-volume-container">
          <div className="daily-weekly-monthly-container">
            <div className="daily">Daily</div>
            <div className="weekly">Weekly</div>
            <div className="monthly">Monthly</div>
          </div>

          <DoughnutChart />
        </div>
        <div className="chart-red"></div>
        <div className="chart-yellow"></div>
        <div className="chart-green"></div>
        <div className="red-circle-image">
          <img src={RedImg} alt="RedImage" />
        </div>
        <div className="yellow-circle-image">
          <img src={YellowImg} alt="yellowImage" />
        </div>
        <div className="green-circle-image">
          <img src={GreenImg} alt="greenImage" />
        </div>
        <div className="total-platform-size-text">Total Platform Size</div>
        <div className="ownership-in-casino-text">Ownership in Casino</div>
        <div className="betting-contribution-text">Betting Contribution</div>
        <div className="total-dollar">$ 373,272.5</div>
        <div className="ownership-dollar">$ 0.00</div>
        <div className="betting-contribution">$ 0.00</div>
        <div className="total-percentage">+23.76%</div>
        <div className="ownership-percentage">+23.76%</div>
        <div className="batting-percentage">+23.76%</div>
        <div className="total-bet-placed-text">Total Bet Placed</div>
        <div className="total-bet-amount-text">Total Bet Amount</div>
        <div className="total-bet-number">324</div>
        <div className="bet-dollar">$324.80</div>
      </div>
    </div>
  );
}
