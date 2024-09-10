'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { menuItems } from '@/menuData';

export default function CategoriesNavigation({ categories }) {
    const [activeCategory, setActiveCategory] = useState(0);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        const updateScrollButtons = () => {
            if (scrollContainer) {
                setCanScrollLeft(scrollContainer.scrollLeft > 0);
                setCanScrollRight(
                    scrollContainer.scrollLeft + scrollContainer.clientWidth <
                        scrollContainer.scrollWidth
                );
            }
        };

        const handleScroll = () => {
            const categoryElements = categories.map((category) =>
                document.getElementById(
                    category.toLowerCase().replace(/\s+/g, '-')
                )
            );

            const viewportHeight = window.innerHeight;
            let activeIndex = -1;
            let closestDistance = Infinity;

            categoryElements.forEach((element, index) => {
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const distance = Math.abs(rect.top - viewportHeight / 3);
                    if (distance < closestDistance) {
                        closestDistance = distance;
                        activeIndex = index;
                    }
                }
            });

            if (activeIndex !== -1 && activeIndex !== activeCategory) {
                setActiveCategory(activeIndex);
                scrollToCategory(activeIndex);
                updateUrlHash(categories[activeIndex]);
            }
        };

        updateScrollButtons();
        scrollContainer?.addEventListener('scroll', updateScrollButtons);
        window.addEventListener('scroll', handleScroll);

        return () => {
            scrollContainer?.removeEventListener('scroll', updateScrollButtons);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [categories, activeCategory]);

    const scrollLeft = () => {
        scrollContainerRef.current?.scrollBy({
            left: -200,
            behavior: 'smooth',
        });
    };

    const scrollRight = () => {
        scrollContainerRef.current?.scrollBy({
            left: 200,
            behavior: 'smooth',
        });
    };

    const scrollToCategory = (index) => {
        const categoryElement = scrollContainerRef.current?.children[index];
        if (categoryElement) {
            const scrollLeft =
                categoryElement.offsetLeft -
                scrollContainerRef.current.offsetLeft;
            scrollContainerRef.current.scrollTo({
                left:
                    scrollLeft -
                    scrollContainerRef.current.clientWidth / 2 +
                    categoryElement.clientWidth / 2,
                behavior: 'smooth',
            });
        }
    };

    const updateUrlHash = (category) => {
        const newHash = category.toLowerCase().replace(/\s+/g, '-');
        if (window.location.hash !== `#${newHash}`) {
            history.replaceState(null, null, `#${newHash}`);
        }
    };

    const handleCategoryClick = (index, category) => {
        setActiveCategory(index);
        scrollToCategory(index);
        updateUrlHash(category);

        const targetElement = document.getElementById(
            category.toLowerCase().replace(/\s+/g, '-')
        );
        if (targetElement) {
            const navHeight = 64;
            const targetPosition =
                targetElement.getBoundingClientRect().top +
                window.pageYOffset -
                navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <nav className='z-50 w-full bg-white bg-opacity-40 backdrop-blur-md shadow-md'>
            <div className='max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative'>
                {canScrollLeft && (
                    <button
                        className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-900 p-1 sm:p-2 rounded-full shadow-md z-10 transition-opacity duration-200 hover:bg-gray-700 active:bg-gray-800'
                        onClick={scrollLeft}
                        aria-label='Scroll left'
                    >
                        <ChevronLeft
                            size={16}
                            className='text-white sm:hidden'
                        />
                        <ChevronLeft
                            size={20}
                            className='text-white hidden sm:block'
                        />
                    </button>
                )}
                <div
                    className='flex overflow-x-auto py-3 sm:py-4 space-x-1 sm:space-x-2 no-scrollbar'
                    ref={scrollContainerRef}
                >
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => handleCategoryClick(index, category)}
                            className={`whitespace-nowrap px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full transition-all duration-200 text-xs sm:text-sm font-medium ${
                                index === activeCategory
                                    ? 'bg-gray-900 text-white shadow-md'
                                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300 hover:text-gray-900'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                {canScrollRight && (
                    <button
                        className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-900 p-1 sm:p-2 rounded-full shadow-md z-10 transition-opacity duration-200 hover:bg-gray-700 active:bg-gray-800'
                        onClick={scrollRight}
                        aria-label='Scroll right'
                    >
                        <ChevronRight
                            size={16}
                            className='text-white sm:hidden'
                        />
                        <ChevronRight
                            size={20}
                            className='text-white hidden sm:block'
                        />
                    </button>
                )}
            </div>
        </nav>
    );
}
