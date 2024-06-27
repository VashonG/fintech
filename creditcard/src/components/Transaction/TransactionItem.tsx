// src/components/Transaction/TransactionItem.tsx

import React from 'react';

// Use the Transaction type defined earlier
type Transaction = {
  id: string;
  amount: number;
  date: string;
  // Add other fields as needed
};

const TransactionItem: React.FC<{ transaction: Transaction }> = ({ transaction }) => {
  return (
    <div>
      <p>ID: {transaction.id}</p>
      <p>Amount: {transaction.amount}</p>
      <p>Date: {transaction.date}</p>
      {/* Add other transaction details as needed */}
    </div>
  );
};

export default TransactionItem;
