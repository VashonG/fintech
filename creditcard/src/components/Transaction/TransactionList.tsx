// src/components/Transaction/TransactionList.tsx

import React from 'react';
import TransactionItem from './TransactionItem';

// Use the Transaction type defined earlier
type Transaction = {
  id: string;
  amount: number;
  date: string;
  // Add other fields as needed
};

const TransactionList: React.FC<{ transactions: Transaction[] }> = ({ transactions }) => {
  return (
    <div>
      {transactions.map((transaction) => (
        <TransactionItem key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
};

export default TransactionList;
