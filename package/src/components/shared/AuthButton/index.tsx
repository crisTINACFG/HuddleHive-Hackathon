"use client";
import React, { useState } from 'react';
import ComingSoonModal from '@/components/shared/ComingSoonModal';

interface AuthButtonProps {
  type: 'signin' | 'signup';
  className?: string;
  children?: React.ReactNode;
}

const AuthButton: React.FC<AuthButtonProps> = ({ type, className = '', children }) => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const handleClick = () => {
    setShowComingSoon(true);
  };

  const handleCloseModal = () => {
    setShowComingSoon(false);
  };

  const getModalContent = () => {
    if (type === 'signin') {
      return {
        title: "Authentication coming soon!",
        description: "User authentication and account management features will be available soon. You'll be able to create accounts, sign in, and manage your profile.",
        icon: "ph:user-circle"
      };
    } else {
      return {
        title: "Account creation coming soon!",
        description: "User registration and account creation features will be available soon. You'll be able to create accounts, manage your profile, and access exclusive features.",
        icon: "ph:user-plus"
      };
    }
  };

  const modalContent = getModalContent();

  return (
    <>
      <button
        onClick={handleClick}
        className={className}
      >
        {children || (type === 'signin' ? 'Sign In' : 'Sign Up')}
      </button>

      <ComingSoonModal
        isOpen={showComingSoon}
        onClose={handleCloseModal}
        title={modalContent.title}
        description={modalContent.description}
        icon={modalContent.icon}
      />
    </>
  );
};

export default AuthButton; 