import HeroSub from "@/components/shared/HeroSub";
import EventsListing from "@/components/Events/EventsList";
import { events } from '@/data/events';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Events | HuddleHive",
    description: "Discover upcoming events and opportunities",
};

export default function EventsPage() {
    const categories = ['All', ...Array.from(new Set(events.map(event => event.category)))];

    return (
        <>
            <HeroSub
                title="Discover exciting events."
                description="Find upcoming events and opportunities you can&apos;t miss"
                badge="Events"
            />

            {/* Event Statistics */}
            <section className="pt-8 pb-2 bg-white dark:bg-gray-900">
                <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-0">
                        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-2xl text-center">
                            <div className="text-3xl font-bold mb-2">{events.length}</div>
                            <div className="text-blue-100">Total Events</div>
                        </div>
                        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-2xl text-center">
                            <div className="text-3xl font-bold mb-2">{categories.length - 1}</div>
                            <div className="text-purple-100">Categories</div>
                        </div>
                        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-2xl text-center">
                            <div className="text-3xl font-bold mb-2">{events.reduce((acc, e) => acc + (e.tickets || 0), 0)}</div>
                            <div className="text-green-100">Total Tickets</div>
                        </div>
                        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-2xl text-center">
                            <div className="text-3xl font-bold mb-2">{events.filter(e => e.price === '0').length}</div>
                            <div className="text-orange-100">Free Events</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Event List */}
            <section className="pt-0 pb-16 bg-gray-50 dark:bg-gray-800">
                <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-3xl font-bold text-dark dark:text-white">
                            All Events
                        </h2>
                        <div className="text-dark/50 dark:text-white/50">
                            {events.length} {events.length === 1 ? 'event' : 'events'} found
                        </div>
                    </div>
                    <EventsListing />
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-gradient-to-br from-primary to-purple-600">
                <div className="container max-w-8xl mx-auto px-5 2xl:px-0 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Host Your Own Event
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Want to organize an event or workshop? Get in touch and let us help you make it a success!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            href="/contactus" 
                            className="bg-white text-primary hover:bg-gray-100 font-semibold py-4 px-8 rounded-full transition-all duration-300 inline-block"
                        >
                            Contact Us
                        </Link>
                        <Link 
                            href="/properties" 
                            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-4 px-8 rounded-full transition-all duration-300 inline-block"
                        >
                            Explore Venues
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
} 