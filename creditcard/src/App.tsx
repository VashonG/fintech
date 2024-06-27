import React from 'react';
import TopPanel from './components/TopPanel';
import Transaction from './components/Transaction/Transaction';

const App: React.FC = () => {
  const handleBalanceClick = () => {
    console.log('Balance clicked');
  };

  return (
    <div className="App">
      <TopPanel onBalanceClick={handleBalanceClick} />
      <Transaction />
    </div>
  );
};

export default App;
