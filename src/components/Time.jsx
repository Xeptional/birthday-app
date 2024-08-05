import React from 'react';
import '../styles.css';

const Time = ({ label, value }) => {
  const getColor = () => {
    const targetDate = new Date('January 16, 2025').getTime();
    const now = new Date().getTime();
    const totalDuration = targetDate - now;
    const currentDuration = targetDate - totalDuration;

    const progress = (totalDuration - currentDuration) / totalDuration;

    const red = Math.max(0, 255 - Math.floor(progress * 255));
    const green = Math.min(255, Math.floor(progress * 255));

    return `rgb(${red}, ${green}, 0)`;
  };

  return (
    <div className='time-container' style={{ color: getColor() }} aria-label={`${label}: ${value}`}>
      <div className="time-value" aria-live='polite'>{value}</div>
      <div className="time-label">{label}</div>
    </div>
  )
}

export default Time