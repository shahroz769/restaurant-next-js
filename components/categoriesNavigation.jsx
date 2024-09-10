"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { menuItems } from "@/menuData";

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
                        scrollContainer.scrollWidth,
                );
            }
        };

        const handleScroll = () => {
            const categoryElements = categories.map((category) =>
                document.getElementById(
                    category.toLowerCase().replace(/\s+/g, "-"),
                ),
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
        scrollContainer?.addEventListener("scroll", updateScrollButtons);
        window.addEventListener("scroll", handleScroll);

        return () => {
            scrollContainer?.removeEventListener("scroll", updateScrollButtons);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [categories, activeCategory]);

    const scrollLeft = () => {
        scrollContainerRef.current?.scrollBy({
            left: -200,
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        scrollContainerRef.current?.scrollBy({
            left: 200,
            behavior: "smooth",
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
                behavior: "smooth",
            });
        }
    };

    const updateUrlHash = (category) => {
        const newHash = category.toLowerCase().replace(/\s+/g, "-");
        if (window.location.hash !== `#${newHash}`) {
            history.replaceState(null, null, `#${newHash}`);
        }
    };

    return (
        <nav className="z-50 w-full bg-white bg-opacity-40 backdrop-blur-md shadow-md">
            <div className="max-w-screen-xl mx-auto px-12 relative">
                {canScrollLeft && (
                    <button
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 transition-opacity duration-200 hover:bg-gray-200 active:bg-gray-300"
                        onClick={scrollLeft}
                        aria-label="Scroll left"
                    >
                        <ChevronLeft size={24} className="text-gray-600" />
                    </button>
                )}
                <div
                    className="flex overflow-x-auto scrollbar-hide py-4 space-x-2"
                    ref={scrollContainerRef}
                >
                    {categories.map((category, index) => (
                        <Link
                            href={`#${category
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                            key={index}
                            onClick={() => {
                                setActiveCategory(index);
                                scrollToCategory(index);
                                updateUrlHash(category);
                            }}
                            className={`whitespace-nowrap px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium ${
                                index === activeCategory
                                    ? "bg-[#333333] text-white shadow-md"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
                            }`}
                        >
                            {category} (
                            {
                                menuItems.filter(
                                    (menuItem) =>
                                        menuItem.category === category,
                                ).length
                            }
                            )
                        </Link>
                    ))}
                </div>
                {canScrollRight && (
                    <button
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 transition-opacity duration-200 hover:bg-gray-200 active:bg-gray-300"
                        onClick={scrollRight}
                        aria-label="Scroll right"
                    >
                        <ChevronRight size={24} className="text-gray-600" />
                    </button>
                )}
            </div>
        </nav>
    );
}
