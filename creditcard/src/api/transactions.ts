// src/api/transactions.ts

import axios from 'axios';

const API_URL = 'https://anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/69fcd0c0-e390-49c7-b991-2211db09f586/transactions-fetch-eapi/1.0.0/m/api/transactions '; // Replace with the actual URL from the YAML file

export const fetchTransactions = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    throw error;
  }
};
