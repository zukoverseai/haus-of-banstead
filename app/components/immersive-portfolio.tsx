"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react"

export function ImmersivePortfolio() {
  const [activeProject, setActiveProject] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const projects = [
    {
      title: "Minimalist Sanctuary",
      category: "Residential",
      location: "London Penthouse",
      year: "2024",
      description:
        "A serene urban retreat where clean lines meet warm textures, creating a perfect balance of sophistication and comfort.",
      image: "/placeholder.svg?height=800&width=1200",
      tags: ["Minimalism", "Luxury", "Urban"],
      stats: { area: "2,500 sq ft", duration: "8 months", budget: "£250k+" },
    },
    {
      title: "Industrial Elegance",
      category: "Commercial",
      location: "Shoreditch Office",
      year: "2024",
      description:
        "Transforming a warehouse into a dynamic workspace that inspires creativity while maintaining industrial charm.",
      image: "/placeholder.svg?height=800&width=1200",
      tags: ["Industrial", "Modern", "Workspace"],
      stats: { area: "5,000 sq ft", duration: "12 months", budget: "£500k+" },
    },
    {
      title: "Coastal Retreat",
      category: "Residential",
      location: "Brighton Villa",
      year: "2023",
      description: "A seaside haven where natural materials and ocean views create an atmosphere of tranquil luxury.",
      image: "/placeholder.svg?height=800&width=1200",
      tags: ["Coastal", "Natural", "Luxury"],
      stats: { area: "3,200 sq ft", duration: "10 months", budget: "£400k+" },
    },
    {
      title: "Heritage Restoration",
      category: "Historic",
      location: "Georgian Townhouse",
      year: "2023",
      description: "Preserving architectural heritage while introducing contemporary comfort and modern functionality.",
      image: "/placeholder.svg?height=800&width=1200",
      tags: ["Heritage", "Restoration", "Classic"],
      stats: { area: "4,100 sq ft", duration: "18 months", budget: "£750k+" },
    },
  ]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        })
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
      return () => container.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section
      id="portfolio"
      ref={containerRef}
      className="py-32 px-4 bg-gradient-to-br from-stone-950 to-stone-900 relative overflow-hidden"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur-3xl transition-transform duration-1000"
          style={{
            left: `${mousePosition.x * 100}%`,
            top: `${mousePosition.y * 100}%`,
            transform: `translate(-50%, -50%) scale(${0.5 + mousePosition.x * 0.5})`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-thin tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-stone-200 to-amber-200 mb-6">
            Portfolio
          </h2>
          <p className="text-xl text-stone-400 max-w-3xl mx-auto">
            Each project tells a unique story of transformation and innovation
          </p>
        </div>

        {/* Main Project Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Project Image */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src={projects[activeProject].image || "/placeholder.svg"}
                alt={projects[activeProject].title}
                width={1200}
                height={800}
                className="w-full h-96 lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent" />

              {/* Image Controls */}
              <button
                onClick={() => setIsFullscreen(true)}
                className="absolute top-4 right-4 p-2 bg-stone-900/80 backdrop-blur-sm rounded-full text-white hover:bg-stone-800 transition-colors"
              >
                <Maximize2 className="h-4 w-4" />
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={prevProject}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-stone-900/80 backdrop-blur-sm rounded-full text-white hover:bg-stone-800 transition-all hover:scale-110"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextProject}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-stone-900/80 backdrop-blur-sm rounded-full text-white hover:bg-stone-800 transition-all hover:scale-110"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Project Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {Object.entries(projects[activeProject].stats).map(([key, value]) => (
                <div key={key} className="text-center p-4 bg-stone-900/50 rounded-xl border border-stone-800">
                  <div className="text-amber-400 text-sm uppercase tracking-wide mb-1">{key}</div>
                  <div className="text-stone-200 font-medium">{value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <span className="px-3 py-1 bg-amber-400/20 text-amber-200 rounded-full text-sm tracking-wide">
                  {projects[activeProject].category}
                </span>
                <span className="text-stone-400 text-sm">{projects[activeProject].year}</span>
              </div>
              <h3 className="text-4xl font-light text-stone-100 mb-2 tracking-wide">{projects[activeProject].title}</h3>
              <p className="text-amber-200/80 text-lg mb-6">{projects[activeProject].location}</p>
            </div>

            <p className="text-stone-300 text-lg leading-relaxed">{projects[activeProject].description}</p>

            <div className="flex flex-wrap gap-2">
              {projects[activeProject].tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-stone-800 text-stone-300 rounded-full text-sm border border-stone-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            <button className="group flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-stone-900 rounded-full font-medium tracking-wide hover:scale-105 transition-transform duration-300">
              <span>View Full Project</span>
              <Maximize2 className="h-4 w-4 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        {/* Project Thumbnails */}
        <div className="flex justify-center space-x-4 overflow-x-auto pb-4">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => setActiveProject(index)}
              className={`relative flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                activeProject === index
                  ? "ring-2 ring-amber-400 scale-110"
                  : "opacity-60 hover:opacity-100 hover:scale-105"
              }`}
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={96}
                height={64}
                className="w-full h-full object-cover"
              />
              {activeProject === index && <div className="absolute inset-0 bg-amber-400/20" />}
            </button>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 p-2 bg-stone-900/80 backdrop-blur-sm rounded-full text-white hover:bg-stone-800 transition-colors z-10"
          >
            <X className="h-6 w-6" />
          </button>
          <Image
            src={projects[activeProject].image || "/placeholder.svg"}
            alt={projects[activeProject].title}
            width={1200}
            height={800}
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      )}
    </section>
  )
}
