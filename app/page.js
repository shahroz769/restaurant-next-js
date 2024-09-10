import CateringMenu from "@/components/CateringMenu";
import ContactSection from "@/components/ContactSection.jsx";
import Hero from "@/components/Hero";
import ImprovedDishCarousel from "@/components/ImprovedDishCarousel";
import Marquee from "@/components/Marquee";
import PopularDishes from "@/components/PopularDishes";
import PopularFoodContainer from "@/components/PopularFoodContainer";
import RecentArticles from "@/components/RecentArticles";
import Testimonials from "@/components/Testimonials";

export default function Home() {
    return (
        <>
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
        </>
    );
}
