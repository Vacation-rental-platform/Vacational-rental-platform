"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Search, MapPin, Users, Star, Bed, Bath } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import Link from "next/link"

const allProperties = [
  {
    id: 1,
    title: "Luxury Beachfront Villa",
    location: "Miami, Florida",
    city: "Florida",
    price: 450,
    rating: 4.9,
    reviews: 127,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop&crop=center",
    amenities: ["Pool", "Beach Access", "WiFi", "Kitchen", "Parking"],
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    type: "Villa",
  },
  {
    id: 2,
    title: "Mountain Retreat Cabin",
    location: "Aspen, Colorado",
    city: "Colorado",
    price: 320,
    rating: 4.8,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center",
    amenities: ["Fireplace", "Hot Tub", "Ski Access", "WiFi"],
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    type: "Cabin",
  },
  {
    id: 3,
    title: "Downtown Penthouse",
    location: "New York, NY",
    city: "New York",
    price: 680,
    rating: 4.9,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop&crop=center",
    amenities: ["City View", "Gym", "Concierge", "WiFi"],
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    type: "Penthouse",
  },
  {
    id: 4,
    title: "Desert Oasis Resort",
    location: "Scottsdale, Arizona",
    city: "Arizona",
    price: 380,
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop&crop=center",
    amenities: ["Pool", "Spa", "Golf", "WiFi"],
    guests: 10,
    bedrooms: 5,
    bathrooms: 4,
    type: "Resort",
  },
  {
    id: 5,
    title: "Historic Mansion",
    location: "Savannah, Georgia",
    city: "Georgia",
    price: 520,
    rating: 4.8,
    reviews: 94,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop&crop=center",
    amenities: ["Garden", "Library", "Fireplace", "WiFi"],
    guests: 12,
    bedrooms: 6,
    bathrooms: 5,
    type: "Mansion",
  },
  {
    id: 6,
    title: "Lakefront Lodge",
    location: "Lake Tahoe, California",
    city: "California",
    price: 420,
    rating: 4.9,
    reviews: 178,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop&crop=center",
    amenities: ["Lake Access", "Dock", "Kayaks", "WiFi"],
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    type: "Lodge",
  },
  {
    id: 7,
    title: "Urban Loft",
    location: "Chicago, Illinois",
    city: "Illinois",
    price: 280,
    rating: 4.6,
    reviews: 145,
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop&crop=center",
    amenities: ["City View", "Modern", "WiFi", "Kitchen"],
    guests: 4,
    bedrooms: 2,
    bathrooms: 1,
    type: "Loft",
  },
  {
    id: 8,
    title: "Beach House Paradise",
    location: "Honolulu, Hawaii",
    city: "Hawaii",
    price: 650,
    rating: 4.9,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1542259009477-d625272157b7?w=600&h=400&fit=crop&crop=center",
    amenities: ["Beach Access", "Pool", "Surfboards", "WiFi"],
    guests: 10,
    bedrooms: 5,
    bathrooms: 4,
    type: "Beach House",
  },
]

export default function PropertiesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCity, setSelectedCity] = useState("all")
  const [selectedType, setSelectedType] = useState("all")
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [guestCount, setGuestCount] = useState("all")
  const [sortBy, setSortBy] = useState("popular")
  const [filteredProperties, setFilteredProperties] = useState(allProperties)

  useEffect(() => {
    const filtered = allProperties.filter((property) => {
      const matchesSearch =
        property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.location.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCity = selectedCity === "all" || property.city === selectedCity
      const matchesType = selectedType === "all" || property.type === selectedType
      const matchesPrice = property.price >= priceRange[0] && property.price <= priceRange[1]
      const matchesGuests = guestCount === "all" || property.guests >= Number.parseInt(guestCount)

      return matchesSearch && matchesCity && matchesType && matchesPrice && matchesGuests
    })

    // Sort properties
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        default:
          return b.reviews - a.reviews
      }
    })

    setFilteredProperties(filtered)
  }, [searchQuery, selectedCity, selectedType, priceRange, guestCount, sortBy])

  const cities = ["all", ...new Set(allProperties.map((p) => p.city))]
  const types = ["all", ...new Set(allProperties.map((p) => p.type))]

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Premium Properties</h1>
          <p className="text-xl text-gray-300">Discover luxury vacation rentals across 15 states</p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 space-y-4"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search properties or locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-gray-900 border-gray-700 text-white"
              />
            </div>

            <Select value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger className="w-full lg:w-48 bg-gray-900 border-gray-700">
                <SelectValue placeholder="Select City" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-gray-700">
                {cities.map((city) => (
                  <SelectItem key={city} value={city}>
                    {city === "all" ? "All Cities" : city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-full lg:w-48 bg-gray-900 border-gray-700">
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-gray-700">
                {types.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type === "all" ? "All Types" : type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full lg:w-48 bg-gray-900 border-gray-700">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-gray-700">
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-2">
                Price Range: ${priceRange[0]} - ${priceRange[1]}
              </label>
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={1000}
                min={0}
                step={50}
                className="w-full"
              />
            </div>

            <Select value={guestCount} onValueChange={setGuestCount}>
              <SelectTrigger className="w-full lg:w-48 bg-gray-900 border-gray-700">
                <SelectValue placeholder="Guests" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-gray-700">
                <SelectItem value="all">Any Guests</SelectItem>
                <SelectItem value="2">2+ Guests</SelectItem>
                <SelectItem value="4">4+ Guests</SelectItem>
                <SelectItem value="6">6+ Guests</SelectItem>
                <SelectItem value="8">8+ Guests</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mb-6">
          <p className="text-gray-400">
            Showing {filteredProperties.length} of {allProperties.length} properties
          </p>
        </motion.div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Link href={`/property/${property.id}`}>
                <Card className="bg-gray-900 border-gray-800 hover:border-red-600 transition-all duration-300 overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={property.image || "/placeholder.svg"}
                      alt={property.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      crossOrigin="anonymous"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-black/70 text-white">
                        <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                        {property.rating}
                      </Badge>
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-red-600 text-white">{property.type}</Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white group-hover:text-red-600 transition-colors">
                        {property.title}
                      </h3>
                      <p className="text-2xl font-bold text-red-600">
                        ${property.price}
                        <span className="text-sm text-gray-400 font-normal">/night</span>
                      </p>
                    </div>

                    <p className="text-gray-400 mb-4 flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {property.location}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {property.guests} guests
                      </span>
                      <span className="flex items-center">
                        <Bed className="w-4 h-4 mr-1" />
                        {property.bedrooms} bed
                      </span>
                      <span className="flex items-center">
                        <Bath className="w-4 h-4 mr-1" />
                        {property.bathrooms} bath
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {property.amenities.slice(0, 3).map((amenity) => (
                        <Badge key={amenity} variant="secondary" className="bg-gray-800 text-gray-300">
                          {amenity}
                        </Badge>
                      ))}
                      {property.amenities.length > 3 && (
                        <Badge variant="secondary" className="bg-gray-800 text-gray-300">
                          +{property.amenities.length - 3} more
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">{property.reviews} reviews</span>
                      <Button size="sm" className="bg-red-600 hover:bg-red-700">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredProperties.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <h3 className="text-2xl font-semibold mb-4">No properties found</h3>
            <p className="text-gray-400 mb-6">Try adjusting your filters to see more results</p>
            <Button
              onClick={() => {
                setSearchQuery("")
                setSelectedCity("all")
                setSelectedType("all")
                setPriceRange([0, 1000])
                setGuestCount("all")
              }}
              className="bg-red-600 hover:bg-red-700"
            >
              Clear All Filters
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  )
}
