"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Star, Clock, MapPin, Calendar, Phone, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const serviceCategories = ["All Services", "Dining", "Wellness", "Transportation", "Experience", "Personal Care"]

const allServices = [
  {
    id: "chef-1",
    name: "Personal Chef - Italian Cuisine",
    category: "Dining",
    provider: "Chef Marco Rossi",
    price: 250,
    duration: "4 hours",
    rating: 4.9,
    reviews: 127,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&crop=center",
    description:
      "Authentic Italian dining experience with a professional chef who brings restaurant-quality meals to your vacation rental.",
    availability: "Available today",
    location: "Miami, Florida",
    features: ["3-course meal", "Wine pairing", "Grocery shopping included", "Clean-up service"],
    bookingLink: "https://www.stayvy.co/chef-marco-rossi",
  },
  {
    id: "massage-1",
    name: "Couples Massage Therapy",
    category: "Wellness",
    provider: "Serenity Spa Services",
    price: 300,
    duration: "90 minutes",
    rating: 4.8,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop&crop=center",
    description: "Relaxing couples massage in the comfort of your rental with professional licensed therapists.",
    availability: "Available tomorrow",
    location: "Miami, Florida",
    features: ["Licensed therapists", "Organic oils", "Relaxing music", "Aromatherapy"],
    bookingLink: "https://www.stayvy.co/serenity-spa",
  },
  {
    id: "car-1",
    name: "Luxury Sports Car Rental",
    category: "Transportation",
    provider: "Elite Auto Rentals",
    price: 180,
    duration: "Per day",
    rating: 4.7,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop&crop=center",
    description: "Premium sports car rental for your Miami adventure. Experience luxury and performance.",
    availability: "Available now",
    location: "Miami, Florida",
    features: ["Full insurance", "24/7 support", "Free delivery", "GPS included"],
    bookingLink: "https://www.stayvy.co/elite-auto",
  },
  {
    id: "tour-1",
    name: "Private Art Deco Tour",
    category: "Experience",
    provider: "Miami Heritage Tours",
    price: 120,
    duration: "3 hours",
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center",
    description: "Guided tour of Miami's iconic Art Deco district with expert local historian.",
    availability: "Available today",
    location: "Miami, Florida",
    features: ["Expert guide", "Small groups", "Photo stops", "Historical insights"],
    bookingLink: "https://www.stayvy.co/miami-heritage",
  },
  {
    id: "cleaning-1",
    name: "Premium Housekeeping",
    category: "Personal Care",
    provider: "Pristine Home Services",
    price: 120,
    duration: "3 hours",
    rating: 4.8,
    reviews: 94,
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop&crop=center",
    description: "Professional deep cleaning and housekeeping service for your vacation rental.",
    availability: "Available today",
    location: "Miami, Florida",
    features: ["Eco-friendly products", "Bonded staff", "Same-day service", "Satisfaction guarantee"],
    bookingLink: "https://www.stayvy.co/pristine-home",
  },
  {
    id: "yacht-1",
    name: "Private Yacht Charter",
    category: "Experience",
    provider: "Ocean Elite Charters",
    price: 800,
    duration: "4 hours",
    rating: 5.0,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop&crop=center",
    description: "Luxury yacht experience with captain and crew. Perfect for special occasions.",
    availability: "Available this weekend",
    location: "Miami, Florida",
    features: ["Professional crew", "Catering available", "Water sports", "Sunset cruise"],
    bookingLink: "https://www.stayvy.co/ocean-elite",
  },
  {
    id: "barber-1",
    name: "Mobile Barber Service",
    category: "Personal Care",
    provider: "Gentleman's Cut Mobile",
    price: 85,
    duration: "45 minutes",
    rating: 4.7,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=300&fit=crop&crop=center",
    description: "Professional barber service that comes to your vacation rental. Premium grooming experience.",
    availability: "Available today",
    location: "Miami, Florida",
    features: ["Hot towel treatment", "Beard trim", "Hair wash", "Premium products"],
    bookingLink: "https://www.stayvy.co/gentlemans-cut",
  },
  {
    id: "wine-1",
    name: "Wine Tasting Experience",
    category: "Dining",
    provider: "Sommelier Select",
    price: 200,
    duration: "2 hours",
    rating: 4.9,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop&crop=center",
    description: "Private wine tasting with certified sommelier featuring premium local and international wines.",
    availability: "Available tomorrow",
    location: "Miami, Florida",
    features: ["Certified sommelier", "6 wine selection", "Cheese pairing", "Educational experience"],
    bookingLink: "https://www.stayvy.co/sommelier-select",
  },
]

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Services")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("popular")

  const filteredServices = allServices.filter((service) => {
    const matchesCategory = selectedCategory === "All Services" || service.category === selectedCategory
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const sortedServices = [...filteredServices].sort((a, b) => {
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

  return (
    <div className="min-h-screen bg-background text-foreground pt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Premium Add-On Services</h1>
          <p className="text-xl text-muted-foreground">
            Enhance your vacation with curated experiences and professional services
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 space-y-4"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <Input
              placeholder="Search services or providers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="md:w-80 bg-background border-border text-foreground"
            />
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="md:w-48 bg-background border-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-background border-border">
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-wrap gap-2">
            {serviceCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-red-600 hover:bg-red-700"
                    : "border-border text-muted-foreground hover:bg-muted"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="bg-card border-border hover:border-red-600 transition-all duration-300 overflow-hidden h-full">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    crossOrigin="anonymous"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-black/70 text-white">{service.category}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-black/70 text-white">
                      <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                      {service.rating}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-red-600 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">{service.provider}</p>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{service.description}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-2" />
                        {service.duration}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2" />
                        {service.location}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        {service.availability}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2">Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.features.slice(0, 2).map((feature) => (
                          <Badge key={feature} variant="secondary" className="bg-muted text-muted-foreground text-xs">
                            {feature}
                          </Badge>
                        ))}
                        {service.features.length > 2 && (
                          <Badge variant="secondary" className="bg-muted text-muted-foreground text-xs">
                            +{service.features.length - 2} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <p className="text-2xl font-bold text-red-600">${service.price}</p>
                      <p className="text-xs text-muted-foreground">{service.reviews} reviews</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="border-border bg-transparent">
                        <Phone className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="border-border bg-transparent">
                        <MessageSquare className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        className="bg-red-600 hover:bg-red-700"
                        onClick={() => window.open(service.bookingLink, "_blank")}
                      >
                        Book Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {sortedServices.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <h3 className="text-2xl font-semibold mb-4">No services found</h3>
            <p className="text-muted-foreground text-lg mb-4">No services found matching your criteria</p>
            <Button
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory("All Services")
              }}
              variant="outline"
              className="border-border text-muted-foreground hover:bg-muted"
            >
              Clear Filters
            </Button>
          </motion.div>
        )}

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 text-center bg-muted/50 rounded-lg p-8"
        >
          <h2 className="text-2xl font-bold mb-4">Need a Custom Service?</h2>
          <p className="text-muted-foreground mb-6">
            Can't find what you're looking for? Our concierge team can arrange any service you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-red-600 hover:bg-red-700">
              <Phone className="w-4 h-4 mr-2" />
              Call Concierge
            </Button>
            <Button variant="outline" className="border-border text-muted-foreground hover:bg-muted bg-transparent">
              <MessageSquare className="w-4 h-4 mr-2" />
              Live Chat
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
