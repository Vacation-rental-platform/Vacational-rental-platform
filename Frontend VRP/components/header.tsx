"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Menu, X, User, Heart, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-red-600">
            Stayvy.co
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-red-400 transition-colors">
              Home
            </Link>
            <Link href="/properties" className="hover:text-red-400 transition-colors">
              Properties
            </Link>
            <Link href="/services" className="hover:text-red-400 transition-colors">
              Services
            </Link>
            <Link href="/about" className="hover:text-red-400 transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-red-400 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Search and User Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Calendar className="h-5 w-5" />
            </Button>
            <ThemeToggle />
            <Link href="/admin">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="hover:text-red-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link
                href="/properties"
                className="hover:text-red-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Properties
              </Link>
              <Link
                href="/services"
                className="hover:text-red-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link href="/about" className="hover:text-red-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link
                href="/contact"
                className="hover:text-red-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="border-t border-border pt-4 space-y-4">
                <Link href="/admin" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">
                    <User className="w-4 h-4 mr-2" />
                    Admin Panel
                  </Button>
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
