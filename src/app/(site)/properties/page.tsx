import HeroSub from "@/components/shared/HeroSub";
import PropertiesListing from "@/components/Properties/PropertyList";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Venues | Gatherly",
};

const page = () => {
    return (
        <>
            <HeroSub
                title="Discover inspiring places."
                description="Experience venues perfect for any events"
                badge="Venues"
            />
            <PropertiesListing />
        </>
    );
};

export default page;
