"use client"

import { useState } from "react"
import { Home, Palette, Lightbulb, Sofa, ArrowRight, Sparkles } from "lucide-react"

export function InteractiveServices() {
  const [activeService, setActiveService] = useState(0)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const services = [
    {
      icon: Home,
      title: "Spatial Architecture",
      subtitle: "Complete Environment Design",
      description:
        "Transforming spaces through architectural precision and artistic vision, creating environments that breathe with life.",
      features: ["3D Spatial Planning", "Architectural Integration", "Flow Optimization", "Lighting Architecture"],
      color: "from-amber-400 to-orange-500",
      bgColor: "from-amber-500/10 to-orange-500/10",
    },
    {
      icon: Palette,
      title: "Color Psychology",
      subtitle: "Emotional Palette Curation",
      description:
        "Crafting color stories that evoke emotion and enhance well-being through scientific color psychology.",
      features: ["Mood Enhancement", "Psychological Impact", "Cultural Sensitivity", "Seasonal Adaptation"],
      color: "from-rose-400 to-pink-500",
      bgColor: "from-rose-500/10 to-pink-500/10",
    },
    {
      icon: Lightbulb,
      title: "Illumination Design",
      subtitle: "Atmospheric Light Sculpting",
      description: "Sculpting with light to create dynamic atmospheres that change throughout the day and seasons.",
      features: ["Circadian Lighting", "Smart Integration", "Artistic Fixtures", "Energy Efficiency"],
      color: "from-blue-400 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10",
    },
    {
      icon: Sofa,
      title: "Luxury Curation",
      subtitle: "Bespoke Furniture Selection",
      description:
        "Sourcing and customizing luxury pieces that tell your unique story while ensuring uncompromising comfort.",
      features: ["Custom Manufacturing", "Artisan Partnerships", "Sustainable Materials", "Heirloom Quality"],
      color: "from-emerald-400 to-teal-500",
      bgColor: "from-emerald-500/10 to-teal-500/10",
    },
  ]

  const ActiveServiceIcon = services[activeService].icon

  return (
    <section id="services" className="py-32 px-4 bg-stone-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #f59e0b 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-amber-400/10 px-6 py-2 rounded-full mb-8">
            <Sparkles className="h-4 w-4 text-amber-400" />
            <span className="text-amber-200 text-sm tracking-wide uppercase">Our Expertise</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-thin tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-stone-200 to-amber-200 mb-6">
            Design Services
          </h2>
          <p className="text-xl text-stone-400 max-w-3xl mx-auto leading-relaxed">
            Each service is a masterpiece of precision, creativity, and innovation
          </p>
        </div>

        {/* Interactive Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-3xl border transition-all duration-500 cursor-pointer ${
                hoveredCard === index
                  ? `border-amber-400/50 bg-gradient-to-br ${service.bgColor} scale-105`
                  : "border-stone-800 bg-stone-900/50 hover:border-stone-700"
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setActiveService(index)}
            >
              <div className="flex items-start space-x-6">
                <div
                  className={`p-4 rounded-2xl bg-gradient-to-br ${service.color} transition-transform duration-300 ${
                    hoveredCard === index ? "scale-110 rotate-6" : "scale-100"
                  }`}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-light text-stone-100 mb-2 tracking-wide">{service.title}</h3>
                  <p className="text-amber-200/80 text-sm tracking-wide uppercase mb-4">{service.subtitle}</p>
                  <p className="text-stone-300 leading-relaxed mb-6">{service.description}</p>

                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                        <span className="text-stone-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <ArrowRight
                  className={`h-5 w-5 text-stone-500 transition-all duration-300 ${
                    hoveredCard === index ? "text-amber-400 translate-x-2" : ""
                  }`}
                />
              </div>

              {/* Hover Effect Overlay */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 transition-opacity duration-300 ${
                  hoveredCard === index ? "opacity-5" : ""
                }`}
              />
            </div>
          ))}
        </div>

        {/* Service Detail Panel */}
        <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-8 border border-stone-700">
          <div className="flex items-center space-x-4 mb-6">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${services[activeService].color}`}>
              <ActiveServiceIcon className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-light text-stone-100">{services[activeService].title}</h3>
              <p className="text-amber-200/80 text-sm uppercase tracking-wide">{services[activeService].subtitle}</p>
            </div>
          </div>

          <p className="text-stone-300 text-lg leading-relaxed mb-8">{services[activeService].description}</p>

          <button className="group flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-stone-900 rounded-full font-medium tracking-wide hover:scale-105 transition-transform duration-300">
            <span>Explore This Service</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}
