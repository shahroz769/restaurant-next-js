'use client';

import Image from 'next/image';
import menuIcon from '@/assets/images/menu.png';
import menuDishes from '@/menuDishes';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import pangaiaBold from '@/app/fonts/pangaiaBold';
import pangaiaMedium from '@/app/fonts/pangaiaMedium';

const menuNavigation = [
    { name: 'Menu 1', key: 'menu1', icon: menuIcon },
    { name: 'Menu 2', key: 'menu2', icon: menuIcon },
    { name: 'Menu 3', key: 'menu3', icon: menuIcon },
    { name: 'Menu 4', key: 'menu4', icon: menuIcon },
    { name: 'Menu 5', key: 'menu5', icon: menuIcon },
];

const truncate = (str, maxLength) => {
    if (str.length <= maxLength) {
        return str;
    }

    const lastSpaceIndex = str.lastIndexOf(' ', maxLength);
    return str.substring(0, lastSpaceIndex) + '...';
};

export default function CateringMenu({ location }) {
    const [selectedMenu, setSelectedMenu] = useState('menu1');

    const handleMenuClick = (key) => {
        setSelectedMenu(key);
    };

    return (
        <div className='w-full bg-white'>
            <div className='container max-w-6xl mx-auto px-4 py-6'>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='text-center mb-8'
                >
                    <p className='text-red-600 font-semibold mb-2'>
                        - Choose delicious -
                    </p>
                    <h1
                        className={`text-4xl md:text-5xl font-bold text-gray-900 ${pangaiaBold.className}`}
                    >
                        Catering Menu
                    </h1>
                </motion.div>
                <div className='flex flex-wrap justify-center gap-2 md:gap-4 w-full mb-8'>
                    {menuNavigation.map(({ name, key }) => (
                        <motion.div
                            key={key}
                            whileTap={{ scale: 0.95 }}
                            className='relative'
                        >
                            <button
                                onClick={() => handleMenuClick(key)}
                                className={`px-4 py-2 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ${
                                    selectedMenu === key
                                        ? 'bg-slate-800 text-white'
                                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                }`}
                            >
                                {name}
                            </button>
                        </motion.div>
                    ))}
                </div>
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={selectedMenu}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {Object.entries(menuDishes[selectedMenu]).map(
                            ([category, dishes]) => (
                                <div key={category} className='mb-8'>
                                    <h2
                                        className={`text-2xl font-bold text-gray-900 mb-8 capitalize text-center ${pangaiaMedium.className}`}
                                    >
                                        {category}
                                    </h2>
                                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                                        {dishes.map((dish, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{
                                                    duration: 0.3,
                                                    delay: index * 0.1,
                                                }}
                                                className='flex gap-6 bg-slate-50 p-4 rounded-lg shadow-sm'
                                            >
                                                <div className='flex-shrink-0'>
                                                    <Image
                                                        src={dish.image}
                                                        alt={dish.alt}
                                                        width={80}
                                                        height={80}
                                                        className='rounded-full object-cover'
                                                    />
                                                </div>
                                                <div className='flex flex-col justify-center w-full'>
                                                    <div className='flex items-center justify-between gap-2 mb-2'>
                                                        <h3 className='text-lg font-semibold text-gray-900'>
                                                            {dish.engName}
                                                        </h3>
                                                        <div className='flex-grow border-t border-dashed border-gray-400 mx-2'></div>
                                                    </div>
                                                    <p className='text-sm text-gray-600'>
                                                        {truncate(
                                                            dish.description,
                                                            75
                                                        )}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
