import React from 'react';
import { EggDoneness } from '../types';
import { SoftBoiledIcon, MediumBoiledIcon, HardBoiledIcon } from './icons';

interface EggSelectorProps {
  selectedDoneness: EggDoneness;
  onSelect: (doneness: EggDoneness) => void;
  disabled: boolean;
}

const options = [
  { id: EggDoneness.SOFT, label: 'Soft', Icon: SoftBoiledIcon },
  { id: EggDoneness.MEDIUM, label: 'Medium', Icon: MediumBoiledIcon },
  { id: EggDoneness.HARD, label: 'Hard', Icon: HardBoiledIcon },
];

const EggSelector: React.FC<EggSelectorProps> = ({ selectedDoneness, onSelect, disabled }) => {
  return (
    <div className="flex justify-center items-center space-x-2 sm:space-x-4">
      {options.map(({ id, label, Icon }) => (
        <button
          key={id}
          onClick={() => onSelect(id)}
          disabled={disabled}
          className={`
            flex flex-col items-center justify-center p-3 rounded-2xl 
            transition-all duration-300 ease-in-out transform
            focus:outline-none focus:ring-4 focus:ring-amber-300
            ${disabled ? 'cursor-not-allowed opacity-60' : 'hover:scale-105 hover:-translate-y-1'}
            ${selectedDoneness === id ? 'bg-amber-200 shadow-inner' : 'bg-white/80 shadow-md'}
          `}
        >
          <Icon className="w-16 h-16 sm:w-20 sm:h-20" />
          <span className="mt-2 font-gaegu text-xl font-bold text-amber-800">{label}</span>
        </button>
      ))}
    </div>
  );
};

export default EggSelector;
