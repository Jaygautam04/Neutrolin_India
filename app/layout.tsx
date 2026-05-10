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
  title: "Nutrolin India | Premium Pesticides, Fungicides & Bio-Fertilizers",
  description:
    "Nutrolin India - Leading manufacturer of pesticides, herbicides, fungicides, plant growth promoters and bio-organic products. ISO 9001:2015 Certified. Premium quality agrochemicals for Indian farmers.",
  keywords:
    "pesticides, fungicides, herbicides, fertilizers, plant growth regulators, bio-fertilizers, agriculture, Indian farmers, crop protection, insecticides, Nutrolin",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
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
    <html lang="en" className={`bg-background ${poppins.variable}`}>
      <body className={`font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
        <FloatingActions />
      </body>
    </html>
  )
}
