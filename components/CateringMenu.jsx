'use client';

import Image from 'next/image';
import menuIcon from '@/assets/images/menu.png';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import pangaiaBold from '@/app/fonts/pangaiaBold';
import pangaiaMedium from '@/app/fonts/pangaiaMedium';
import menuDish from '@/assets/images/menu-dish.jpg';

const menuDishes = {
    menu1: {
        starter: [
            {
                engName: 'Hammous',
                arabicName: 'حمص',
                alt: 'Hammous Dish',
                description:
                    'A classic Levantine dish made of mashed chickpeas blended with tahini, olive oil, lemon juice, salt, and garlic.',
            },
            {
                engName: 'Taboola',
                arabicName: 'تبولة',
                alt: 'Taboola Dish',
                description:
                    'A Levantine vegetarian salad made mostly of finely chopped parsley, tomatoes, mint, onion, and seasoned with olive oil, lemon juice, and salt.',
            },
            {
                engName: 'Fatoosh',
                arabicName: 'فتوش',
                alt: 'Fatoosh Dish',
                description:
                    'A Middle Eastern salad made from fresh vegetables and toasted or fried pieces of pita bread.',
            },
            {
                engName: 'Potato Samboosa',
                arabicName: 'سمبوسة مع بطاطس',
                alt: 'Potato Samboosa Dish',
                description:
                    'A fried pastry filled with a spicy potato mixture, popular as an appetizer.',
            },
        ],
        mainCourse: [
            {
                engName: 'Sheesh Tawouk',
                arabicName: 'شيش طاووق',
                alt: 'Sheesh Tawouk Dish',
                description:
                    'Marinated chicken cubes grilled on skewers, a popular Middle Eastern dish.',
            },
            {
                engName: 'Chicken Biryani',
                arabicName: 'برياني دجاج',
                alt: 'Chicken Biryani Dish',
                description:
                    'A flavorful rice dish cooked with marinated chicken, aromatic spices, and herbs.',
            },
            {
                engName: 'Chicken Oriental Masala',
                arabicName: 'اورينتال دجاج ماسالا',
                alt: 'Chicken Oriental Masala Dish',
                description:
                    'A fusion dish combining Middle Eastern and Indian spices with chicken.',
            },
            {
                engName: 'Meat Lesaniya',
                arabicName: 'لزانية لحم',
                alt: 'Meat Lesaniya Dish',
                description:
                    'A layered pasta dish made with meat sauce and creamy béchamel.',
            },
            {
                engName: 'Roast Chicken with Mushroom Sauce',
                arabicName: 'دجاج مشوي بصلصة الفطر',
                alt: 'Roast Chicken with Mushroom Sauce Dish',
                description:
                    'Grilled chicken served with a creamy mushroom sauce.',
            },
            {
                engName: 'Bread',
                arabicName: 'خبز',
                alt: 'Bread',
                description:
                    'Freshly baked bread served as an accompaniment to the meal.',
            },
        ],
        desserts: [
            {
                engName: 'Fruit Salad',
                arabicName: 'سلطة فواكه',
                alt: 'Fruit Salad Dish',
                description:
                    'A mix of fresh fruits served as a refreshing dessert.',
            },
            {
                engName: 'Um Ali',
                arabicName: 'أم علي',
                alt: 'Um Ali Dish',
                description:
                    'A traditional Egyptian dessert made of puff pastry, milk, and nuts.',
            },
        ],
    },
    menu2: {
        starter: [
            {
                engName: 'Hammous',
                arabicName: 'حمص',
                alt: 'Hammous Dish',
                description:
                    'A classic Levantine dish made of mashed chickpeas blended with tahini, olive oil, lemon juice, salt, and garlic.',
            },
            {
                engName: 'Taboola',
                arabicName: 'تبولة',
                alt: 'Taboola Dish',
                description:
                    'A Levantine vegetarian salad made mostly of finely chopped parsley, tomatoes, mint, onion, and seasoned with olive oil, lemon juice, and salt.',
            },
            {
                engName: 'Red Beans Salad',
                arabicName: 'سلطة الفاصوليا الحمراء',
                alt: 'Red Beans Salad Dish',
                description:
                    'A healthy salad made with red kidney beans, mixed with vegetables and a tangy dressing.',
            },
            {
                engName: 'Potato Salad',
                arabicName: 'سلطة بطاطس',
                alt: 'Potato Salad Dish',
                description:
                    'A creamy salad made with boiled potatoes, herbs, and a flavorful dressing.',
            },
            {
                engName: 'Veg. Spring Roll',
                arabicName: 'سبرنج رول مع خضراء',
                alt: 'Vegetable Spring Roll Dish',
                description:
                    'Crispy fried rolls filled with mixed vegetables, served as a light starter.',
            },
        ],
        mainCourse: [
            {
                engName: 'Chicken Tikka with Yoghurt',
                arabicName: 'تكة دجاج مع روب',
                alt: 'Chicken Tikka with Yoghurt Dish',
                description:
                    'Grilled chicken marinated in spices and yogurt, a popular South Asian dish.',
            },
            {
                engName: 'Turkish Kabab',
                arabicName: 'كباب تركية',
                alt: 'Turkish Kabab Dish',
                description:
                    'A Middle Eastern kebab made of minced meat, flavored with spices and herbs.',
            },
            {
                engName: 'Chicken Biryani',
                arabicName: 'برياني دجاج',
                alt: 'Chicken Biryani Dish',
                description:
                    'A flavorful rice dish cooked with marinated chicken, aromatic spices, and herbs.',
            },
            {
                engName: 'Chicken Jalfrezi',
                arabicName: 'دجاج جالفريزي',
                alt: 'Chicken Jalfrezi Dish',
                description:
                    'A spicy dish made with stir-fried chicken, peppers, and onions, cooked in a flavorful sauce.',
            },
            {
                engName: 'Penne Pasta with White Sauce',
                arabicName: 'بيني باستا بالصلصة البيضاء',
                alt: 'Penne Pasta with White Sauce Dish',
                description:
                    'Penne pasta served with a creamy white sauce, a delicious Italian-inspired dish.',
            },
            {
                engName: 'Bread',
                arabicName: 'خبز',
                alt: 'Bread',
                description:
                    'Freshly baked bread served as an accompaniment to the meal.',
            },
        ],
        desserts: [
            {
                engName: 'Cream Caramel',
                arabicName: 'كريم كراميل',
                alt: 'Cream Caramel Dish',
                description: 'A smooth and creamy caramel custard dessert.',
            },
            {
                engName: 'Fruit Salad',
                arabicName: 'سلطة فواكة',
                alt: 'Fruit Salad Dish',
                description:
                    'A mix of fresh fruits served as a refreshing dessert.',
            },
            {
                engName: 'Soft Drinks',
                arabicName: 'مشروبات غازية',
                alt: 'Soft Drinks',
                description:
                    'Carbonated beverages available as an accompaniment to the meal.',
            },
            {
                engName: 'Water',
                arabicName: 'ماء',
                alt: 'Water',
                description: 'Fresh drinking water served with the meal.',
            },
            {
                engName: 'Cane Juice',
                arabicName: 'عصير قصب',
                alt: 'Cane Juice',
                description:
                    'A refreshing drink made from freshly squeezed sugarcane juice.',
            },
        ],
    },
    menu3: {
        starter: [
            {
                engName: 'Hammous',
                arabicName: 'حمص',
                alt: 'Hammous Dish',
                description:
                    'A classic Levantine dish made of mashed chickpeas blended with tahini, olive oil, lemon juice, salt, and garlic.',
            },
            {
                engName: 'Mutabbal',
                arabicName: 'متبل',
                alt: 'Mutabbal Dish',
                description:
                    'A Middle Eastern dip made from roasted eggplant, tahini, and yogurt, with a hint of garlic and lemon.',
            },
            {
                engName: 'Taboola',
                arabicName: 'تبولة',
                alt: 'Taboola Dish',
                description:
                    'A Levantine vegetarian salad made mostly of finely chopped parsley, tomatoes, mint, onion, and seasoned with olive oil, lemon juice, and salt.',
            },
            {
                engName: 'Olive Salad',
                arabicName: 'سلطة زيتون',
                alt: 'Olive Salad Dish',
                description:
                    'A Mediterranean salad made with a mix of olives, vegetables, and a flavorful dressing.',
            },
            {
                engName: 'French Salad',
                arabicName: 'سلطة فرنسية',
                alt: 'French Salad Dish',
                description:
                    'A light and refreshing salad with mixed greens, vegetables, and a tangy French dressing.',
            },
            {
                engName: 'Chicken Spring Roll',
                arabicName: 'دجاج سبرنج رول',
                alt: 'Chicken Spring Roll Dish',
                description:
                    'Crispy fried rolls filled with seasoned chicken and vegetables.',
            },
            {
                engName: 'Kibbeh',
                arabicName: 'كبة',
                alt: 'Kibbeh Dish',
                description:
                    'A Levantine dish made of bulgur, minced onions, and finely ground lean meat, typically shaped into balls or patties.',
            },
        ],
        mainCourse: [
            {
                engName: 'Green Chicken Tikka',
                arabicName: 'تكة دجاج أخضر',
                alt: 'Green Chicken Tikka Dish',
                description:
                    'Grilled chicken marinated in a green herb mixture, including coriander, mint, and yogurt.',
            },
            {
                engName: 'Meat Kabab',
                arabicName: 'کباب لحم',
                alt: 'Meat Kabab Dish',
                description:
                    'A Middle Eastern dish made of minced meat, spices, and herbs, grilled on skewers.',
            },
            {
                engName: 'Roasted Beef with Pepper Sauce',
                arabicName: 'لحم محمص بصلصة الفلفل',
                alt: 'Roasted Beef with Pepper Sauce Dish',
                description:
                    'Juicy roasted beef served with a spicy pepper sauce.',
            },
            {
                engName: 'Chicken Majboos',
                arabicName: 'مجبوس دجاج',
                alt: 'Chicken Majboos Dish',
                description:
                    'A traditional Middle Eastern dish of spiced rice cooked with chicken and vegetables.',
            },
            {
                engName: 'Meat with Bamiya',
                arabicName: 'لحم مع بامية',
                alt: 'Meat with Bamiya Dish',
                description:
                    'A stew made of tender meat cooked with okra and tomatoes, flavored with spices.',
            },
            {
                engName: 'Grilled Fish with Lemon Butter Sauce',
                arabicName: 'سمك مشوي بصلصة زبدة الليمون',
                alt: 'Grilled Fish with Lemon Butter Sauce Dish',
                description:
                    'Grilled fish served with a rich lemon butter sauce.',
            },
            {
                engName: 'White Rice',
                arabicName: 'أرز أبيض',
                alt: 'White Rice',
                description: 'Steamed white rice served as a side dish.',
            },
            {
                engName: 'Bread',
                arabicName: 'خبز',
                alt: 'Bread',
                description:
                    'Freshly baked bread served as an accompaniment to the meal.',
            },
        ],
        desserts: [
            {
                engName: 'Um Ali',
                arabicName: 'أم علي',
                alt: 'Um Ali Dish',
                description:
                    'A traditional Egyptian dessert made of puff pastry, milk, and nuts.',
            },
            {
                engName: 'Mixed Cup Sweets',
                arabicName: 'حلويات كوب مشكل',
                alt: 'Mixed Cup Sweets',
                description:
                    'An assortment of mixed sweets served in individual cups.',
            },
            {
                engName: 'Fruit Trifle',
                arabicName: 'ترايفل الفواكة',
                alt: 'Fruit Trifle Dish',
                description:
                    'A layered dessert made with fruit, sponge cake, custard, and whipped cream.',
            },
            {
                engName: 'Soft Drinks',
                arabicName: 'مشروبات غازية',
                alt: 'Soft Drinks',
                description:
                    'Carbonated beverages available as an accompaniment to the meal.',
            },
            {
                engName: 'Water',
                arabicName: 'ماء',
                alt: 'Water',
                description: 'Fresh drinking water served with the meal.',
            },
            {
                engName: 'Cane Juice',
                arabicName: 'عصير قصب',
                alt: 'Cane Juice',
                description:
                    'A refreshing drink made from freshly squeezed sugarcane juice.',
            },
        ],
    },
    menu4: {
        starter: [
            {
                engName: 'Hammous',
                arabicName: 'حمص',
                alt: 'Hammous Dish',
                description:
                    'A creamy blend of chickpeas, tahini, lemon, and garlic, served as a dip.',
            },
            {
                engName: 'Taboola',
                arabicName: 'تبولة',
                alt: 'Taboola Dish',
                description:
                    'A traditional Levantine salad made with finely chopped parsley, tomatoes, and bulgur wheat, seasoned with olive oil and lemon juice.',
            },
            {
                engName: 'Potato Salad',
                arabicName: 'سلطة بطاطس',
                alt: 'Potato Salad Dish',
                description:
                    'A creamy salad made with boiled potatoes, mayonnaise, and herbs.',
            },
            {
                engName: 'American Salad',
                arabicName: 'سلطة أمريكية',
                alt: 'American Salad Dish',
                description:
                    'A salad consisting of mixed vegetables, lettuce, and a tangy dressing.',
            },
            {
                engName: 'Pasta Salad',
                arabicName: 'سلطة الباستا',
                alt: 'Pasta Salad Dish',
                description:
                    'A light salad made with pasta, vegetables, and a flavorful dressing.',
            },
            {
                engName: 'Cheese Spring Roll',
                arabicName: 'سبرنج رول بالجبن',
                alt: 'Cheese Spring Roll Dish',
                description:
                    'Crispy rolls filled with melted cheese, fried to perfection.',
            },
            {
                engName: 'Cheese Potato Ball',
                arabicName: 'كرات البطاطس بالجبن',
                alt: 'Cheese Potato Ball Dish',
                description:
                    'Delicious mashed potato balls filled with cheese, coated in breadcrumbs, and fried.',
            },
        ],
        mainCourse: [
            {
                engName: 'Sheesh Tawouk',
                arabicName: 'شيش طاووق',
                alt: 'Sheesh Tawouk Dish',
                description:
                    'Grilled chicken skewers marinated in a blend of yogurt, lemon, and spices.',
            },
            {
                engName: 'Turkish Meat Kabab',
                arabicName: 'كباب تركية باللحم',
                alt: 'Turkish Meat Kabab Dish',
                description:
                    'A popular Turkish dish made of ground beef mixed with herbs and spices, grilled on skewers.',
            },
            {
                engName: 'Chicken Biryani',
                arabicName: 'برباني دجاج',
                alt: 'Chicken Biryani Dish',
                description:
                    'A flavorful rice dish layered with spiced chicken and cooked to perfection.',
            },
            {
                engName: 'Beef Steak',
                arabicName: 'شريحة لحم',
                alt: 'Beef Steak Dish',
                description:
                    'A juicy cut of beef steak, cooked to the desired doneness, served with sauce.',
            },
            {
                engName: 'Prawn Tempura',
                arabicName: 'روبيان تمبورا',
                alt: 'Prawn Tempura Dish',
                description:
                    'Crispy, deep-fried prawns coated in a light tempura batter.',
            },
            {
                engName: 'Baked Chicken with Spinach',
                arabicName: 'دجاج مخبوز بالسبانخ',
                alt: 'Baked Chicken with Spinach Dish',
                description:
                    'Tender baked chicken served with a rich spinach filling.',
            },
            {
                engName: 'Chicken Green Masala',
                arabicName: 'دجاج مسالة خضراء',
                alt: 'Chicken Green Masala Dish',
                description:
                    'Chicken cooked in a fragrant green masala sauce made with fresh herbs and spices.',
            },
            {
                engName: 'Shivant Rice',
                arabicName: 'أرز شيفانت',
                alt: 'Shivant Rice Dish',
                description:
                    'A fragrant rice dish, delicately spiced and served as an accompaniment to the main course.',
            },
            {
                engName: 'Bread',
                arabicName: 'خبز',
                alt: 'Bread',
                description: 'Freshly baked bread served with the meal.',
            },
        ],
        desserts: [
            {
                engName: 'Mixed Cup Sweets',
                arabicName: 'حلويات كوب مشكل',
                alt: 'Mixed Cup Sweets',
                description:
                    'An assortment of sweet treats served in individual cups.',
            },
            {
                engName: 'Samreen Sweets',
                arabicName: 'حلويات سمرين',
                alt: 'Samreen Sweets',
                description:
                    'A variety of sweets made with sugar, milk, and flavored syrups.',
            },
            {
                engName: 'Mini Tart',
                arabicName: 'ميني تارت',
                alt: 'Mini Tart Dish',
                description: 'Mini tarts filled with cream and fruits.',
            },
            {
                engName: 'Ras Malai',
                arabicName: 'رس ملائي',
                alt: 'Ras Malai Dish',
                description:
                    'An Indian dessert made of soft cheese soaked in sweetened milk.',
            },
            {
                engName: 'Soft Drinks',
                arabicName: 'مشروبات غازبة',
                alt: 'Soft Drinks',
                description: 'Carbonated beverages served with the meal.',
            },
            {
                engName: 'Water',
                arabicName: 'ماء',
                alt: 'Water',
                description: 'Fresh drinking water provided with the meal.',
            },
            {
                engName: 'Cane Juice',
                arabicName: 'عصير قصب',
                alt: 'Cane Juice',
                description:
                    'A refreshing drink made from freshly squeezed sugarcane juice.',
            },
        ],
    },
    menu5: {
        starter: [
            {
                engName: 'Hammous',
                arabicName: 'حمص',
                alt: 'Hammous Dish',
                description:
                    'A creamy blend of chickpeas, tahini, lemon, and garlic, served as a dip.',
            },
            {
                engName: 'Taboola',
                arabicName: 'تبولة',
                alt: 'Taboola Dish',
                description:
                    'A traditional Levantine salad made with finely chopped parsley, tomatoes, and bulgur wheat.',
            },
            {
                engName: 'Sesame Salad',
                arabicName: 'سلطة سمسم',
                alt: 'Sesame Salad Dish',
                description:
                    'A fresh salad made with sesame seeds, lettuce, and a tangy dressing.',
            },
            {
                engName: 'Egg-Plant Salad',
                arabicName: 'سلطة باذنجان',
                alt: 'Egg-Plant Salad Dish',
                description:
                    'Grilled eggplant mixed with fresh herbs and olive oil.',
            },
            {
                engName: 'Macaroni Salad',
                arabicName: 'سلطة المعكرونه',
                alt: 'Macaroni Salad Dish',
                description:
                    'A creamy salad made with macaroni, vegetables, and a flavorful dressing.',
            },
            {
                engName: 'Caesar Salad',
                arabicName: 'سلطة سيزر',
                alt: 'Caesar Salad Dish',
                description:
                    'A classic salad with romaine lettuce, parmesan cheese, croutons, and Caesar dressing.',
            },
            {
                engName: 'Mini Pizza',
                arabicName: 'ميني بيتزاء',
                alt: 'Mini Pizza Dish',
                description:
                    'Small pizzas topped with cheese, tomatoes, and herbs.',
            },
            {
                engName: 'Chicken Spring Roll',
                arabicName: 'دجاج سبرنج رول',
                alt: 'Chicken Spring Roll Dish',
                description:
                    'Crispy spring rolls filled with seasoned chicken.',
            },
            {
                engName: 'Shami Kabab',
                arabicName: 'شامي كباب',
                alt: 'Shami Kabab Dish',
                description:
                    'A traditional minced meat kabab spiced with lentils and herbs.',
            },
        ],
        mainCourse: [
            {
                engName: 'Chicken Tikka Boneless',
                arabicName: 'تكة دجاج بدون عظم',
                alt: 'Chicken Tikka Boneless Dish',
                description:
                    'Tender, boneless chicken pieces marinated in spices and grilled.',
            },
            {
                engName: 'Turkish Meat Kabab',
                arabicName: 'كباب لحم تركية',
                alt: 'Turkish Meat Kabab Dish',
                description:
                    'Ground meat mixed with herbs and spices, grilled on skewers.',
            },
            {
                engName: 'Chicken Biryani',
                arabicName: 'برياني دجاج',
                alt: 'Chicken Biryani Dish',
                description:
                    'A fragrant rice dish with spiced chicken, layered and cooked to perfection.',
            },
            {
                engName: 'Prawn Tempura',
                arabicName: 'روبيان تمبورا',
                alt: 'Prawn Tempura Dish',
                description:
                    'Crispy, deep-fried prawns coated in a light batter.',
            },
            {
                engName: 'Roasted Beef with Pepper Sauce',
                arabicName: 'لحم بقري محمص بصلصة الفلفل',
                alt: 'Roasted Beef with Pepper Sauce Dish',
                description: 'Succulent roast beef served with a pepper sauce.',
            },
            {
                engName: 'Chicken Manchurian',
                arabicName: 'دجاج منشوريان',
                alt: 'Chicken Manchurian Dish',
                description:
                    'Chinese-style chicken cooked in a tangy Manchurian sauce.',
            },
            {
                engName: 'Fish and Chips',
                arabicName: 'سمك وبطاطس',
                alt: 'Fish and Chips Dish',
                description: 'Crispy battered fish served with golden fries.',
            },
            {
                engName: 'Assorted Vegetable',
                arabicName: 'خضار مشكلة',
                alt: 'Assorted Vegetable Dish',
                description: 'A medley of sautéed vegetables.',
            },
            {
                engName: 'Butter Rice',
                arabicName: 'أرز بالزبدة',
                alt: 'Butter Rice Dish',
                description:
                    'Fluffy rice cooked with butter for a rich flavor.',
            },
            {
                engName: 'Bread',
                arabicName: 'خبز',
                alt: 'Bread Dish',
                description: 'Freshly baked bread served with the meal.',
            },
        ],
        desserts: [
            {
                engName: 'Fresh Fruit Slice',
                arabicName: 'شريحة فواكه طازجة',
                alt: 'Fresh Fruit Slice Dish',
                description: 'Sliced fresh fruit served as a light dessert.',
            },
            {
                engName: 'Um Ali',
                arabicName: 'أم على',
                alt: 'Um Ali Dish',
                description:
                    'A traditional Middle Eastern dessert made with bread, milk, and nuts.',
            },
            {
                engName: 'Mini Cheese Cake',
                arabicName: 'ميني تشيز كيك',
                alt: 'Mini Cheese Cake Dish',
                description:
                    'Bite-sized cheesecake desserts with a creamy filling.',
            },
            {
                engName: 'Dates Caramel Sweet',
                arabicName: 'حلوى التمر بالكراميل',
                alt: 'Dates Caramel Sweet Dish',
                description: 'Sweet dates covered in caramel.',
            },
            {
                engName: 'Soft Drinks',
                arabicName: 'مشروبات غازية',
                alt: 'Soft Drinks',
                description: 'Carbonated beverages served with the meal.',
            },
            {
                engName: 'Water',
                arabicName: 'ماء',
                alt: 'Water',
                description: 'Fresh drinking water provided with the meal.',
            },
            {
                engName: 'Cane Juice',
                arabicName: 'عصير قصب',
                alt: 'Cane Juice',
                description:
                    'Freshly squeezed sugarcane juice served as a refreshing drink.',
            },
        ],
    },
};

const menuNavigation = [
    { name: 'Menu 1', key: 'menu1', icon: menuIcon },
    { name: 'Menu 2', key: 'menu2', icon: menuIcon },
    { name: 'Menu 3', key: 'menu3', icon: menuIcon },
    { name: 'Menu 4', key: 'menu4', icon: menuIcon },
    { name: 'Menu 5', key: 'menu5', icon: menuIcon },
];

const truncate = (str, maxLength) => {
    if (str.length <= maxLength) {
        return str;
    }

    const lastSpaceIndex = str.lastIndexOf(' ', maxLength);
    return str.substring(0, lastSpaceIndex) + '...';
};

export default function CateringMenu({ location }) {
    const [selectedMenu, setSelectedMenu] = useState('menu1');

    const handleMenuClick = (key) => {
        setSelectedMenu(key);
    };

    return (
        <div className='w-full bg-white'>
            <div className='container max-w-6xl mx-auto px-4 py-6'>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='text-center mb-8'
                >
                    <p className='text-red-600 font-semibold mb-2'>
                        - Choose delicious -
                    </p>
                    <h1
                        className={`text-4xl md:text-5xl font-bold text-gray-900 ${pangaiaBold.className}`}
                    >
                        Catering Menu
                    </h1>
                </motion.div>
                <div className='flex flex-wrap justify-center gap-2 md:gap-4 w-full mb-8'>
                    {menuNavigation.map(({ name, key }) => (
                        <motion.div
                            key={key}
                            whileTap={{ scale: 0.95 }}
                            className='relative'
                        >
                            <button
                                onClick={() => handleMenuClick(key)}
                                className={`px-4 py-2 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ${
                                    selectedMenu === key
                                        ? 'bg-slate-800 text-white'
                                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                }`}
                            >
                                {name}
                            </button>
                        </motion.div>
                    ))}
                </div>
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={selectedMenu}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {Object.entries(menuDishes[selectedMenu]).map(
                            ([category, dishes]) => (
                                <div key={category} className='mb-8'>
                                    <h2
                                        className={`text-2xl font-bold text-gray-900 mb-8 capitalize text-center ${pangaiaMedium.className}`}
                                    >
                                        {category}
                                    </h2>
                                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                                        {dishes.map((dish, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{
                                                    duration: 0.3,
                                                    delay: index * 0.1,
                                                }}
                                                className='flex gap-6 bg-slate-50 p-4 rounded-lg shadow-sm'
                                            >
                                                <div className='flex-shrink-0'>
                                                    <Image
                                                        src={menuDish}
                                                        alt={dish.alt}
                                                        width={80}
                                                        height={80}
                                                        className='rounded-full object-cover'
                                                    />
                                                </div>
                                                <div className='flex flex-col justify-center w-full'>
                                                    <div className='flex items-center justify-between gap-2 mb-2'>
                                                        <h3 className='text-lg font-semibold text-gray-900'>
                                                            {dish.engName}
                                                        </h3>
                                                        <div className='flex-grow border-t border-dashed border-gray-400 mx-2'></div>
                                                    </div>
                                                    <p className='text-sm text-gray-600'>
                                                        {truncate(
                                                            dish.description,
                                                            75
                                                        )}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
