"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import BeefRuti from "@/assets/images/dishes/beef-ruti.png";
import Burger from "@/assets/images/dishes/big-burger.png";
import DeliciousBurger from "@/assets/images/dishes/delicious-burger.png";
import Chicken from "@/assets/images/dishes/chiken.png";
import FrenchFries from "@/assets/images/dishes/french-fry.png";
import GrilledChicken from "@/assets/images/dishes/grilled.png";
import GrilledChicken2 from "@/assets/images/dishes/grilled-2.png";
import Pasta from "@/assets/images/dishes/pasta.png";
import Ruti from "@/assets/images/dishes/ruti.png";
import pangaiaBold from "@/app/fonts/pangaiaBold";
import zcoolBold from "@/app/fonts/zcoolBold";

const dishes = [
    {
        category: "BURGER",
        href: "/dine-in-menu/burger",
        image: { src: Burger, alt: "Big Burger" },
        qty: 5,
    },
    {
        category: "BURGER",
        href: "/dine-in-menu/burger",
        image: { src: DeliciousBurger, alt: "Delicious Burger" },
        qty: 3,
    },
    {
        category: "CHICKEN",
        href: "/dine-in-menu/chicken",
        image: { src: Chicken, alt: "Chicken" },
        qty: 7,
    },
    {
        category: "CHICKEN",
        href: "/dine-in-menu/chicken",
        image: { src: GrilledChicken, alt: "Grilled Chicken" },
        qty: 4,
    },
    {
        category: "CHICKEN",
        href: "/dine-in-menu/chicken",
        image: { src: GrilledChicken2, alt: "Grilled Chicken 2" },
        qty: 2,
    },
    {
        category: "SIDE",
        href: "/dine-in-menu/side",
        image: { src: FrenchFries, alt: "French Fries" },
        qty: 10,
    },
    {
        category: "PASTA",
        href: "/dine-in-menu/pasta",
        image: { src: Pasta, alt: "Pasta" },
        qty: 6,
    },
    {
        category: "RUTI",
        href: "/dine-in-menu/ruti",
        image: { src: Ruti, alt: "Ruti" },
        qty: 8,
    },
    {
        category: "RUTI",
        href: "/dine-in-menu/ruti",
        image: { src: BeefRuti, alt: "Beef Ruti" },
        qty: 5,
    },
];

const OPTIONS = { align: "start", loop: true };

function SectionHeader({ sub, main }) {
    return (
        <div className="flex flex-col items-center">
            <span className="text-red-600 font-semibold mb-2">- {sub} -</span>
            <h1
                className={`text-4xl md:text-5xl font-bold text-gray-900  text-center ${pangaiaBold.className}`}
            >
                {main}
            </h1>
        </div>
    );
}

function DishCard({ dish, index, hoveredDishCard, setHoveredDishCard }) {
    return (
        <div
            className="flex-[0_0_45%] sm:flex-[0_0_33.333%] md:flex-[0_0_25%] lg:flex-[0_0_20%] min-w-0 p-2 max-w-[200px]"
            onMouseEnter={() => setHoveredDishCard(index)}
            onMouseLeave={() => setHoveredDishCard(false)}
        >
            <Link href={dish.href}>
                <div className="bg-gradient-to-t from-white to-[#F4EFE3] rounded-3xl flex flex-col items-center justify-center gap-1.5 h-full py-4 px-2">
                    <div className="w-full flex-1">
                        <Image
                            src={dish.image.src}
                            alt={dish.image.alt}
                            width={80}
                            height={80}
                            className="w-full h-auto"
                            unoptimized
                        />
                    </div>
                    <div
                        className={`bg-[#D12525] h-0.5 rounded-full my-2 duration-300 ${
                            hoveredDishCard === index ? "w-[50%]" : "w-10"
                        }`}
                    ></div>
                    <h2
                        className={`transition-colors font-bold tracking-widest text-xl duration-300 ${
                            zcoolBold.className
                        } ${
                            hoveredDishCard === index
                                ? "text-[#D12525]"
                                : "text-black"
                        }`}
                    >
                        {dish.category}
                    </h2>
                    <p
                        className={`font-semibold text-xs duration-300 ${
                            hoveredDishCard === index
                                ? "text-black"
                                : "text-[#D12525]"
                        } `}
                    >
                        {dish.qty} PRODUCTS
                    </p>
                </div>
            </Link>
        </div>
    );
}

function EmblaCarousel({ dishes, options }) {
    const [emblaRef] = useEmblaCarousel(options, [Autoplay({ delay: 3000 })]);
    const [hoveredDishCard, setHoveredDishCard] = useState(false);

    return (
        <div className="overflow-hidden w-full" ref={emblaRef}>
            <div className="flex">
                {dishes.map((dish, index) => (
                    <DishCard
                        dish={dish}
                        index={index}
                        key={index}
                        hoveredDishCard={hoveredDishCard}
                        setHoveredDishCard={setHoveredDishCard}
                    />
                ))}
            </div>
        </div>
    );
}

export default function ImprovedDishCarousel() {
    return (
        <div className="feather-shadow-sm md:feather-shadow-md lg:feather-shadow-lg flex flex-col items-center gap-8 px-4 sm:px-6 md:px-8 lg:px-12 w-full">
            <SectionHeader sub="OUR MENU" main="Our Delicious Foods" />
            <EmblaCarousel dishes={dishes} options={OPTIONS} />
        </div>
    );
}
