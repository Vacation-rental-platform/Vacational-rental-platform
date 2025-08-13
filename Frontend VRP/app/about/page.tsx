"use client"

import { motion } from "framer-motion"
import { Star, Users, Home, Award, Heart, Shield, Globe, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const stats = [
  { number: "50K+", label: "Happy Guests", icon: Users },
  { number: "1,200+", label: "Premium Properties", icon: Home },
  { number: "15", label: "States Covered", icon: Globe },
  { number: "4.9", label: "Average Rating", icon: Star },
]

const values = [
  {
    icon: Heart,
    title: "Hospitality First",
    description:
      "We believe every guest deserves exceptional service and memorable experiences that exceed expectations.",
  },
  {
    icon: Shield,
    title: "Trust & Safety",
    description:
      "Your safety is our priority. All properties are verified and hosts are thoroughly vetted for your peace of mind.",
  },
  {
    icon: Globe,
    title: "Local Experiences",
    description:
      "Discover authentic local culture with our curated experiences and insider recommendations from local hosts.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Our dedicated support team is available around the clock to ensure your stay is smooth and worry-free.",
  },
]

const team = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    bio: "Former hospitality executive with 15 years of experience in luxury travel and vacation rentals.",
  },
  {
    name: "Michael Chen",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Operations expert who ensures every property meets our high standards for quality and guest satisfaction.",
  },
  {
    name: "Emily Rodriguez",
    role: "Guest Experience Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    bio: "Passionate about creating unforgettable experiences and building lasting relationships with our guests.",
  },
  {
    name: "David Kim",
    role: "Technology Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "Tech innovator focused on building seamless booking experiences and cutting-edge travel technology.",
  },
]

const milestones = [
  {
    year: "2019",
    title: "Company Founded",
    description:
      "Started with a vision to revolutionize vacation rentals with premium properties and exceptional service.",
  },
  {
    year: "2020",
    title: "First 100 Properties",
    description: "Reached our first milestone of 100 carefully curated properties across 5 states.",
  },
  {
    year: "2021",
    title: "10,000 Happy Guests",
    description: "Celebrated serving our 10,000th guest with consistently high satisfaction ratings.",
  },
  {
    year: "2022",
    title: "National Expansion",
    description: "Expanded to 15 states with over 500 premium properties and concierge services.",
  },
  {
    year: "2023",
    title: "Award Recognition",
    description: "Received 'Best Vacation Rental Platform' award and reached 1,000+ properties.",
  },
  {
    year: "2024",
    title: "50K+ Guests Served",
    description: "Proud to have hosted over 50,000 guests with a 4.9-star average rating.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop&crop=center"
            alt="Luxury vacation rental interior"
            className="w-full h-full object-cover"
            crossOrigin="anonymous"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
          >
            About Stayvy.co
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
          >
            We're passionate about creating unforgettable travel experiences through premium vacation rentals and
            exceptional hospitality.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-50">
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
                  <div className="w-16 h-16 bg-[#FF385C] rounded-full flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-[#222222] mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-[#222222] mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Founded in 2019, Stayvy.co began with a simple mission: to transform the way people experience travel
                  by offering premium vacation rentals that feel like home, but better.
                </p>
                <p>
                  Our founders, seasoned hospitality professionals, recognized a gap in the market for truly exceptional
                  vacation rental experiences. They envisioned a platform where every property would be carefully
                  curated, every host thoroughly vetted, and every guest treated like family.
                </p>
                <p>
                  Today, we're proud to offer over 1,200 premium properties across 15 states, each one selected for its
                  unique character, exceptional amenities, and ability to create lasting memories for our guests.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/properties">
                  <Button className="bg-[#FF385C] hover:bg-[#E31C5F] text-white px-8 py-3 text-lg">
                    Explore Properties
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop&crop=center"
                alt="Luxury vacation rental living space"
                className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                crossOrigin="anonymous"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#00A699] rounded-2xl flex items-center justify-center">
                <Award className="w-16 h-16 text-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#222222] mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape the experiences we create for our guests and partners.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-[#FF385C] rounded-full flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#222222] mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#222222] mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our passionate team of hospitality experts, technology innovators, and travel enthusiasts work together to
              create exceptional experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-6">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover"
                        crossOrigin="anonymous"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#222222] mb-2">{member.name}</h3>
                    <p className="text-[#FF385C] font-semibold mb-4">{member.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#222222] mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600">
              From a small startup to a leading vacation rental platform, here's how we've grown.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#FF385C]" />

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex items-start mb-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-[#FF385C] rounded-full border-4 border-white shadow-lg" />

                <div className="ml-16">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="flex items-center mb-3">
                      <span className="bg-[#00A699] text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {milestone.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#222222] mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#FF385C]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl font-bold text-white mb-6">Discover Your Perfect Stay</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Find unique and unforgettable accommodations with Stayvy.co. Your dream getaway is just a click away!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/properties">
                <Button className="bg-white text-[#FF385C] hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                  Browse Properties
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#FF385C] px-8 py-3 text-lg font-semibold bg-transparent"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
