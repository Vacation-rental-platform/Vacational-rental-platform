import { Scissors, Car, Camera, Waves } from "lucide-react"

const services = [
  {
    icon: Scissors,
    title: "Barber Services",
    description: "Professional grooming at your rental",
    price: "From $45",
  },
  {
    icon: Waves,
    title: "Massage Therapy",
    description: "Relaxing spa treatments",
    price: "From $120",
  },
  {
    icon: Car,
    title: "Car Rental",
    description: "Luxury and economy vehicles",
    price: "From $35/day",
  },
  {
    icon: Camera,
    title: "Tours & Experiences",
    description: "Guided local adventures",
    price: "From $75",
  },
]

export function ServicesSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Add-On Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.title} className="netflix-card p-6 text-center">
              <service.icon className="h-12 w-12 mx-auto mb-4 text-red-600" />
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <p className="text-red-600 font-semibold">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
