'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import APPETIZERS from '@/assets/images/category/APPETIZERS.png';
import BREAD from '@/assets/images/category/BREAD.png';
import SHAWARMA from '@/assets/images/category/SHAWARMA.png';
import CHINESE from '@/assets/images/category/CHINESE.png';
import CURRY from '@/assets/images/category/CURRY.png';
import DAY from '@/assets/images/category/DAY.png';
import GRILL from '@/assets/images/category/GRILL.png';
import PASTAS from '@/assets/images/category/PASTAS.png';
import REFRESHMENTS from '@/assets/images/category/REFRESHMENTS.png';
import RICE from '@/assets/images/category/RICE.png';
import SALADS from '@/assets/images/category/SALADS.png';
import SOUP from '@/assets/images/category/SOUP.png';
import SWEETS from '@/assets/images/category/SWEETS.png';
import pangaiaBold from '@/app/fonts/pangaiaBold';
import zcoolBold from '@/app/fonts/zcoolBold';

const dishes = [
    {
        category: 'APPETIZERS',
        href: '/dine-in#appetizers',
        image: { src: APPETIZERS, alt: 'APPETIZERS' },
        qty: 9,
    },
    {
        category: 'BREAD',
        href: '/dine-in#bread',
        image: { src: BREAD, alt: 'BREAD' },
        qty: 3,
    },
    {
        category: 'SHAWARMA',
        href: '/dine-in#burger-&-shawarma',
        image: { src: SHAWARMA, alt: 'SHAWARMA' },
        qty: 10,
    },
    {
        category: 'CHINESE',
        href: '/dine-in#chinese',
        image: { src: CHINESE, alt: 'CHINESE' },
        qty: 13,
    },
    {
        category: 'CURRY',
        href: '/dine-in#curry-items',
        image: { src: CURRY, alt: 'CURRY' },
        qty: 22,
    },
    {
        category: 'DAILY',
        href: '/dine-in#dish-of-the-day',
        image: { src: DAY, alt: 'DAY' },
        qty: 3,
    },
    {
        category: 'GRILL',
        href: '/dine-in#grill',
        image: { src: GRILL, alt: 'GRILL' },
        qty: 22,
    },
    {
        category: 'PASTAS',
        href: '/dine-in#pastas',
        image: { src: PASTAS, alt: 'PASTAS' },
        qty: 6,
    },
    // {
    //     category: 'REFRESHING',
    //     href: '/dine-in#refreshments',
    //     image: { src: REFRESHMENTS, alt: 'REFRESHMENTS' },
    //     qty: 8,
    // },
    {
        category: 'RICE',
        href: '/dine-in#rice',
        image: { src: RICE, alt: 'RICE' },
        qty: 18,
    },
    {
        category: 'SALADS',
        href: '/dine-in#salads',
        image: { src: SALADS, alt: 'SALADS' },
        qty: 12,
    },
    {
        category: 'SOUP',
        href: '/dine-in#soup',
        image: { src: SOUP, alt: 'SOUP' },
        qty: 6,
    },
    {
        category: 'SWEETS',
        href: '/dine-in#sweets',
        image: { src: SWEETS, alt: 'SWEETS' },
        qty: 4,
    },
];

const OPTIONS = { align: 'start', loop: true };

function SectionHeader({ sub, main }) {
    return (
        <div className='flex flex-col items-center'>
            <span className='text-red-600 font-semibold mb-2'>- {sub} -</span>
            <h1
                className={`text-4xl md:text-5xl font-bold text-gray-900  text-center ${pangaiaBold.className}`}
            >
                {main}
            </h1>
        </div>
    );
}

function DishCard({ dish, index, hoveredDishCard, setHoveredDishCard }) {
    return (
        <div
            className='flex-[0_0_45%] sm:flex-[0_0_33.333%] md:flex-[0_0_25%] lg:flex-[0_0_20%] min-w-0 p-2 max-w-[200px]'
            onMouseEnter={() => setHoveredDishCard(index)}
            onMouseLeave={() => setHoveredDishCard(false)}
        >
            <Link href={dish.href}>
                <div className='bg-gradient-to-t from-white to-[#F4EFE3] rounded-3xl flex flex-col items-center justify-center gap-1.5 h-full py-4 px-2'>
                    <div className='w-full flex-1'>
                        <Image
                            src={dish.image.src}
                            alt={dish.image.alt}
                            width={80}
                            height={80}
                            className='w-full h-auto'
                            unoptimized
                        />
                    </div>
                    <div
                        className={`bg-[#D12525] h-0.5 rounded-full my-2 duration-300 ${
                            hoveredDishCard === index ? 'w-[50%]' : 'w-10'
                        }`}
                    ></div>
                    <h2
                        className={`transition-colors font-bold tracking-widest text-xl duration-300 ${
                            zcoolBold.className
                        } ${
                            hoveredDishCard === index
                                ? 'text-[#D12525]'
                                : 'text-black'
                        }`}
                    >
                        {dish.category}
                    </h2>
                    <p
                        className={`font-semibold text-xs duration-300 ${
                            hoveredDishCard === index
                                ? 'text-black'
                                : 'text-[#D12525]'
                        } `}
                    >
                        {dish.qty} PRODUCTS
                    </p>
                </div>
            </Link>
        </div>
    );
}

function EmblaCarousel({ dishes, options }) {
    const [emblaRef] = useEmblaCarousel(options, [Autoplay({ delay: 3000 })]);
    const [hoveredDishCard, setHoveredDishCard] = useState(false);

    return (
        <div className='overflow-hidden w-full' ref={emblaRef}>
            <div className='flex'>
                {dishes.map((dish, index) => (
                    <DishCard
                        dish={dish}
                        index={index}
                        key={index}
                        hoveredDishCard={hoveredDishCard}
                        setHoveredDishCard={setHoveredDishCard}
                    />
                ))}
            </div>
        </div>
    );
}

export default function ImprovedDishCarousel() {
    return (
        <div className='feather-shadow-sm md:feather-shadow-md lg:feather-shadow-lg flex flex-col items-center gap-8 px-4 sm:px-6 md:px-8 lg:px-12 w-full'>
            <SectionHeader sub='DINE-IN MENU' main='Categories' />
            <EmblaCarousel dishes={dishes} options={OPTIONS} />
        </div>
    );
}
