import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});

export const metadata = {
    title: "Bait Al Ayawed",
    description: "Arabic Cuisine Restaurant in Bahrain",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`scroll-pt-44 ${inter.className}`}>
            <body className={`antialiased bg-[#f4efe3]`}>
                <main>
                    <Navbar />
                    {children}
                    <Footer />
                </main>
            </body>
        </html>
    );
}
