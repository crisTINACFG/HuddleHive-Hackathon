"use client"
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import confetti from 'canvas-confetti';
import { PropertyHomes } from '@/types/properyHomes';

interface VenueBookingModalProps {
  venue: PropertyHomes;
  isOpen: boolean;
  onClose: () => void;
}

interface TimeSlot {
  time: string;
  available: boolean;
}

interface AvailabilityDay {
  date: string;
  isAvailable: boolean;
  timeSlots: TimeSlot[];
}

// Mock availability data - in a real app, this would come from an API
const generateAvailabilityData = (): AvailabilityDay[] => {
  const availability: AvailabilityDay[] = [];
  const today = new Date();
  
  for (let i = 0; i < 30; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    
    // Random availability - 70% chance of being available
    const isAvailable = Math.random() > 0.3;
    
    availability.push({
      date: date.toISOString().split('T')[0],
      isAvailable,
      timeSlots: isAvailable ? [
        { time: '09:00-17:00', available: true },
        { time: '18:00-23:00', available: true }
      ] : []
    });
  }
  
  return availability;
};

const VenueBookingModal: React.FC<VenueBookingModalProps> = ({ venue, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    attendees: 1,
    date: '',
    timeSlot: '',
    duration: '3',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [availability] = useState<AvailabilityDay[]>(generateAvailabilityData());

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      // Reset time slot when date changes
      ...(name === 'date' && { timeSlot: '' })
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return false;
    if (!formData.email.trim() || !formData.email.includes('@')) return false;
    if (!formData.phone.trim()) return false;
    if (!formData.eventType.trim()) return false;
    if (!formData.date) return false;
    if (!formData.timeSlot) return false;
    if (formData.attendees < 1 || formData.attendees > venue.capacity) return false;
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
      setFormData({ 
        name: '', 
        email: '', 
        phone: '', 
        eventType: '', 
        attendees: 1, 
        date: '', 
        timeSlot: '', 
        duration: '3' 
      });
    }, 3000);
  };

  const getAvailableTimeSlots = (date: string): TimeSlot[] => {
    const dayAvailability = availability.find(day => day.date === date);
    const baseSlots = dayAvailability?.timeSlots || [];
    const duration = parseInt(formData.duration);
    
    // Filter time slots based on duration
    return baseSlots.filter(slot => {
      const [startTime, endTime] = slot.time.split('-');
      const startHour = parseInt(startTime.split(':')[0]);
      const endHour = parseInt(endTime.split(':')[0]);
      
      // Check if the slot can accommodate the full duration
      const slotDuration = endHour - startHour;
      return duration <= slotDuration;
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { 
      weekday: 'short', 
      day: 'numeric', 
      month: 'short' 
    });
  };

  const calculateTotalPrice = () => {
    const basePrice = parseFloat(venue.price);
    const duration = parseInt(formData.duration);
    return basePrice * duration;
  };

  // Reset time slot when duration changes
  const handleDurationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newDuration = e.target.value;
    setFormData(prev => ({
      ...prev,
      duration: newDuration,
      timeSlot: '' // Reset time slot when duration changes
    }));
  };

  if (!isOpen) return null;

  const totalPrice = calculateTotalPrice();

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {!isSuccess ? (
          <>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-dark dark:text-white">
                Book Venue
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
                {venue.name}
              </h3>
              <div className="flex items-center gap-2 text-sm text-dark/70 dark:text-white/70 mb-1">
                <Icon icon="ph:map-pin" width={16} height={16} />
                {venue.location}
              </div>
              <div className="flex items-center gap-2 text-sm text-dark/70 dark:text-white/70 mb-1">
                <Icon icon="ph:users" width={16} height={16} />
                Capacity: {venue.capacity} people
              </div>
              <div className="flex items-center gap-2 text-sm text-dark/70 dark:text-white/70">
                <Icon icon="ph:tag" width={16} height={16} />
                £{venue.price} per hour
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    Event Type *
                  </label>
                  <input
                    type="text"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="e.g., Conference, Workshop, Party"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-dark dark:text-white mb-2">
                    Number of Attendees *
                  </label>
                  <input
                    type="number"
                    name="attendees"
                    value={formData.attendees}
                    onChange={handleInputChange}
                    min="1"
                    max={venue.capacity}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark dark:text-white mb-2">
                    Date *
                  </label>
                  <select
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                    required
                  >
                    <option value="">Select a date</option>
                    {availability.filter(day => day.isAvailable).map(day => (
                      <option key={day.date} value={day.date}>
                        {formatDate(day.date)}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark dark:text-white mb-2">
                    Time Slot *
                  </label>
                  <select
                    name="timeSlot"
                    value={formData.timeSlot}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                    required
                    disabled={!formData.date}
                  >
                    <option value="">Select time</option>
                    {formData.date && getAvailableTimeSlots(formData.date).length > 0 ? (
                      getAvailableTimeSlots(formData.date).map(slot => (
                        <option key={slot.time} value={slot.time}>
                          {slot.time}
                        </option>
                      ))
                    ) : formData.date ? (
                      <option value="" disabled>
                        No time slots available for {formData.duration} hour duration
                      </option>
                    ) : null}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark dark:text-white mb-2">
                  Duration (hours)
                </label>
                <select
                  name="duration"
                  value={formData.duration}
                  onChange={handleDurationChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                >
                  <option value="1">1 hour</option>
                  <option value="2">2 hours</option>
                  <option value="3">3 hours</option>
                  <option value="4">4 hours</option>
                  <option value="5">5 hours</option>
                  <option value="6">6 hours</option>
                  <option value="7">7 hours</option>
                  <option value="8">8 hours</option>
                </select>
              </div>

              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-dark/70 dark:text-white/70">Price per hour:</span>
                  <span className="text-sm font-medium text-dark dark:text-white">£{venue.price}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-dark/70 dark:text-white/70">Duration:</span>
                  <span className="text-sm font-medium text-dark dark:text-white">{formData.duration} hours</span>
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
                  `Book Venue - £${totalPrice.toFixed(2)}`
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
              Venue Booked Successfully! 🎉
            </h3>
            <p className="text-dark/70 dark:text-white/70 mb-4">
              Your booking for "{venue.name}" has been confirmed. You'll receive a confirmation email shortly.
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

export default VenueBookingModal; 