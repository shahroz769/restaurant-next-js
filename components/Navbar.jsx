'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Logo from '@/assets/images/Logo1.png';
import Whatsapp from '@/assets/images/whatsapp.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            if (scrollTop > 50) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Dine-in', href: '/dine-in' },
        // { name: 'Catering', href: '/catering' },
        // { name: 'Blog', href: '/blog' },
    ];

    const scrollToContact = (e) => {
        e.preventDefault();
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav
            className={`fixed w-full z-10 transition-all duration-300 ${
                hasScrolled
                    ? 'bg-black bg-opacity-60 backdrop-blur-md'
                    : 'bg-transparent'
            }`}
        >
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    <div className='flex-shrink-0'>
                        <Link href='/'>
                            <Image
                                src={Logo || '/placeholder.svg'}
                                alt='Bait Al Ayawed Logo'
                                width={140}
                                height={140}
                            />
                        </Link>
                    </div>
                    <div className='hidden md:block flex-grow'>
                        <div className='flex justify-center space-x-4'>
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className='text-white hover:bg-white hover:text-black px-3 py-2 rounded-full font-medium transition-colors duration-300'
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className='hidden md:flex items-center space-x-2'>
                        <a
                            href='#contact-section'
                            onClick={scrollToContact}
                            className='bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-opacity-90 transition-colors duration-300'
                        >
                            Contact
                        </a>
                        <a
                            href='https://wa.me/97333220068'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-white hover:text-green-400 transition-colors duration-300'
                        >
                            <Image
                                src={Whatsapp || '/placeholder.svg'}
                                alt='WhatsApp'
                                width={40}
                                height={40}
                            />
                        </a>
                    </div>
                    <div className='md:hidden'>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className='inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                            aria-expanded={isOpen}
                        >
                            <span className='sr-only'>Open main menu</span>
                            {!isOpen ? (
                                <svg
                                    className='block h-6 w-6'
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                    aria-hidden='true'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M4 6h16M4 12h16M4 18h16'
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className='block h-6 w-6'
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                    aria-hidden='true'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M6 18L18 6M6 6l12 12'
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <motion.div
                    className='md:hidden'
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black bg-opacity-75 backdrop-blur-md'>
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className='text-white hover:bg-white hover:text-black block px-3 py-2 rounded-md text-base font-medium'
                            >
                                {item.name}
                            </Link>
                        ))}
                        <a
                            href='#contact-section'
                            onClick={(e) => {
                                scrollToContact(e);
                                setIsOpen(false);
                            }}
                            className='text-white hover:bg-white hover:text-black block px-3 py-2 rounded-md text-base font-medium'
                        >
                            Contact
                        </a>
                        <a
                            href='https://wa.me/97333220068'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-white hover:bg-green-400 flex items-center px-3 py-2 rounded-md text-base font-medium'
                        >
                            {/* <Image
                                src={Whatsapp || '/placeholder.svg'}
                                alt='WhatsApp'
                                width={20}
                                height={20}
                                className='mr-2'
                            /> */}
                            WhatsApp
                        </a>
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
