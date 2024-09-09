import { Inter } from 'next/font/google';
import './globals.css';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
});

export const metadata = {
    title: 'Bait Al Ayawed',
    description: 'Arabic Cuisine Restaurant in Bahrain',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en' className={inter.className}>
            <body className={`antialiased bg-[#f4efe3]`}>{children}</body>
        </html>
    );
}
