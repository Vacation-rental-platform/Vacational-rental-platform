"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, User, Heart, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [wishlistCount, setWishlistCount] = useState(0)
  const [tripsCount, setTripsCount] = useState(0)

  const navItems = [
    { name: "Properties", href: "/properties" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  const handleWishlistClick = () => {
    setWishlistCount(wishlistCount + 1)
    // Implement wishlist functionality here
  }

  const handleTripsClick = () => {
    setTripsCount(tripsCount + 1)
    // Implement trips functionality here
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 mr-8">
            <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-bold text-[#FF385C]">
              Stayvy.co
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 flex-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#222222] hover:text-[#FF385C] transition-colors duration-200 font-medium"
                onClick={() => {
                  // Implement navigation item functionality here
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-[#222222] hover:text-[#FF385C] hover:bg-gray-50"
              onClick={handleWishlistClick}
            >
              <Heart className="w-4 h-4 mr-2" />
              Wishlist ({wishlistCount})
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-[#222222] hover:text-[#FF385C] hover:bg-gray-50"
              onClick={handleTripsClick}
            >
              <Calendar className="w-4 h-4 mr-2" />
              My Trips ({tripsCount})
            </Button>
            <Link href="/admin">
              <Button variant="ghost" size="sm" className="text-[#222222] hover:text-[#FF385C] hover:bg-gray-50">
                <User className="w-4 h-4 mr-2" />
                Account
              </Button>
            </Link>
            <Button className="bg-[#FF385C] hover:bg-[#E31C5F] text-white px-6">Book Now</Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="w-6 h-6 text-[#222222]" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white border-gray-200">
                <div className="flex flex-col space-y-6 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-[#222222] hover:text-[#FF385C] transition-colors duration-200 text-lg font-medium"
                      onClick={() => {
                        setIsOpen(false)
                        // Implement navigation item functionality here
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="border-t border-gray-200 pt-6 space-y-4">
                    <Link
                      href="/wishlist"
                      onClick={() => {
                        setIsOpen(false)
                        handleWishlistClick()
                      }}
                    >
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-[#222222] hover:text-[#FF385C] hover:bg-gray-50"
                      >
                        <Heart className="w-4 h-4 mr-2" />
                        Wishlist ({wishlistCount})
                      </Button>
                    </Link>
                    <Link
                      href="/trips"
                      onClick={() => {
                        setIsOpen(false)
                        handleTripsClick()
                      }}
                    >
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-[#222222] hover:text-[#FF385C] hover:bg-gray-50"
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        My Trips ({tripsCount})
                      </Button>
                    </Link>
                    <Link href="/admin" onClick={() => setIsOpen(false)}>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-[#222222] hover:text-[#FF385C] hover:bg-gray-50"
                      >
                        <User className="w-4 h-4 mr-2" />
                        Account
                      </Button>
                    </Link>
                    <Button className="w-full bg-[#FF385C] hover:bg-[#E31C5F] text-white">Book Now</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
