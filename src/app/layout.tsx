import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Sidebar from "@/components/layout/Sidebar";
import { Providers } from "@/components/Providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "EduStream | Learn Programming with India's Best Educators",
  description: "India's premier educational video platform for programming, web development, UI/UX design and more - by TheCampusCoders",
  keywords: ["coding", "education", "Indian", "programming", "web development", "UI/UX", "EduStream", "TheCampusCoders"],
  authors: [{ name: "TheCampusCoders" }],
  creator: "TheCampusCoders",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} font-poppins bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black text-gray-900 dark:text-gray-100 min-h-screen flex flex-col`}
      >
        <Providers>
          <Navbar />
          <div className="flex flex-1">
            <Sidebar />
            <main className="md:ml-64 w-full min-h-[calc(100vh-64px)] pt-16">
              {children}
            </main>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
