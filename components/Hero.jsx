'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Hero1 from '@/assets/images/hero1.avif';
import Hero2 from '@/assets/images/hero2.avif';
import Hero3 from '@/assets/images/hero3.avif';
import pangaiaBold from '@/app/fonts/pangaiaBold';

const images = [Hero1, Hero2, Hero3];

const texts = [
    {
        title: 'Start eating healthy',
        subtitle:
            'Providing expert advice and personalized plans to help you achieve your health and wellness goals.',
    },
    {
        title: 'Transform your diet',
        subtitle:
            'Discover the power of nutritious meals tailored to your unique needs and preferences.',
    },
    {
        title: 'Fuel your body right',
        subtitle:
            'Learn how to nourish your body with the right balance of nutrients for optimal health and vitality.',
    },
];

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className='relative h-screen mb-4'>
            <AnimatePresence initial={false}>
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className='absolute inset-0'
                >
                    <Image
                        src={images[currentIndex]}
                        alt='Hero background'
                        fill
                        style={{ objectFit: 'cover' }}
                        quality={100}
                        priority
                    />
                </motion.div>
            </AnimatePresence>
            <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
                <div className='text-center text-white px-4'>
                    <motion.h1
                        key={`title-${currentIndex}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className={`text-4xl md:text-6xl font-bold mb-4 ${pangaiaBold.className}`}
                    >
                        {texts[currentIndex].title}
                    </motion.h1>
                    <motion.p
                        key={`subtitle-${currentIndex}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className='text-xl md:text-2xl mb-8 max-w-2xl mx-auto'
                    >
                        {texts[currentIndex].subtitle}
                    </motion.p>
                    <Link
                        href='/contact'
                        className='bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300'
                    >
                        Contact us
                    </Link>
                </div>
            </div>
        </div>
    );
}
