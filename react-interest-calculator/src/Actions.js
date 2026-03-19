import React from "react";
import { useState } from "react";

function Actions({ deposit, withdraw, interest, fees }) {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [rate, setRate] = useState("");
  const [interestType, setInterestType] = useState("fixed");
  const [fee, setFee] = useState("");
  const [feeType, setFeeType] = useState("fixed");

  // handle input
  const userInput = (e, setter) => {
    setter(e.target.value);
  };

  // To validate and ensure input fields are not empty
  const isValidInput = (value) => {
    return value !== "" && !isNaN(parseFloat(value)) && parseFloat(value) > 0;
  };

  return (
    <div className="container-1">
      {/* Deposit money */}
      <div className="container-2">
        <input
          type="number"
          placeholder="Deposit Amount"
          value={depositAmount}
          onChange={(e) => userInput(e, setDepositAmount)}
          className="form"
        />
        <button
          className="btn btn-primary"
          onClick={() => {
            if (isValidInput(depositAmount)) {
              deposit(depositAmount);
              setDepositAmount(""); // Clear input after action
            } else {
              alert("Please enter a valid deposit amount!");
            }
          }}
        >
          Deposit
        </button>
      </div>

      {/* Withdraw money */}
      <div className="container-2">
        <input
          type="number"
          placeholder="Withdraw Amount"
          value={withdrawAmount}
          onChange={(e) => userInput(e, setWithdrawAmount)}
          className="form"
        />
        <button
          className="btn btn-danger"
          onClick={() => {
            if (isValidInput(withdrawAmount)) {
              withdraw(withdrawAmount);
              setWithdrawAmount(""); // Clear input after action
            } else {
              alert("Please enter a valid withdrawal amount!");
            }
          }}
        >
          Withdraw
        </button>
      </div>

      {/* Add interest */}
      <div className="container-2">
        <input
          type="number"
          placeholder="Interest Rate (%)"
          value={rate}
          onChange={(e) => userInput(e, setRate)}
          className="form"
        />
        <select
          value={interestType}
          onChange={(e) => setInterestType(e.target.value)}
          className="form"
        >
          <option value="" disabled selected>
            Select an option
          </option>
          <option value="fixed">Fixed Amount</option>
          <option value="percentage">Percentage of Balance</option>
        </select>
        <button
          className="btn btn-success"
          onClick={() => {
            if (isValidInput(rate)) {
              interest(rate);
              setRate(""); // Clear input after action
            } else {
              alert("Please enter a valid interest rate!");
            }
          }}
        >
          Add Interest
        </button>
      </div>

      {/* Charge fees */}
      <div className="container-2">
        <input
          type="number"
          placeholder="Fee"
          value={fee}
          onChange={(e) => userInput(e, setFee)}
          className="form"
        />
        <select
          value={feeType}
          onChange={(e) => setFeeType(e.target.value)}
          className="form"
        >
          <option value="" disabled selected>
            Select an option
          </option>
          <option value="fixed">Fixed Amount</option>
          <option value="percentage">Percentage of Balance</option>
        </select>
        <button
          className="btn btn-warning"
          onClick={() => {
            if (isValidInput(fee)) {
              fees(fee, feeType);
              setFee(""); // Clear input after action
            } else {
              alert("Please enter a valid fee amount!");
            }
          }}
        >
          Charge Fees
        </button>
      </div>
    </div>
  );
}

export default Actions;
