import React from "react";
import "./App.css";
import { useState } from "react";
import Balance from "./Balance";
import Actions from "./Actions";

// function to  set the bank balance
function App() {
  const [balance, setBalance] = useState(0);

  // function to deposit money
  const handleDeposit = (amount) => {
    const deposit = parseFloat(amount);
    if (!isNaN(deposit) && deposit > 0) {
      setBalance(balance + deposit);
    }
  };

  //  function to withdraw money
  const handleWithdraw = (amount) => {
    const withdraw = parseFloat(amount);
    if (!isNaN(withdraw) && withdraw > 0) {
      setBalance(balance - withdraw);
    }
  };

  // function to add interest
  const handleInterest = (rate) => {
    const interest = parseFloat(rate);
    if (!isNaN(interest) && interest > 0) {
      setBalance((balance) => balance + (balance * interest) / 100);
    }
  };

  //function to charge fees
  const handleFees = (feeAmount, feeType) => {
    const fee = parseFloat(feeAmount);
    if (!isNaN(fee) && fee > 0) {
      setBalance((balance) => balance - fee);
    } else if (feeType === "percentage") {
      setBalance((balance) => balance - (balance * fee) / 100);
    }
  };

  return (
    <div>
      <h1>Banking App</h1>
      <Balance balance={balance} />
      <Actions
        deposit={handleDeposit}
        withdraw={handleWithdraw}
        interest={handleInterest}
        fees={handleFees}
      />
      {balance < 0 && (
        <div className="Alert">
          <h2>
            <span className="alert-text">Alert : </span>
            <span className="balance-text">Your balance is negative.</span>
          </h2>
        </div>
      )}
    </div>
  );
}

export default App;
