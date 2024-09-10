"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import zcoolBold from "@/app/fonts/zcoolBold";

function DishCard({ dish, index }) {
    const [hoveredDishCard, setHoveredDishCard] = useState(false);

    return (
        <div
            className="flex-[0_0_13%] min-w-0 pl-[14px]"
            onMouseEnter={() => setHoveredDishCard(index)}
            onMouseLeave={() => setHoveredDishCard(false)}
        >
            <Link href={dish.href}>
                <div className="bg-gradient-to-t from-white to-[#F4EFE3] rounded-3xl flex flex-col items-center justify-center gap-1.5 h-full py-8 px-4">
                    <div className="w-full">
                        <Image
                            src={dish.image.src}
                            alt={dish.image.alt}
                            width={150}
                            height={150}
                            className="w-full h-auto"
                            placeholder="blur"
                        />
                    </div>
                    <div className="w-12 h-0.5 bg-golden my-3"></div>
                    <h2
                        className={`transition-colors duration-300 ${
                            zcoolBold.className
                        } ${
                            hoveredDishCard === index
                                ? "text-[#D12525]"
                                : "text-black"
                        }`}
                    >
                        {dish.category}
                    </h2>
                    <p className="text-light-golden font-semibold">
                        {dish.qty} PRODUCTS
                    </p>
                </div>
            </Link>
        </div>
    );
}

export default DishCard;
