import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatBot } from "@/components/chat-bot"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Stayvy.co - Premium Vacation Rentals",
  description: "Book premium vacation rentals and services across the US with Stayvy.co",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <ScrollToTop />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <ChatBot />
        </ThemeProvider>
      </body>
    </html>
  )
}
