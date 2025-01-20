import CateringMenu from '@/components/CateringMenu';
import ContactSection from '@/components/ContactSection.jsx';
import Hero from '@/components/Hero';
import ImprovedDishCarousel from '@/components/ImprovedDishCarousel';
import Marquee from '@/components/Marquee';
import PopularDishes from '@/components/PopularDishes';
import PopularCatering from '@/components/PopularCatering';
import PopularFoodContainer from '@/components/PopularFoodContainer';
// import RecentArticles from "@/components/RecentArticles";
import Testimonials from '@/components/Testimonials';

export default function Home() {
    return (
        <>
            <Hero />
            <Marquee />
            <ImprovedDishCarousel />
            <PopularDishes />
            {/* <PopularFoodContainer /> */}
            <CateringMenu />
            {/* <RecentArticles /> */}
            <PopularCatering />
            <Testimonials />
            <ContactSection />
        </>
    );
}
