"use client";
import { Icon } from '@iconify/react';
import React, { useState } from 'react';

const CreateBlogButton: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="ml-4 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-dark transition-colors duration-300 flex items-center gap-2"
      >
        <Icon icon="ph:plus" width={20} height={20} />
        Create Blog
      </button>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-md w-full relative animate-fade-in">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-dark dark:text-white hover:text-primary text-2xl font-bold"
              aria-label="Close"
            >
              &times;
            </button>
            <div className="flex flex-col items-center justify-center">
              <Icon icon="ph:note-pencil" width={48} height={48} className="text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-dark dark:text-white">Blog creation coming soon!</h3>
              <p className="text-dark/70 dark:text-white/70 text-center">You&apos;ll soon be able to write and share your own stories with the community.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateBlogButton; 