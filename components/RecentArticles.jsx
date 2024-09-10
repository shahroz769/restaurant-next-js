'use client';

import React from 'react';
import Image from 'next/image';
import ArticleImg from '@/assets/images/bg.avif';
import pangaiaBold from '@/app/fonts/pangaiaBold';

const articles = [
    {
        title: 'NEVER EAT MORE THAN YOU CAN LIFE.',
        image: ArticleImg,
    },
    {
        title: 'LIFE IS UNCERTAIN EAT DESSERT FIRST.',
        image: ArticleImg,
    },
    {
        title: "FOOD SIMPLY ISN'T IMPORTANT TO ME.",
        image: ArticleImg,
    },
];

const ArticleCard = ({ title, image }) => (
    <div className='relative overflow-hidden rounded-lg group cursor-pointer'>
        <Image
            src={image}
            alt={title}
            width={600}
            height={280}
            className='w-full h-[280px] object-cover brightness-75 transition-transform duration-700 group-hover:scale-110 group-hover:brightness-50'
            placeholder='blur'
        />
        <div className='absolute inset-0 flex flex-col justify-between p-8'>
            <div className='cursor-pointer bg-white outline-white outline-1 group-hover:bg-transparent group-hover:outline group-hover:text-white text-black text-xs font-semibold py-1.5 px-2.5 rounded-full w-fit'>
                RESTAURANT
            </div>
            <h3 className='text-white w-full max-w-52 text-xl font-bold leading-tight'>
                {title}
            </h3>
        </div>
    </div>
);

export default function RecentArticles() {
    return (
        <section className='py-8 px-4'>
            <div className='max-w-6xl mx-auto'>
                <div className='text-center mb-12'>
                    <p className='text-red-600 font-semibold mb-2'>
                        - FROM OUR BLOG -
                    </p>
                    <h2
                        className={`text-4xl md:text-5xl font-bold text-gray-900 ${pangaiaBold.className}`}
                    >
                        Recent Articles
                    </h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {articles.map((article, index) => (
                        <ArticleCard key={index} {...article} />
                    ))}
                </div>
            </div>
        </section>
    );
}
