import HeroSub from "@/components/shared/HeroSub";
import CafesRestaurants from "@/components/Properties/CafesRestaurants";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Cafés & Restaurants | Gatherly",
};

const page = () => {
    return (
        <>
            <HeroSub
                title="Cafés & Restaurants."
                description="Discover cozy cafés and vibrant restaurants for your next gathering or event."
                badge="Properties"
            />
            <CafesRestaurants />
        </>
    );
};

export default page; 