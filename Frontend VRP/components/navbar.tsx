"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, User, Heart, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Properties", href: "/properties" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-bold text-red-600">
              VacationStay
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
              <Heart className="w-4 h-4 mr-2" />
              Wishlist
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
              <Calendar className="w-4 h-4 mr-2" />
              My Trips
            </Button>
            <Link href="/admin">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <User className="w-4 h-4 mr-2" />
                Account
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-black border-gray-800">
                <div className="flex flex-col space-y-6 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="border-t border-gray-800 pt-6 space-y-4">
                    <Link href="/wishlist" onClick={() => setIsOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start text-gray-300">
                        <Heart className="w-4 h-4 mr-2" />
                        Wishlist
                      </Button>
                    </Link>
                    <Link href="/trips" onClick={() => setIsOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start text-gray-300">
                        <Calendar className="w-4 h-4 mr-2" />
                        My Trips
                      </Button>
                    </Link>
                    <Link href="/admin" onClick={() => setIsOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start text-gray-300">
                        <User className="w-4 h-4 mr-2" />
                        Account
                      </Button>
                    </Link>
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
