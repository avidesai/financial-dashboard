import React, { useState } from 'react';
import './TickerSearch.css';

const TickerSearch = ({ addTicker }) => {
  const [ticker, setTicker] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addTicker(ticker);
    setTicker('');
  };

  const handleTickerChange = (event) => {
    setTicker(event.target.value.toUpperCase());
  };

  return (
    <form onSubmit={handleSubmit} className="ticker-search">
      <label className='ticker-label'>
        Stock Ticker:
        <input type="text" className="ticker-input" value={ticker} onChange={handleTickerChange} />
      </label>
      <button type="submit" className="add-ticker-btn">Add Ticker</button>
    </form>
  );
};

export default TickerSearch;
