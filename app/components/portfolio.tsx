import Image from "next/image"

export function Portfolio() {
  const projects = [
    {
      title: "Modern Minimalist Living",
      category: "Residential",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Luxury Bedroom Suite",
      category: "Residential",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Contemporary Kitchen",
      category: "Residential",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Executive Office Space",
      category: "Commercial",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Boutique Hotel Lobby",
      category: "Hospitality",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Elegant Dining Room",
      category: "Residential",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section id="portfolio" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-wide text-stone-800 mb-4">Portfolio</h2>
          <div className="w-24 h-px bg-stone-400 mx-auto mb-8"></div>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Explore our curated collection of interior design projects that showcase our commitment to excellence and
            attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                    <p className="text-sm tracking-wide">{project.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
