import Image from 'next/image';
import Burger from '@/assets/images/dishburger.png';
import pangaiaBold from '@/app/fonts/pangaiaBold';

function SectionHeader({ sub, main }) {
    return (
        <div className='flex flex-col items-center text-center'>
            <span className='text-red-600 font-semibold mb-2'>- {sub} -</span>
            <h1
                className={`text-4xl md:text-5xl font-bold text-gray-900  ${pangaiaBold.className}`}
            >
                {main}
            </h1>
        </div>
    );
}

function PopularFoodCard() {
    return (
        <div className='bg-white rounded-lg overflow-hidden shadow-sm transition-transform duration-300 ease-in-out group cursor-pointer'>
            <div className='relative overflow-hidden'>
                <Image
                    className='w-full h-full object-cover filter brightness-90 ease-in-out 
                       group-hover:scale-110 group-hover:opacity-90 group-hover:rotate-3 transition-all duration-500'
                    src={Burger}
                    alt='burger'
                    width={400}
                    height={300}
                    placeholder='blur'
                />
                <span className='absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full'>
                    -10%
                </span>
            </div>
            <div className='px-4 py-3'>
                <span className='inline-block bg-red-100 text-red-500 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-1'>
                    Burgers
                </span>
                <h2 className='text-xl font-bold text-gray-900 mb-2'>
                    Burger Thief
                </h2>
                <p className='text-gray-600 text-sm mb-4 h-10 overflow-hidden'>
                    Spicy Beef Burger with American cheese...
                </p>
                <div className='flex justify-between items-center'>
                    <span className='text-gray-900 font-semibold rounded-full'>
                        PKR 800
                    </span>
                </div>
            </div>
        </div>
    );
}

function PopularFoodCardsWrapper() {
    return (
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-7'>
            {[...Array(8)].map((_, index) => (
                <PopularFoodCard key={index} />
            ))}
        </div>
    );
}

export default function PopularFoodContainer() {
    return (
        <div className='w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 flex flex-col items-center gap-8'>
            <SectionHeader
                sub='CRISPY, EVERY BITE TASTE'
                main='Popular Food Items'
            />
            <PopularFoodCardsWrapper />
        </div>
    );
}
