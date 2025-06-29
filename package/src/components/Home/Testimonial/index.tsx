"use client";
import * as React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { testimonials } from "@/app/api/testimonial";

const Testimonial: React.FC = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
            <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
                <div className="text-center mb-16">
                    <span className="inline-block bg-purple-400 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                        Success Stories
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-dark dark:text-white mb-6">
                        Lives <span className="text-purple-600 dark:text-purple-400">Transformed</span> Through Connection
                    </h2>
                    <p className="text-xl text-dark/70 dark:text-white/70 max-w-3xl mx-auto leading-relaxed">
                        These are the real stories of people whose lives have been changed through our community events and spaces. 
                        Every connection, every opportunity, every moment of support matters.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-full overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={64}
                                        height={64}
                                        className="w-full h-full object-cover"
                                        unoptimized={true}
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-dark dark:text-white">{item.name}</h4>
                                    <p className="text-sm text-dark/60 dark:text-white/60">{item.position}</p>
                                    <div className="flex gap-1 mt-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Icon 
                                                key={i} 
                                                icon="ph:star-fill" 
                                                className={`text-sm ${i < 5 ? 'text-yellow-400' : 'text-gray-300'}`} 
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="text-dark/70 dark:text-white/70 leading-relaxed mb-4">
                                "{item.review}"
                            </p>
                            <div className="flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400 font-medium">
                                <Icon icon="ph:heart" className="text-sm" />
                                <span>Life changed through Gatherly</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-2xl text-white max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold mb-4">
                            Your Story Could Be Next
                        </h3>
                        <p className="text-white/90 mb-6 leading-relaxed">
                            Whether you're looking for support, opportunities, or just a place to belong, 
                            our community is here for you. Join us and become part of something bigger than yourself.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link 
                                href="/blogs" 
                                className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition-all duration-300 inline-block"
                            >
                                Share Your Story
                            </Link>
                            <Link 
                                href="/events" 
                                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold py-3 px-8 rounded-full transition-all duration-300 inline-block"
                            >
                                Join Our Community
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
