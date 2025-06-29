"use client";
import React, { useState } from 'react';
import ComingSoonModal from '@/components/shared/ComingSoonModal';

const SignUp = ({ signUpOpen }: { signUpOpen?: any }) => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const handleSignUpClick = () => {
    setShowComingSoon(true);
  };

  const handleCloseModal = () => {
    setShowComingSoon(false);
    if (signUpOpen) {
      signUpOpen(false);
    }
  };

  return (
    <>
      <div className="mb-10 text-center mx-auto inline-block max-w-[160px]">
        <div className="text-2xl font-bold text-primary">Gatherly</div>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-dark dark:text-white mb-2">
          Join Our Community!
        </h2>
        <p className="text-dark/70 dark:text-white/70">
          Create an account to start hosting and joining events.
        </p>
      </div>

      <button
        onClick={handleSignUpClick}
        className="flex w-full cursor-pointer items-center justify-center rounded-md bg-primary px-5 py-3 text-base text-white transition duration-300 ease-in-out hover:!bg-darkprimary dark:hover:!bg-darkprimary"
      >
        Sign Up
      </button>

      <div className="text-center mt-6">
        <p className="text-base">
          Already have an account?{" "}
          <button
            onClick={handleSignUpClick}
            className="text-primary hover:bg-darkprimary hover:underline"
          >
            Sign In
          </button>
        </p>
      </div>

      <ComingSoonModal
        isOpen={showComingSoon}
        onClose={handleCloseModal}
        title="Account creation coming soon!"
        description="User registration and account creation features will be available soon. You'll be able to create accounts, manage your profile, and access exclusive features."
        icon="ph:user-plus"
      />
    </>
  );
};

export default SignUp;
