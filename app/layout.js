import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header.jsx";
import { AppThemeProvider } from "@/components/theme-provider.jsx";
import { Footer } from "@/components/footer";
// Zaroori: Direct next-themes se nahi, balkay apni file se import karein

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Court Marriage Pro | Official",
  description: "Professional Marriage Portal in Pakistan",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning 
    >
      <body 
        className="min-h-full flex flex-col bg-background text-foreground"
        suppressHydrationWarning={true}
      >
        {/* Humne yahan AppThemeProvider use kiya hai jo client-safe hai */}
        <AppThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
        </AppThemeProvider>
      </body>
    </html>
  );
}