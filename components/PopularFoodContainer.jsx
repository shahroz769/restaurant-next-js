'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import pangaiaBold from '@/app/fonts/pangaiaBold';
import { Gallery, Item } from 'react-photoswipe-gallery';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import image1 from '@/assets/images/catering_food/1.jpg';
import image2 from '@/assets/images/catering_food/2.jpg';
import image3 from '@/assets/images/catering_food/3.jpg';
import image4 from '@/assets/images/catering_food/4.jpg';
import image5 from '@/assets/images/catering_food/5.jpg';
import image6 from '@/assets/images/catering_food/6.jpg';
import image7 from '@/assets/images/catering_food/7.jpg';
import image8 from '@/assets/images/catering_food/8.jpg';
import image9 from '@/assets/images/catering_food/9.jpg';
import image10 from '@/assets/images/catering_food/10.jpg';
import image11 from '@/assets/images/catering_food/11.jpg';
import image12 from '@/assets/images/catering_food/12.jpg';
import image13 from '@/assets/images/catering_food/13.jpg';
import image14 from '@/assets/images/catering_food/14.jpg';
import image15 from '@/assets/images/catering_food/15.jpg';
import image16 from '@/assets/images/catering_food/16.jpg';
import image17 from '@/assets/images/catering_food/17.jpg';
import image18 from '@/assets/images/catering_food/18.jpg';
import image19 from '@/assets/images/catering_food/19.jpg';
import image20 from '@/assets/images/catering_food/20.jpg';
import image21 from '@/assets/images/catering_food/21.jpg';
import image22 from '@/assets/images/catering_food/22.jpg';
import image23 from '@/assets/images/catering_food/23.jpg';
import image24 from '@/assets/images/catering_food/24.jpg';
import image25 from '@/assets/images/catering_food/25.jpg';
import image26 from '@/assets/images/catering_food/26.jpg';
import image27 from '@/assets/images/catering_food/27.jpg';
import image28 from '@/assets/images/catering_food/28.jpg';
import image29 from '@/assets/images/catering_food/29.jpg';
import image30 from '@/assets/images/catering_food/30.jpg';
import image31 from '@/assets/images/catering_food/31.jpg';
import image32 from '@/assets/images/catering_food/32.jpg';
import image33 from '@/assets/images/catering_food/33.jpg';
import image34 from '@/assets/images/catering_food/34.jpg';
import image35 from '@/assets/images/catering_food/35.jpg';

function SectionHeader({ sub, main }) {
    return (
        <div className='flex flex-col items-center text-center'>
            <span className='text-red-600 font-semibold mb-2'>- {sub} -</span>
            <h1
                className={`text-4xl md:text-5xl font-bold text-gray-900 ${pangaiaBold.className}`}
            >
                {main}
            </h1>
        </div>
    );
}

function PopularFoodCard({ image }) {
    return (
        <Item
            original={image.src}
            thumbnail={image.src}
            width='1200'
            height='1200'
        >
            {({ ref, open }) => (
                <div className='bg-white rounded-lg overflow-hidden shadow-sm transition-transform duration-300 ease-in-out group cursor-pointer'>
                    <div className='relative overflow-hidden'>
                        <Image
                            ref={ref}
                            onClick={open}
                            className='w-full h-full object-cover filter brightness-90 ease-in-out 
                               group-hover:scale-110 group-hover:opacity-90 group-hover:rotate-3 transition-all duration-500'
                            src={image || '/placeholder.svg'}
                            alt='food item'
                            width={400}
                            height={300}
                            placeholder='blur'
                        />
                    </div>
                </div>
            )}
        </Item>
    );
}

function PopularFoodCardsWrapper() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [
        Autoplay({ delay: 4000 }),
    ]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    const images = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
        image10,
        image11,
        image12,
        image13,
        image14,
        image15,
        image16,
        image17,
        image18,
        image19,
        image20,
        image21,
        image22,
        image23,
        image24,
        image25,
        image26,
        image27,
        image28,
        image29,
        image30,
        image31,
        image32,
        image33,
        image34,
        image35,
    ];

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi, setSelectedIndex]);

    useEffect(() => {
        if (!emblaApi) return;

        onSelect();
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);

        return () => {
            emblaApi.off('select', onSelect);
            emblaApi.off('reInit', onSelect);
        };
    }, [emblaApi, setScrollSnaps, onSelect]);

    const scrollTo = useCallback(
        (index) => emblaApi && emblaApi.scrollTo(index),
        [emblaApi]
    );

    const itemsPerRow = 6;
    const rowsPerPage = {
        sm: 4, // 4 rows for small screens
        md: 3, // 3 rows for medium and larger screens
    };
    const itemsPerPage = {
        sm: itemsPerRow * rowsPerPage.sm,
        md: itemsPerRow * rowsPerPage.md,
    };

    const pages = [];
    for (let i = 0; i < images.length; i += itemsPerPage.md) {
        pages.push(images.slice(i, i + itemsPerPage.md));
    }

    return (
        <Gallery>
            <div className='overflow-hidden' ref={emblaRef}>
                <div className='flex'>
                    {pages.map((page, pageIndex) => (
                        <div key={pageIndex} className='flex-[0_0_100%]'>
                            <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 md:gap-7'>
                                {page.map((image, index) => (
                                    <PopularFoodCard
                                        key={
                                            pageIndex * itemsPerPage.md + index
                                        }
                                        image={image}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex justify-center mt-4'>
                {scrollSnaps.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full mx-1 transition-colors duration-300 ${
                            index === selectedIndex
                                ? 'bg-red-600'
                                : 'bg-gray-300'
                        }`}
                        onClick={() => scrollTo(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </Gallery>
    );
}

export default function PopularFoodContainer() {
    return (
        <div className='feather-shadow-sm md:feather-shadow-md lg:feather-shadow-lg w-full px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 flex flex-col items-center gap-8'>
            <SectionHeader sub='POPULAR DISHES' main='Catering' />
            <PopularFoodCardsWrapper />
        </div>
    );
}
