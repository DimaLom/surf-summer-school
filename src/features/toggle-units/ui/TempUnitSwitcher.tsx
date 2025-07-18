'use client';

import React, { useState } from 'react';

interface TempUnitSwitcherProps {
  onChange?: (unit: 'C' | 'F') => void;
}

const spanClasses = 'text-lg font-medium text-violet-950';

export const TempUnitSwitcher = (props: TempUnitSwitcherProps) => {
  const { onChange } = props;
  const [isCelsius, setIsCelsius] = useState(true);

  const handleToggle = () => {
    const newUnit = isCelsius ? 'F' : 'C';
    setIsCelsius(!isCelsius);
    if (onChange) onChange(newUnit);
  };

  return (
    <div className="relative inline-flex cursor-pointer" onClick={handleToggle}>
      <div className="h-10 w-22 rounded-full bg-white outline-2 outline-gray-100 transition-colors duration-300 ease-in-out">
        <div className="absolute flex h-10 w-full items-center justify-between px-4">
          <span className={spanClasses}>С</span>
          <span className={spanClasses}>F</span>
        </div>
        <div
          className={`flex h-10 w-12 items-center justify-center rounded-full bg-blue-50 outline-2 outline-blue-100 transition-transform duration-300 ease-in-out ${
            isCelsius ? 'translate-x-0' : 'translate-x-10'
          }`}
        >
          <span className={spanClasses}>{isCelsius ? 'C' : 'F'}</span>
        </div>
      </div>
    </div>
  );
};
