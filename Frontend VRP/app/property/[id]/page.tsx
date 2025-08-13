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
  Copy,
  Facebook,
  Twitter,
  Mail,
  Check,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { BookingCalendar } from "@/components/booking-calendar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/hooks/use-toast"
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
        { name: "Private Pool", included: true, icon: Waves },
        { name: "Beach Access", included: true, icon: MapPin },
        { name: "High-Speed WiFi", included: true, icon: Wifi },
        { name: "Full Kitchen", included: true, icon: Utensils },
        { name: "Free Parking", included: true, icon: Car },
        { name: "Air Conditioning", included: true, icon: Check },
        { name: "Washer & Dryer", included: true, icon: Check },
        { name: "Beach Equipment", included: true, icon: Check },
        { name: "24/7 Security", included: true, icon: Check },
        { name: "Concierge Service", included: false, icon: X },
        { name: "Daily Housekeeping", included: false, icon: X },
        { name: "Airport Transfer", included: false, icon: X },
      ],
      paidAmenities: [
        { name: "BBQ Grill Setup", price: 25, description: "Professional BBQ setup with charcoal and utensils" },
        { name: "Beach Cabana", price: 50, description: "Private beach cabana rental for the day" },
        { name: "Kayak Rental", price: 35, description: "Single kayak rental per day" },
        { name: "Bicycle Rental", price: 20, description: "Beach cruiser bicycle rental per day" },
        { name: "Pool Heating", price: 40, description: "Heated pool service per day" },
        { name: "Late Checkout", price: 75, description: "Checkout after 2 PM (subject to availability)" },
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
        { name: "Stone Fireplace", included: true, icon: Waves },
        { name: "Hot Tub", included: true, icon: MapPin },
        { name: "High-Speed WiFi", included: true, icon: Wifi },
        { name: "Full Kitchen", included: true, icon: Utensils },
        { name: "Free Parking", included: true, icon: Car },
        { name: "Ski Equipment Storage", included: true, icon: Check },
        { name: "Mountain Views", included: true, icon: Check },
        { name: "Heating System", included: true, icon: Check },
        { name: "Daily Housekeeping", included: false, icon: X },
        { name: "Ski Lift Tickets", included: false, icon: X },
        { name: "Equipment Rental", included: false, icon: X },
      ],
      paidAmenities: [
        { name: "BBQ Grill Setup", price: 30, description: "Mountain BBQ setup with propane and utensils" },
        { name: "Ski Equipment Rental", price: 65, description: "Full ski equipment rental per day" },
        { name: "Firewood Delivery", price: 25, description: "Premium firewood delivery and setup" },
        { name: "Snowshoe Rental", price: 20, description: "Snowshoe rental per day" },
        { name: "Hot Tub Maintenance", price: 35, description: "Daily hot tub cleaning and maintenance" },
        { name: "Grocery Pre-Stocking", price: 50, description: "Pre-arrival grocery shopping service" },
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
        { name: "City Views", included: true, icon: MapPin },
        { name: "Gym Access", included: true, icon: Waves },
        { name: "High-Speed WiFi", included: true, icon: Wifi },
        { name: "Full Kitchen", included: true, icon: Utensils },
        { name: "24/7 Concierge", included: true, icon: Car },
        { name: "Rooftop Terrace", included: true, icon: Check },
        { name: "Private Elevator", included: true, icon: Check },
        { name: "Spa Access", included: false, icon: X },
        { name: "Valet Parking", included: false, icon: X },
        { name: "Room Service", included: false, icon: X },
      ],
      paidAmenities: [
        { name: "Valet Parking", price: 45, description: "Premium valet parking service per day" },
        { name: "Room Service", price: 25, description: "In-room dining service fee" },
        { name: "Spa Access", price: 75, description: "Full spa and wellness center access" },
        { name: "Private Chef", price: 200, description: "Personal chef service for dinner" },
        { name: "Laundry Service", price: 30, description: "Same-day laundry and dry cleaning" },
        { name: "Airport Transfer", price: 85, description: "Luxury car service to/from airport" },
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
        { name: "Resort Pool", included: true, icon: Waves },
        { name: "Spa Access", included: true, icon: MapPin },
        { name: "High-Speed WiFi", included: true, icon: Wifi },
        { name: "Golf Course Access", included: true, icon: Utensils },
        { name: "Free Parking", included: true, icon: Car },
        { name: "Desert Views", included: true, icon: Check },
        { name: "Fitness Center", included: true, icon: Check },
        { name: "Private Golf Lessons", included: false, icon: X },
        { name: "Premium Spa Services", included: false, icon: X },
        { name: "Fine Dining", included: false, icon: X },
      ],
      paidAmenities: [
        { name: "BBQ Grill Setup", price: 35, description: "Desert BBQ setup with gas grill and accessories" },
        { name: "Golf Lessons", price: 120, description: "Private golf lesson with PGA professional" },
        { name: "Spa Treatment", price: 150, description: "Signature desert stone massage" },
        { name: "Horseback Riding", price: 95, description: "Guided desert horseback riding tour" },
        { name: "Wine Tasting", price: 65, description: "Private wine tasting experience" },
        { name: "Desert Tour", price: 80, description: "Guided desert hiking and photography tour" },
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
        { name: "Historic Garden", included: true, icon: MapPin },
        { name: "Private Library", included: true, icon: Waves },
        { name: "High-Speed WiFi", included: true, icon: Wifi },
        { name: "Full Kitchen", included: true, icon: Utensils },
        { name: "Free Parking", included: true, icon: Car },
        { name: "Original Architecture", included: true, icon: Check },
        { name: "Antique Furnishings", included: true, icon: Check },
        { name: "Butler Service", included: false, icon: X },
        { name: "Private Tours", included: false, icon: X },
        { name: "Formal Dining", included: false, icon: X },
      ],
      paidAmenities: [
        { name: "BBQ Garden Setup", price: 40, description: "Historic garden BBQ setup with period-style grill" },
        { name: "Butler Service", price: 150, description: "Professional butler service for the day" },
        { name: "Private Tour Guide", price: 85, description: "Personal historic district tour guide" },
        { name: "Formal Dinner Service", price: 200, description: "Elegant formal dinner service setup" },
        { name: "Garden Photography", price: 120, description: "Professional garden and mansion photography" },
        { name: "Carriage Ride", price: 75, description: "Private horse-drawn carriage tour" },
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
        { name: "Lake Access", included: true, icon: Waves },
        { name: "Private Dock", included: true, icon: MapPin },
        { name: "High-Speed WiFi", included: true, icon: Wifi },
        { name: "Full Kitchen", included: true, icon: Utensils },
        { name: "Kayaks Included", included: true, icon: Car },
        { name: "Mountain Views", included: true, icon: Check },
        { name: "Fire Pit Area", included: true, icon: Check },
        { name: "Boat Rental", included: false, icon: X },
        { name: "Fishing Guide", included: false, icon: X },
        { name: "Water Sports Equipment", included: false, icon: X },
      ],
      paidAmenities: [
        { name: "BBQ Lakeside Setup", price: 30, description: "Lakeside BBQ setup with charcoal grill" },
        { name: "Boat Rental", price: 180, description: "Pontoon boat rental for full day" },
        { name: "Fishing Guide", price: 250, description: "Professional fishing guide for half day" },
        { name: "Water Sports Package", price: 120, description: "Jet ski, paddleboard, and wakeboard rental" },
        { name: "Sunset Cruise", price: 95, description: "Private sunset cruise on Lake Tahoe" },
        { name: "Campfire Setup", price: 25, description: "Professional campfire setup with s'mores kit" },
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
  const [selectedPaidAmenities, setSelectedPaidAmenities] = useState<string[]>([])
  const [isFavorite, setIsFavorite] = useState(false)
  const { toast } = useToast()

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
    const paidAmenitiesTotal = selectedPaidAmenities.reduce((total, amenityName) => {
      const amenity = property.paidAmenities.find((a) => a.name === amenityName)
      return total + (amenity ? amenity.price : 0)
    }, 0)
    const serviceFee = 50
    return propertyTotal + servicesTotal + paidAmenitiesTotal + serviceFee
  }

  const toggleService = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId) ? prev.filter((id) => id !== serviceId) : [...prev, serviceId],
    )
  }

  const togglePaidAmenity = (amenityName: string) => {
    setSelectedPaidAmenities((prev) =>
      prev.includes(amenityName) ? prev.filter((name) => name !== amenityName) : [...prev, amenityName],
    )
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      toast({
        title: "Link copied!",
        description: "Property link has been copied to your clipboard.",
      })
    } catch (err) {
      console.error("Failed to copy: ", err)
      toast({
        title: "Copy failed",
        description: "Unable to copy link to clipboard.",
        variant: "destructive",
      })
    }
  }

  const shareViaEmail = () => {
    const subject = encodeURIComponent(`Check out this amazing property: ${property.title}`)
    const body = encodeURIComponent(
      `I found this incredible property on Stayvy.co that I thought you'd love!\n\n${property.title}\n${property.location}\n\n${window.location.href}`,
    )
    window.open(`mailto:?subject=${subject}&body=${body}`)
  }

  const shareViaFacebook = () => {
    const url = encodeURIComponent(window.location.href)
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank", "width=600,height=400")
  }

  const shareViaTwitter = () => {
    const text = encodeURIComponent(`Check out this amazing property: ${property.title} in ${property.location}`)
    const url = encodeURIComponent(window.location.href)
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank", "width=600,height=400")
  }

  const handleShare = async () => {
    const shareData = {
      title: property.title,
      text: `Check out this amazing property in ${property.location}!`,
      url: window.location.href,
    }

    // Check if Web Share API is supported and available
    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData)
        toast({
          title: "Shared successfully!",
          description: "Property has been shared.",
        })
      } catch (error) {
        console.error("Error sharing:", error)
        // Fallback to copy link if sharing fails
        copyToClipboard(window.location.href)
      }
    } else {
      // Fallback: copy to clipboard
      copyToClipboard(window.location.href)
    }
  }

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev)
    toast({
      title: isFavorite ? "Removed from wishlist" : "Added to wishlist",
      description: isFavorite ? "Property removed from your wishlist." : "Property added to your wishlist.",
    })
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
                  <Button size="sm" variant="outline" className="bg-black/50 border-white/20" onClick={toggleFavorite}>
                    <Heart className={`w-4 h-4 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="sm" variant="outline" className="bg-black/50 border-white/20">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuItem onClick={handleShare}>
                        <Share2 className="w-4 h-4 mr-2" />
                        Share Link
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => copyToClipboard(window.location.href)}>
                        <Copy className="w-4 h-4 mr-2" />
                        Copy Link
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={shareViaEmail}>
                        <Mail className="w-4 h-4 mr-2" />
                        Share via Email
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={shareViaFacebook}>
                        <Facebook className="w-4 h-4 mr-2" />
                        Share on Facebook
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={shareViaTwitter}>
                        <Twitter className="w-4 h-4 mr-2" />
                        Share on Twitter
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
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

              {/* Amenities Table */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Amenities & Features</h2>
                <Card className="bg-card border-border">
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Amenity</TableHead>
                          <TableHead className="text-center">Included</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {property.amenities.map((amenity, index) => (
                          <TableRow key={index}>
                            <TableCell className="flex items-center space-x-2">
                              <amenity.icon className="w-4 h-4 text-red-600" />
                              <span>{amenity.name}</span>
                            </TableCell>
                            <TableCell className="text-center">
                              {amenity.included ? (
                                <Check className="w-5 h-5 text-green-500 mx-auto" />
                              ) : (
                                <X className="w-5 h-5 text-red-500 mx-auto" />
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>

              {/* Paid Add-ons */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Premium Add-ons</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {property.paidAmenities.map((amenity) => (
                    <Card
                      key={amenity.name}
                      className={`cursor-pointer transition-all ${
                        selectedPaidAmenities.includes(amenity.name)
                          ? "bg-red-900/20 border-red-600"
                          : "bg-card border-border hover:border-muted-foreground"
                      }`}
                      onClick={() => togglePaidAmenity(amenity.name)}
                    >
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">{amenity.name}</h3>
                            <p className="text-sm text-muted-foreground">{amenity.description}</p>
                          </div>
                          <p className="font-bold text-red-600">${amenity.price}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Add-on Services */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Professional Services</h2>
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

          {/* Booking Sidebar - Fixed positioning */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Booking Card */}
              <Card className="bg-card border-border">
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
                    {selectedPaidAmenities.length > 0 && (
                      <div className="space-y-1">
                        {selectedPaidAmenities.map((amenityName) => {
                          const amenity = property.paidAmenities.find((a) => a.name === amenityName)
                          return amenity ? (
                            <div key={amenityName} className="flex justify-between text-muted-foreground text-sm">
                              <span>{amenity.name}</span>
                              <span>${amenity.price}</span>
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

              {/* Calendar - Separate card with proper spacing */}
              <div className="mt-8">
                <BookingCalendar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
