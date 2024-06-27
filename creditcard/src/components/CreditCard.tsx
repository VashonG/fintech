import React from 'react';
import { CreditCardProps } from '../types';

const CreditCard: React.FC<CreditCardProps> = ({ cardType, cardHolder, lastFourDigits }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <button onClick={handleFlip} className="flex flex-col p-6 mx-auto w-full bg-white rounded-3xl border border-gray-100 border-solid max-md:px-5 max-md:mt-5">
      <div className="flex gap-5 justify-between">
        <div className="flex flex-col">
          <div className="text-sm font-medium leading-5 text-neutral-800">Credit Card</div>
          <div className="mt-1 text-sm leading-4 text-gray-400">{cardType}</div>
        </div>
        <div className="flex justify-center items-center self-start px-4 py-2.5 bg-white rounded-3xl border border-gray-200 border-solid">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4545a2e6a135b07893d156f671dd3dac1c02d985878921710fef431f7575658?apiKey=7af9928ea6dc42048f177c3a80bef1c3&"
            className="w-5 aspect-square"
            alt=""
          />
        </div>
      </div>
      <div className={`flex flex-col pt-5 pr-2.5 pb-12 pl-8 mt-6 w-full bg-orange-50 rounded-xl shadow-sm max-md:pl-5 transition-transform duration-300 ${isFlipped ? "rotate-y-180" : ""}`}>
        {!isFlipped ? (
          <>
            <div className="flex gap-5 justify-between items-start">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/190aef7e40f59aed2e6adc7d2cf5f1acd34d8972e1e54e1f88a8d46146b8b3e2?apiKey=7af9928ea6dc42048f177c3a80bef1c3&"
                className="shrink-0 mt-2.5 w-12 aspect-[1.27]"
                alt=""
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1833e056fe28be0b41e55df6a7405c3810bbf6c9aaeba9df6da35b34fc37aaa5?apiKey=7af9928ea6dc42048f177c3a80bef1c3&"
                className="shrink-0 w-16 aspect-[1.82]"
                alt=""
              />
            </div>
            <div className="mt-4 text-sm text-amber-600">{cardHolder}</div>
            <div className="flex gap-3 justify-between mt-1.5">
              <div className="text-xs tracking-normal leading-5 text-orange-300">● ● ● ● ● ● 1● ● ● ● ● ●</div>
              <div className="text-sm text-center text-amber-600">{lastFourDigits}</div>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-amber-600">Card Details (Back)</div>
          </div>
        )}
      </div>
    </button>
  );
};

export default CreditCard;
