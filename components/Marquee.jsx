import React from 'react';
import Image from 'next/image';
import burgerImage from '@/assets/images/burger.png';
import pizzaImage from '@/assets/images/pizza.png';

const words = [
    {
        text: 'Experience',
        style: 'text-[100px] font-bold text-black leading-[100px]',
    },
    {
        text: 'Delicious',
        style: 'text-[100px] font-bold text-black leading-[100px]',
    },
    {
        text: 'Arabic',
        style: 'text-[100px] font-bold text-black leading-[100px]',
    },
    {
        text: 'Cuisine',
        style: 'text-[100px] font-bold text-black leading-[100px]',
    },
];

const images = [burgerImage, pizzaImage, burgerImage, pizzaImage];

const Divider = ({ imageSrc }) => (
    <Image
        src={imageSrc}
        alt='Divider'
        width={24}
        height={24}
        className='mx-4'
    />
);

export default function Component() {
    return (
        <div className='relative w-full overflow-hidden mb-6'>
            <div className='inline-block whitespace-nowrap animate-infinite-scroll'>
                {[...Array(10)].map((_, i) => (
                    <React.Fragment key={i}>
                        <div className='inline-flex items-center'>
                            {words.map((word, index) => (
                                <React.Fragment key={index}>
                                    <span className={word.style}>
                                        {word.text}
                                    </span>
                                    {index < words.length - 1 && (
                                        <Divider
                                            imageSrc={
                                                images[index % images.length]
                                            }
                                        />
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                        {i < 9 && <div className='inline-block w-32' />}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}
