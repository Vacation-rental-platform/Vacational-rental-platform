"use client"

import { useState } from "react"
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
      text: "Hi! I'm your Stayvy.co assistant. I can help you find properties, book services, or answer any questions. How can I help you today?",
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
      return "I'd be happy to help you with booking! You can browse our properties and make reservations directly on Stayvy.co. Would you like me to connect you with a booking specialist for personalized assistance?"
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
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-[#FF385C] hover:bg-[#E31C5F] text-white shadow-lg transition-transform hover:scale-110"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 md:w-96">
          <Card className="bg-white border border-gray-200 shadow-2xl">
            <CardHeader className="bg-[#FF385C] text-white rounded-t-lg">
              <CardTitle className="flex items-center justify-between">
                <span>Stayvy.co Assistant</span>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleLiveSupport("phone")}
                    className="text-white hover:bg-[#E31C5F]"
                  >
                    <Phone className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleLiveSupport("sms")}
                    className="text-white hover:bg-[#E31C5F]"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>

            <CardContent className="p-0">
              <ScrollArea className="h-80 p-4 bg-white">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.isBot ? "bg-gray-100 text-[#222222]" : "bg-[#FF385C] text-white"
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
                      <div className="bg-gray-100 text-[#222222] p-3 rounded-lg">
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

              <div className="p-4 border-t border-gray-200 bg-white">
                <div className="flex space-x-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your message..."
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    className="bg-white border-gray-200 text-[#222222]"
                  />
                  <Button onClick={handleSendMessage} size="sm" className="bg-[#FF385C] hover:bg-[#E31C5F]">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
