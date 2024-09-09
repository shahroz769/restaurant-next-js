'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import dishImg from '@/assets/images/bg.avif';
import pangaiaBold from '@/app/fonts/pangaiaBold';

const dishes = [
    {
        name: 'Sheesh Tawouk',
        image: dishImg,
        ingredients: ['Chicken', 'Spices', 'Yoghurt'],
        price: '$5.00',
    },
    {
        name: 'Chicken Biryani',
        image: dishImg,
        ingredients: ['Chicken', 'Rice', 'Biryani Masala'],
        price: '$5.00',
    },
    {
        name: 'Meat Kabab',
        image: dishImg,
        ingredients: ['Ground Meat', 'Spices', 'Onions'],
        price: '$5.00',
    },
    {
        name: 'Prawn Tempura',
        image: dishImg,
        ingredients: ['Prawns', 'Tempura Batter', 'Soy Sauce'],
        price: '$5.00',
    },
    {
        name: 'Chicken Manchurian',
        image: dishImg,
        ingredients: ['Chicken', 'Manchurian Sauce', 'Bell Peppers'],
        price: '$5.00',
    },
    {
        name: 'Um Ali',
        image: dishImg,
        ingredients: ['Puff Pastry', 'Milk', 'Nuts'],
        price: '$5.00',
    },
    {
        name: 'Ras Malai',
        image: dishImg,
        ingredients: ['Cheese Balls', 'Milk', 'Cardamom'],
        price: '$5.00',
    },
    {
        name: 'Chicken Spring Roll',
        image: dishImg,
        ingredients: ['Chicken', 'Spring Roll Wrapper', 'Vegetables'],
        price: '$5.00',
    },
    {
        name: 'Green Chicken Tikka',
        image: dishImg,
        ingredients: ['Chicken', 'Green Masala', 'Yoghurt'],
        price: '$5.00',
    },
    {
        name: 'Shami Kabab',
        image: dishImg,
        ingredients: ['Ground Meat', 'Lentils', 'Spices'],
        price: '$5.00',
    },
    {
        name: 'Beef Steak',
        image: dishImg,
        ingredients: ['Beef', 'Pepper Sauce', 'Garlic'],
        price: '$5.00',
    },
    {
        name: 'Mixed Cup Sweets',
        image: dishImg,
        ingredients: ['Cream', 'Biscuits', 'Chocolate'],
        price: '$5.00',
    },
];

export default function PopularDishes() {
    const [emblaRef] = useEmblaCarousel({ loop: true, align: 'center' }, [
        Autoplay({ delay: 3000 }),
    ]);

    return (
        <div className='mx-auto py-12'>
            <div className='text-center mb-8'>
                <p className='text-red-600 font-semibold mb-2'>
                    - SPECIALS CHOICE -
                </p>
                <h2
                    className={`text-4xl font-bold text-gray-900 ${pangaiaBold.className}`}
                >
                    Popular Dishes
                </h2>
            </div>
            <div className='overflow-hidden feather-shadow' ref={emblaRef}>
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
                                    />
                                    <div className='absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                        <div className='w-24 h-24 flex flex-col items-center justify-center bg-white rounded-full shadow-lg transform scale-0 transition-transform duration-300 group-hover:scale-100'>
                                            <p className='text-gray-900 text-sm font-bold'>
                                                JUST
                                            </p>
                                            <p className='text-gray-900 text-lg font-bold'>
                                                {dish.price}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <h3 className='text-[#383632] text-xl text-center font-semibold mb-2'>
                                    {dish.name}
                                </h3>
                                <p className='text-[#8D8987] text-center text-base font-semibold mb-2'>
                                    {dish.ingredients.join(' • ')}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
