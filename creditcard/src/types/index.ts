export type Card = {
    cardType: string;
    cardHolder: string;
    lastFourDigits: string;
  };
  
  export type BalanceItemProps = {
    label: string;
    amount: string;
    cents?: string;
  };
  
  export type CreditScoreProps = {
    score: number;
    rating: string;
  };
  
  export type CreditCardProps = {
    cardType: string;
    cardHolder: string;
    lastFourDigits: string;
  };
  
  export type TopPanelProps = {
    onBalanceClick: () => void;
  };
  