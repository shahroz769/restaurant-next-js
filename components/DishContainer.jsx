import EmblaCarousel from '@/components/EmblaCarousel';
// import dishes from '@/data/dishes';
import SectionHeader from '@/components/SectionHeader';

const OPTIONS = { align: 'start', loop: true };

export default function DishContainer() {
    return (
        <div className='flex flex-col items-center gap-8 pl-12 pr-12'>
            <SectionHeader sub='OUR MENU' main='Our Delicious Foods' />
            <EmblaCarousel dishes={dishes} options={OPTIONS} />
        </div>
    );
}
