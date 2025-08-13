import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-[#FF385C] mb-4">Stayvy.co</h3>
            <p className="text-gray-600 mb-4">Premium vacation rentals and services across the United States.</p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-500 hover:text-[#FF385C] cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-500 hover:text-[#FF385C] cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-500 hover:text-[#FF385C] cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-500 hover:text-[#FF385C] cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-[#222222]">Quick Links</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="/properties" className="hover:text-[#FF385C] transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#FF385C] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#FF385C] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FF385C] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-[#222222]">Support</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="/faq" className="hover:text-[#FF385C] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-[#FF385C] transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#FF385C] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#FF385C] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-[#222222]">Contact</h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                1-800-VACATION
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                support@vacationstay.com
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Miami, FL
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; 2024 Stayvy.co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
