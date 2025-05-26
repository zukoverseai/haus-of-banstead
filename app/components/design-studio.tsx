"use client"

import { useState } from "react"
import { Ruler, Lightbulb, Sofa, Users, Award, Globe, Heart } from "lucide-react"

export function DesignStudio() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    { name: "Our Process", icon: Ruler },
    { name: "Team", icon: Users },
    { name: "Philosophy", icon: Heart },
    { name: "Recognition", icon: Award },
  ]

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Vision",
      description:
        "We begin with deep conversations to understand your lifestyle, preferences, and dreams for your space.",
      icon: Globe,
      color: "from-blue-400 to-cyan-500",
    },
    {
      number: "02",
      title: "Conceptual Design",
      description:
        "Our team creates initial concepts that blend your vision with our expertise and innovative solutions.",
      icon: Lightbulb,
      color: "from-amber-400 to-orange-500",
    },
    {
      number: "03",
      title: "Detailed Planning",
      description:
        "Every element is meticulously planned, from spatial flow to material selection and lighting design.",
      icon: Ruler,
      color: "from-emerald-400 to-teal-500",
    },
    {
      number: "04",
      title: "Flawless Execution",
      description: "Our skilled craftspeople and trusted partners bring the design to life with precision and care.",
      icon: Sofa,
      color: "from-rose-400 to-pink-500",
    },
  ]

  const teamMembers = [
    {
      name: "Alexandra Sterling",
      role: "Creative Director",
      specialty: "Luxury Residential Design",
      experience: "15+ years",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Marcus Chen",
      role: "Senior Designer",
      specialty: "Commercial & Hospitality",
      experience: "12+ years",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Isabella Rodriguez",
      role: "Color & Materials Specialist",
      specialty: "Sustainable Design",
      experience: "10+ years",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const philosophy = [
    "Design should enhance life, not complicate it",
    "Every space has a story waiting to be told",
    "Luxury is found in thoughtful details",
    "Sustainability and beauty can coexist",
    "Timeless design transcends trends",
  ]

  const awards = [
    { year: "2024", title: "International Design Excellence Award", category: "Residential Design" },
    { year: "2023", title: "British Interior Design Association", category: "Commercial Project of the Year" },
    { year: "2023", title: "Luxury Lifestyle Awards", category: "Best Interior Design Studio UK" },
    { year: "2022", title: "European Property Awards", category: "Interior Design Firm" },
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="group relative p-6 bg-stone-900/50 rounded-2xl border border-stone-800 hover:border-stone-700 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${step.color} flex-shrink-0`}>
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-2xl font-thin text-amber-400">{step.number}</span>
                      <h3 className="text-xl font-light text-stone-100">{step.title}</h3>
                    </div>
                    <p className="text-stone-300 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      case 1:
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-light text-stone-100 mb-2">{member.name}</h3>
                <p className="text-amber-200 mb-1">{member.role}</p>
                <p className="text-stone-400 text-sm mb-2">{member.specialty}</p>
                <p className="text-stone-500 text-sm">{member.experience}</p>
              </div>
            ))}
          </div>
        )
      case 2:
        return (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-light text-stone-100 mb-6">Our Design Philosophy</h3>
              <p className="text-xl text-stone-300 leading-relaxed">
                We believe that exceptional design emerges from the intersection of artistry, functionality, and human
                connection.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {philosophy.map((principle, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-stone-900/30 rounded-xl">
                  <div className="w-2 h-2 bg-amber-400 rounded-full flex-shrink-0" />
                  <p className="text-stone-200 text-lg">{principle}</p>
                </div>
              ))}
            </div>
          </div>
        )
      case 3:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-stone-900/50 to-stone-800/50 rounded-2xl border border-stone-700"
              >
                <div className="flex items-start justify-between mb-4">
                  <Award className="h-8 w-8 text-amber-400" />
                  <span className="text-amber-200 font-medium">{award.year}</span>
                </div>
                <h3 className="text-xl font-light text-stone-100 mb-2">{award.title}</h3>
                <p className="text-stone-400">{award.category}</p>
              </div>
            ))}
          </div>
        )
      default:
        return null
    }
  }

  return (
    <section id="studio" className="py-32 px-4 bg-stone-950 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-thin tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-stone-200 to-amber-200 mb-6">
            Our Studio
          </h2>
          <p className="text-xl text-stone-400 max-w-3xl mx-auto">
            Where passion meets precision in the art of interior design
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-1 bg-stone-900/50 p-2 rounded-2xl border border-stone-800">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === index
                    ? "bg-gradient-to-r from-amber-400 to-amber-500 text-stone-900"
                    : "text-stone-300 hover:text-stone-100 hover:bg-stone-800/50"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span className="font-medium tracking-wide">{tab.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[500px]">{renderTabContent()}</div>
      </div>
    </section>
  )
}
