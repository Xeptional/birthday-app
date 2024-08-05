import React, { useEffect, useState} from 'react';
import Time from './Time';
import '../styles.css'

const Countdown = () => {
  const calculatedTimeLeft = () => {
    const targetDate = new Date('January 16, 2025').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};

    if(difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  }

  const [timeLeft, setTimeLeft] = useState(calculatedTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculatedTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='countdown-container' role='timer' aria-live='polite'>
      <Time label="Days" value={timeLeft.days} />
      <Time label="Hours" value={timeLeft.hours} />
      <Time label="Minutes" value={timeLeft.minutes} />
      <Time label="Seconds" value={timeLeft.seconds} />
    </div>
  )
}

export default Countdown