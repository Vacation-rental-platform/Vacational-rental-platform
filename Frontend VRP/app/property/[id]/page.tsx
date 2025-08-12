"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  Star,
  MapPin,
  Users,
  Bed,
  Bath,
  Wifi,
  Car,
  Waves,
  Utensils,
  CreditCard,
  Heart,
  Share2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { BookingCalendar } from "@/components/booking-calendar"
import Link from "next/link"

// Mock property data - in a real app, this would come from an API
const getPropertyById = (id: string) => {
  const properties = {
    "1": {
      id: 1,
      title: "Luxury Beachfront Villa",
      location: "Miami, Florida",
      price: 450,
      rating: 4.9,
      reviews: 127,
      images: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center",
      ],
      amenities: [
        { name: "Private Pool", icon: Waves },
        { name: "Beach Access", icon: MapPin },
        { name: "WiFi", icon: Wifi },
        { name: "Full Kitchen", icon: Utensils },
        { name: "Parking", icon: Car },
      ],
      guests: 8,
      bedrooms: 4,
      bathrooms: 3,
      description:
        "Experience luxury at its finest in this stunning beachfront villa. With panoramic ocean views, private beach access, and world-class amenities, this property offers the perfect escape for your dream vacation. The villa features modern furnishings, a gourmet kitchen, and spacious living areas perfect for entertaining.",
      features: [
        "Private beach access with lounge chairs",
        "Infinity pool with ocean view",
        "Fully equipped gourmet kitchen",
        "Master suite with ocean view balcony",
        "Private parking for 3 cars",
        "Concierge service available",
        "24/7 security",
        "High-speed WiFi throughout",
        "Air conditioning in all rooms",
        "Washer and dryer",
        "Beach equipment provided",
        "Outdoor BBQ area",
      ],
      host: {
        name: "Maria Rodriguez",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
        rating: 4.9,
        reviews: 234,
        responseTime: "Within 1 hour",
        languages: ["English", "Spanish"],
      },
      reviewsList: [
        {
          name: "John Smith",
          rating: 5,
          date: "November 2024",
          comment:
            "Absolutely incredible property! The ocean views were breathtaking and the amenities exceeded our expectations. Maria was an amazing host.",
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
        },
        {
          name: "Sarah Johnson",
          rating: 5,
          date: "October 2024",
          comment:
            "Perfect for our family vacation. The kids loved the pool and beach access. The house was spotless and exactly as described.",
          avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
        },
        {
          name: "Mike Davis",
          rating: 4,
          date: "September 2024",
          comment:
            "Great location and beautiful property. The kitchen was well-equipped for cooking. Only minor issue was the WiFi speed, but overall fantastic stay.",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
        },
      ],
    },
    "2": {
      id: 2,
      title: "Mountain Retreat Cabin",
      location: "Aspen, Colorado",
      price: 320,
      rating: 4.8,
      reviews: 89,
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop&crop=center",
      ],
      amenities: [
        { name: "Fireplace", icon: Waves },
        { name: "Hot Tub", icon: MapPin },
        { name: "WiFi", icon: Wifi },
        { name: "Full Kitchen", icon: Utensils },
        { name: "Parking", icon: Car },
      ],
      guests: 6,
      bedrooms: 3,
      bathrooms: 2,
      description:
        "Escape to this cozy mountain retreat nestled in the heart of Aspen. Perfect for ski enthusiasts and nature lovers alike.",
      features: [
        "Ski-in/ski-out access",
        "Hot tub with mountain views",
        "Stone fireplace",
        "Fully equipped kitchen",
        "Private parking",
        "Mountain hiking trails nearby",
      ],
      host: {
        name: "David Wilson",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        rating: 4.8,
        reviews: 156,
        responseTime: "Within 2 hours",
        languages: ["English"],
      },
      reviewsList: [
        {
          name: "Emily Chen",
          rating: 5,
          date: "December 2024",
          comment: "Perfect mountain getaway! The hot tub after skiing was amazing.",
          avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
        },
      ],
    },
    "3": {
      id: 3,
      title: "Downtown Penthouse",
      location: "New York, NY",
      price: 680,
      rating: 4.9,
      reviews: 203,
      images: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop&crop=center",
      ],
      amenities: [
        { name: "City View", icon: MapPin },
        { name: "Gym Access", icon: Waves },
        { name: "WiFi", icon: Wifi },
        { name: "Full Kitchen", icon: Utensils },
        { name: "Concierge", icon: Car },
      ],
      guests: 4,
      bedrooms: 2,
      bathrooms: 2,
      description: "Luxury penthouse in the heart of Manhattan with stunning city views.",
      features: [
        "360-degree city views",
        "Private elevator access",
        "Rooftop terrace",
        "Building gym and spa",
        "24/7 concierge",
      ],
      host: {
        name: "Alexandra Smith",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
        rating: 4.9,
        reviews: 89,
        responseTime: "Within 30 minutes",
        languages: ["English", "French"],
      },
      reviewsList: [
        {
          name: "Robert Johnson",
          rating: 5,
          date: "November 2024",
          comment: "Incredible views and perfect location. Highly recommend!",
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
        },
      ],
    },
    "4": {
      id: 4,
      title: "Desert Oasis Resort",
      location: "Scottsdale, Arizona",
      price: 380,
      rating: 4.7,
      reviews: 156,
      images: ["https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop&crop=center"],
      amenities: [
        { name: "Pool", icon: Waves },
        { name: "Spa", icon: MapPin },
        { name: "WiFi", icon: Wifi },
        { name: "Golf Course", icon: Utensils },
        { name: "Parking", icon: Car },
      ],
      guests: 10,
      bedrooms: 5,
      bathrooms: 4,
      description: "Luxurious desert resort with world-class amenities and stunning desert views.",
      features: [
        "Championship golf course",
        "Full-service spa",
        "Multiple pools",
        "Desert hiking trails",
        "Fine dining restaurant",
      ],
      host: {
        name: "Carlos Martinez",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        rating: 4.7,
        reviews: 234,
        responseTime: "Within 1 hour",
        languages: ["English", "Spanish"],
      },
      reviewsList: [
        {
          name: "Lisa Anderson",
          rating: 5,
          date: "October 2024",
          comment: "Amazing resort with incredible amenities. The spa was fantastic!",
          avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
        },
      ],
    },
    "5": {
      id: 5,
      title: "Historic Mansion",
      location: "Savannah, Georgia",
      price: 520,
      rating: 4.8,
      reviews: 94,
      images: [
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop&crop=center",
      ],
      amenities: [
        { name: "Historic Garden", icon: MapPin },
        { name: "Library", icon: Waves },
        { name: "WiFi", icon: Wifi },
        { name: "Full Kitchen", icon: Utensils },
        { name: "Parking", icon: Car },
      ],
      guests: 12,
      bedrooms: 6,
      bathrooms: 5,
      description:
        "Step back in time in this beautifully restored historic mansion in the heart of Savannah's historic district.",
      features: [
        "Historic architecture from 1850s",
        "Beautiful garden courtyard",
        "Original hardwood floors",
        "Antique furnishings",
        "Walking distance to historic sites",
        "Private library",
      ],
      host: {
        name: "Margaret Thompson",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
        rating: 4.8,
        reviews: 167,
        responseTime: "Within 2 hours",
        languages: ["English"],
      },
      reviewsList: [
        {
          name: "William Davis",
          rating: 5,
          date: "November 2024",
          comment:
            "Absolutely stunning historic property! The attention to detail is incredible and Margaret was a wonderful host.",
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
        },
        {
          name: "Jennifer Wilson",
          rating: 5,
          date: "October 2024",
          comment:
            "Perfect for our family reunion. The mansion is beautiful and the location is ideal for exploring Savannah.",
          avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
        },
        {
          name: "Thomas Brown",
          rating: 4,
          date: "September 2024",
          comment:
            "Beautiful historic property with amazing character. The garden is particularly lovely. Highly recommend!",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
        },
      ],
    },
    "6": {
      id: 6,
      title: "Lakefront Lodge",
      location: "Lake Tahoe, California",
      price: 420,
      rating: 4.9,
      reviews: 178,
      images: ["https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop&crop=center"],
      amenities: [
        { name: "Lake Access", icon: Waves },
        { name: "Dock", icon: MapPin },
        { name: "WiFi", icon: Wifi },
        { name: "Full Kitchen", icon: Utensils },
        { name: "Kayaks", icon: Car },
      ],
      guests: 8,
      bedrooms: 4,
      bathrooms: 3,
      description: "Beautiful lakefront lodge with private dock and stunning mountain views.",
      features: [
        "Private dock and beach",
        "Kayaks and paddleboards included",
        "Mountain and lake views",
        "Fire pit area",
        "Fully equipped kitchen",
      ],
      host: {
        name: "Michael Johnson",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        rating: 4.9,
        reviews: 145,
        responseTime: "Within 1 hour",
        languages: ["English"],
      },
      reviewsList: [
        {
          name: "Amanda Clark",
          rating: 5,
          date: "August 2024",
          comment: "Perfect lakefront getaway! The dock and kayaks made our stay unforgettable.",
          avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
        },
      ],
    },
  }

  return properties[id as keyof typeof properties] || null
}

const addOnServices = [
  { id: "chef", name: "Personal Chef", price: 200, description: "Professional chef for 4 hours" },
  { id: "massage", name: "Couples Massage", price: 300, description: "90-minute relaxing massage" },
  { id: "car", name: "Luxury Car Rental", price: 180, description: "Premium vehicle per day" },
  { id: "cleaning", name: "Daily Housekeeping", price: 120, description: "Professional cleaning service" },
]

export default function PropertyPage({ params }: { params: { id: string } }) {
  const property = getPropertyById(params.id)
  const [selectedImage, setSelectedImage] = useState(0)
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [guests, setGuests] = useState(2)
  const [selectedServices, setSelectedServices] = useState<string[]>([])

  if (!property) {
    return (
      <div className="min-h-screen bg-background text-foreground pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Property Not Found</h1>
          <p className="text-muted-foreground mb-6">The property you're looking for doesn't exist.</p>
          <Link href="/properties">
            <Button className="bg-red-600 hover:bg-red-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Properties
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0
    const start = new Date(checkIn)
    const end = new Date(checkOut)
    return Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
  }

  const calculateTotal = () => {
    const nights = calculateNights()
    const propertyTotal = nights * property.price
    const servicesTotal = selectedServices.reduce((total, serviceId) => {
      const service = addOnServices.find((s) => s.id === serviceId)
      return total + (service ? service.price : 0)
    }, 0)
    const serviceFee = 50
    return propertyTotal + servicesTotal + serviceFee
  }

  const toggleService = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId) ? prev.filter((id) => id !== serviceId) : [...prev, serviceId],
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground pt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link href="/properties">
          <Button variant="ghost" className="mb-6 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Properties
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Property Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative h-96 rounded-lg overflow-hidden"
              >
                <img
                  src={property.images[selectedImage] || "/placeholder.svg"}
                  alt={property.title}
                  className="w-full h-full object-cover"
                  crossOrigin="anonymous"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button size="sm" variant="outline" className="bg-black/50 border-white/20">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="bg-black/50 border-white/20">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>

              <div className="grid grid-cols-6 gap-2">
                {property.images.map((image, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className={`relative h-20 rounded-lg overflow-hidden cursor-pointer ${
                      selectedImage === index ? "ring-2 ring-red-600" : ""
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${property.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                      crossOrigin="anonymous"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Property Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
                    <p className="text-muted-foreground flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {property.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center mb-2">
                      <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                      <span className="font-semibold">{property.rating}</span>
                      <span className="text-muted-foreground ml-1">({property.reviews} reviews)</span>
                    </div>
                    <p className="text-2xl font-bold text-red-600">
                      ${property.price}
                      <span className="text-sm text-muted-foreground font-normal">/night</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-muted-foreground">
                  <span className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {property.guests} guests
                  </span>
                  <span className="flex items-center">
                    <Bed className="w-4 h-4 mr-1" />
                    {property.bedrooms} bedrooms
                  </span>
                  <span className="flex items-center">
                    <Bath className="w-4 h-4 mr-1" />
                    {property.bathrooms} bathrooms
                  </span>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-xl font-semibold mb-4">About this property</h2>
                <p className="text-muted-foreground leading-relaxed">{property.description}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.amenities.map((amenity) => (
                    <div key={amenity.name} className="flex items-center space-x-2 text-muted-foreground">
                      <amenity.icon className="w-5 h-5 text-red-600" />
                      <span>{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">What this place offers</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-muted-foreground">
                      <div className="w-2 h-2 bg-red-600 rounded-full" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add-on Services */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Enhance Your Stay</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {addOnServices.map((service) => (
                    <Card
                      key={service.id}
                      className={`cursor-pointer transition-all ${
                        selectedServices.includes(service.id)
                          ? "bg-red-900/20 border-red-600"
                          : "bg-card border-border hover:border-muted-foreground"
                      }`}
                      onClick={() => toggleService(service.id)}
                    >
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">{service.name}</h3>
                            <p className="text-sm text-muted-foreground">{service.description}</p>
                          </div>
                          <p className="font-bold text-red-600">${service.price}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Host Info */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Meet your host</h2>
                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <img
                        src={property.host.image || "/placeholder.svg"}
                        alt={property.host.name}
                        className="w-20 h-20 rounded-full object-cover"
                        crossOrigin="anonymous"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold">{property.host.name}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                          <span className="flex items-center">
                            <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                            {property.host.rating} ({property.host.reviews} reviews)
                          </span>
                          <span>Responds {property.host.responseTime}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          Languages: {property.host.languages.join(", ")}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Reviews */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Guest Reviews</h2>
                <div className="space-y-4">
                  {property.reviewsList.map((review, index) => (
                    <Card key={index} className="bg-card border-border">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <img
                            src={review.avatar || "/placeholder.svg"}
                            alt={review.name}
                            className="w-12 h-12 rounded-full object-cover"
                            crossOrigin="anonymous"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold">{review.name}</h4>
                              <div className="flex items-center">
                                {Array.from({ length: review.rating }).map((_, i) => (
                                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                ))}
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">{review.date}</p>
                            <p className="text-muted-foreground">{review.comment}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-card border-border sticky top-24">
              <CardHeader>
                <CardTitle>Reserve Your Stay</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="checkin" className="text-muted-foreground">
                      Check-in
                    </Label>
                    <Input
                      id="checkin"
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <Label htmlFor="checkout" className="text-muted-foreground">
                      Check-out
                    </Label>
                    <Input
                      id="checkout"
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="bg-background border-border"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="guests" className="text-muted-foreground">
                    Guests
                  </Label>
                  <Input
                    id="guests"
                    type="number"
                    min="1"
                    max={property.guests}
                    value={guests}
                    onChange={(e) => setGuests(Number.parseInt(e.target.value))}
                    className="bg-background border-border"
                  />
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between text-muted-foreground">
                    <span>
                      ${property.price} x {calculateNights()} nights
                    </span>
                    <span>${calculateNights() * property.price}</span>
                  </div>
                  {selectedServices.length > 0 && (
                    <div className="space-y-1">
                      {selectedServices.map((serviceId) => {
                        const service = addOnServices.find((s) => s.id === serviceId)
                        return service ? (
                          <div key={serviceId} className="flex justify-between text-muted-foreground text-sm">
                            <span>{service.name}</span>
                            <span>${service.price}</span>
                          </div>
                        ) : null
                      })}
                    </div>
                  )}
                  <div className="flex justify-between text-muted-foreground">
                    <span>Service fee</span>
                    <span>$50</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span>${calculateTotal()}</span>
                  </div>
                </div>

                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Reserve Now
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  You won't be charged yet. Review your booking details on the next page.
                </p>
              </CardContent>
            </Card>

            {/* Calendar */}
            <BookingCalendar />
          </div>
        </div>
      </div>
    </div>
  )
}
