import Image from "next/image";
import Burger from "@/assets/images/dishburger.png";
import { pangaiaBold } from "@/app/fonts/pangaiaBold";

function SectionHeader({ sub, main }) {
    return (
        <div className="flex flex-col items-center text-center">
            <span className="text-red-600 font-semibold mb-2">- {sub} -</span>
            <h1
                className={`text-2xl md:text-3xl lg:text-4xl font-normal ${pangaiaBold}`}
            >
                {main}
            </h1>
        </div>
    );
}

function PopularFoodCard() {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 ease-in-out hover:scale-105">
            <div className="w-full h-48 sm:h-56 md:h-64 overflow-hidden">
                <Image
                    className="w-full h-full object-cover filter brightness-90 transition-transform duration-300 ease-in-out cursor-pointer 
                     hover:scale-110 hover:rotate-3"
                    src={Burger}
                    alt="burger"
                    width={400}
                    height={300}
                />
            </div>
            <div className="p-4 flex flex-col gap-1.5">
                <h2 className="text-xl sm:text-2xl text-yellow-600 mb-1">
                    Burger Thief
                </h2>
                <p className="font-medium text-sm sm:text-base">
                    Spicy Beef Burger with American cheese...
                </p>
                <div className="mt-3 flex items-center justify-between">
                    <p className="font-medium text-red-600">PKR 800</p>
                    <p className="font-medium text-red-600">-10%</p>
                </div>
            </div>
        </div>
    );
}

function PopularFoodCardsWrapper() {
    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-7">
            {[...Array(8)].map((_, index) => (
                <PopularFoodCard key={index} />
            ))}
        </div>
    );
}

export default function PopularFoodContainer() {
    return (
        <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col items-center gap-8">
            <SectionHeader
                sub="CRISPY, EVERY BITE TASTE"
                main="Popular Food Items"
            />
            <PopularFoodCardsWrapper />
        </div>
    );
}
