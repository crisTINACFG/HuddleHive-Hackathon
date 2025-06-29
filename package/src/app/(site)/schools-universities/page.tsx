import HeroSub from "@/components/shared/HeroSub";
import SchoolsUniversities from "@/components/Properties/SchoolsUniversities";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Schools & Universities | Gatherly",
};

const page = () => {
    return (
        <>
            <HeroSub
                title="Schools & Universities."
                description="Find the perfect venue for educational events, lectures, and academic gatherings."
                badge="Properties"
            />
            <SchoolsUniversities />
        </>
    );
};

export default page; 