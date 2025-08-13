"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Phone, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Message {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm your Stayvy.co assistant. I can help you find properties, book services, or answer any questions about your vacation rental experience. How can I assist you today?",
      isBot: true,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    const currentInput = inputValue
    setInputValue("")
    setIsTyping(true)

    // Simulate AI response with more intelligent responses
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getIntelligentResponse(currentInput),
        isBot: true,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const getIntelligentResponse = (input: string): string => {
    const lowerInput = input.toLowerCase()

    // Greeting responses
    if (lowerInput.includes("hello") || lowerInput.includes("hi") || lowerInput.includes("hey")) {
      return "Hello! Welcome to Stayvy.co! I'm here to help you find the perfect vacation rental. Are you looking for a specific location or type of property?"
    }

    // Booking related queries
    if (lowerInput.includes("book") || lowerInput.includes("reservation") || lowerInput.includes("reserve")) {
      if (lowerInput.includes("cancel")) {
        return "I can help you with cancellations! Most of our properties offer free cancellation up to 48 hours before check-in. Would you like me to check your specific booking's cancellation policy or connect you with our support team?"
      }
      if (lowerInput.includes("modify") || lowerInput.includes("change")) {
        return "You can modify most bookings depending on availability and the property's policy. I can help you check if changes are possible for your dates. What would you like to modify - dates, number of guests, or add-on services?"
      }
      return "Great! I can help you with booking. We have over 1,200 premium properties across 15 states. What type of experience are you looking for? Beach, mountains, city, or something else? And do you have preferred dates and location?"
    }

    // Pricing queries
    if (
      lowerInput.includes("price") ||
      lowerInput.includes("cost") ||
      lowerInput.includes("expensive") ||
      lowerInput.includes("cheap")
    ) {
      return "Our properties range from $200-$800 per night depending on location, size, and amenities. We also offer add-on services starting from $25. Would you like me to show you properties within a specific budget range? What's your preferred price range per night?"
    }

    // Location queries
    if (
      lowerInput.includes("location") ||
      lowerInput.includes("where") ||
      lowerInput.includes("state") ||
      lowerInput.includes("city")
    ) {
      const states = [
        "Florida",
        "California",
        "New York",
        "Colorado",
        "Arizona",
        "Georgia",
        "Texas",
        "Hawaii",
        "Massachusetts",
        "Nevada",
        "Washington",
        "Tennessee",
        "Louisiana",
        "Illinois",
        "Utah",
      ]
      const mentionedState = states.find((state) => lowerInput.includes(state.toLowerCase()))

      if (mentionedState) {
        return `Excellent choice! We have amazing properties in ${mentionedState}. ${getStateInfo(mentionedState)} Would you like me to show you our top-rated properties there?`
      }
      return "We have premium properties in 15 states including Florida, California, New York, Colorado, Arizona, and more! Each location offers unique experiences. Are you looking for beach, mountain, city, or desert destinations?"
    }

    // Services queries
    if (
      lowerInput.includes("service") ||
      lowerInput.includes("massage") ||
      lowerInput.includes("chef") ||
      lowerInput.includes("bbq") ||
      lowerInput.includes("amenities")
    ) {
      return "We offer fantastic add-on services! Our most popular include: Personal Chef ($200), Couples Massage ($300), Luxury Car Rental ($180/day), BBQ Setup ($25-40), and many more. These services are provided by vetted professionals. Which service interests you most?"
    }

    // Property type queries
    if (
      lowerInput.includes("villa") ||
      lowerInput.includes("cabin") ||
      lowerInput.includes("penthouse") ||
      lowerInput.includes("mansion")
    ) {
      return "We have incredible luxury properties! Our collection includes beachfront villas, mountain cabins, city penthouses, historic mansions, and lakefront lodges. Each property is carefully curated for exceptional experiences. What type of setting appeals to you most?"
    }

    // Amenities queries
    if (
      lowerInput.includes("pool") ||
      lowerInput.includes("beach") ||
      lowerInput.includes("kitchen") ||
      lowerInput.includes("wifi")
    ) {
      return "Our properties come with amazing amenities! Most include pools, full kitchens, high-speed WiFi, and unique features like beach access, hot tubs, or mountain views. We also offer premium add-ons like BBQ setups, pool heating, and equipment rentals. What amenities are most important for your stay?"
    }

    // Guest count queries
    if (
      lowerInput.includes("guest") ||
      lowerInput.includes("people") ||
      lowerInput.includes("family") ||
      lowerInput.includes("group")
    ) {
      return "Our properties accommodate different group sizes! We have cozy cabins for 2-6 guests, family villas for 8-10 guests, and large mansions for up to 12+ guests. How many people will be in your group? I can recommend the perfect property size for you."
    }

    // Help or support queries
    if (
      lowerInput.includes("help") ||
      lowerInput.includes("support") ||
      lowerInput.includes("problem") ||
      lowerInput.includes("issue")
    ) {
      return "I'm here to help! For immediate assistance, you can reach our 24/7 support team at 1-800-VACATION or use our live chat. I can also help with common questions about bookings, properties, services, and policies. What specific help do you need?"
    }

    // Payment queries
    if (
      lowerInput.includes("payment") ||
      lowerInput.includes("pay") ||
      lowerInput.includes("credit card") ||
      lowerInput.includes("refund")
    ) {
      return "We accept all major credit cards and process payments securely. You won't be charged until you confirm your booking. We also offer flexible payment options for longer stays. For refunds, our policy varies by property but most offer full refunds with proper notice. Need help with a specific payment question?"
    }

    // Availability queries
    if (lowerInput.includes("available") || lowerInput.includes("dates") || lowerInput.includes("calendar")) {
      return "I can help you check availability! Our properties have real-time calendars showing available dates. Peak seasons (holidays, summer) book quickly, so I recommend booking early. What dates are you considering? I can check availability for specific properties."
    }

    // Reviews or ratings queries
    if (lowerInput.includes("review") || lowerInput.includes("rating") || lowerInput.includes("feedback")) {
      return "We're proud of our 4.9-star average rating! All our properties are highly rated by guests. You can read detailed reviews on each property page to see what previous guests loved most. Our hosts are carefully vetted and provide exceptional service. Would you like me to show you our highest-rated properties?"
    }

    // Thank you responses
    if (lowerInput.includes("thank") || lowerInput.includes("thanks")) {
      return "You're very welcome! I'm always here to help make your Stayvy.co experience amazing. Is there anything else you'd like to know about our properties or services?"
    }

    // Default intelligent response
    return "That's a great question! I want to make sure I give you the most helpful information. Could you tell me a bit more about what you're looking for? Are you interested in booking a property, learning about our services, or do you have questions about an existing reservation? I'm here to help with anything related to your vacation rental experience!"
  }

  const getStateInfo = (state: string): string => {
    const stateInfo: Record<string, string> = {
      Florida:
        "From Miami's stunning beaches to Orlando's attractions, Florida offers year-round sunshine and luxury waterfront properties.",
      California:
        "From Malibu beaches to Lake Tahoe mountains, California has diverse luxury properties for every taste.",
      "New York": "Experience the city that never sleeps with our Manhattan penthouses and upstate retreats.",
      Colorado:
        "Perfect for ski enthusiasts and mountain lovers, with cozy cabins and luxury lodges in Aspen and beyond.",
      Arizona: "Desert oases with world-class spas, golf courses, and stunning Southwestern landscapes.",
      Hawaii: "Paradise awaits with beachfront properties and tropical luxury in the Hawaiian islands.",
      Texas: "From Austin's music scene to Dallas luxury, Texas offers big experiences and bigger properties.",
      Georgia:
        "Historic charm meets Southern hospitality in Savannah's beautiful mansions and Atlanta's modern properties.",
    }
    return stateInfo[state] || "This state offers unique and beautiful vacation rental experiences."
  }

  const handleLiveSupport = (type: "phone" | "sms") => {
    const supportMessage: Message = {
      id: Date.now().toString(),
      text: `Perfect! I'm connecting you with our live support team via ${type}. Our specialists are available 24/7 and will ${type === "phone" ? "call you" : "send you a text"} within 2 minutes. They can help with complex bookings, special requests, or any detailed questions. Is your contact information up to date in your profile?`,
      isBot: true,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, supportMessage])
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.div className="fixed bottom-6 right-6 z-50" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-red-600 hover:bg-red-700 shadow-lg"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 right-6 z-50 w-80 md:w-96"
          >
            <Card className="bg-gray-900 border-gray-700 shadow-2xl">
              <CardHeader className="bg-red-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center justify-between">
                  <span>Stayvy.co Assistant</span>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleLiveSupport("phone")}
                      className="text-white hover:bg-red-700"
                    >
                      <Phone className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleLiveSupport("sms")}
                      className="text-white hover:bg-red-700"
                    >
                      <MessageSquare className="w-4 h-4" />
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>

              <CardContent className="p-0">
                <ScrollArea className="h-80 p-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div key={message.id} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                        <div
                          className={`max-w-[80%] p-3 rounded-lg ${
                            message.isBot ? "bg-gray-800 text-white" : "bg-red-600 text-white"
                          }`}
                        >
                          <p className="text-sm">{message.text}</p>
                          <p className="text-xs opacity-70 mt-1">
                            {message.timestamp.toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </p>
                        </div>
                      </div>
                    ))}

                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="bg-gray-800 text-white p-3 rounded-lg">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.1s" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.3s" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollArea>

                <div className="p-4 border-t border-gray-700">
                  <div className="flex space-x-2">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Type your message..."
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                      className="bg-gray-800 border-gray-600 text-white"
                    />
                    <Button onClick={handleSendMessage} size="sm" className="bg-red-600 hover:bg-red-700">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
