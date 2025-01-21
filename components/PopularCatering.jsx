'use client';

import React, { useMemo } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import pangaiaBold from '@/app/fonts/pangaiaBold';
import image1 from '@/assets/images/event_buffet/1.jpg';
import image2 from '@/assets/images/event_buffet/2.jpg';
import image3 from '@/assets/images/event_buffet/3.jpg';
import image4 from '@/assets/images/event_buffet/4.jpg';
import image5 from '@/assets/images/event_buffet/5.jpg';
import image6 from '@/assets/images/event_buffet/6.jpg';
import image7 from '@/assets/images/event_buffet/7.jpg';
import image8 from '@/assets/images/event_buffet/8.jpg';
import image9 from '@/assets/images/event_buffet/9.jpg';
import image10 from '@/assets/images/event_buffet/10.jpg';
import image11 from '@/assets/images/event_buffet/11.jpg';
import image12 from '@/assets/images/event_buffet/12.jpg';
import image13 from '@/assets/images/event_buffet/13.jpg';
import image14 from '@/assets/images/event_buffet/14.jpg';
import image15 from '@/assets/images/event_buffet/15.jpg';
import image16 from '@/assets/images/event_buffet/16.jpg';
import image17 from '@/assets/images/event_buffet/17.jpg';
import image18 from '@/assets/images/event_buffet/18.jpg';
import image19 from '@/assets/images/event_buffet/19.jpg';

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

export default function PopularCatering() {
    const [emblaRef] = useEmblaCarousel({ loop: true, align: 'center' }, [
        Autoplay({ delay: 3000 }),
    ]);

    const dishes = useMemo(
        () =>
            shuffleArray([
                { image: image1 },
                { image: image2 },
                { image: image3 },
                { image: image4 },
                { image: image5 },
                { image: image6 },
                { image: image7 },
                { image: image8 },
                { image: image9 },
                { image: image10 },
                { image: image11 },
                { image: image12 },
                { image: image13 },
                { image: image14 },
                { image: image15 },
                { image: image16 },
                { image: image17 },
                { image: image18 },
                { image: image19 },
            ]),
        []
    );

    return (
        <div className='mx-auto py-12'>
            <div className='text-center mb-8'>
                <p className='text-red-600 font-semibold mb-2'>
                    - EVENTS - BUFFET -
                </p>
                <h2
                    className={`text-4xl md:text-5xl font-bold text-gray-900 ${pangaiaBold.className}`}
                >
                    Catering
                </h2>
            </div>
            <div
                className='overflow-hidden feather-shadow-sm md:feather-shadow-md lg:feather-shadow-lg'
                ref={emblaRef}
            >
                <div className='flex'>
                    {dishes.map((dish, index) => (
                        <div
                            key={index}
                            className='flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] pl-4 cursor-pointer'
                        >
                            <div className='overflow-hidden group'>
                                <div className='relative h-52 sm:h-72 mb-4 overflow-hidden'>
                                    <Image
                                        src={dish.image || '/placeholder.svg'}
                                        fill
                                        className='object-cover rounded-md transition-all duration-300 group-hover:scale-110 group-hover:brightness-50'
                                        unoptimized
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
