import React from 'react';

const OutputScreenRow = ({ value }) => {
  return (
    <div className="screen-row">
      <input type="text" readOnly value={value} />
    </div>
  );
};

export default OutputScreenRow;
