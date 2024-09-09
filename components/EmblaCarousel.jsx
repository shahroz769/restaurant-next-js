'use client';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import DishCard from '@/components/DishCard';

const EmblaCarousel = ({ dishes, options }) => {
    const [emblaRef] = useEmblaCarousel(options, [Autoplay({ delay: 3000 })]);

    return (
        <div className='overflow-hidden' ref={emblaRef}>
            <div className='flex'>
                {dishes.map((dish, index) => (
                    <DishCard dish={dish} index={index} key={index} />
                ))}
            </div>
        </div>
    );
};

export default EmblaCarousel;
