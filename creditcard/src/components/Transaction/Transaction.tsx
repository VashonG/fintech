// src/components/Transaction/Transaction.tsx

import React, { useEffect, useState } from 'react';
import { fetchTransactions } from '../../api/transactions';
import TransactionList from './TransactionList';

// Define a type for a transaction
type Transaction = {
  id: string;
  amount: number;
  date: string;
  // Add other fields as needed
};

// Define a type for the error
type FetchError = {
  message: string;
};

const Transaction: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<FetchError | null>(null);

  useEffect(() => {
    const getTransactions = async () => {
      try {
        const data = await fetchTransactions();
        setTransactions(data);
      } catch (error) {
        setError(error as FetchError);
      } finally {
        setLoading(false);
      }
    };

    getTransactions();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <TransactionList transactions={transactions} />;
};

export default Transaction;
