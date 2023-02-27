import React from 'react';
import './StockModal.css';

const StockModal = ({ show, handleClose }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        <button className="modal-delete-button" onClick={handleClose}>X</button>
        <h2>Modal Header</h2>
        <p>Modal body text goes here.</p>
      </div>
    </div>
  );
};

export default StockModal;
