'use client';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import TestimonialImage1 from '@/assets/images/testimonials/testimonial1.avif';
import TestimonialImage2 from '@/assets/images/testimonials/testimonial2.avif';
import TestimonialImage3 from '@/assets/images/testimonials/testimonial3.avif';
import pangaiaBold from '@/app/fonts/pangaiaBold';
import pangaiaMedium from '@/app/fonts/pangaiaMedium';

const testimonials = [
    {
        quote: 'The best restaurant',
        content:
            'Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.',
        author: 'Sophire Robson',
        location: 'Los Angeles, CA',
        image: TestimonialImage1,
    },
    {
        quote: 'Simply delicious',
        content:
            'Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.',
        author: 'Jack Doe',
        location: 'Los Angeles, CA',
        image: TestimonialImage2,
    },
    {
        quote: 'One of a kind restaurant',
        content:
            'The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.',
        author: 'Sophire Robson',
        location: 'Los Angeles, CA',
        image: TestimonialImage3,
    },
    {
        quote: 'Exceptional dining experience',
        content:
            "Every visit to this restaurant is a treat. The menu is diverse, the flavors are bold, and the presentation is always Instagram-worthy. It's become our go-to spot for special occasions.",
        author: 'Emma Thompson',
        location: 'New York, NY',
        image: TestimonialImage1,
    },
    {
        quote: 'A culinary journey',
        content:
            "From appetizers to desserts, each dish tells a story. The chef's creativity shines through in every bite. The attentive staff and cozy ambiance make for an unforgettable dining experience.",
        author: 'Michael Chen',
        location: 'San Francisco, CA',
        image: TestimonialImage2,
    },
    {
        quote: 'Hidden gem',
        content:
            "I stumbled upon this place by chance, and it's now my favorite restaurant in the city. The fusion of flavors is unlike anything I've tasted before. A must-visit for food enthusiasts!",
        author: 'Sarah Johnson',
        location: 'Chicago, IL',
        image: TestimonialImage3,
    },
];

const TestimonialCard = ({ quote, content, author, location, image }) => (
    <div className='bg-gray-50 p-6 rounded-lg flex flex-col h-full mx-4 w-[400px]'>
        <div className='flex-grow'>
            <h3
                className={`text-gray-800 text-xl font-semibold mb-4 text-center ${pangaiaMedium.className}`}
            >{`"${quote}"`}</h3>
            <p className='text-gray-600'>{content}</p>
        </div>
        <div className='mt-6 pt-6 border-t border-gray-200'>
            <div className='flex items-center'>
                <Image
                    src={image}
                    alt={author}
                    width={60}
                    height={60}
                    className='rounded-full h-16 w-16 object-cover mr-4'
                    placeholder='blur'
                />
                <div>
                    <p className='font-semibold text-gray-800'>{author}</p>
                    <p className='text-gray-600 text-sm'>{location}</p>
                </div>
            </div>
        </div>
    </div>
);

export default function InfiniteTestimonials() {
    const [isHovered, setIsHovered] = useState(false);
    const scrollRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        const scrollWidth = scrollContainer.scrollWidth;
        const clientWidth = scrollContainer.clientWidth;

        let animationFrameId;
        let lastTimestamp = 0;
        const speed = 50;

        const step = (timestamp) => {
            if (!lastTimestamp) lastTimestamp = timestamp;
            const deltaTime = timestamp - lastTimestamp;

            if (!isHovered) {
                setScrollPosition((prevPosition) => {
                    const newPosition =
                        prevPosition + (speed * deltaTime) / 1000;
                    return newPosition > scrollWidth / 2 ? 0 : newPosition;
                });
            }

            lastTimestamp = timestamp;
            animationFrameId = requestAnimationFrame(step);
        };

        animationFrameId = requestAnimationFrame(step);

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [isHovered]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft = scrollPosition;
        }
    }, [scrollPosition]);

    return (
        <section className='py-16 px-4 w-full mx-auto feather-shadow-sm md:feather-shadow-md lg:feather-shadow-lg'>
            <div className='container mx-auto max-w-4xl text-center mb-12'>
                <span className='text-red-600 font-semibold mb-2 inline-block'>
                    - Testimonials -
                </span>
                <h2
                    className={`text-4xl md:text-5xl font-bold text-gray-900 ${pangaiaBold.className}`}
                >
                    What Our Customers Say
                </h2>
            </div>
            <div
                className='overflow-hidden'
                ref={scrollRef}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className='flex'>
                    {[...testimonials, ...testimonials].map(
                        (testimonial, index) => (
                            <div key={index} className='flex-shrink-0'>
                                <TestimonialCard {...testimonial} />
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}
