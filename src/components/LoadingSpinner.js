import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = ({ show }) => {
  return show ? (
    <div className="loading-spinner-wrapper">
      <i className="fa fa-spin fa-refresh fa-2x spinner" />
    </div>
  ) : null;
};

export default LoadingSpinner;
