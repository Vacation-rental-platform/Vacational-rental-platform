import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ChatBot } from "@/components/chat-bot"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Stayvy.co - Premium Vacation Rentals",
  description: "Book premium vacation rentals and services across the US with Stayvy.co",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-white`}>
        <ScrollToTop />
        <Navbar />
        <main className="min-h-screen bg-white">{children}</main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  )
}
