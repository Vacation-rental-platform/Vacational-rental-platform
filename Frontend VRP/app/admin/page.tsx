"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BarChart3, Calendar, DollarSign, Home, Users, TrendingUp, Plus, Edit, Trash2, Eye, Search } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const stats = [
  {
    title: "Total Revenue",
    value: "$127,450",
    change: "+12.5%",
    icon: DollarSign,
    color: "text-green-500",
  },
  {
    title: "Active Bookings",
    value: "89",
    change: "+8.2%",
    icon: Calendar,
    color: "text-blue-500",
  },
  {
    title: "Properties Listed",
    value: "134",
    change: "+3.1%",
    icon: Home,
    color: "text-purple-500",
  },
  {
    title: "Total Guests",
    value: "2,847",
    change: "+15.3%",
    icon: Users,
    color: "text-orange-500",
  },
]

const recentBookings = [
  {
    id: "BK001",
    property: "Luxury Beachfront Villa",
    guest: "John Smith",
    checkIn: "2024-12-15",
    checkOut: "2024-12-20",
    amount: "$2,250",
    status: "confirmed",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=80&h=60&fit=crop&crop=center",
  },
  {
    id: "BK002",
    property: "Mountain Retreat Cabin",
    guest: "Sarah Johnson",
    checkIn: "2024-12-18",
    checkOut: "2024-12-22",
    amount: "$1,280",
    status: "pending",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=80&h=60&fit=crop&crop=center",
  },
  {
    id: "BK003",
    property: "Downtown Penthouse",
    guest: "Mike Davis",
    checkIn: "2024-12-20",
    checkOut: "2024-12-25",
    amount: "$3,400",
    status: "confirmed",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=80&h=60&fit=crop&crop=center",
  },
  {
    id: "BK004",
    property: "Desert Oasis Resort",
    guest: "Emily Wilson",
    checkIn: "2024-12-22",
    checkOut: "2024-12-28",
    amount: "$2,280",
    status: "cancelled",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=80&h=60&fit=crop&crop=center",
  },
]

const properties = [
  {
    id: 1,
    name: "Luxury Beachfront Villa",
    location: "Miami, Florida",
    price: "$450/night",
    occupancy: "85%",
    rating: 4.9,
    status: "active",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=80&h=60&fit=crop&crop=center",
    bookings: 23,
    revenue: "$15,450",
  },
  {
    id: 2,
    name: "Mountain Retreat Cabin",
    location: "Aspen, Colorado",
    price: "$320/night",
    occupancy: "92%",
    rating: 4.8,
    status: "active",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=80&h=60&fit=crop&crop=center",
    bookings: 18,
    revenue: "$12,800",
  },
  {
    id: 3,
    name: "Downtown Penthouse",
    location: "New York, NY",
    price: "$680/night",
    occupancy: "78%",
    rating: 4.9,
    status: "maintenance",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=80&h=60&fit=crop&crop=center",
    bookings: 15,
    revenue: "$18,900",
  },
  {
    id: 4,
    name: "Desert Oasis Resort",
    location: "Scottsdale, Arizona",
    price: "$380/night",
    occupancy: "88%",
    rating: 4.7,
    status: "active",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=80&h=60&fit=crop&crop=center",
    bookings: 20,
    revenue: "$14,200",
  },
]

const services = [
  {
    id: 1,
    name: "Personal Chef Services",
    provider: "Chef Marco Rossi",
    bookings: 45,
    revenue: "$11,250",
    rating: 4.9,
    status: "active",
  },
  {
    id: 2,
    name: "Massage Therapy",
    provider: "Serenity Spa",
    bookings: 32,
    revenue: "$9,600",
    rating: 4.8,
    status: "active",
  },
  {
    id: 3,
    name: "Luxury Car Rental",
    provider: "Elite Auto",
    bookings: 28,
    revenue: "$5,040",
    rating: 4.7,
    status: "active",
  },
]

export default function AdminDashboard() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-500/20 text-green-700 border-green-500/30"
      case "pending":
        return "bg-yellow-500/20 text-yellow-700 border-yellow-500/30"
      case "cancelled":
        return "bg-red-500/20 text-red-700 border-red-500/30"
      case "active":
        return "bg-green-500/20 text-green-700 border-green-500/30"
      case "maintenance":
        return "bg-orange-500/20 text-orange-700 border-orange-500/30"
      default:
        return "bg-gray-500/20 text-gray-700 border-gray-500/30"
    }
  }

  return (
    <div className="min-h-screen beach-sand-bg text-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600">Manage your vacation rental business</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button className="bg-red-600 hover:bg-red-700">
              <Plus className="w-4 h-4 mr-2" />
              Add Property
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-white border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm font-medium">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                      <p className={`text-sm mt-1 ${stat.color}`}>
                        <TrendingUp className="w-4 h-4 inline mr-1" />
                        {stat.change}
                      </p>
                    </div>
                    <div className={`p-3 rounded-lg bg-gray-100 ${stat.color}`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-white border-gray-200">
            <TabsTrigger value="overview" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
              Overview
            </TabsTrigger>
            <TabsTrigger value="bookings" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
              Bookings
            </TabsTrigger>
            <TabsTrigger value="properties" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
              Properties
            </TabsTrigger>
            <TabsTrigger value="services" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
              Services
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
              Analytics
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white border-gray-200">
                <CardHeader>
                  <CardTitle className="text-gray-900">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-900">New booking: Miami Beach Villa</span>
                      <span className="text-gray-600">2 hours ago</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-900">Property added: Denver Mountain Cabin</span>
                      <span className="text-gray-600">5 hours ago</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-900">Service booking: Massage Therapy</span>
                      <span className="text-gray-600">1 day ago</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-900">Payment received: $2,450</span>
                      <span className="text-gray-600">2 days ago</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200">
                <CardHeader>
                  <CardTitle className="text-gray-900">Top Performing Properties</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {properties.slice(0, 4).map((property) => (
                      <div key={property.id} className="flex items-center justify-between py-2">
                        <div className="flex items-center space-x-3">
                          <img
                            src={property.image || "/placeholder.svg"}
                            alt={property.name}
                            className="w-10 h-10 rounded object-cover"
                            crossOrigin="anonymous"
                          />
                          <div>
                            <p className="font-medium text-gray-900">{property.name}</p>
                            <p className="text-sm text-gray-600">{property.location}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-green-600">{property.revenue}</p>
                          <p className="text-sm text-gray-600">{property.bookings} bookings</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Bookings Tab */}
          <TabsContent value="bookings" className="space-y-6">
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-gray-900">Recent Bookings</CardTitle>
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
                      <Input
                        placeholder="Search bookings..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 w-64 bg-white border-gray-300"
                      />
                    </div>
                    <Select value={filterStatus} onValueChange={setFilterStatus}>
                      <SelectTrigger className="w-32 bg-white border-gray-300">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-gray-300">
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="confirmed">Confirmed</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-200">
                      <TableHead className="text-gray-600">Booking</TableHead>
                      <TableHead className="text-gray-600">Property</TableHead>
                      <TableHead className="text-gray-600">Guest</TableHead>
                      <TableHead className="text-gray-600">Dates</TableHead>
                      <TableHead className="text-gray-600">Amount</TableHead>
                      <TableHead className="text-gray-600">Status</TableHead>
                      <TableHead className="text-gray-600">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentBookings.map((booking) => (
                      <TableRow key={booking.id} className="border-gray-200">
                        <TableCell className="text-gray-900 font-medium">{booking.id}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <img
                              src={booking.image || "/placeholder.svg"}
                              alt={booking.property}
                              className="w-12 h-10 rounded object-cover"
                              crossOrigin="anonymous"
                            />
                            <span className="text-gray-700">{booking.property}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-gray-700">{booking.guest}</TableCell>
                        <TableCell className="text-gray-700">
                          {booking.checkIn} to {booking.checkOut}
                        </TableCell>
                        <TableCell className="text-gray-900 font-semibold">{booking.amount}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(booking.status)}>{booking.status}</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                              <Edit className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Properties Tab */}
          <TabsContent value="properties" className="space-y-6">
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-gray-900">Property Management</CardTitle>
                  <Button className="bg-red-600 hover:bg-red-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Add New Property
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-200">
                      <TableHead className="text-gray-600">Property</TableHead>
                      <TableHead className="text-gray-600">Location</TableHead>
                      <TableHead className="text-gray-600">Price</TableHead>
                      <TableHead className="text-gray-600">Occupancy</TableHead>
                      <TableHead className="text-gray-600">Rating</TableHead>
                      <TableHead className="text-gray-600">Revenue</TableHead>
                      <TableHead className="text-gray-600">Status</TableHead>
                      <TableHead className="text-gray-600">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {properties.map((property) => (
                      <TableRow key={property.id} className="border-gray-200">
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <img
                              src={property.image || "/placeholder.svg"}
                              alt={property.name}
                              className="w-12 h-10 rounded object-cover"
                              crossOrigin="anonymous"
                            />
                            <span className="text-gray-900 font-medium">{property.name}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-gray-700">{property.location}</TableCell>
                        <TableCell className="text-gray-700">{property.price}</TableCell>
                        <TableCell className="text-gray-700">{property.occupancy}</TableCell>
                        <TableCell className="text-gray-700">{property.rating}</TableCell>
                        <TableCell className="text-green-600 font-semibold">{property.revenue}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(property.status)}>{property.status}</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-red-600">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Services Tab */}
          <TabsContent value="services" className="space-y-6">
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-gray-900">Service Management</CardTitle>
                  <Button className="bg-red-600 hover:bg-red-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Service Provider
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-200">
                      <TableHead className="text-gray-600">Service</TableHead>
                      <TableHead className="text-gray-600">Provider</TableHead>
                      <TableHead className="text-gray-600">Bookings</TableHead>
                      <TableHead className="text-gray-600">Revenue</TableHead>
                      <TableHead className="text-gray-600">Rating</TableHead>
                      <TableHead className="text-gray-600">Status</TableHead>
                      <TableHead className="text-gray-600">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {services.map((service) => (
                      <TableRow key={service.id} className="border-gray-200">
                        <TableCell className="text-gray-900 font-medium">{service.name}</TableCell>
                        <TableCell className="text-gray-700">{service.provider}</TableCell>
                        <TableCell className="text-gray-700">{service.bookings}</TableCell>
                        <TableCell className="text-green-600 font-semibold">{service.revenue}</TableCell>
                        <TableCell className="text-gray-700">{service.rating}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(service.status)}>{service.status}</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-red-600">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white border-gray-200">
                <CardHeader>
                  <CardTitle className="text-gray-900 flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    Revenue Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">This Month</span>
                      <span className="text-2xl font-bold text-green-600">$45,230</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Last Month</span>
                      <span className="text-xl font-semibold text-gray-700">$38,450</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Growth</span>
                      <span className="text-lg font-semibold text-green-600">+17.6%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200">
                <CardHeader>
                  <CardTitle className="text-gray-900 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Performance Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Average Occupancy</span>
                      <span className="text-2xl font-bold text-blue-600">86%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Average Rating</span>
                      <span className="text-xl font-semibold text-yellow-600">4.8</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Repeat Customers</span>
                      <span className="text-lg font-semibold text-purple-600">34%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
