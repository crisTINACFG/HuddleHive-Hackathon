"use client"
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import confetti from 'canvas-confetti';
import { Events } from '@/types/events';

interface BookingModalProps {
  event: Events;
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ event, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tickets: 1,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTicketChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      tickets: parseInt(e.target.value)
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return false;
    if (!formData.email.trim() || !formData.email.includes('@')) return false;
    if (!formData.phone.trim()) return false;
    if (formData.tickets < 1 || formData.tickets > event.tickets) return false;
    return true;
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      alert('Please fill in all fields correctly');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);
    triggerConfetti();

    // Close modal after 3 seconds
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
      setFormData({ name: '', email: '', phone: '', tickets: 1 });
    }, 3000);
  };

  if (!isOpen) return null;

  const totalPrice = parseFloat(event.price) * formData.tickets;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
        {!isSuccess ? (
          <>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-dark dark:text-white">
                Book Event
              </h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <Icon icon="ph:x" width={24} height={24} />
              </button>
            </div>

            <div className="mb-6 p-4 bg-primary/10 rounded-xl">
              <h3 className="font-semibold text-dark dark:text-white mb-2">
                {event.name}
              </h3>
              <div className="flex items-center gap-2 text-sm text-dark/70 dark:text-white/70 mb-1">
                <Icon icon="ph:map-pin" width={16} height={16} />
                {event.location}
              </div>
              <div className="flex items-center gap-2 text-sm text-dark/70 dark:text-white/70 mb-1">
                <Icon icon="ph:calendar" width={16} height={16} />
                {event.date}
              </div>
              <div className="flex items-center gap-2 text-sm text-dark/70 dark:text-white/70">
                <Icon icon="ph:clock" width={16} height={16} />
                {event.startTime} - {event.endTime}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-dark dark:text-white mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-dark dark:text-white mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-dark dark:text-white mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-dark dark:text-white mb-2">
                  Number of Tickets *
                </label>
                <select
                  name="tickets"
                  value={formData.tickets}
                  onChange={handleTicketChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                  required
                >
                  {Array.from({ length: Math.min(event.tickets, 10) }, (_, i) => i + 1).map(num => (
                    <option key={num} value={num}>
                      {num} ticket{num > 1 ? 's' : ''}
                    </option>
                  ))}
                </select>
              </div>

              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-dark/70 dark:text-white/70">Price per ticket:</span>
                  <span className="text-sm font-medium text-dark dark:text-white">£{event.price}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-dark/70 dark:text-white/70">Quantity:</span>
                  <span className="text-sm font-medium text-dark dark:text-white">{formData.tickets}</span>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-600 pt-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-dark dark:text-white">Total:</span>
                    <span className="font-bold text-lg text-primary">£{totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-8 bg-primary text-white rounded-full font-semibold hover:bg-dark duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Processing...
                  </div>
                ) : (
                  `Book ${formData.tickets} Ticket${formData.tickets > 1 ? 's' : ''} - £${totalPrice.toFixed(2)}`
                )}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon icon="ph:check" width={32} height={32} className="text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-dark dark:text-white mb-2">
              Booking Successful! 🎉
            </h3>
            <p className="text-dark/70 dark:text-white/70 mb-4">
              Your tickets for "{event.name}" have been booked successfully. You&apos;ll receive a confirmation email shortly.
            </p>
            <div className="text-sm text-dark/50 dark:text-white/50">
              Booking ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal; 