import React from "react";
import "./WalletModel.css";

export default function WalletModel() {
  return (
    <div className="wallet-Container">
      <div className="wallet-top-section">
        <h1>Wallet</h1>
      </div>
      <div className="wallet-top-cross-section">
        <button type="button">X</button>
      </div>
      <div className="deposite-Layout">
        <div className="deposite-text">
          <button type="button"> Deposite</button>
        </div>
      </div>
      <div className="withdraw-Layout">
        <div className="withDraw-text">
          <button type="button"> Withdraw</button>
        </div>
      </div>
       <div className="deposite-Currency">
        <h1>Deposit Currency</h1>
       </div>
       <div className="deposite-Currency-Layout">
       <div className="balance-text">Balance</div>
       <div className="chain-Layout">
        <div className="chain-text">Chain</div>
        <div className="balance-rupees">10,00,000</div>

          <div className="bnb-text">BNB</div>
          <div className="act-text">ACT</div>
          <div className="mona-text">MONA</div>
          <div className="mst-text">MSR</div>
          <div className="msr-text">MSR</div>
          <div className="bnv-text-rupees-section">
            <div className="zero-dollar-text">0.00</div>
            <div className="bnb-dollar-text">BNB</div>
            <div className="usd-text">=0.00 USD</div>
            <div className="total-balance">Total Balance</div>
            <div className="total-balance-text">$345,448.60</div>
            <div className="confirm-layout">
                <div className="confirm-button">Confirm</div>
            </div> 
          </div>

        
       
       </div>
       </div>
       


    </div>
  );
}
