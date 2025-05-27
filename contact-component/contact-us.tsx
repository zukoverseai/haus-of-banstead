"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, Instagram, Facebook, Linkedin, Twitter } from "lucide-react"

export default function ContactUs() {
  return (
    <div className="w-full bg-gradient-to-br from-stone-50 to-amber-50/30 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-4 tracking-wide">Contact Us Now</h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your space? Get in touch with our design experts and let's create something beautiful
            together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-light text-stone-800 mb-6">Get In Touch</h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-stone-600" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-500 uppercase tracking-wide">Phone</p>
                    <p className="text-lg text-stone-800 font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-stone-600" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-500 uppercase tracking-wide">Email</p>
                    <p className="text-lg text-stone-800 font-medium">hello@hausofbanstead.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-200">
                <p className="text-sm text-stone-500 uppercase tracking-wide mb-4">Follow Us</p>
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-10 h-10 rounded-full border-stone-200 hover:bg-stone-100 hover:border-stone-300 transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-stone-600" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-10 h-10 rounded-full border-stone-200 hover:bg-stone-100 hover:border-stone-300 transition-colors"
                  >
                    <Facebook className="w-4 h-4 text-stone-600" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-10 h-10 rounded-full border-stone-200 hover:bg-stone-100 hover:border-stone-300 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-stone-600" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-10 h-10 rounded-full border-stone-200 hover:bg-stone-100 hover:border-stone-300 transition-colors"
                  >
                    <Twitter className="w-4 h-4 text-stone-600" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Contact Actions */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-light text-stone-800 mb-6">Quick Actions</h3>

              <div className="space-y-4">
                <Button
                  className="w-full h-14 bg-rose-300 hover:bg-rose-400 text-stone-800 font-medium text-lg rounded-full transition-colors"
                  onClick={() => (window.location.href = "tel:+15551234567")}
                >
                  <Phone className="w-5 h-5 mr-3" />
                  Call Now
                </Button>

                <Button
                  variant="outline"
                  className="w-full h-14 border-2 border-stone-200 hover:bg-stone-50 text-stone-800 font-medium text-lg rounded-full transition-colors"
                  onClick={() => (window.location.href = "mailto:hello@hausofbanstead.com")}
                >
                  <Mail className="w-5 h-5 mr-3" />
                  Send Email
                </Button>

                <Button
                  variant="outline"
                  className="w-full h-14 border-2 border-stone-200 hover:bg-stone-50 text-stone-800 font-medium text-lg rounded-full transition-colors"
                >
                  Book a Consultation
                </Button>
              </div>

              <div className="mt-8 p-6 bg-stone-50 rounded-2xl">
                <h4 className="font-medium text-stone-800 mb-2">Office Hours</h4>
                <div className="text-sm text-stone-600 space-y-1">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: By Appointment</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-stone-600 mb-6">
            Ready to start your design journey? We're here to help bring your vision to life.
          </p>
          <Button
            size="lg"
            className="bg-rose-300 hover:bg-rose-400 text-stone-800 font-medium px-8 py-3 rounded-full text-lg transition-colors"
          >
            Schedule Your Free Consultation
          </Button>
        </div>
      </div>
    </div>
  )
}
