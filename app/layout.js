import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Court Marriage Pro",
  description: "Professional Marriage Portal",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning // Pehla fix yahan
    >
      <body 
        className="min-h-full flex flex-col"
        suppressHydrationWarning={true} // Doosra fix yahan
      >
        {children}
      </body>
    </html>
  );
}