import React, { useState, useEffect, useRef, useCallback } from 'react';
import { EggDoneness } from './types';
import { EGG_TIMINGS, ALARM_SOUND_DATA_URI } from './constants';
import EggSelector from './components/EggSelector';
import TimerDisplay from './components/TimerDisplay';
import { BouncingToastIcon, RockingEggCupIcon } from './components/icons';
import { loadLastDoneness, saveLastDoneness, addTimerToHistory } from './utils/storage';

const App: React.FC = () => {
  // Load last selected doneness from localStorage on mount
  const [doneness, setDoneness] = useState<EggDoneness>(() => loadLastDoneness());
  const [secondsLeft, setSecondsLeft] = useState<number>(EGG_TIMINGS[doneness]);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  
  const intervalRef = useRef<number | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (isActive && secondsLeft > 0) {
      intervalRef.current = window.setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0 && isActive) {
      setIsActive(false);
      setIsFinished(true);
      // Save completed timer to history
      addTimerToHistory(doneness);
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isActive, secondsLeft, doneness]);
  
  const handleSelectDoneness = useCallback((newDoneness: EggDoneness) => {
    if (!isActive) {
      setDoneness(newDoneness);
      setSecondsLeft(EGG_TIMINGS[newDoneness]);
      setIsFinished(false);
      // Save the last selected doneness to localStorage
      saveLastDoneness(newDoneness);
    }
  }, [isActive]);

  const resetTimer = useCallback(() => {
    setIsActive(false);
    setIsFinished(false);
    setSecondsLeft(EGG_TIMINGS[doneness]);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [doneness]);

  const toggleTimer = () => {
    if (isFinished) {
      resetTimer();
      return;
    }
    setIsActive(!isActive);
  };

  const getButtonText = () => {
    if (isFinished) return 'Reset!';
    if (isActive) return 'Pause';
    return 'Start!';
  };

  const getButtonColor = () => {
     if (isFinished) return 'bg-blue-400 hover:bg-blue-500';
     if (isActive) return 'bg-amber-400 hover:bg-amber-500';
     return 'bg-pink-400 hover:bg-pink-500';
  };

  return (
    <div className="bg-amber-50 min-h-screen w-full flex items-center justify-center p-4 font-gaegu overflow-hidden relative">
      <BouncingToastIcon className="absolute w-32 h-32 md:w-48 md:h-48 -bottom-4 -left-4 md:bottom-10 md:left-10 opacity-80 animate-gentle-bounce" />
      <RockingEggCupIcon className="absolute w-28 h-28 md:w-40 md:h-40 -top-2 -right-2 md:top-10 md:right-10 opacity-80" />
      
      <div className="relative w-full max-w-md mx-auto bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-2xl shadow-yellow-200/50 text-center animate-pop-in">
        <h1 className="text-4xl sm:text-5xl font-bold text-amber-700 mb-2">
          Eggcellent Timer
        </h1>
        <p className="text-amber-600 mb-6 text-lg">Pick your perfect egg!</p>

        <EggSelector 
          selectedDoneness={doneness}
          onSelect={handleSelectDoneness}
          disabled={isActive}
        />
        
        <TimerDisplay seconds={secondsLeft} />
        
        <div className="flex items-center justify-center space-x-4">
          <button 
            onClick={toggleTimer}
            className={`w-32 h-16 text-3xl font-bold text-white rounded-full shadow-lg transform transition-all duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 ring-offset-2 ring-offset-white/80 ${getButtonColor()} ${getButtonColor().replace('bg-', 'ring-')}`}
          >
            {getButtonText()}
          </button>
          
          { (isActive || secondsLeft < EGG_TIMINGS[doneness]) && !isFinished && (
            <button 
              onClick={resetTimer}
              className="w-32 h-16 text-3xl font-bold text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-full shadow-lg transform transition-all duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 ring-gray-400 ring-offset-2 ring-offset-white/80"
            >
              Reset
            </button>
          )}
        </div>
        
        {isFinished && (
            <div className="mt-6 font-bold text-2xl text-green-600 animate-gentle-bounce">
                Your egg is ready! 🍳
            </div>
        )}
      </div>

      <audio ref={audioRef} src={ALARM_SOUND_DATA_URI} preload="auto" />
    </div>
  );
};

export default App;
