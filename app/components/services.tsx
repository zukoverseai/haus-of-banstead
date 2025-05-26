import { Card, CardContent } from "@/components/ui/card"
import { Home, Palette, Lightbulb, Sofa } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Home,
      title: "Full Home Design",
      description:
        "Complete interior transformation from concept to completion, tailored to your lifestyle and preferences.",
    },
    {
      icon: Palette,
      title: "Color Consultation",
      description: "Expert color palette selection to create the perfect mood and atmosphere for your space.",
    },
    {
      icon: Lightbulb,
      title: "Lighting Design",
      description: "Strategic lighting solutions that enhance ambiance and functionality throughout your home.",
    },
    {
      icon: Sofa,
      title: "Furniture Curation",
      description: "Carefully selected furniture pieces that blend style, comfort, and quality craftsmanship.",
    },
  ]

  return (
    <section id="services" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-wide text-stone-800 mb-4">Our Services</h2>
          <div className="w-24 h-px bg-stone-400 mx-auto mb-8"></div>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            We offer comprehensive interior design services to transform your space into a reflection of your personal
            style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-stone-200 bg-white hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <service.icon className="h-12 w-12 text-stone-600 mx-auto mb-6" />
                <h3 className="text-xl font-medium text-stone-800 mb-4 tracking-wide">{service.title}</h3>
                <p className="text-stone-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
