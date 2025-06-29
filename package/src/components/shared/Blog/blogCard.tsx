import React, { FC } from "react";
import Image from "next/image";
import { Blog } from "@/types/blog";
import { format } from "date-fns";
import Link from "next/link";
import { Icon } from '@iconify/react';

const BlogCard: FC<{ blog: Blog }> = ({ blog }) => {
    const { title, coverImage, date, slug, tag, excerpt, detail } = blog;
    let summary = excerpt || detail || "";
    const showSummary = typeof summary === 'string' && summary.trim() !== '' && summary !== 'undefined';
    return (
        <Link href={`/blogs/${slug}`} className="group block h-full">
            <div className="h-full bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                    <Image
                        src={coverImage!}
                        alt={title || 'Blog post'}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        unoptimized={true}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Tag Badge */}
                    <div className="absolute top-4 left-4">
                        <span className="bg-primary text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                            {tag}
                        </span>
                    </div>
                    
                    {/* Date Badge */}
                    <div className="absolute top-4 right-4">
                        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-dark dark:text-white">
                            {format(new Date(date), "MMM dd")}
                        </div>
                    </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-dark/50 dark:text-white/50 mb-3">
                        <Icon icon="ph:calendar" width={14} height={14} />
                        {format(new Date(date), "MMMM dd, yyyy")}
                    </div>
                    
                    <h3 className="text-xl font-bold text-dark dark:text-white mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {title}
                    </h3>
                    
                    {showSummary && (
                        <p className="text-dark/70 dark:text-white/70 text-sm leading-relaxed mb-4 line-clamp-3">
                            {summary}
                        </p>
                    )}
                    
                    <div className="flex items-center justify-between">
                        <span className="text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform duration-300">
                            Read More
                        </span>
                        <Icon 
                            icon="ph:arrow-right" 
                            width={16} 
                            height={16} 
                            className="text-primary group-hover:translate-x-1 transition-transform duration-300" 
                        />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;
