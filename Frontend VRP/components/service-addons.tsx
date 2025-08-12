"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Plus, Minus, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const services = [
  {
    id: "chef",
    name: "Personal Chef",
    description: "Professional chef for in-home dining experience",
    price: 200,
    duration: "4 hours",
    icon: "👨‍🍳",
    category: "Dining",
  },
  {
    id: "massage",
    name: "In-Home Massage",
    description: "Relaxing massage therapy in your rental",
    price: 150,
    duration: "90 minutes",
    icon: "💆‍♀️",
    category: "Wellness",
  },
  {
    id: "car",
    name: "Luxury Car Rental",
    description: "Premium vehicle for your stay",
    price: 120,
    duration: "Per day",
    icon: "🚗",
    category: "Transportation",
  },
  {
    id: "tour",
    name: "Private City Tour",
    description: "Guided tour of local attractions",
    price: 180,
    duration: "6 hours",
    icon: "🗺️",
    category: "Experience",
  },
  {
    id: "cleaning",
    name: "Daily Housekeeping",
    description: "Professional cleaning service",
    price: 80,
    duration: "2 hours",
    icon: "🧹",
    category: "Service",
  },
  {
    id: "grocery",
    name: "Grocery Shopping",
    description: "Pre-arrival grocery stocking",
    price: 60,
    duration: "One-time",
    icon: "🛒",
    category: "Service",
  },
]

interface ServiceAddonsProps {
  selectedServices: string[]
  onServicesChange: (services: string[]) => void
}

export function ServiceAddons({ selectedServices, onServicesChange }: ServiceAddonsProps) {
  const [quantities, setQuantities] = useState<Record<string, number>>({})

  const toggleService = (serviceId: string) => {
    if (selectedServices.includes(serviceId)) {
      onServicesChange(selectedServices.filter((id) => id !== serviceId))
      const newQuantities = { ...quantities }
      delete newQuantities[serviceId]
      setQuantities(newQuantities)
    } else {
      onServicesChange([...selectedServices, serviceId])
      setQuantities({ ...quantities, [serviceId]: 1 })
    }
  }

  const updateQuantity = (serviceId: string, change: number) => {
    const currentQuantity = quantities[serviceId] || 1
    const newQuantity = Math.max(1, currentQuantity + change)
    setQuantities({ ...quantities, [serviceId]: newQuantity })
  }

  const getTotalServicesCost = () => {
    return selectedServices.reduce((total, serviceId) => {
      const service = services.find((s) => s.id === serviceId)
      const quantity = quantities[serviceId] || 1
      return total + (service ? service.price * quantity : 0)
    }, 0)
  }

  const categories = [...new Set(services.map((service) => service.category))]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4 text-white">Enhance Your Stay</h2>
        <p className="text-gray-400 mb-6">Add premium services to make your vacation unforgettable</p>
      </div>

      {categories.map((category) => (
        <div key={category} className="space-y-4">
          <h3 className="text-lg font-medium text-white flex items-center">
            {category}
            <Badge variant="secondary" className="ml-2 bg-gray-800 text-gray-300">
              {services.filter((s) => s.category === category).length}
            </Badge>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services
              .filter((service) => service.category === category)
              .map((service) => {
                const isSelected = selectedServices.includes(service.id)
                const quantity = quantities[service.id] || 1

                return (
                  <motion.div
                    key={service.id}
                    whileHover={{ scale: 1.02 }}
                    className={`relative ${isSelected ? "ring-2 ring-red-600" : ""}`}
                  >
                    <Card
                      className={`cursor-pointer transition-all duration-300 ${
                        isSelected
                          ? "bg-red-900/20 border-red-600"
                          : "bg-gray-800 border-gray-700 hover:border-gray-600"
                      }`}
                      onClick={() => toggleService(service.id)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{service.icon}</span>
                            <div>
                              <h4 className="font-semibold text-white">{service.name}</h4>
                              <p className="text-sm text-gray-400">{service.description}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-red-600">${service.price}</p>
                            <p className="text-xs text-gray-400 flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {service.duration}
                            </p>
                          </div>
                        </div>

                        {isSelected && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="border-t border-gray-700 pt-3"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-300">Quantity:</span>
                              <div className="flex items-center space-x-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    updateQuantity(service.id, -1)
                                  }}
                                  className="w-8 h-8 p-0 bg-gray-700 border-gray-600 hover:bg-gray-600"
                                >
                                  <Minus className="w-3 h-3" />
                                </Button>
                                <span className="w-8 text-center text-white">{quantity}</span>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    updateQuantity(service.id, 1)
                                  }}
                                  className="w-8 h-8 p-0 bg-gray-700 border-gray-600 hover:bg-gray-600"
                                >
                                  <Plus className="w-3 h-3" />
                                </Button>
                              </div>
                            </div>
                            <div className="flex items-center justify-between mt-2">
                              <span className="text-sm text-gray-300">Subtotal:</span>
                              <span className="font-semibold text-red-600">${service.price * quantity}</span>
                            </div>
                          </motion.div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
          </div>
        </div>
      ))}

      {selectedServices.length > 0 && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="sticky bottom-4 z-10">
          <Card className="bg-gray-900 border-red-600 shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-white">
                    {selectedServices.length} Service{selectedServices.length > 1 ? "s" : ""} Selected
                  </p>
                  <p className="text-sm text-gray-400">Total services cost: ${getTotalServicesCost()}</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    onServicesChange([])
                    setQuantities({})
                  }}
                  className="border-gray-600 text-gray-300 hover:bg-gray-800"
                >
                  Clear All
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  )
}
