"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const featuredProperties = [
  {
    id: 1,
    title: "Luxury Beachfront Villa",
    location: "Miami, Florida",
    price: 450,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop&crop=center",
    amenities: ["Ocean View", "Private Pool", "Hot Tub"],
  },
  {
    id: 2,
    title: "Mountain Cabin Retreat",
    location: "Aspen, Colorado",
    price: 320,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center",
    amenities: ["Ski Access", "Fireplace", "Mountain View"],
  },
  {
    id: 3,
    title: "Downtown Penthouse",
    location: "New York, NY",
    price: 680,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop&crop=center",
    amenities: ["City View", "Rooftop Access", "Gym"],
  },
  {
    id: 4,
    title: "Desert Oasis Resort",
    location: "Scottsdale, Arizona",
    price: 380,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop&crop=center",
    amenities: ["Spa", "Golf Course", "Pool"],
  },
  {
    id: 5,
    title: "Historic Mansion",
    location: "Savannah, Georgia",
    price: 520,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop&crop=center",
    amenities: ["Historic", "Garden", "Balcony"],
  },
]

export function FeaturedProperties() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, featuredProperties.length - 2))
  }

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + Math.max(1, featuredProperties.length - 2)) % Math.max(1, featuredProperties.length - 2),
    )
  }

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Featured Properties</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={prevSlide}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextSlide}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out gap-6"
            style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
          >
            {featuredProperties.map((property) => (
              <div key={property.id} className="flex-none w-full md:w-1/3">
                <div className="netflix-card group cursor-pointer">
                  <div className="relative">
                    <img
                      src={property.image || "/placeholder.svg"}
                      alt={property.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" className="bg-red-600 hover:bg-red-700">
                        Book Now
                      </Button>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-lg">{property.title}</h3>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">{property.rating}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 mb-3">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">{property.location}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {property.amenities.map((amenity) => (
                        <span key={amenity} className="px-2 py-1 bg-zinc-800 rounded-full text-xs">
                          {amenity}
                        </span>
                      ))}
                    </div>

                    <div className="text-xl font-bold">
                      ${property.price}
                      <span className="text-sm font-normal text-gray-400">/night</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
