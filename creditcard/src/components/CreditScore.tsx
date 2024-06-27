import React from 'react';
import { CreditScoreProps } from '../types';

const CreditScore: React.FC<CreditScoreProps> = ({ score, rating }) => (
  <div className="flex flex-col p-6 mt-5 w-full bg-white rounded-3xl border border-gray-100 border-solid max-md:px-5">
    <div className="flex gap-2 justify-between w-full text-sm leading-5">
      <div className="flex gap-1 font-medium">
        <div className="text-neutral-800">Credit Score</div>
        <div className="justify-center px-1.5 text-green-500 whitespace-nowrap bg-emerald-50 rounded-md">
          {rating}
        </div>
      </div>
      <div className="font-semibold text-right text-green-400">{score}</div>
    </div>
    <div className="flex gap-0.5 mt-6">
      <div className="shrink-0 w-32 h-2 bg-red-500 rounded" />
      <div className="flex-1 shrink-0 h-2 bg-orange-500" />
      <div className="flex-1 shrink-0 h-2 bg-orange-400" />
      <div className="flex flex-col flex-1 justify-center px-6 bg-green-400 rounded-none max-md:px-5">
        <div className="shrink-0 h-2 bg-white rounded-full border-green-400 border-solid border-[5px] stroke-[5px]" />
      </div>
    </div>
  </div>
);

export default CreditScore;
