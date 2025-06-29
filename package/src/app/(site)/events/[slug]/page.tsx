"use client"
import React, { useState } from 'react';
import { events } from '@/app/api/events';
import { useParams } from "next/navigation";
import { Icon } from '@iconify/react';
import Image from 'next/image';
import BookingModal from '@/components/Events/BookingModal';

export default function EventDetails() {
    const { slug } = useParams();
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    const item = events.find((event) => {
        const eventSlug = event.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
        return eventSlug === slug;
    });

    if (!item) {
        return (
            <div className="container mx-auto max-w-8xl px-5 2xl:px-0 py-20">
                <h1 className="text-2xl font-semibold text-dark dark:text-white">Event not found</h1>
            </div>
        );
    }

    const handleBookNow = () => {
        setIsBookingModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsBookingModalOpen(false);
    };

    return (
        <section className="!pt-44 pb-20 relative" >
            <div className="container mx-auto max-w-8xl px-5 2xl:px-0">
                <div className="grid grid-cols-12 items-end gap-6">
                    <div className="lg:col-span-8 col-span-12">
                        <h1 className='lg:text-52 text-40 font-semibold text-dark dark:text-white'>{item?.name}</h1>
                        <div className="flex gap-2.5">
                            <Icon icon="ph:map-pin" width={24} height={24} className="text-dark/50 dark:text-white/50" />
                            <p className='text-dark/50 dark:text-white/50 text-xm'>{item?.location}</p>
                        </div>
                    </div>
                    <div className="lg:col-span-4 col-span-12">
                        <div className='flex'>
                            <div className='flex flex-col gap-2 border-e border-black/10 dark:border-white/20 pr-2 xs:pr-4 mobile:pr-8'>
                                <Icon icon={'solar:tag-price-bold'} width={20} height={20} />
                                <p className='text-sm mobile:text-base font-normal text-black dark:text-white'>
                                    Price<br />£{item?.price}
                                </p>
                            </div>
                            <div className='flex flex-col gap-2 border-e border-black/10 dark:border-white/20 px-2 xs:px-4 mobile:px-8'>
                                <Icon icon={'solar:ticket-bold'} width={20} height={20} />
                                <p className='text-sm mobile:text-base font-normal text-black dark:text-white'>
                                    Tickets<br />{item?.tickets}
                                </p>
                            </div>
                            <div className='flex flex-col gap-2 pl-2 xs:pl-4 mobile:pl-8'>
                                <span style={{fontSize: '20px'}}>✔</span>
                                <p className='text-sm mobile:text-base font-normal text-black dark:text-white'>
                                    Category<br />{item?.category}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 mt-8 gap-8">
                    <div className="lg:col-span-8 col-span-12 row-span-2">
                        {item?.images && item?.images[0] && (
                            <div className="">
                                <Image
                                    src={item.images[0]?.src}
                                    alt="Main Event Image"
                                    width={400}
                                    height={500}
                                    className="rounded-2xl w-full h-540"
                                    unoptimized={true}
                                />
                            </div>
                        )}
                    </div>
                    <div className="lg:col-span-4 lg:block hidden">
                        {item?.images && item?.images[1] && (
                            <Image src={item.images[1]?.src} alt="Event Image 2" width={400} height={500} className="rounded-2xl w-full h-full" unoptimized={true} />
                        )}
                    </div>
                    <div className="lg:col-span-2 col-span-6">
                        {item?.images && item?.images[2] && (
                            <Image src={item.images[2]?.src} alt="Event Image 3" width={400} height={500} className="rounded-2xl w-full h-full" unoptimized={true} />
                        )}
                    </div>
                    <div className="lg:col-span-2 col-span-6">
                        {item?.images && item?.images[3] && (
                            <Image src={item.images[3]?.src} alt="Event Image 4" width={400} height={500} className="rounded-2xl w-full h-full" unoptimized={true} />
                        )}
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-8 mt-10">
                    <div className="lg:col-span-8 col-span-12">
                        <h3 className='text-xl font-medium'>Event Details</h3>
                        <div className="py-8 my-8 border-y border-dark/10 dark:border-white/20 flex flex-col gap-8">
                            <div className="flex items-center gap-6">
                                <div>
                                    <Icon icon="ph:calendar" width={32} height={32} className="text-primary" />
                                </div>
                                <div>
                                    <h3 className='text-dark dark:text-white text-xm'>Event Information</h3>
                                    <p className='text-base text-dark/50 dark:text-white/50'>
                                        Join us for an exciting {item?.category} event at {item?.name}. This is a unique opportunity to connect, learn, and experience something special.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div>
                                    <Icon icon="ph:users" width={32} height={32} className="text-primary" />
                                </div>
                                <div>
                                    <h3 className='text-dark dark:text-white text-xm'>Limited Availability</h3>
                                    <p className='text-base text-dark/50 dark:text-white/50'>
                                        Only {item?.tickets} tickets available for this exclusive event. Don't miss out on this opportunity!
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div>
                                    <Icon icon="ph:map-pin" width={32} height={32} className="text-primary" />
                                </div>
                                <div>
                                    <h3 className='text-dark dark:text-white text-xm'>Venue Location</h3>
                                    <p className='text-base text-dark/50 dark:text-white/50'>
                                        {item?.location}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div>
                                    <Icon icon="ph:clock" width={32} height={32} className="text-primary" />
                                </div>
                                <div>
                                    <h3 className='text-dark dark:text-white text-xm'>Event Timing</h3>
                                    <p className='text-base text-dark/50 dark:text-white/50'>
                                        Date: {item?.date} | Start: {item?.startTime} | End: {item?.endTime}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <p className='text-dark dark:text-white text-xm '>
                                Welcome to {item?.name}, an exciting {item?.category} event that promises to deliver an unforgettable experience. 
                                This event brings together like-minded individuals in a dynamic and engaging environment, perfect for networking, 
                                learning, and creating lasting connections.
                            </p>
                            <p className='text-dark dark:text-white text-xm '>
                                With only {item?.tickets} tickets available, this exclusive event offers limited capacity to ensure an intimate 
                                and personalized experience for all attendees. The event will feature engaging activities, informative sessions, 
                                and plenty of opportunities to connect with fellow participants.
                            </p>
                            <p className='text-dark dark:text-white text-xm '>
                                The venue at {item?.location} provides the perfect setting for this {item?.category} event, with modern facilities 
                                and excellent accessibility. Whether you're looking to expand your network, gain new insights, or simply enjoy 
                                a unique experience, this event has something for everyone.
                            </p>
                            <p className='text-dark dark:text-white text-xm '>
                                Don't miss this opportunity to be part of something special. Secure your ticket now for just £{item?.price} 
                                and join us for what promises to be an exceptional {item?.category} event.
                            </p>
                        </div>
                        <div className="py-8 mt-8 border-t border-dark/5 dark:border-white/15">
                            <h3 className='text-xl font-medium'>What this event offers</h3>
                            <div className="grid grid-cols-3 mt-5 gap-6">
                                <div className="flex items-center gap-2.5">
                                    <Icon icon="ph:users" width={24} height={24} className="text-dark dark:text-white" />
                                    <p className='text-base dark:text-white text-dark'>Networking</p>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Icon icon="ph:lightbulb" width={24} height={24} className="text-dark dark:text-white" />
                                    <p className='text-base dark:text-white text-dark'>Learning</p>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Icon icon="ph:heart" width={24} height={24} className="text-dark dark:text-white" />
                                    <p className='text-base dark:text-white text-dark'>Experience</p>
                                </div>
                            </div>
                        </div>
                        <div className="py-8 mt-8 border-t border-dark/5 dark:border-white/15">
                            <h3 className='text-xl font-medium mb-6'>Featured Speakers</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-dark/10 dark:border-white/20">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                                            <Icon icon="ph:user" width={32} height={32} className="text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-dark dark:text-white">Dr. Sarah Johnson</h4>
                                            <p className="text-sm text-primary">Lead Innovation Specialist</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-black/50 dark:text-white/50 mb-4">
                                        Expert in corporate innovation and digital transformation with 15+ years of experience.
                                    </p>
                                    <div className="flex flex-col gap-2 text-sm">
                                        <div className="flex items-center gap-2">
                                            <Icon icon="ph:envelope" width={16} height={16} className="text-primary" />
                                            <span className="text-black/70 dark:text-white/70">sarah.johnson@example.com</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Icon icon="ph:phone" width={16} height={16} className="text-primary" />
                                            <span className="text-black/70 dark:text-white/70">+44 20 7123 4567</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Icon icon="ph:linkedin-logo" width={16} height={16} className="text-primary" />
                                            <span className="text-black/70 dark:text-white/70">linkedin.com/in/sarahjohnson</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-dark/10 dark:border-white/20">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                                            <Icon icon="ph:user" width={32} height={32} className="text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-dark dark:text-white">Michael Chen</h4>
                                            <p className="text-sm text-primary">Technology Director</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-black/50 dark:text-white/50 mb-4">
                                        Seasoned technology leader specializing in emerging technologies and strategic planning.
                                    </p>
                                    <div className="flex flex-col gap-2 text-sm">
                                        <div className="flex items-center gap-2">
                                            <Icon icon="ph:envelope" width={16} height={16} className="text-primary" />
                                            <span className="text-black/70 dark:text-white/70">michael.chen@example.com</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Icon icon="ph:phone" width={16} height={16} className="text-primary" />
                                            <span className="text-black/70 dark:text-white/70">+44 20 7123 4568</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Icon icon="ph:linkedin-logo" width={16} height={16} className="text-primary" />
                                            <span className="text-black/70 dark:text-white/70">linkedin.com/in/michaelchen</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-dark/10 dark:border-white/20">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                                            <Icon icon="ph:user" width={32} height={32} className="text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-dark dark:text-white">Emma Rodriguez</h4>
                                            <p className="text-sm text-primary">Business Strategy Consultant</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-black/50 dark:text-white/50 mb-4">
                                        Strategic business consultant with expertise in market analysis and growth strategies.
                                    </p>
                                    <div className="flex flex-col gap-2 text-sm">
                                        <div className="flex items-center gap-2">
                                            <Icon icon="ph:envelope" width={16} height={16} className="text-primary" />
                                            <span className="text-black/70 dark:text-white/70">emma.rodriguez@example.com</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Icon icon="ph:phone" width={16} height={16} className="text-primary" />
                                            <span className="text-black/70 dark:text-white/70">+44 20 7123 4569</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Icon icon="ph:linkedin-logo" width={16} height={16} className="text-primary" />
                                            <span className="text-black/70 dark:text-white/70">linkedin.com/in/emmarodriguez</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-dark/10 dark:border-white/20">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                                            <Icon icon="ph:user" width={32} height={32} className="text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-dark dark:text-white">David Thompson</h4>
                                            <p className="text-sm text-primary">Industry Expert</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-black/50 dark:text-white/50 mb-4">
                                        Renowned industry expert with deep insights into market trends and future developments.
                                    </p>
                                    <div className="flex flex-col gap-2 text-sm">
                                        <div className="flex items-center gap-2">
                                            <Icon icon="ph:envelope" width={16} height={16} className="text-primary" />
                                            <span className="text-black/70 dark:text-white/70">david.thompson@example.com</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Icon icon="ph:phone" width={16} height={16} className="text-primary" />
                                            <span className="text-black/70 dark:text-white/70">+44 20 7123 4570</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Icon icon="ph:linkedin-logo" width={16} height={16} className="text-primary" />
                                            <span className="text-black/70 dark:text-white/70">linkedin.com/in/davidthompson</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <iframe
                            src={`https://www.google.com/maps?q=${encodeURIComponent(item?.location ?? '')}&output=embed`}
                            width="1114"
                            height="400"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-2xl w-full"
                            title="Event Location"
                        ></iframe>
                    </div>
                    <div className="lg:col-span-4 col-span-12">
                        <div className="bg-primary/10 p-8 rounded-2xl relative z-10 overflow-hidden">
                            <h4 className='text-dark text-3xl font-medium dark:text-white'>
                                £{item?.price}
                            </h4>
                            <p className='text-sm text-dark/50 dark:text-white'>Ticket Price</p>
                            <button 
                                onClick={handleBookNow}
                                className='py-4 px-8 bg-primary text-white rounded-full w-full block text-center hover:bg-dark duration-300 text-base mt-8 hover:cursor-pointer'>
                                Book Now
                            </button>
                            <div className="absolute right-0 top-4 -z-[1]">
                                <Icon icon="ph:ticket" width={100} height={100} className="text-primary/20" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isBookingModalOpen && (
                <BookingModal
                    isOpen={isBookingModalOpen}
                    onClose={handleCloseModal}
                    event={item}
                />
            )}
        </section>
    );
} 