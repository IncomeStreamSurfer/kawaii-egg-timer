import React from 'react';

interface TimerDisplayProps {
  seconds: number;
}

const TimerDisplay: React.FC<TimerDisplayProps> = ({ seconds }) => {
  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  return (
    <div className="my-8 text-center">
      <p className="font-gaegu text-8xl md:text-9xl font-bold text-amber-800 tabular-nums">
        {formatTime(seconds)}
      </p>
    </div>
  );
};

export default TimerDisplay;
