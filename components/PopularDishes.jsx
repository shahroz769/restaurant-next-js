'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import dishImg from '@/assets/images/bg.avif';
import pangaiaBold from '@/app/fonts/pangaiaBold';

const dishes = [
    {
        name: 'Mixed Grill',
        image: 'https://res.cloudinary.com/doigzeztt/image/upload/v1736789034/Caltec_Customers/29.jpg',
        ingredients: ['Malai Boti', 'Sheesh Tawouk', 'Kabab'],
        price: '4.0 AED',
    },
    {
        name: 'Chicken Shashlik with Rice',
        image: 'https://res.cloudinary.com/doigzeztt/image/upload/v1736789042/Caltec_Customers/35.jpg',
        ingredients: ['Chicken Shashlik', 'Rice'],
        price: '2.0 AED',
    },
    {
        name: 'Lamb Chops',
        image: 'https://res.cloudinary.com/doigzeztt/image/upload/v1736789055/Caltec_Customers/46.jpg',
        ingredients: ['Lamb Meat', 'Spices', 'Sauce'],
        price: '6.5 AED',
    },
    {
        name: 'Garlic Prawn with Rice',
        image: 'https://res.cloudinary.com/doigzeztt/image/upload/v1736789066/Caltec_Customers/57.jpg',
        ingredients: ['Garlic', 'Prawn', 'Rice'],
        price: '3.2 AED',
    },
    {
        name: 'Mixed Chowmein',
        image: 'https://res.cloudinary.com/doigzeztt/image/upload/v1736789076/Caltec_Customers/67.jpg',
        ingredients: ['Chicken', 'Vegetables'],
        price: '1.8 AED',
    },
    {
        name: 'Mutton Kadahi',
        image: 'https://res.cloudinary.com/doigzeztt/image/upload/v1736789083/Caltec_Customers/74.jpg',
        ingredients: ['Mutton', 'Tomatoes', 'Spices'],
        price: '2.5 AED',
    },
    {
        name: 'Chicken Oriental Masala',
        image: 'https://res.cloudinary.com/doigzeztt/image/upload/v1736789093/Caltec_Customers/84.jpg',
        ingredients: ['Chicken', 'Spices'],
        price: '2.2 AED',
    },
    {
        name: 'Mutton Dum Pukht Biryani',
        image: 'https://res.cloudinary.com/doigzeztt/image/upload/v1736789105/Caltec_Customers/95.jpg',
        ingredients: ['Mutton', 'Rice'],
        price: '5.0 AED',
    },
    {
        name: 'Chicken Mandi',
        image: 'https://res.cloudinary.com/doigzeztt/image/upload/v1736788977/Caltec_Customers/101.jpg',
        ingredients: ['Chicken', 'Rice'],
        price: '5.8 AED',
    },
    {
        name: 'Lamb Burger',
        image: 'https://res.cloudinary.com/doigzeztt/image/upload/v1736788996/Caltec_Customers/116.jpg',
        ingredients: ['Lamb', 'Bun', 'Fries', 'Sauce', 'Cheese', 'Vegetables'],
        price: '1.5 AED',
    },
    {
        name: 'Sheesh Tawouk Sandwich',
        image: 'https://res.cloudinary.com/doigzeztt/image/upload/v1736789002/Caltec_Customers/121.jpg',
        ingredients: ['Chicken', 'Bread', 'Vegetables'],
        price: '0.8 AED',
    },
    {
        name: 'Um Ali',
        image: "https://res.cloudinary.com/doigzeztt/image/upload/v1736789016/Caltec_Customers/133.jpg",
        ingredients: ['Puff', 'Milk', 'Nuts'],
        price: '0.8 AED',
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
                    className={`text-4xl md:text-5xl font-bold text-gray-900 ${pangaiaBold.className}`}
                >
                    Popular Dishes
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
