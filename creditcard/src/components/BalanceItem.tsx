import React from 'react';
import { BalanceItemProps } from '../types';

const BalanceItem: React.FC<BalanceItemProps> = ({ label, amount, cents }) => (
  <div className="flex gap-5 justify-between">
    <div className="my-auto text-sm font-medium leading-5 text-neutral-800">
      {label}
    </div>
    <div className="text-base font-semibold leading-6 text-right text-gray-300">
      {amount}
      {cents && <span className="text-gray-300">{cents}</span>}
    </div>
  </div>
);

export default BalanceItem;
