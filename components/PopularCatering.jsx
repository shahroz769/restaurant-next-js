'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import pangaiaBold from '@/app/fonts/pangaiaBold';
import biryani from '@/assets/images/catering/biryani.jpg';
import chicken_kebab from '@/assets/images/catering/chicken_kebab.jpg';
import fish_grill from '@/assets/images/catering/fish_grill.jpg';
import grill_lobster from '@/assets/images/catering/grill_lobster.jpg';
import kebab_rice from '@/assets/images/catering/kebab_rice.jpg';
import mandi from '@/assets/images/catering/mandi.jpg';

const dishes = [
    {
        name: 'Biryani',
        image: biryani,
    },
    {
        name: 'Chicken Kebab',
        image: chicken_kebab,
    },
    {
        name: 'Whole Grilled Fish Hamoor',
        image: fish_grill,
    },
    {
        name: 'Grilled Lobster',
        image: grill_lobster,
    },
    {
        name: 'Turkish Kabab with Rice',
        image: kebab_rice,
    },
    {
        name: 'Mandi',
        image: mandi,
    },
];

export default function PopularCatering() {
    const [emblaRef] = useEmblaCarousel({ loop: true, align: 'center' }, [
        Autoplay({ delay: 3000 }),
    ]);

    return (
        <div className='mx-auto py-12'>
            <div className='text-center mb-8'>
                <p className='text-red-600 font-semibold mb-2'>
                    - POPULAR DISHES -
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
                                        src={dish.image}
                                        alt={dish.name}
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
