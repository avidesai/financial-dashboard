import React, { useState } from 'react';
import './StockCard.css';
import StockModal from './StockModal';

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
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
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
        <button className="open-modal-button" onClick={handleOpenModal}>Details</button>
      </div>
      {showModal && (
        <StockModal
          show={showModal}
          handleClose={handleCloseModal}
          ticker={data.ticker}
        />
      )}
    </div>
  );
};

export default StockCard;
