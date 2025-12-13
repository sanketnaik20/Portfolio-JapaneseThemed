import React from 'react';
import '../styles/loader.css';

function Loader() {
  return (
    <div className="loader-container">
      <div className="loader-content">
        <div className="loader-circle">
          <div className="loader-dot"></div>
        </div>
        <p className="loader-text">Loading Portfolio</p>
      </div>
    </div>
  );
}

export default Loader;
