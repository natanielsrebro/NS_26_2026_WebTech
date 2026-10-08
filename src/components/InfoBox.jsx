import React from 'react';

const InfoBox = ({ name, onClick }) => {
  return (
    <button 
      onClick={onClick}
      style={{ margin: '0 5px', padding: '8px 16px', cursor: 'pointer' }}
    >
      {name}
    </button>
  );
};

export default InfoBox;