import { type NextRequest, NextResponse } from "next/server"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    const { text } = await generateText({
      model: openai("gpt-4o"),
      system: `You are a helpful assistant for Stayvy.co, a premium vacation rental platform. 
      You help customers with:
      - Finding and booking vacation rentals
      - Information about properties and amenities
      - Add-on services like personal chefs, massage therapy, car rentals, and tours
      - Booking assistance and modifications
      - General travel and accommodation questions
      
      Be friendly, professional, and helpful. If you can't handle a complex request, 
      offer to connect them with live support via phone or SMS.
      
      Available cities: Washington, Tennessee, Louisiana, Texas, Illinois, Georgia, 
      Colorado, Arizona, Utah, California, New York, Florida, Hawaii, Massachusetts, Nevada.`,
      prompt: message,
    })

    return NextResponse.json({ response: text })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json({ error: "Failed to generate response" }, { status: 500 })
  }
}
