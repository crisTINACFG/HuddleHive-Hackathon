"use client"
import React, { useState } from 'react';
import { propertyHomes } from '@/data/propertyHomes';
import { useParams } from "next/navigation";
import { Icon } from '@iconify/react';
import { testimonials } from '@/app/api/testimonial';
import Link from 'next/link';
import Image from 'next/image';
import VenueBookingModal from '@/components/Properties/VenueBookingModal';
import AmenitiesDisplay from '@/components/shared/AmenitiesDisplay';

export default function Details() {
    const { slug } = useParams();
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    const item = propertyHomes.find((item) => item.slug === slug);

    const handleBookVenue = () => {
        setIsBookingModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsBookingModalOpen(false);
    };

    return (
        <section className="!pt-44 pb-20 relative" >
            <div className="container mx-auto max-w-8xl px-5 2xl:px-0">
                <div className="grid grid-cols-12 items-end gap-6">
                    <div className="lg:col-span-8 col-span-12">
                        <h1 className='lg:text-52 text-40 font-semibold text-dark dark:text-white'>{item?.name}</h1>
                        <div className="flex gap-2.5">
                            <Icon icon="ph:map-pin" width={24} height={24} className="text-dark/50 dark:text-white/50" />
                            <p className='text-dark/50 dark:text-white/50 text-xm'>{item?.location}</p>
                        </div>
                    </div>
                    <div className="lg:col-span-4 col-span-12">
                        <div className='flex'>
                            <div className='flex flex-col gap-2 border-e border-black/10 dark:border-white/20 pr-2 xs:pr-4 mobile:pr-8'>
                                <Icon icon={'solar:tag-price-bold'} width={20} height={20} />
                                <p className='text-sm mobile:text-base font-normal text-black dark:text-white'>
                                    Price<br />£{item?.price}
                                </p>
                            </div>
                            <div className='flex flex-col gap-2 border-e border-black/10 dark:border-white/20 px-2 xs:px-4 mobile:px-8'>
                                <Icon icon={'solar:users-group-rounded-bold'} width={20} height={20} />
                                <p className='text-sm mobile:text-base font-normal text-black dark:text-white'>
                                    Capacity<br />{item?.capacity}
                                </p>
                            </div>
                            <div className='flex flex-col gap-2 pl-2 xs:pl-4 mobile:pl-8'>
                                <span style={{fontSize: '20px'}}>✔</span>
                                <p className='text-sm mobile:text-base font-normal text-black dark:text-white'>
                                    Category<br />{item?.category}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 mt-8 gap-8">
                    <div className="lg:col-span-8 col-span-12 row-span-2">
                        {item?.images && item?.images[0] && (
                            <div className="">
                                <Image
                                    src={item.images[0]?.src}
                                    alt="Main Property Image"
                                    width={400}
                                    height={500}
                                    className="rounded-2xl w-full h-540"
                                    unoptimized={true}
                                />
                            </div>
                        )}
                    </div>
                    <div className="lg:col-span-4 lg:block hidden">
                        {item?.images && item?.images[1] && (
                            <Image src={item.images[1]?.src} alt="Property Image 2" width={400} height={500} className="rounded-2xl w-full h-full" unoptimized={true} />
                        )}
                    </div>
                    <div className="lg:col-span-2 col-span-6">
                        {item?.images && item?.images[2] && (
                            <Image src={item.images[2]?.src} alt="Property Image 3" width={400} height={500} className="rounded-2xl w-full h-full" unoptimized={true} />
                        )}
                    </div>
                    <div className="lg:col-span-2 col-span-6">
                        {item?.images && item?.images[3] && (
                            <Image src={item.images[3]?.src} alt="Property Image 4" width={400} height={500} className="rounded-2xl w-full h-full" unoptimized={true} />
                        )}
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-8 mt-10">
                    <div className="lg:col-span-8 col-span-12">
                        <h3 className='text-xl font-medium'>Property details</h3>
                        <div className="py-8 my-8 border-y border-dark/10 dark:border-white/20 flex flex-col gap-8">
                            {slug === 'paddington-works' && (
                                <>
                                    <div className="flex items-center gap-6">
                                        <div>
                                            <Icon icon="ph:buildings" width={32} height={32} className="text-primary" />
                                        </div>
                                        <div>
                                            <h3 className='text-dark dark:text-white text-xm'>Modern Co-working Space</h3>
                                            <p className='text-base text-dark/50 dark:text-white/50'>
                                                Paddington Works is a state-of-the-art co-working space designed for startups and creative businesses.    
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div>
                                            <Icon icon="ph:users-three" width={32} height={32} className="text-primary" />
                                        </div>
                                        <div>
                                            <h3 className='text-dark dark:text-white text-xm'>Collaborative Environment</h3>
                                            <p className='text-base text-dark/50 dark:text-white/50'>
                                                Flexible workspace with dedicated meeting rooms and event areas for professional gatherings.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div>
                                            <Icon icon="ph:map-pin" width={32} height={32} className="text-primary" />
                                        </div>
                                        <div>
                                            <h3 className='text-dark dark:text-white text-xm'>Venue Location</h3>
                                            <p className='text-base text-dark/50 dark:text-white/50'>
                                                {item?.location}
                                            </p>
                                        </div>
                                    </div>
                                </>
                            )}
                            {slug === 'monmouth-coffee' && (
                                <>
                                    <div className="flex items-center gap-6">
                                        <div>
                                            <Icon icon="ph:coffee" width={32} height={32} className="text-primary" />
                                        </div>
                                        <div>
                                            <h3 className='text-dark dark:text-white text-xm'>Premium Coffee Service</h3>
                                            <p className='text-base text-dark/50 dark:text-white/50'>
                                                Monmouth Coffee is renowned for its exceptional coffee quality and artisanal brewing methods.    
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div>
                                            <Icon icon="ph:users" width={32} height={32} className="text-primary" />
                                        </div>
                                        <div>
                                            <h3 className='text-dark dark:text-white text-xm'>Intimate Atmosphere</h3>
                                            <p className='text-base text-dark/50 dark:text-white/50'>
                                                Perfect for small gatherings with a warm, welcoming environment that encourages conversation.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div>
                                            <Icon icon="ph:map-pin" width={32} height={32} className="text-primary" />
                                        </div>
                                        <div>
                                            <h3 className='text-dark dark:text-white text-xm'>Venue Location</h3>
                                            <p className='text-base text-dark/50 dark:text-white/50'>
                                                {item?.location}
                                            </p>
                                        </div>
                                    </div>
                                </>
                            )}
                            {slug === 'the-british-museum' && (
                                <>
                                    <div className="flex items-center gap-6">
                                        <div>
                                            <Icon icon="ph:buildings" width={32} height={32} className="text-primary" />
                                        </div>
                                        <div>
                                            <h3 className='text-dark dark:text-white text-xm'>Historic Museum Venue</h3>
                                            <p className='text-base text-dark/50 dark:text-white/50'>
                                                The British Museum is one of the world's most prestigious cultural institutions and event venues.    
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div>
                                            <Icon icon="ph:users-three" width={32} height={32} className="text-primary" />
                                        </div>
                                        <div>
                                            <h3 className='text-dark dark:text-white text-xm'>Large Capacity Events</h3>
                                            <p className='text-base text-dark/50 dark:text-white/50'>
                                                Accommodates up to 1500 guests in magnificent halls surrounded by world-class exhibits.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div>
                                            <Icon icon="ph:map-pin" width={32} height={32} className="text-primary" />
                                        </div>
                                        <div>
                                            <h3 className='text-dark dark:text-white text-xm'>Venue Location</h3>
                                            <p className='text-base text-dark/50 dark:text-white/50'>
                                                {item?.location}
                                            </p>
                                        </div>
                                    </div>
                                </>
                            )}
                            {slug === 'university-of-surrey' && (
                                <>
                                    <div className="flex items-center gap-6">
                                        <div>
                                            <Icon icon="ph:graduation-cap" width={32} height={32} className="text-primary" />
                                        </div>
                                        <div>
                                            <h3 className='text-dark dark:text-white text-xm'>Academic Excellence</h3>
                                            <p className='text-base text-dark/50 dark:text-white/50'>
                                                University of Surrey is a leading research university with world-class facilities and expertise.    
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div>
                                            <Icon icon="ph:users-three" width={32} height={32} className="text-primary" />
                                        </div>
                                        <div>
                                            <h3 className='text-dark dark:text-white text-xm'>Large Conference Venue</h3>
                                            <p className='text-base text-dark/50 dark:text-white/50'>
                                                Accommodates up to 3000 delegates in state-of-the-art conference facilities and lecture theatres.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div>
                                            <Icon icon="ph:map-pin" width={32} height={32} className="text-primary" />
                                        </div>
                                        <div>
                                            <h3 className='text-dark dark:text-white text-xm'>Venue Location</h3>
                                            <p className='text-base text-dark/50 dark:text-white/50'>
                                                {item?.location}
                                            </p>
                                        </div>
                                    </div>
                                </>
                            )}
                            {slug === 'hyde-park' && (
                                <>
                                    <div className="flex items-center gap-6">
                                        <div>
                                            <Icon icon="ph:tree" width={32} height={32} className="text-primary" />
                                        </div>
                                        <div>
                                            <h3 className='text-dark dark:text-white text-xm'>Historic Royal Park</h3>
                                            <p className='text-base text-dark/50 dark:text-white/50'>
                                                Hyde Park is one of London's most iconic and historic royal parks, spanning 350 acres.    
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div>
                                            <Icon icon="ph:users-three" width={32} height={32} className="text-primary" />
                                        </div>
                                        <div>
                                            <h3 className='text-dark dark:text-white text-xm'>Massive Outdoor Venue</h3>
                                            <p className='text-base text-dark/50 dark:text-white/50'>
                                                Accommodates up to 35,000 people in various outdoor spaces and event areas.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div>
                                            <Icon icon="ph:map-pin" width={32} height={32} className="text-primary" />
                                        </div>
                                        <div>
                                            <h3 className='text-dark dark:text-white text-xm'>Venue Location</h3>
                                            <p className='text-base text-dark/50 dark:text-white/50'>
                                                {item?.location}
                                            </p>
                                        </div>
                                    </div>
                                </>
                            )}
                            {slug === 'google-campus-london' && (
                                <>
                                    <div className="flex items-center gap-6">
                                        <div>
                                            <Icon icon="ph:laptop" width={32} height={32} className="text-primary" />
                                        </div>
                                        <div>
                                            <h3 className='text-dark dark:text-white text-xm'>Tech Innovation Hub</h3>
                                            <p className='text-base text-dark/50 dark:text-white/50'>
                                                Google Campus London is a cutting-edge tech hub designed for startups and innovation.    
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div>
                                            <Icon icon="ph:users-three" width={32} height={32} className="text-primary" />
                                        </div>
                                        <div>
                                            <h3 className='text-dark dark:text-white text-xm'>Modern Event Space</h3>
                                            <p className='text-base text-dark/50 dark:text-white/50'>
                                                Accommodates up to 500 attendees in state-of-the-art conference and event facilities.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div>
                                            <Icon icon="ph:map-pin" width={32} height={32} className="text-primary" />
                                        </div>
                                        <div>
                                            <h3 className='text-dark dark:text-white text-xm'>Venue Location</h3>
                                            <p className='text-base text-dark/50 dark:text-white/50'>
                                                {item?.location}
                                            </p>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="flex flex-col gap-5">
                            {slug === 'paddington-works' && (
                                <>
                                    <p className='text-dark dark:text-white text-xm '>
                                        Paddington Works is a vibrant modern co-working space located in the heart of London's Paddington district. 
                                        This innovative workspace supports startups and creative businesses with flexible office solutions and a 
                                        collaborative environment. The venue offers 60-person capacity with modern amenities, high-speed internet, 
                                        and flexible booking options perfect for events, meetings, and collaborative sessions.
                                    </p>
                                    <p className='text-dark dark:text-white text-xm '>
                                        The space features an open-plan design with natural light streaming through large windows, creating an 
                                        inspiring atmosphere for productivity and creativity. The modern interior includes comfortable seating areas, 
                                        dedicated meeting rooms, and flexible event spaces that can be configured to suit various needs. Whether 
                                        you're hosting a workshop, networking event, or team meeting, Paddington Works provides the perfect setting.
                                    </p>
                                    <p className='text-dark dark:text-white text-xm '>
                                        Located at 8 Hermitage Street, the venue is easily accessible via Paddington Station and offers excellent 
                                        transport links. The surrounding area is home to numerous cafes, restaurants, and amenities, making it 
                                        convenient for attendees. The space is equipped with state-of-the-art presentation equipment, audio-visual 
                                        systems, and reliable Wi-Fi to ensure your events run smoothly.
                                    </p>
                                    <p className='text-dark dark:text-white text-xm '>
                                        With its prime location, modern facilities, and flexible pricing starting at £2000, Paddington Works 
                                        represents excellent value for businesses looking to host professional events in central London. The venue 
                                        is perfect for tech meetups, startup events, creative workshops, and corporate functions.
                                    </p>
                                </>
                            )}
                            {slug === 'monmouth-coffee' && (
                                <>
                                    <p className='text-dark dark:text-white text-xm '>
                                        Monmouth Coffee is a charming and intimate cafe venue located in the heart of Covent Garden, London. 
                                        This beloved coffee shop offers a warm, welcoming atmosphere perfect for small gatherings, coffee meetups, 
                                        and casual networking events. The venue accommodates up to 60 guests with a cozy, rustic interior that 
                                        creates the perfect backdrop for relaxed and productive meetings.
                                    </p>
                                    <p className='text-dark dark:text-white text-xm '>
                                        The space features exposed brick walls, wooden tables, and comfortable seating arrangements that encourage 
                                        conversation and collaboration. The cafe's intimate setting makes it ideal for small workshops, coffee 
                                        tastings, informal business meetings, and creative brainstorming sessions. The natural lighting and 
                                        aromatic coffee atmosphere create an inspiring environment for productivity and connection.
                                    </p>
                                    <p className='text-dark dark:text-white text-xm '>
                                        Situated at 27 Monmouth Street in Covent Garden, the venue is perfectly located in one of London's most 
                                        vibrant cultural districts. The area is easily accessible via multiple transport links and surrounded by 
                                        shops, restaurants, and entertainment venues. The cafe offers excellent coffee and light refreshments, 
                                        making it convenient for attendees to enjoy quality beverages during their events.
                                    </p>
                                    <p className='text-dark dark:text-white text-xm '>
                                        With its affordable pricing of £400, Monmouth Coffee provides excellent value for small-scale events 
                                        and meetings. The venue is perfect for coffee meetups, small networking events, informal workshops, 
                                        and intimate gatherings where a relaxed, cafe atmosphere is desired.
                                    </p>
                                </>
                            )}
                            {slug === 'the-british-museum' && (
                                <>
                                    <p className='text-dark dark:text-white text-xm '>
                                        The British Museum is one of the world's most prestigious cultural institutions and event venues, located 
                                        in the heart of Bloomsbury, London. This magnificent venue offers an unparalleled setting for large-scale 
                                        events, conferences, and cultural gatherings with a capacity of up to 1500 guests. The museum's historic 
                                        halls and galleries provide a truly unique backdrop for memorable events.
                                    </p>
                                    <p className='text-dark dark:text-white text-xm '>
                                        The venue features stunning architectural spaces including the iconic Great Court, with its spectacular 
                                        glass roof designed by Norman Foster, and various historic galleries that can be adapted for different 
                                        event formats. The museum's world-class exhibits and artifacts create an inspiring atmosphere that adds 
                                        cultural significance to any event. Whether hosting a corporate conference, academic symposium, or cultural 
                                        celebration, The British Museum offers an extraordinary setting.
                                    </p>
                                    <p className='text-dark dark:text-white text-xm '>
                                        Located at Great Russell Street in Bloomsbury, the venue is easily accessible via multiple transport links 
                                        including Russell Square, Holborn, and Tottenham Court Road stations. The surrounding area is home to 
                                        numerous academic institutions, hotels, and cultural venues, making it convenient for international 
                                        attendees. The museum provides comprehensive event services including catering, technical support, and 
                                        professional event coordination.
                                    </p>
                                    <p className='text-dark dark:text-white text-xm '>
                                        With its prestigious reputation, historic significance, and flexible pricing starting at £4000, The British 
                                        Museum represents the ultimate venue for high-profile events, international conferences, and cultural 
                                        gatherings. The venue is perfect for academic conferences, corporate events, cultural celebrations, and 
                                        large-scale exhibitions where a world-class setting is required.
                                    </p>
                                </>
                            )}
                            {slug === 'university-of-surrey' && (
                                <>
                                    <p className='text-dark dark:text-white text-xm '>
                                        The University of Surrey is a leading research university located in Guildford, offering world-class 
                                        conference facilities and academic expertise for large-scale events. This prestigious institution provides 
                                        an ideal setting for academic conferences, research symposiums, and educational events with a capacity 
                                        of up to 3000 delegates. The university's modern campus and state-of-the-art facilities create the perfect 
                                        environment for knowledge sharing and collaboration.
                                    </p>
                                    <p className='text-dark dark:text-white text-xm '>
                                        The venue features multiple lecture theatres, conference halls, and seminar rooms equipped with the latest 
                                        audio-visual technology and presentation equipment. The university's research facilities and academic 
                                        expertise across various disciplines make it an ideal location for subject-specific conferences and 
                                        interdisciplinary events. Whether hosting an international academic conference, research symposium, or 
                                        educational workshop, the University of Surrey provides a professional and inspiring setting.
                                    </p>
                                    <p className='text-dark dark:text-white text-xm '>
                                        Located in Guildford, the venue is easily accessible via Guildford Station with excellent rail connections 
                                        to London and the South East. The campus offers comprehensive facilities including accommodation, dining 
                                        options, and recreational spaces, making it convenient for multi-day events and international attendees. 
                                        The university provides professional event management services, technical support, and catering options 
                                        to ensure successful event delivery.
                                    </p>
                                    <p className='text-dark dark:text-white text-xm '>
                                        With its academic excellence, modern facilities, and competitive pricing starting at £15000, the University 
                                        of Surrey represents exceptional value for large-scale academic and educational events. The venue is 
                                        perfect for international conferences, research symposiums, educational workshops, and academic gatherings 
                                        where expertise and professional facilities are paramount.
                                    </p>
                                </>
                            )}
                            {slug === 'hyde-park' && (
                                <>
                                    <p className='text-dark dark:text-white text-xm '>
                                        Hyde Park is one of London's most iconic and historic royal parks, spanning 350 acres in the heart of 
                                        the capital. This magnificent outdoor venue offers an unparalleled setting for large-scale events, 
                                        festivals, and outdoor gatherings with a capacity of up to 35,000 people. The park's natural beauty, 
                                        historic landmarks, and vast open spaces create the perfect backdrop for memorable outdoor events.
                                    </p>
                                    <p className='text-dark dark:text-white text-xm '>
                                        The venue features multiple event areas including the famous Speaker's Corner, the Serpentine Lake, 
                                        and various open lawns that can accommodate different event formats and sizes. The park's natural 
                                        landscape with mature trees, gardens, and water features provides a stunning setting for outdoor 
                                        concerts, festivals, sporting events, and cultural celebrations. Whether hosting a music festival, 
                                        outdoor conference, or community gathering, Hyde Park offers a truly unique outdoor experience.
                                    </p>
                                    <p className='text-dark dark:text-white text-xm '>
                                        Located in central London, the venue is easily accessible via multiple transport links including Hyde 
                                        Park Corner, Marble Arch, and Knightsbridge stations. The surrounding area is home to numerous hotels, 
                                        restaurants, and cultural attractions, making it convenient for attendees. The park provides essential 
                                        facilities including toilets, food concessions, and emergency services to support large-scale events.
                                    </p>
                                    <p className='text-dark dark:text-white text-xm '>
                                        With its historic significance, natural beauty, and free access, Hyde Park represents exceptional value 
                                        for large-scale outdoor events and community gatherings. The venue is perfect for music festivals, 
                                        outdoor concerts, sporting events, cultural celebrations, and community gatherings where a natural, 
                                        outdoor setting is desired.
                                    </p>
                                </>
                            )}
                            {slug === 'google-campus-london' && (
                                <>
                                    <p className='text-dark dark:text-white text-xm '>
                                        Google Campus London is a cutting-edge tech hub and innovation center located in the heart of London's 
                                        vibrant Shoreditch district. This state-of-the-art venue offers an ideal setting for tech events, 
                                        startup gatherings, and innovation conferences with a capacity of up to 500 attendees. The campus's 
                                        modern design and tech-focused environment create the perfect backdrop for digital innovation and 
                                        entrepreneurial collaboration.
                                    </p>
                                    <p className='text-dark dark:text-white text-xm '>
                                        The venue features multiple event spaces including conference rooms, presentation areas, and collaborative 
                                        workspaces equipped with the latest technology and presentation equipment. The campus's innovative 
                                        atmosphere, with its modern design and tech-inspired interiors, provides an inspiring environment for 
                                        hackathons, tech meetups, startup pitch events, and innovation workshops. Whether hosting a coding 
                                        bootcamp, tech conference, or startup networking event, Google Campus London offers a truly immersive 
                                        tech experience.
                                    </p>
                                    <p className='text-dark dark:text-white text-xm '>
                                        Located at 4-5 Bonhill Street in Shoreditch, the venue is easily accessible via multiple transport links 
                                        including Old Street, Liverpool Street, and Shoreditch High Street stations. The surrounding area is 
                                        home to numerous tech startups, creative agencies, and innovative businesses, making it the perfect 
                                        location for tech-focused events. The campus provides comprehensive tech facilities including high-speed 
                                        internet, presentation equipment, and collaborative spaces to support innovative events.
                                    </p>
                                    <p className='text-dark dark:text-white text-xm '>
                                        With its tech innovation focus, modern facilities, and competitive pricing starting at £1500, Google 
                                        Campus London represents exceptional value for tech events and startup gatherings. The venue is perfect 
                                        for hackathons, tech conferences, startup pitch events, coding workshops, and innovation meetups where 
                                        cutting-edge technology and entrepreneurial spirit are paramount.
                                    </p>
                                </>
                            )}
                        </div>
                        <div className="py-8 mt-8 border-t border-dark/5 dark:border-white/15">
                            {item?.amenities && <AmenitiesDisplay amenities={item.amenities} />}
                        </div>
                        <iframe
                            src={`https://www.google.com/maps?q=${encodeURIComponent(item?.location ?? '')}&output=embed`}
                            width="1114"
                            height="400"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-2xl w-full"
                            title="Venue Location"
                        ></iframe>
                    </div>
                    <div className="lg:col-span-4 col-span-12">
                        <div className="bg-primary/10 p-8 rounded-2xl relative z-10 overflow-hidden">
                            <h4 className='text-dark text-3xl font-medium dark:text-white'>
                                £{item?.price}
                            </h4>
                            <p className='text-sm text-dark/50 dark:text-white'>Discounted Price</p>
                            <button 
                                onClick={handleBookVenue}
                                className='py-4 px-8 bg-primary text-white rounded-full w-full block text-center hover:bg-dark duration-300 text-base mt-8 hover:cursor-pointer'>
                                Book Venue
                            </button>
                            <div className="absolute right-0 top-4 -z-[1]">
                                <Image src="/images/properties/vector.svg" width={400} height={500} alt="vector" unoptimized={true} />
                            </div>
                        </div>
                        {testimonials.filter(t => t.slug === item?.slug).map((review, index) => (
                            <div key={index} className="border p-10 rounded-2xl border-dark/10 dark:border-white/20 mt-10 flex flex-col gap-6">
                                <Icon icon="ph:house-simple" width={44} height={44} className="text-primary" />
                                <p className='text-xm text-dark dark:text-white'>{review.review}</p>
                                <div className="flex items-center gap-4 mt-4">
                                    <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full object-cover" />
                                    <div>
                                        <span className="block font-semibold text-dark dark:text-white">{review.name}</span>
                                        <span className="block text-xs text-dark/50 dark:text-white/50">{review.position}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {isBookingModalOpen && item && (
                <VenueBookingModal
                    isOpen={isBookingModalOpen}
                    onClose={handleCloseModal}
                    venue={item}
                />
            )}
        </section>
    );
}
