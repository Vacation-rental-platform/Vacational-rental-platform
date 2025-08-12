import { type NextRequest, NextResponse } from "next/server"

// Mock database - replace with actual database integration
const properties = [
  {
    id: 1,
    title: "Luxury Beachfront Villa",
    location: "Miami, Florida",
    city: "Florida",
    price: 450,
    rating: 4.9,
    reviews: 127,
    images: ["/luxury-miami-villa-exterior.png", "/luxury-villa-living-room-miami.png"],
    amenities: ["Pool", "Beach Access", "WiFi", "Kitchen", "Parking"],
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    description: "Experience luxury at its finest in this stunning beachfront villa.",
    features: ["Private beach access", "Infinity pool with ocean view", "Fully equipped gourmet kitchen"],
    availability: {
      "2024-12-15": false,
      "2024-12-16": false,
      "2024-12-25": false,
      "2024-12-26": false,
    },
    hostAwayId: "HA001",
    status: "active",
  },
]

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const city = searchParams.get("city")
  const minPrice = searchParams.get("minPrice")
  const maxPrice = searchParams.get("maxPrice")
  const guests = searchParams.get("guests")

  let filteredProperties = [...properties]

  if (city) {
    filteredProperties = filteredProperties.filter((p) => p.city.toLowerCase().includes(city.toLowerCase()))
  }

  if (minPrice) {
    filteredProperties = filteredProperties.filter((p) => p.price >= Number.parseInt(minPrice))
  }

  if (maxPrice) {
    filteredProperties = filteredProperties.filter((p) => p.price <= Number.parseInt(maxPrice))
  }

  if (guests) {
    filteredProperties = filteredProperties.filter((p) => p.guests >= Number.parseInt(guests))
  }

  return NextResponse.json({ properties: filteredProperties })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const { title, location, city, price, guests, bedrooms, bathrooms } = body

    if (!title || !location || !city || !price || !guests || !bedrooms || !bathrooms) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Create new property
    const newProperty = {
      id: properties.length + 1,
      title,
      location,
      city,
      price,
      rating: 0,
      reviews: 0,
      images: body.images || [],
      amenities: body.amenities || [],
      guests,
      bedrooms,
      bathrooms,
      description: body.description || "",
      features: body.features || [],
      availability: {},
      hostAwayId: `HA${String(properties.length + 1).padStart(3, "0")}`,
      status: "active",
    }

    properties.push(newProperty)

    // Here you would integrate with Hostaway API to sync the property

    return NextResponse.json({
      property: newProperty,
      message: "Property created successfully",
    })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
