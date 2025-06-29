"use client";
import React, { useState } from 'react';
import ComingSoonModal from '@/components/shared/ComingSoonModal';

const Signin = ({ signInOpen }: { signInOpen?: any }) => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const handleSignInClick = () => {
    setShowComingSoon(true);
  };

  const handleCloseModal = () => {
    setShowComingSoon(false);
    if (signInOpen) {
      signInOpen(false);
    }
  };

  return (
    <>
      <div className="mb-10 text-center flex justify-center">
        <div className="text-2xl font-bold text-primary">Gatherly</div>
      </div>
      
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-dark dark:text-white mb-2">
          Welcome Back!
        </h2>
        <p className="text-dark/70 dark:text-white/70">
          Sign in to access your account and manage your events.
        </p>
      </div>

      <button
        onClick={handleSignInClick}
        className="flex w-full cursor-pointer items-center justify-center rounded-2xl border border-primary bg-primary hover:bg-transparent hover:text-primary px-5 py-3 text-base text-white transition duration-300 ease-in-out"
      >
        Sign In
      </button>

      <div className="text-center mt-6">
        <p className="text-body-secondary text-base">
          Not a member yet?{" "}
          <button 
            onClick={handleSignInClick}
            className="text-primary hover:underline"
          >
            Sign Up
          </button>
        </p>
      </div>

      <ComingSoonModal
        isOpen={showComingSoon}
        onClose={handleCloseModal}
        title="Authentication coming soon!"
        description="User authentication and account management features will be available soon. You'll be able to create accounts, sign in, and manage your profile."
        icon="ph:user-circle"
      />
    </>
  );
};

export default Signin;