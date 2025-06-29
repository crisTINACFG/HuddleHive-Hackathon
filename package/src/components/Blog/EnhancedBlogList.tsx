"use client"
import React, { useState, useEffect } from 'react';
import BlogCard from '@/components/shared/Blog/blogCard';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';

interface Blog {
    title: string;
    date: string;
    excerpt: string;
    coverImage: string;
    slug: string;
    detail: string;
    tag: string;
}

const EnhancedBlogList: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [posts, setPosts] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

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
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const categories = ['All', ...Array.from(new Set(posts.map(post => post.tag)))];
    const featuredPost = posts[0]; // First post as featured
    const filteredPosts = posts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || post.tag === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    if (loading) {
        return (
            <div className="py-20 text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-dark/70 dark:text-white/70">Loading stories...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="py-20 text-center">
                <Icon icon="ph:warning" width={64} height={64} className="text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark dark:text-white mb-2">Error loading stories</h3>
                <p className="text-dark/50 dark:text-white/50">{error}</p>
            </div>
        );
    }

    return (
        <>
            {/* Featured Blog Section */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
                <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-dark dark:text-white mb-4">
                            Featured Story
                        </h2>
                        <p className="text-xl text-dark/70 dark:text-white/70 max-w-2xl mx-auto">
                            Our latest insights and community highlights
                        </p>
                    </div>
                    
                    {featuredPost && (
                        <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                            <div className="grid lg:grid-cols-2 gap-0">
                                <div className="relative h-80 lg:h-full overflow-hidden">
                                    <Image
                                        src={featuredPost.coverImage}
                                        alt={featuredPost.title}
                                        fill
                                        className="object-cover transition-transform duration-500 hover:scale-105"
                                        unoptimized={true}
                                    />
                                    <div className="absolute top-6 left-6">
                                        <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                                            {featuredPost.tag}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8 lg:p-12 flex flex-col justify-center">
                                    <div className="flex items-center gap-2 text-sm text-dark/50 dark:text-white/50 mb-4">
                                        <Icon icon="ph:calendar" width={16} height={16} />
                                        {format(new Date(featuredPost.date), "MMMM dd, yyyy")}
                                    </div>
                                    <h3 className="text-3xl lg:text-4xl font-bold text-dark dark:text-white mb-4 leading-tight">
                                        {featuredPost.title}
                                    </h3>
                                    <p className="text-lg text-dark/70 dark:text-white/70 mb-6 leading-relaxed">
                                        {featuredPost.excerpt}
                                    </p>
                                    <Link 
                                        href={`/blogs/${featuredPost.slug}`}
                                        className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-dark transition-colors duration-300 w-fit"
                                    >
                                        Read Full Story
                                        <Icon icon="ph:arrow-right" width={20} height={20} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Search and Filter Section */}
            <section className="py-16 bg-white dark:bg-gray-900">
                <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
                    <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-12">
                        <div className="flex-1 max-w-md w-full">
                            <div className="relative">
                                <Icon 
                                    icon="ph:magnifying-glass" 
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-dark/50 dark:text-white/50" 
                                    width={20} 
                                    height={20} 
                                />
                                <input
                                    type="text"
                                    placeholder="Search stories..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 border border-gray-200 dark:border-gray-700 rounded-2xl bg-gray-50 dark:bg-gray-800 text-dark dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                                />
                            </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-3">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                                        selectedCategory === category
                                            ? 'bg-primary text-white shadow-lg'
                                            : 'bg-gray-100 dark:bg-gray-800 text-dark dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Blog Statistics */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-2xl text-center">
                            <div className="text-3xl font-bold mb-2">{posts.length}</div>
                            <div className="text-blue-100">Total Stories</div>
                        </div>
                        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-2xl text-center">
                            <div className="text-3xl font-bold mb-2">{categories.length - 1}</div>
                            <div className="text-purple-100">Categories</div>
                        </div>
                        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-2xl text-center">
                            <div className="text-3xl font-bold mb-2">50K+</div>
                            <div className="text-green-100">Monthly Readers</div>
                        </div>
                        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-2xl text-center">
                            <div className="text-3xl font-bold mb-2">100+</div>
                            <div className="text-orange-100">Community Writers</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog List */}
            <section className="py-16 bg-gray-50 dark:bg-gray-800">
                <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-3xl font-bold text-dark dark:text-white">
                            {selectedCategory === 'All' ? 'All Stories' : `${selectedCategory} Stories`}
                        </h2>
                        <div className="text-dark/50 dark:text-white/50">
                            {filteredPosts.length} {filteredPosts.length === 1 ? 'story' : 'stories'} found
                        </div>
                    </div>
                    
                    {filteredPosts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPosts.map((blog, i) => (
                                <div key={i} className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                    <BlogCard blog={blog} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <Icon icon="ph:newspaper" width={64} height={64} className="text-dark/30 dark:text-white/30 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-dark dark:text-white mb-2">No stories found</h3>
                            <p className="text-dark/50 dark:text-white/50">Try adjusting your search or filter criteria</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-gradient-to-br from-primary to-purple-600">
                <div className="container max-w-8xl mx-auto px-5 2xl:px-0 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Share Your Story
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Have an inspiring story about community building, event hosting, or venue management? We'd love to hear from you!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            href="/contactus" 
                            className="bg-white text-primary hover:bg-gray-100 font-semibold py-4 px-8 rounded-full transition-all duration-300 inline-block"
                        >
                            Submit Your Story
                        </Link>
                        <Link 
                            href="/events" 
                            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-4 px-8 rounded-full transition-all duration-300 inline-block"
                        >
                            Explore Events
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EnhancedBlogList; 