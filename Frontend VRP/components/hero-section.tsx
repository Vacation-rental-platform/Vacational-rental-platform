"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, Info } from "lucide-react"

const heroImages = [
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&h=1080&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&h=1080&fit=crop&crop=center",
]

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={image || "/placeholder.svg"} alt="Hero background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Discover Your Perfect
          <span className="text-red-600"> Vacation Rental</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
          Book premium vacation rentals and exclusive services across 15 states. From luxury beachfront homes to
          mountain retreats.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
            <Play className="mr-2 h-5 w-5" />
            Start Booking
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black px-8 py-3 bg-transparent"
          >
            <Info className="mr-2 h-5 w-5" />
            Learn More
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
