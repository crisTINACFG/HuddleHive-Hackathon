"use client"
import React, { useState, useEffect } from 'react';
import BlogCard from '@/components/shared/Blog/blogCard';

interface Blog {
    title: string;
    date: string;
    excerpt: string;
    coverImage: string;
    slug: string;
    detail: string;
    tag: string;
}

const BlogList: React.FC = () => {
    const [posts, setPosts] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('/api/blogs');
                if (!response.ok) {
                    throw new Error('Failed to fetch blog posts');
                }
                const data = await response.json();
                setPosts(data);
            } catch (err) {
                console.error('Error fetching blog posts:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return (
            <div className="py-20 text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-dark/70 dark:text-white/70">Loading stories...</p>
            </div>
        );
    }

    return (
        <section className='pt-0!'>
            <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-12">
                    {posts.map((blog, i) => (
                        <div key={i} className="w-full">
                            <BlogCard blog={blog} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BlogList;
