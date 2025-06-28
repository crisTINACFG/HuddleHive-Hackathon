import BlogList from "@/components/Blog";
import HeroSub from "@/components/shared/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
    title:
        "Blog Grids | Homely ",
};

const Blog = () => {
    return (
        <>
            <HeroSub
                title="Connecting people to places"
                description="Making places visible and accessible to communties."
                badge="Blog"
            />
            <BlogList />
        </>
    );
};

export default Blog;
