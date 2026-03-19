import React from "react";

function Balance({ balance }) {
  // Determine the class based on the balance value
  const balanceClass =
    balance < 0 ? "balance-text negative" : "balance-text positive";

  return (
    <div className="balance-container">
      <h2 className="balance-text">
        Balance: <span className={balanceClass}>R{balance.toFixed(2)}</span>
      </h2>
    </div>
  );
}

export default Balance;
