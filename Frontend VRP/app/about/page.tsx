"use client"

import { motion } from "framer-motion"
import { Award, Users, MapPin, Star, Shield, Clock, Heart, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const stats = [
  { number: "130+", label: "Premium Properties", icon: MapPin },
  { number: "15", label: "States Covered", icon: Award },
  { number: "50K+", label: "Happy Guests", icon: Users },
  { number: "4.9", label: "Average Rating", icon: Star },
]

const values = [
  {
    icon: Shield,
    title: "Trust & Safety",
    description: "Every property is verified and every service provider is background-checked for your peace of mind.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Our dedicated concierge team is available around the clock to ensure your perfect vacation.",
  },
  {
    icon: Heart,
    title: "Personalized Experience",
    description: "We curate each stay to match your preferences, creating unforgettable memories.",
  },
  {
    icon: Zap,
    title: "Instant Booking",
    description: "Book properties and services instantly with our streamlined platform and secure payments.",
  },
]

const team = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
    bio: "Former hospitality executive with 15 years of experience in luxury travel and vacation rentals.",
  },
  {
    name: "Michael Chen",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    bio: "Operations expert who ensures every property meets our premium standards and guest expectations.",
  },
  {
    name: "Emily Rodriguez",
    role: "Customer Experience Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    bio: "Dedicated to creating exceptional guest experiences and building lasting relationships.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop&crop=center"
            alt="About Us Hero"
            className="w-full h-full object-cover opacity-20"
            crossOrigin="anonymous"
            loading="eager"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Redefining Luxury
            <span className="text-red-600"> Vacation Rentals</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8"
          >
            We're not just a booking platform – we're your gateway to extraordinary experiences across America's most
            beautiful destinations.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-red-600" />
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2020, Stayvy.co was born from a simple belief: vacation rentals should be more than just a
                  place to sleep. They should be gateways to extraordinary experiences.
                </p>
                <p>
                  After years of disappointing vacation rental experiences, our founders set out to create something
                  different. We partnered with property owners who share our vision of excellence and service providers
                  who understand that every detail matters.
                </p>
                <p>
                  Today, we're proud to offer a curated collection of premium properties across 15 states, each one
                  personally vetted and equipped with everything you need for an unforgettable stay.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=600&h=500&fit=crop&crop=center"
                alt="Our Story"
                className="w-full h-full object-cover rounded-lg"
                crossOrigin="anonymous"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            What Sets Us Apart
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-card border-border h-full">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <value.icon className="w-12 h-12 text-red-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Meet Our Team
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-card border-border">
                  <CardContent className="p-6 text-center">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover"
                        crossOrigin="anonymous"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{member.name}</h3>
                    <p className="text-red-600 font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-8"
          >
            Our Mission
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-8"
          >
            To transform the way people experience vacation rentals by providing unparalleled luxury, personalized
            service, and unforgettable memories that last a lifetime.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/properties">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8">
                Start Your Journey
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
