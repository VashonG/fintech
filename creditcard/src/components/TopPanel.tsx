import React, { useEffect, useState } from 'react';
import BalanceItem from './BalanceItem';
import CreditCard from './CreditCard';
import CreditScore from './CreditScore';
import { fetchCards, Card } from '../api/cards';
import { TopPanelProps } from '../types';

const TopPanel: React.FC<TopPanelProps> = ({ onBalanceClick }) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCards = async () => {
        try {
            const fetchedCards = await fetchCards();
            setCards(fetchedCards);
            setLoading(false);
          } catch (err) {
            setError('Failed to load cards');
            setLoading(false);
          }
        };
    
        loadCards();
      }, []);
    
      return (
        <main className="flex gap-5 max-md:flex-col max-md:gap-0">
          <section className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-5">
              <div className="flex flex-col p-6 w-full bg-white rounded-3xl border border-gray-100 border-solid max-md:px-5">
                <BalanceItem label="Current Balance" amount="$6,672" cents=".91" />
                <div className="shrink-0 mt-3 h-px bg-gray-100 border border-gray-100 border-solid" />
                <BalanceItem label="Credit Limit" amount="$10,000" cents=".00" />
                <div className="shrink-0 self-end mt-8 h-2 bg-orange-100 rounded-none w-[102px]" />
              </div>
              <CreditScore score={723} rating="Excellent" />
            </div>
          </section>
          <section className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <button
              onClick={onBalanceClick}
              className="flex flex-col grow items-start p-6 mx-auto w-full bg-white rounded-3xl border border-gray-100 border-solid max-md:px-5 max-md:mt-5"
            >
              <h2 className="text-sm font-medium leading-5 text-neutral-800">
                Balance
              </h2>
              <p className="mt-1 text-sm leading-4 text-gray-400">This month</p>
              <div className="flex gap-5 justify-between self-stretch py-0.5 mt-8 text-xs leading-3">
                <div className="flex flex-col text-neutral-800">
                  <div>$1,000</div>
                  <div className="mt-24 max-md:mt-10">$0</div>
                  <div className="flex flex-col items-start pl-11 mt-2.5 max-md:pl-5">
                    <div className="shrink-0 border border-solid bg-zinc-200 border-zinc-200 h-[5px]" />
                    <time className="mt-2.5">Mar 1, 2023</time>
                  </div>
                </div>
                <div className="flex z-10 flex-col self-end mt-5 text-right">
                  <div className="flex gap-2.5">
                    <div className="shrink-0 w-px border border-dashed bg-neutral-400 border-neutral-400 h-[106px]" />
                    <div className="flex gap-5 justify-between px-2 py-1.5 my-auto rounded-lg shadow-sm backdrop-blur-[2px] bg-white bg-opacity-90 max-md:px-5">
                      <time className="text-zinc-600">Mar 17</time>
                      <div className="text-neutral-800">$68</div>
                    </div>
                  </div>
                  <time className="self-end mt-4 text-neutral-800">Mar 31, 2023</time>
                </div>
              </div>
            </button>
          </section>
          <section className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            {loading ? (
              <div>Loading...</div>
            ) : error ? (
              <div>{error}</div>
            ) : (
              cards.map((card, index) => (
                <CreditCard
                  key={index}
                  cardType={card.cardType}
                  cardHolder={card.cardHolder}
                  lastFourDigits={card.lastFourDigits}
                />
              ))
            )}
          </section>
        </main>
      );
    };
    
    export default TopPanel;
    
     
