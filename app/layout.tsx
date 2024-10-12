import { Inter } from "next/font/google";
import type { Viewport } from "next";
import { ViewTransitions } from "next-view-transitions";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ViewTransitions>
            <html lang="en">
                <body className={inter.className}>
                    {children}
                    <Analytics />
                    <SpeedInsights />
                </body>
            </html>
        </ViewTransitions>
    );
};
