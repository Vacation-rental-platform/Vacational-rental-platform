"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, MapPin, Users, Star, ChevronRight, ArrowRight, Calendar, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&h=1080&fit=crop&crop=center",
    title: "Luxury Beach Villas",
    subtitle: "Oceanfront paradise awaits",
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&crop=center",
    title: "Mountain Retreats",
    subtitle: "Escape to scenic heights",
  },
  {
    src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&h=1080&fit=crop&crop=center",
    title: "Urban Penthouses",
    subtitle: "City skyline views",
  },
  {
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&h=1080&fit=crop&crop=center",
    title: "Desert Oases",
    subtitle: "Tranquil southwestern charm",
  },
  {
    src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&h=1080&fit=crop&crop=center",
    title: "Lakefront Lodges",
    subtitle: "Waterside serenity",
  },
]

const cities = [
  {
    name: "Washington",
    properties: 45,
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop&crop=center",
  },
  {
    name: "Tennessee",
    properties: 38,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center",
  },
  {
    name: "Louisiana",
    properties: 52,
    image: "https://images.unsplash.com/photo-1605537964077-2943e7e9e2a2?w=400&h=300&fit=crop&crop=center",
  },
  {
    name: "Texas",
    properties: 67,
    image: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=400&h=300&fit=crop&crop=center",
  },
  {
    name: "Illinois",
    properties: 89,
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=300&fit=crop&crop=center",
  },
  {
    name: "Georgia",
    properties: 43,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center",
  },
  {
    name: "Colorado",
    properties: 56,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center",
  },
  {
    name: "Arizona",
    properties: 34,
    image: "https://images.unsplash.com/photo-1444927714506-8492d94b5ba0?w=400&h=300&fit=crop&crop=center",
  },
  {
    name: "Utah",
    properties: 29,
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop&crop=center",
  },
  {
    name: "California",
    properties: 156,
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop&crop=center",
  },
  {
    name: "New York",
    properties: 234,
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=300&fit=crop&crop=center",
  },
  {
    name: "Florida",
    properties: 78,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop&crop=center",
  },
  {
    name: "Hawaii",
    properties: 67,
    image: "https://images.unsplash.com/photo-1542259009477-d625272157b7?w=400&h=300&fit=crop&crop=center",
  },
  {
    name: "Massachusetts",
    properties: 45,
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=300&fit=crop&crop=center",
  },
  {
    name: "Nevada",
    properties: 89,
    image: "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=400&h=300&fit=crop&crop=center",
  },
]

const featuredProperties = [
  {
    id: 1,
    title: "Luxury Beachfront Villa",
    location: "Miami, Florida",
    price: 450,
    rating: 4.9,
    reviews: 127,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop&crop=center",
    amenities: ["Pool", "Beach Access", "WiFi", "Kitchen"],
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    favorite: true,
  },
  {
    id: 2,
    title: "Mountain Retreat Cabin",
    location: "Aspen, Colorado",
    price: 320,
    rating: 4.8,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center",
    amenities: ["Fireplace", "Hot Tub", "Ski Access", "WiFi"],
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    favorite: false,
  },
  {
    id: 3,
    title: "Downtown Penthouse",
    location: "New York, NY",
    price: 680,
    rating: 4.9,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop&crop=center",
    amenities: ["City View", "Gym", "Concierge", "WiFi"],
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    favorite: true,
  },
  {
    id: 4,
    title: "Desert Oasis Resort",
    location: "Scottsdale, Arizona",
    price: 380,
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop&crop=center",
    amenities: ["Pool", "Spa", "Golf", "WiFi"],
    guests: 10,
    bedrooms: 5,
    bathrooms: 4,
    favorite: false,
  },
  {
    id: 5,
    title: "Historic Mansion",
    location: "Savannah, Georgia",
    price: 520,
    rating: 4.8,
    reviews: 94,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop&crop=center",
    amenities: ["Garden", "Library", "Fireplace", "WiFi"],
    guests: 12,
    bedrooms: 6,
    bathrooms: 5,
    favorite: true,
  },
  {
    id: 6,
    title: "Lakefront Lodge",
    location: "Lake Tahoe, California",
    price: 420,
    rating: 4.9,
    reviews: 178,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop&crop=center",
    amenities: ["Lake Access", "Dock", "Kayaks", "WiFi"],
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    favorite: false,
  },
]

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [guests, setGuests] = useState("2")
  const [hoveredProperty, setHoveredProperty] = useState<number | null>(null)
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-rotate hero images
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextHeroImage = () => {
    setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 15000)
  }

  const prevHeroImage = () => {
    setCurrentHeroIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 15000)
  }

  return (
    <div className="min-h-screen text-gray-900">
      {/* Hero Section with Rotating Background and Search */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Rotating Background Images */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentHeroIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 z-0"
          >
            <img
              src={heroImages[currentHeroIndex].src || "/placeholder.svg"}
              alt={heroImages[currentHeroIndex].title}
              className="w-full h-full object-cover"
              crossOrigin="anonymous"
              loading="eager"
            />
            {/* Subtle overlay to ensure text readability */}
            <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]" />
          </motion.div>
        </AnimatePresence>

        {/* Hero Navigation */}
        <button
          onClick={prevHeroImage}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>

        <button
          onClick={nextHeroImage}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">Find your perfect stay</h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              Search premium vacation rentals, luxury homes and unique experiences across 15 states
            </p>
          </motion.div>

          {/* Search Bar - Booking.com/Airbnb Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-5xl mx-auto"
          >
            <Card className="bg-white/95 backdrop-blur-sm border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-2">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                  {/* Where */}
                  <div className="relative group">
                    <div className="p-4 rounded-lg hover:bg-gray-50/80 transition-colors cursor-pointer">
                      <label className="block text-xs font-semibold text-gray-900 mb-1">Where</label>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                        <Input
                          placeholder="Search destinations"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="border-0 p-0 text-gray-900 placeholder:text-gray-500 focus-visible:ring-0 bg-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Check in */}
                  <div className="relative group border-l border-gray-200">
                    <div className="p-4 rounded-lg hover:bg-gray-50/80 transition-colors cursor-pointer">
                      <label className="block text-xs font-semibold text-gray-900 mb-1">Check in</label>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                        <Input
                          type="date"
                          value={checkIn}
                          onChange={(e) => setCheckIn(e.target.value)}
                          className="border-0 p-0 text-gray-900 focus-visible:ring-0 bg-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Check out */}
                  <div className="relative group border-l border-gray-200">
                    <div className="p-4 rounded-lg hover:bg-gray-50/80 transition-colors cursor-pointer">
                      <label className="block text-xs font-semibold text-gray-900 mb-1">Check out</label>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                        <Input
                          type="date"
                          value={checkOut}
                          onChange={(e) => setCheckOut(e.target.value)}
                          className="border-0 p-0 text-gray-900 focus-visible:ring-0 bg-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Who */}
                  <div className="relative group border-l border-gray-200">
                    <div className="p-4 rounded-lg hover:bg-gray-50/80 transition-colors cursor-pointer flex items-center justify-between">
                      <div className="flex-1">
                        <label className="block text-xs font-semibold text-gray-900 mb-1">Who</label>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 text-gray-400 mr-2" />
                          <Select value={guests} onValueChange={setGuests}>
                            <SelectTrigger className="border-0 p-0 text-gray-900 focus:ring-0 bg-transparent">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 guest</SelectItem>
                              <SelectItem value="2">2 guests</SelectItem>
                              <SelectItem value="3">3 guests</SelectItem>
                              <SelectItem value="4">4 guests</SelectItem>
                              <SelectItem value="5">5+ guests</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <Link href="/properties">
                        <Button className="bg-[#FF385C] hover:bg-[#E31C5F] text-white rounded-full w-12 h-12 p-0 ml-2 shadow-lg">
                          <Search className="w-5 h-5" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mt-8"
          >
            {["Beach", "Mountains", "City", "Desert", "Lake"].map((filter) => (
              <Button
                key={filter}
                variant="outline"
                className="rounded-full border-gray-300 text-gray-700 hover:bg-white/90 bg-white/80 backdrop-blur-sm shadow-sm"
              >
                {filter}
              </Button>
            ))}
          </motion.div>

          {/* Hero Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center space-x-2 mt-12"
          >
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentHeroIndex(index)
                  setIsAutoPlaying(false)
                  setTimeout(() => setIsAutoPlaying(true), 15000)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentHeroIndex ? "bg-[#FF385C] scale-125" : "bg-white/60 hover:bg-white/80"
                }`}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 px-4 beach-sand-bg">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-gray-900"
            >
              Popular homes in United States
            </motion.h2>
            <Link href="/properties">
              <Button variant="ghost" className="text-[#FF385C] hover:text-[#E31C5F] hover:bg-[#FF385C]/10">
                View all <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {featuredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredProperty(property.id)}
                onHoverEnd={() => setHoveredProperty(null)}
                className="group cursor-pointer"
              >
                <Link href={`/property/${property.id}`}>
                  <div className="space-y-3">
                    <div className="relative h-64 overflow-hidden rounded-xl">
                      <img
                        src={property.image || "/placeholder.svg"}
                        alt={property.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        crossOrigin="anonymous"
                        loading="lazy"
                      />
                      <div className="absolute top-3 right-3">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-8 h-8 p-0 bg-white/80 hover:bg-white rounded-full"
                        >
                          <svg
                            className={`w-4 h-4 ${property.favorite ? "fill-red-500 text-red-500" : "text-gray-600"}`}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                          </svg>
                        </Button>
                      </div>
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-white/90 text-gray-900 text-xs">Guest favourite</Badge>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900 truncate">{property.title}</h3>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 fill-current text-gray-900" />
                          <span className="text-sm text-gray-900 ml-1">{property.rating}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">{property.location}</p>
                      <p className="text-gray-600 text-sm">
                        {property.bedrooms} bed · {property.bathrooms} bath
                      </p>
                      <div className="flex items-baseline">
                        <span className="font-semibold text-gray-900">${property.price}</span>
                        <span className="text-gray-600 text-sm ml-1">night</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-16 px-4 beach-sand-light">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-8 text-gray-900"
          >
            Explore destinations
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {cities.slice(0, 10).map((city, index) => (
              <motion.div
                key={city.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative group cursor-pointer"
              >
                <Link href={`/properties?city=${city.name}`}>
                  <div className="relative h-32 overflow-hidden rounded-xl">
                    <img
                      src={city.image || "/placeholder.svg"}
                      alt={city.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      crossOrigin="anonymous"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <h3 className="font-semibold text-white text-sm">{city.name}</h3>
                      <p className="text-xs text-white/80">{city.properties} properties</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-4 beach-sand-bg beach-services-bg">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-8 text-gray-900"
          >
            Enhance your stay
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Personal Chef", icon: "👨‍🍳", price: "From $200" },
              { name: "Massage Therapy", icon: "💆‍♀️", price: "From $150" },
              { name: "Car Rental", icon: "🚗", price: "From $80/day" },
              { name: "Local Tours", icon: "🗺️", price: "From $120" },
            ].map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-white rounded-xl hover:shadow-md transition-all duration-300 cursor-pointer group beach-card-hover"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-semibold mb-2 text-gray-900">{service.name}</h3>
                <p className="text-[#FF385C] font-semibold">{service.price}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/services">
              <Button
                size="lg"
                className="bg-[#FF385C] hover:bg-[#E31C5F] text-white px-8 rounded-full float-animation"
              >
                Explore all services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 beach-sand-light beach-stats-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "130+", label: "Premium Properties" },
              { number: "15", label: "States Covered" },
              { number: "50K+", label: "Happy Guests" },
              { number: "4.9", label: "Average Rating" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="text-4xl font-bold text-[#FF385C] mb-2 group-hover:text-[#E31C5F] transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
