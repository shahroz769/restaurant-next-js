import React from 'react';

export default function Footer() {
    return (
        <footer className='bg-neutral-900 text-white py-8'>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {/* Logo and Description */}
                    <div className='space-y-4'>
                        <div className='flex items-center space-x-2'>
                            <span className='text-xl font-semibold'>
                                Bait Al Ayawed
                            </span>
                        </div>
                        <p className='text-sm'>
                            We believe it has the power to do amazing things.
                        </p>
                        <p className='text-sm'>
                            Interested in working with us?
                        </p>
                        <p className='text-white'>baitalayawed@gmail.com</p>
                    </div>

                    {/* Navigation
                    <div>
                        <h3 className='font-semibold mb-4'>Navigation</h3>
                        <ul className='space-y-2'>
                            <li>
                                <a href='#' className='hover:text-white-500'>
                                    About
                                </a>
                            </li>
                            <li>
                                <a href='#' className='hover:text-white-500'>
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href='#' className='hover:text-white-500'>
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href='#' className='hover:text-white-500'>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div> */}

                    {/* Contact */}
                    <div>
                        <h3 className='font-semibold mb-4'>Contact</h3>
                        <ul className='space-y-2'>
                            <li>
                                <a href='#' className='hover:text-white'>
                                    Book a consultation
                                </a>
                            </li>
                            <li>baitalayawed@gmail.com</li>
                            <li>Muhammad Iqbal</li>
                            <li>+973 33220068</li>
                        </ul>
                    </div>

                    {/* Address and Hours */}
                    <div>
                        <h3 className='font-semibold mb-4'>Address</h3>
                        <p className='text-sm'>
                            Block 205, Road 516, Building 1721 A
                            <br />
                            Muharraq, Kingdom of Bahrain
                        </p>
                        <h3 className='font-semibold mt-4 mb-2'>Dine-in Hours:</h3>
                        <p className='text-sm'>
                            11.00 AM - 03.00 PM
                            <br />
                            06.00 PM - 11.30 PM
                            <br />
                            Everyday
                        </p>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className='mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center'>
                    <p className='text-sm'>&copy; 2025 Bait Al Ayawed</p>
                </div>
            </div>
        </footer>
    );
}
