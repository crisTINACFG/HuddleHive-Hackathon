import HeroSub from "@/components/shared/HeroSub";
import CommunityHalls from "@/components/Properties/CommunityHalls";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Community Halls | Gatherly",
};

const page = () => {
    return (
        <>
            <HeroSub
                title="Community Halls"
                description="Affordable, flexible spaces for events, meetings, and local gatherings."
                badge="Venues"
            />
            <CommunityHalls />
        </>
    );
};

export default page; 