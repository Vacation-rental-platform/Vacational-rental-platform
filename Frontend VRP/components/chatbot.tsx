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
      text: "Hi! I'm your VacationStay assistant. I can help you find properties, book services, or answer any questions. How can I help you today?",
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
    setInputValue("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        isBot: true,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const getBotResponse = (input: string): string => {
    const lowerInput = input.toLowerCase()

    if (lowerInput.includes("book") || lowerInput.includes("reservation")) {
      return "I'd be happy to help you with booking! You can browse our properties and make reservations directly on the site. Would you like me to connect you with a booking specialist for personalized assistance?"
    }

    if (lowerInput.includes("price") || lowerInput.includes("cost")) {
      return "Our properties range from $200-$800 per night depending on location, size, and amenities. Add-on services start from $50. Would you like to see properties in a specific price range?"
    }

    if (lowerInput.includes("service") || lowerInput.includes("massage") || lowerInput.includes("chef")) {
      return "We offer premium add-on services including personal chefs, massage therapy, car rentals, and guided tours. These can be booked alongside your property reservation. Which service interests you?"
    }

    if (lowerInput.includes("location") || lowerInput.includes("where")) {
      return "We have properties in 15 states including Florida, California, New York, Colorado, and more! Each location offers unique experiences. Where would you like to vacation?"
    }

    return "I understand you're looking for information. For complex queries or immediate assistance, I can connect you with our live support team via phone or SMS. Would you like me to arrange that?"
  }

  const handleLiveSupport = (type: "phone" | "sms") => {
    const supportMessage: Message = {
      id: Date.now().toString(),
      text: `I'm connecting you with our live support team via ${type}. You'll receive a ${type === "phone" ? "call" : "text message"} within 2 minutes. Is your contact information up to date?`,
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
                  <span>VacationStay Assistant</span>
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
