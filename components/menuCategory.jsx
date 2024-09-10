'use client';

import Image from 'next/image';
import { menuItems } from '@/menuData';
import DummyImage from '@/assets/images/dummy.png';

function MenuCategoryTitle({ categoryTitle }) {
    const id = categoryTitle.toLowerCase().replace(/\s+/g, '-');

    return (
        <div id={id} className='flex items-center gap-4 w-full'>
            <h2 className='text-xl md:text-2xl font-bold whitespace-nowrap'>
                {categoryTitle}
            </h2>
            <div className='h-px w-full bg-gray-300' />
        </div>
    );
}

function MenuItem({ menuItem }) {
    return (
        <div className='flex flex-row items-center overflow-hidden w-full rounded-lg cursor-pointer hover:bg-[#01010111] transition-colors duration-200 group'>
            <div className='relative w-32 h-32 flex-shrink-0 overflow-hidden rounded-lg'>
                <Image
                    src={DummyImage}
                    alt={menuItem.engName}
                    className='object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105'
                    width={128}
                    height={128}
                    placeholder='blur'
                />
            </div>
            <div className='p-4 flex flex-col gap-2 w-full'>
                <h3 className='text-lg md:text-xl font-semibold text-gray-800'>
                    {menuItem.engName}
                </h3>
                <p className='text-sm md:text-base text-gray-600 leading-snug'>
                    {menuItem.description}
                </p>
                <p className='text-sm md:text-base font-bold text-gray-800'>
                    {Number(menuItem.price).toFixed(3)} AED
                </p>
            </div>
        </div>
    );
}

export default function MenuCategory({ category }) {
    return (
        <section className='w-full px-4 md:px-6 lg:px-8 my-6 md:my-8 lg:my-12'>
            <div className='max-w-7xl mx-auto flex flex-col gap-6 md:gap-8'>
                <MenuCategoryTitle categoryTitle={category} />
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8'>
                    {menuItems
                        .filter((menuItem) => menuItem.category === category)
                        .map((menuItem, index) => (
                            <MenuItem key={index} menuItem={menuItem} />
                        ))}
                </div>
            </div>
        </section>
    );
}
