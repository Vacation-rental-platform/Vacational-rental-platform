const cities = [
  {
    name: "Washington",
    state: "WA",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop&crop=center",
    properties: 45,
  },
  {
    name: "Tennessee",
    state: "TN",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center",
    properties: 38,
  },
  {
    name: "Louisiana",
    state: "LA",
    image: "https://images.unsplash.com/photo-1605537964077-2943e7e9e2a2?w=400&h=300&fit=crop&crop=center",
    properties: 52,
  },
  {
    name: "Texas",
    state: "TX",
    image: "https://blob.v0.dev/mNnwb.com/photo-1531218150217-67f85cf4f1df?w=400&h=300&fit=crop&crop=center",
    properties: 67,
  },
  {
    name: "Illinois",
    state: "IL",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=300&fit=crop&crop=center",
    properties: 89,
  },
  {
    name: "Georgia",
    state: "GA",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center",
    properties: 43,
  },
  {
    name: "Colorado",
    state: "CO",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center",
    properties: 56,
  },
  {
    name: "Arizona",
    state: "AZ",
    image: "https://images.unsplash.com/photo-1444927714506-8492d94b5ba0?w=400&h=300&fit=crop&crop=center",
    properties: 34,
  },
  {
    name: "Utah",
    state: "UT",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop&crop=center",
    properties: 29,
  },
  {
    name: "California",
    state: "CA",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop&crop=center",
    properties: 156,
  },
  {
    name: "New York",
    state: "NY",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=300&fit=crop&crop=center",
    properties: 234,
  },
  {
    name: "Florida",
    state: "FL",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop&crop=center",
    properties: 78,
  },
  {
    name: "Hawaii",
    state: "HI",
    image: "https://images.unsplash.com/photo-1542259009477-d625272157b7?w=400&h=300&fit=crop&crop=center",
    properties: 67,
  },
  {
    name: "Massachusetts",
    state: "MA",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=300&fit=crop&crop=center",
    properties: 45,
  },
  {
    name: "Nevada",
    state: "NV",
    image: "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=400&h=300&fit=crop&crop=center",
    properties: 89,
  },
]

export function CitiesGrid() {
  return (
    <section className="py-16 px-4 bg-zinc-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Explore Destinations</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {cities.map((city) => (
            <div key={`${city.name}-${city.state}`} className="netflix-card group cursor-pointer">
              <div className="relative">
                <img
                  src={
                    city.image ||
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg"
                  }
                  alt={`${city.name}, ${city.state}`}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 gradient-overlay" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="font-semibold text-lg">{city.name}</h3>
                  <p className="text-gray-300 text-sm">{city.properties} properties</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
