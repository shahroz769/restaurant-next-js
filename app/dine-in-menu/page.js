import CategoriesNavigation from "@/components/categoriesNavigation";
import HeroDineIn from "@/components/HeroDineIn";
import MenuCategory from "@/components/menuCategory";

export default function RestaurantMenu() {
    const categories = [
        "SALADS",
        "APPETIZERS",
        "SOUP",
        "GRILL",
        "CHINESE",
        "PASTAS",
        "CURRY ITEMS",
        "DISH OF THE DAY",
        "RICE",
        "BREAD",
        "BURGER & SHAWARMA",
        "REFRESHMENTS",
        "SWEETS",
    ];

    return (
        <div>
            <HeroDineIn />
            <div className="sticky top-16 z-50">
                <CategoriesNavigation categories={categories} />
            </div>
            {categories.map((category, index) => (
                <MenuCategory category={category} key={index} />
            ))}
        </div>
    );
}
