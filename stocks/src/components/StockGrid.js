import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StockCard from './StockCard';
import TickerSearch from './TickerSearch';
import './StockGrid.css';

const StockGrid = () => {
  const [tickers, setTickers] = useState([]);
  const [stockData, setStockData] = useState([]);

  const fetchStockData = async (ticker) => {
    try {
      const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=AH2T1RF8TAPDGZXY`;
      const response = await axios.get(url);
      console.log(response.data);
      const quote = response.data['Global Quote'];

      const data = {
        ticker: quote['01. symbol'],
        stockPrice: parseFloat(quote['05. price']).toFixed(2),
        percentChange: parseFloat(quote['10. change percent']),
      };
      setStockData((prevStockData) => [...prevStockData, data]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddTicker = (ticker) => {
    setTickers((prevTickers) => [...prevTickers, ticker]);
    fetchStockData(ticker);
  };

  const handleDeleteTicker = (ticker) => {
    setTickers((prevTickers) => prevTickers.filter((t) => t !== ticker));
    setStockData((prevStockData) => prevStockData.filter((data) => data.ticker !== ticker));
  };

  return (
    <div>
      <TickerSearch addTicker={handleAddTicker} />
      <div className='stock-grid'>
        {stockData.map((data, index) => (
          <StockCard key={index} data={data} onDelete={handleDeleteTicker} />
        ))}
      </div>
    </div>
  );
};

export default StockGrid;
