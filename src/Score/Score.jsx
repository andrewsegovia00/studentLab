import React from 'react';
import './Score.css'

const Score = ({ score }) => {
  const { date, scoreValue } = score;

  return (
    <li className="score-box">
      <p>Date: {date}</p>
      <p>Score: {scoreValue}</p>
    </li>
  );
};

export default Score;
