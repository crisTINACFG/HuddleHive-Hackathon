"use client"
import React, { useState } from 'react';
import { Icon } from '@iconify/react';

interface FilterToggleProps {
  children: React.ReactNode;
  title: string;
  defaultOpen?: boolean;
}

const FilterToggle: React.FC<FilterToggleProps> = ({ children, title, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className='bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-dark/10 dark:border-white/20 overflow-hidden'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors'
      >
        <h3 className='text-xl font-semibold text-dark dark:text-white'>
          {title}
        </h3>
        <Icon
          icon={isOpen ? 'ph:caret-up' : 'ph:caret-down'}
          width={24}
          height={24}
          className='text-dark dark:text-white transition-transform duration-200'
        />
      </button>
      <div className={`transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden`}>
        <div className='p-6 pt-0'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default FilterToggle; 