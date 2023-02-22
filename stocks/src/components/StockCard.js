import React from 'react';
import './StockCard.css';

const getClassName = (percentChange) => {
  if (percentChange > 0 && percentChange < 2) {
    return "green";
  } else if (percentChange > 2 && percentChange < 5) {
    return "green2";
  } else if (percentChange > 5 && percentChange < 7) {
      return "green3";
  } else if (percentChange > 7) {
    return "green4";
  } else if (percentChange < 0 && percentChange > -2) {
    return "red";
  } else if (percentChange < -2 && percentChange > -5) {
      return "red2";
  } else if (percentChange < -5 && percentChange > -7) {
    return "red3";
  } else if (percentChange < -7) {
    return "red4";
  } else {
    return "gray";
  }
};

const StockCard = ({ data, onDelete }) => {
  // Function to format marketCap to display in billions
  const formatMarketCap = (marketCap) => {
    const billion = 1000000000;
    const formattedMarketCap = marketCap / billion;
    return formattedMarketCap.toFixed(2) + 'B';
  };

  return (
    <div className={`card ${getClassName(data.percentChange.toFixed(2))}`}>
      <button className="delete-button" onClick={() => onDelete(data.ticker)}>
        X
      </button>
      <div className="card-header">
        <h2>{data.ticker}</h2>
      </div>
      <div className="card-body">
        <p className='price'>${data.stockPrice}</p>
        <p>{data.percentChange.toFixed(2)}%</p>
        <p>{formatMarketCap(data.marketCap)}</p>
      </div>
    </div>
  );
};


export default StockCard;