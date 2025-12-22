import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { FloatingActions } from "@/components/floating-actions"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Neutrolin India - Premium Pesticides & Fertilizers for Indian Farmers",
  description:
    "Leading provider of high-quality pesticides and fertilizers for Indian agriculture. Trusted by farmers across India for crop protection and enhanced yields. Contact: Abhay Kumar, Chitsona, Bulandshahr.",
  generator: "v0.app",
  keywords:
    "pesticides, fertilizers, agriculture, farming, crop protection, India, insecticides, fungicides, herbicides, organic farming, neutrolin",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
        <FloatingActions />
      </body>
    </html>
  )
}
