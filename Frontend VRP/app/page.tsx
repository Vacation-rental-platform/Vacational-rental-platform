"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, MapPin, Users, Star, ChevronRight, Play, ArrowRight, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
  },
]

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [hoveredProperty, setHoveredProperty] = useState<number | null>(null)
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-rotate hero images
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextHeroImage = () => {
    setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevHeroImage = () => {
    setCurrentHeroIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section with Rotating Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentHeroIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 z-0"
          >
            <img
              src={heroImages[currentHeroIndex].src || "/placeholder.svg"}
              alt={heroImages[currentHeroIndex].title}
              className="w-full h-full object-cover"
              crossOrigin="anonymous"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
          </motion.div>
        </AnimatePresence>

        {/* Hero Navigation */}
        <button
          onClick={prevHeroImage}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 hover:bg-black/50 transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={nextHeroImage}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 hover:bg-black/50 transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.div
            key={`content-${currentHeroIndex}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              {heroImages[currentHeroIndex].title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">{heroImages[currentHeroIndex].subtitle}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-8"
          >
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Where do you want to go?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 bg-white/10 border-white/20 text-white placeholder:text-gray-300 backdrop-blur-sm focus:bg-white/20 transition-all duration-300"
              />
            </div>
            <Link href="/properties">
              <Button
                size="lg"
                className="h-14 px-8 bg-red-600 hover:bg-red-700 text-white transform hover:scale-105 transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                Explore Now
              </Button>
            </Link>
          </motion.div>

          {/* Hero Indicators */}
          <div className="flex justify-center space-x-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentHeroIndex(index)
                  setIsAutoPlaying(false)
                  setTimeout(() => setIsAutoPlaying(true), 10000)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentHeroIndex ? "bg-red-600 scale-125" : "bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-8"
          >
            Explore Top Destinations
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {cities.map((city, index) => (
              <motion.div
                key={city.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group cursor-pointer"
              >
                <Link href={`/properties?city=${city.name}`}>
                  <Card className="bg-card border-border hover:border-red-600 transition-all duration-300 overflow-hidden">
                    <div className="relative h-32 overflow-hidden">
                      <img
                        src={city.image || "/placeholder.svg"}
                        alt={city.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        crossOrigin="anonymous"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-2 left-2">
                        <h3 className="font-semibold text-white text-sm">{city.name}</h3>
                        <p className="text-xs text-gray-300">{city.properties} properties</p>
                      </div>
                      <div className="absolute inset-0 bg-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold"
            >
              Featured Properties
            </motion.h2>
            <Link href="/properties">
              <Button variant="ghost" className="text-red-600 hover:text-red-500 hover:bg-red-600/10">
                View All <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredProperty(property.id)}
                onHoverEnd={() => setHoveredProperty(null)}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <Link href={`/property/${property.id}`}>
                  <Card className="bg-card border-border hover:border-red-600 transition-all duration-300 overflow-hidden">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={property.image || "/placeholder.svg"}
                        alt={property.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        crossOrigin="anonymous"
                        loading="lazy"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-black/70 text-white backdrop-blur-sm">
                          <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                          {property.rating}
                        </Badge>
                      </div>
                      <AnimatePresence>
                        {hoveredProperty === property.id && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm"
                          >
                            <Button
                              size="sm"
                              className="bg-red-600 hover:bg-red-700 transform hover:scale-105 transition-all duration-300"
                            >
                              <Play className="w-4 h-4 mr-2" />
                              Quick View
                            </Button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-semibold group-hover:text-red-600 transition-colors">
                          {property.title}
                        </h3>
                        <p className="text-2xl font-bold text-red-600">
                          ${property.price}
                          <span className="text-sm text-muted-foreground font-normal">/night</span>
                        </p>
                      </div>

                      <p className="text-muted-foreground mb-4 flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {property.location}
                      </p>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {property.guests} guests
                        </span>
                        <span>{property.bedrooms} bed</span>
                        <span>{property.bathrooms} bath</span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {property.amenities.slice(0, 3).map((amenity) => (
                          <Badge
                            key={amenity}
                            variant="secondary"
                            className="bg-muted text-muted-foreground hover:bg-muted/80 transition-colors"
                          >
                            {amenity}
                          </Badge>
                        ))}
                        {property.amenities.length > 3 && (
                          <Badge variant="secondary" className="bg-muted text-muted-foreground">
                            +{property.amenities.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-8"
          >
            Enhance Your Stay
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto"
          >
            Book premium add-on services to make your vacation unforgettable
          </motion.p>

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
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 bg-muted rounded-lg hover:bg-muted/80 transition-all duration-300 cursor-pointer group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-semibold mb-2">{service.name}</h3>
                <p className="text-red-600 font-semibold">{service.price}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12"
          >
            <Link href="/services">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-8 transform hover:scale-105 transition-all duration-300"
              >
                Explore All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-muted/50">
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
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="text-4xl font-bold text-red-600 mb-2 group-hover:text-red-500 transition-colors">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
