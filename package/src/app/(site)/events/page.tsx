import HeroSub from "@/components/shared/HeroSub";
import EventsListing from "@/components/Events/EventsList";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Events | HuddleHive",
    description: "Discover upcoming events and opportunities",
};

const EventsPage = () => {
    return (
        <>
            <HeroSub
                title="Discover exciting events."
                description="Find upcoming events and opportunities you can't miss"
                badge="Events"
            />
            <EventsListing />
        </>
    );
};

export default EventsPage; 