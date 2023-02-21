import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StockCard from './StockCard';
import TickerSearch from './TickerSearch';
import './StockGrid.css';

const StockGrid = () => {
  const [tickers, setTickers] = useState(['TSLA', 'NVDA', 'ASML', 'SNOW']);
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          url: `https://yahoo-finance15.p.rapidapi.com/api/yahoo/qu/quote/${tickers.join()}`,
          headers: {
            'X-RapidAPI-Key': '7c614a191emsh26af0e5fc7d7599p194901jsn9c2bf771a8ec',
            'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com',
          },
        };

        const response = await axios.request(options);
        console.log(response.data);

        const quotes = response.data;
        const data = quotes.map((quote) => {
          return {
            ticker: quote.symbol,
            companyName: quote.shortName,
            stockPrice: quote.regularMarketPrice,
            percentChange: quote.regularMarketChangePercent,
            marketCap: quote.marketCap,
            logoUrl: quote.logo_url,
          };
        });

        setStockData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [tickers]);

  const handleAddTicker = (ticker) => {
    setTickers([...tickers, ticker]);
  };

  return (
    <div>
      <TickerSearch addTicker={handleAddTicker} />
      <div className='stock-grid'>
        {stockData.map((data, index) => (
          <StockCard key={index} data={data} logoUrl={data.logoUrl} />
        ))}
      </div>
    </div>
  );
};

export default StockGrid;
