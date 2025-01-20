'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import ContactBg from '@/assets/images/bg.avif';
import pangaiaBold from '@/app/fonts/pangaiaBold';
import pangaiaMedium from '@/app/fonts/pangaiaMedium';

export default function ContactSection() {
    const [date, setDate] = React.useState();

    const timeOptions = Array.from({ length: 24 }, (_, i) => {
        const hour = i % 12 || 12;
        const ampm = i < 12 ? 'AM' : 'PM';
        return `${hour}:00 ${ampm}`;
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted', { date });
    };

    return (
        <div
            id='contact-section'
            className='min-h-[600px] relative flex items-center justify-center overflow-hidden py-12 px-4'
        >
            <div className='absolute inset-0 z-0'>
                <Image
                    src={ContactBg}
                    alt='Restaurant background'
                    fill
                    style={{ objectFit: 'cover' }}
                    placeholder='blur'
                />
                <div className='absolute inset-0 bg-black bg-opacity-50'></div>
            </div>

            <div className='relative z-10 w-full max-w-4xl mx-auto'>
                <div className='bg-white bg-opacity-20 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden'>
                    <div className='flex flex-col md:flex-row'>
                        <div className='md:w-1/2 p-8 text-white'>
                            <h2
                                className={`text-4xl md:text-5xl font-bold text-white mb-4 ${pangaiaBold.className}`}
                            >
                                Crispy Every Bite
                            </h2>
                            <h3 className='text-2xl md:text-3xl font-normal mb-6'>
                                Need Booking?
                                <br />
                                Reserve your table
                            </h3>
                            <div className='mb-8'>
                                <h4 className='text-xl font-semibold'>
                                    Contact
                                </h4>
                                <p className='text-2xl font-bold'>
                                    +973 17533933 (Call)
                                    <br />
                                    +973 33220068 (Whatsapp)
                                </p>
                            </div>
                        </div>

                        <div className='md:w-1/2 p-6 bg-white rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none'>
                            <h3
                                className={`text-2xl font-bold mb-6 text-center text-gray-800 ${pangaiaMedium.className}`}
                            >
                                Make a Reservation
                            </h3>
                            <form onSubmit={handleSubmit} className='space-y-2'>
                                <div className='space-y-2'>
                                    <Label htmlFor='persons'>
                                        Number of Persons
                                    </Label>
                                    <Input
                                        type='number'
                                        id='persons'
                                        placeholder='Enter number of persons'
                                        min='1'
                                    />
                                </div>
                                <div className='space-y-2'>
                                    <Label htmlFor='phone'>Phone Number</Label>
                                    <Input
                                        type='tel'
                                        id='phone'
                                        placeholder='Enter your phone number'
                                    />
                                </div>
                                <div className='space-y-2'>
                                    <Label htmlFor='date'>Date</Label>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant={'outline'}
                                                className={`w-full justify-start text-left font-normal ${
                                                    !date &&
                                                    'text-muted-foreground'
                                                }`}
                                            >
                                                <CalendarIcon className='mr-2 h-4 w-4' />
                                                {date ? (
                                                    format(date, 'PPP')
                                                ) : (
                                                    <span>Pick a date</span>
                                                )}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent
                                            className='w-auto p-0'
                                            align='start'
                                        >
                                            <Calendar
                                                mode='single'
                                                selected={date}
                                                onSelect={setDate}
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </div>
                                <div className='space-y-2 pb-4'>
                                    <Label htmlFor='time'>Time</Label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder='Select a time' />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {timeOptions.map((time) => (
                                                <SelectItem
                                                    key={time}
                                                    value={time}
                                                >
                                                    {time}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <Button
                                    type='submit'
                                    className='w-full rounded-md'
                                >
                                    Reserve Now
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
