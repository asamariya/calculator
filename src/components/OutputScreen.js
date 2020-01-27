import React from 'react';

import OutputScreenRow from './OutputScreenRow';

const OutputScreen = ({ question, answer }) => {
  return (
    <div className="screen">
      <OutputScreenRow value={question} />
      <OutputScreenRow value={answer} />
    </div>
  );
};

export default OutputScreen;
