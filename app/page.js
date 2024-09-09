import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
// import DishContainer from '@/components/DishContainer';
import ContactSection from '@/components/ContactSection.jsx';
import CateringMenu from '@/components/CateringMenu';
import PopularDishes from '@/components/PopularDishes';
import Footer from '@/components/Footer';
import RecentArticles from '@/components/RecentArticles';
import Testimonials from '@/components/Testimonials';
import ImprovedDishCarousel from '@/components/ImprovedDishCarousel';
import PopularFoodContainer from '@/components/PopularFoodContainer';

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <Marquee />
            <ImprovedDishCarousel />
            {/* <DishContainer /> */}
            <PopularDishes />
            <PopularFoodContainer />
            <CateringMenu />
            <RecentArticles />
            <Testimonials />
            <ContactSection />
            <Footer />
        </main>
    );
}
