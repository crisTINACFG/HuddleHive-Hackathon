"use client";
import { Icon } from '@iconify/react';
import React from 'react';

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  icon: string;
}

const ComingSoonModal: React.FC<ComingSoonModalProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  description, 
  icon 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 animate-fade-in">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-md w-full relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-dark dark:text-white hover:text-primary text-2xl font-bold transition-colors"
          aria-label="Close"
        >
          &times;
        </button>
        <div className="flex flex-col items-center justify-center">
          <Icon icon={icon} width={48} height={48} className="text-primary mb-4" />
          <h3 className="text-2xl font-bold mb-2 text-dark dark:text-white text-center">
            {title}
          </h3>
          <p className="text-dark/70 dark:text-white/70 text-center">
            {description}
          </p>
          <button
            onClick={onClose}
            className="mt-6 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-dark transition-colors duration-300"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonModal; 