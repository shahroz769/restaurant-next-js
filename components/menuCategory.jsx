"use client";

import Image from "next/image";
import { menuItems } from "@/menuData";
import DummyImage from "@/assets/images/dummy.png";

function MenuCategoryTitle({ categoryTitle }) {
    const id = categoryTitle.toLowerCase().replace(/\s+/g, "-");

    return (
        <div id={id} className="flex items-center gap-4 w-full">
            <h2 className="text-xl sm:text-2xl font-bold whitespace-nowrap">
                {categoryTitle}
            </h2>
            <div className="h-px w-full bg-gray-300"></div>
        </div>
    );
}

function MenuItem({ menuItem }) {
    return (
        <div className="flex flex-col sm:flex-row items-center overflow-hidden w-full max-w-2xl p-2 rounded-lg cursor-pointer hover:bg-[#0101011A] transition-colors duration-200">
            <Image
                src={DummyImage}
                alt={menuItem.engName}
                className="rounded-lg w-full sm:w-32 h-32 object-cover"
                width={128}
                height={128}
            />
            <div className="p-3 sm:p-5 flex flex-col gap-2 w-full sm:w-auto">
                <h3 className="text-xl font-semibold sm:text-2xl text-gray-800">
                    {menuItem.engName}
                </h3>
                {/* <h3 className="text-xl sm:text-2xl text-gray-800 text-right">
                    {menuItem.arabicName}
                </h3> */}
                <p className="text-sm sm:text-base text-gray-600 leading-snug">
                    {menuItem.description}
                </p>
                <p className="text-md sm:text-lg font-bold text-gray-800">
                    {Number(menuItem.price).toFixed(3)} AED
                </p>
            </div>
        </div>
    );
}

export default function MenuCategory({ category }) {
    return (
        <section className="w-full px-4 sm:px-6 lg:px-8 my-8 sm:my-12 lg:my-20">
            <div className="max-w-7xl mx-auto flex flex-col gap-6 sm:gap-8">
                <MenuCategoryTitle categoryTitle={category} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
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
