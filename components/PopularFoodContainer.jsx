import Image from 'next/image';
import Burger from '@/assets/images/dishburger.png';
import pangaiaBold from '@/app/fonts/pangaiaBold';

function SectionHeader({ sub, main }) {
    return (
        <div className='flex flex-col items-center'>
            <span className='text-red-600 font-semibold mb-2'>- {sub} -</span>
            <h1 className={`text-4xl font-normal ${pangaiaBold.className}`}>
                {main}
            </h1>
        </div>
    );
}

function PopularFoodCard() {
    return (
        <div className='bg-white rounded-lg overflow-hidden transition-transform duration-300 ease-in-out :transform hover:scale-10hover5'>
            <div className='w-full overflow-hidden'>
                <Image
                    className='w-full h-full object-cover filter brightness-90 transition-transform duration-300 ease-in-out cursor-pointer 
                     hover:transform hover:scale-110 hover:rotate-5'
                    src={Burger}
                    alt='burger'
                    width={0}
                    height={0}
                />
            </div>
            <div className='p-5 flex flex-col gap-1.5'>
                <h1 className='text-2xl text-yellow-600 mb-1'>Burger Thief</h1>
                <p className='font-medium'>
                    Spicy Beef Burger with American cheese...
                </p>
                <div className='mt-4.5 flex items-center justify-between'>
                    <p className='font-medium text-red-600'>PKR 800</p>
                    <p className='font-medium text-red-600'>-10%</p>
                </div>
            </div>
        </div>
    );
}

function PopularFoodCardsWrapper() {
    return (
        <div className='max-w-screen-xl w-full grid grid-cols-4 gap-7'>
            <PopularFoodCard />
            <PopularFoodCard />
            <PopularFoodCard />
            <PopularFoodCard />
            <PopularFoodCard />
            <PopularFoodCard />
            <PopularFoodCard />
            <PopularFoodCard />
        </div>
    );
}

export default function PopularFoodContainer() {
    return (
        <div className='w-full flex flex-col items-center gap-8'>
            <SectionHeader
                sub='CRISPY, EVERY BITE TASTE'
                main='Popular Food Items'
            />
            <PopularFoodCardsWrapper />
        </div>
    );
}
