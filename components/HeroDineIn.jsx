import pangaiaBold from "@/app/fonts/pangaiaBold";
import Hero3 from "@/assets/images/hero3.avif";
import Image from "next/image";

export default function HeroDineIn() {
    return (
        <div className="relative h-[400px]">
            <Image
                src={Hero3}
                alt="Hero background"
                fill
                style={{ objectFit: "cover" }}
                priority
                placeholder='blur'
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white px-4">
                    <h1
                        className={`text-4xl md:text-6xl font-bold ${pangaiaBold.className}`}
                    >
                        Dine In Menu
                    </h1>
                </div>
            </div>
        </div>
    );
}
