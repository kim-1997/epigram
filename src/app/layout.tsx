import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/components/QueryProvider";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Epigram - 짧은 글귀를 공유하는 공간",
    description:
        "Epigram은 짧고 인상적인 글귀를 작성하고 공유할 수 있는 플랫폼입니다.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <QueryProvider>
                    <main className="w-full min-h-screen">{children}</main>
                </QueryProvider>
            </body>
        </html>
    );
}
