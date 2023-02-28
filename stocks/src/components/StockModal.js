import React, { useState, useEffect } from 'react';
import './StockModal.css';

const StockModal = ({ show, handleClose, ticker }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchStockData = async () => {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=AH2T1RF8TAPDGZXY`
      );
      const data = await response.json();
      setData(data);
    };
    fetchStockData();
  }, [ticker]);

  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        {data && (
          <div className='modal-body'>
            <div className="left">
              <h2 className="modal-header">{data.Name}</h2>
              <h3 className="modal-market-cap">{(data.MarketCapitalization / 1000000000).toFixed(2)} B</h3>
              <p className="modal-price-to-sales-ratio">P/S: {data.PriceToSalesRatioTTM}</p>
              <p className="modal-pe-ratio">P/E: {data.PERatio}</p>
              <p className="modal-quarterly-rev-growth">Sales YoY: {(data.QuarterlyRevenueGrowthYOY * 100).toFixed(2)}%</p>
              <p className="modal-quarterly-earn-growth">Earnings YoY: {(data.QuarterlyEarningsGrowthYOY * 100).toFixed(2)}%</p>
              <p className="modal-gross-profit-margin">Gross Margin: {(data.GrossProfitTTM / data.RevenueTTM * 100).toFixed(2)}%</p>
              <p className="modal-net-income-margin">Net Income Margin: {(data.ProfitMargin * 100).toFixed(2)}%</p>
              <p className="modal-description">{data.Description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StockModal;
