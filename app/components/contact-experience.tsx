"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Instagram, Linkedin, Send, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactExperience() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    alert("Message sent successfully!")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "hello@hausofbanstead.com",
      action: "Send Email",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "+44 20 7XXX XXXX",
      action: "Call Now",
      color: "from-emerald-400 to-teal-500",
    },
    {
      icon: MapPin,
      title: "Visit Studio",
      description: "Banstead, Surrey, UK",
      action: "Get Directions",
      color: "from-amber-400 to-orange-500",
    },
  ]

  return (
    <section id="contact" className="py-32 px-4 bg-stone-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, #f59e0b 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-thin tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-stone-200 to-amber-200 mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-stone-400 max-w-3xl mx-auto">
            Ready to transform your space? We'd love to hear about your vision and discuss how we can bring it to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Methods */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-light text-stone-100 mb-8">Get In Touch</h3>

              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    className="group p-6 bg-stone-900/50 rounded-2xl border border-stone-800 hover:border-stone-700 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-br ${method.color} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <method.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-light text-stone-100 mb-1">{method.title}</h4>
                        <p className="text-stone-300 mb-3">{method.description}</p>
                        <button className="text-amber-400 hover:text-amber-300 text-sm font-medium tracking-wide transition-colors">
                          {method.action} →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-xl font-light text-stone-100 mb-6">Follow Our Journey</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="p-3 bg-stone-900/50 rounded-xl border border-stone-800 hover:border-amber-400 hover:bg-amber-400/10 transition-all duration-300 group"
                >
                  <Instagram className="h-5 w-5 text-stone-400 group-hover:text-amber-400 transition-colors" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-stone-900/50 rounded-xl border border-stone-800 hover:border-amber-400 hover:bg-amber-400/10 transition-all duration-300 group"
                >
                  <Linkedin className="h-5 w-5 text-stone-400 group-hover:text-amber-400 transition-colors" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-stone-900/50 rounded-xl border border-stone-800 hover:border-amber-400 hover:bg-amber-400/10 transition-all duration-300 group"
                >
                  <MessageCircle className="h-5 w-5 text-stone-400 group-hover:text-amber-400 transition-colors" />
                </a>
              </div>
            </div>

            {/* Studio Hours */}
            <div className="p-6 bg-gradient-to-br from-stone-900/80 to-stone-800/80 rounded-2xl border border-stone-700">
              <h4 className="text-xl font-light text-stone-100 mb-4">Studio Hours</h4>
              <div className="space-y-2 text-stone-300">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>By Appointment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-stone-900/80 backdrop-blur-xl rounded-3xl p-8 border border-stone-700">
            <h3 className="text-3xl font-light text-stone-100 mb-8 flex items-center">
              <Send className="h-8 w-8 mr-3 text-amber-400" />
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-stone-300 mb-2">Name</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-stone-800/50 border-stone-600 text-stone-100 focus:border-amber-400"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-stone-300 mb-2">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-stone-800/50 border-stone-600 text-stone-100 focus:border-amber-400"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-stone-300 mb-2">Subject</label>
                <Input
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="bg-stone-800/50 border-stone-600 text-stone-100 focus:border-amber-400"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div>
                <label className="block text-stone-300 mb-2">Message</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-stone-800/50 border-stone-600 text-stone-100 focus:border-amber-400 min-h-[150px]"
                  placeholder="Tell us about your project, timeline, and any specific requirements..."
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-stone-900 hover:from-amber-500 hover:to-amber-600 py-3 text-lg font-medium tracking-wide disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-stone-900 border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </div>
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-12 border-t border-stone-800 text-center">
          <div className="mb-8">
            <div className="text-3xl font-thin tracking-wider text-amber-200 mb-2">HOB</div>
            <div className="text-sm tracking-widest text-stone-400 uppercase">Haus of Banstead</div>
          </div>

          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8" />

          <p className="text-stone-500 text-sm">© 2024 Haus of Banstead Interior Design Studio. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
