"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Clock, User, Sparkles, ArrowRight, CheckCircle, CalendarIcon } from "lucide-react"

export function InnovativeBooking() {
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [selectedService, setSelectedService] = useState<string>("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const services = [
    {
      name: "Discovery Consultation",
      duration: "90 min",
      price: "Complimentary",
      description: "Initial meeting to understand your vision and space",
    },
    {
      name: "Design Consultation",
      duration: "2 hours",
      price: "£150",
      description: "In-depth design discussion with preliminary concepts",
    },
    {
      name: "Space Planning Session",
      duration: "3 hours",
      price: "£250",
      description: "Detailed spatial analysis and layout optimization",
    },
    {
      name: "Full Design Presentation",
      duration: "4 hours",
      price: "£400",
      description: "Complete design proposal with 3D visualizations",
    },
  ]

  const timeSlots = ["9:00 AM", "10:30 AM", "12:00 PM", "1:30 PM", "3:00 PM", "4:30 PM"]

  const nextStep = () => {
    if (step < 4) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = () => {
    console.log("Booking submitted:", {
      service: selectedService,
      date: selectedDate,
      time: selectedTime,
      ...formData,
    })
    setStep(4)
  }

  return (
    <section
      id="booking"
      className="py-32 px-4 bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-400/10 px-6 py-2 rounded-full mb-8">
            <Sparkles className="h-4 w-4 text-amber-400" />
            <span className="text-amber-200 text-sm tracking-wide uppercase">Book Your Experience</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-thin tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-stone-200 to-amber-200 mb-6">
            Begin Your Journey
          </h2>
          <p className="text-xl text-stone-400 max-w-3xl mx-auto">
            Schedule a consultation and let's create something extraordinary together
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            {[1, 2, 3, 4].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    step >= stepNumber
                      ? "bg-gradient-to-r from-amber-400 to-amber-500 text-stone-900"
                      : "bg-stone-800 text-stone-400 border border-stone-700"
                  }`}
                >
                  {step > stepNumber ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    <span className="font-medium">{stepNumber}</span>
                  )}
                </div>
                {stepNumber < 4 && (
                  <div
                    className={`w-16 h-1 mx-2 transition-all duration-300 ${
                      step > stepNumber ? "bg-amber-400" : "bg-stone-800"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Booking Steps */}
        <Card className="bg-stone-900/80 backdrop-blur-xl border-stone-700 rounded-3xl overflow-hidden">
          <CardContent className="p-8">
            {step === 1 && (
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-3xl font-light text-stone-100 mb-4">Choose Your Service</h3>
                  <p className="text-stone-400">Select the consultation type that best fits your needs</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedService(service.name)}
                      className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${
                        selectedService === service.name
                          ? "border-amber-400 bg-amber-400/10 scale-105"
                          : "border-stone-700 bg-stone-800/50 hover:border-stone-600 hover:bg-stone-800"
                      }`}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-light text-stone-100">{service.name}</h4>
                        <span className="text-amber-400 font-medium">{service.price}</span>
                      </div>
                      <p className="text-stone-300 mb-3">{service.description}</p>
                      <div className="flex items-center space-x-2 text-stone-400 text-sm">
                        <Clock className="h-4 w-4" />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-3xl font-light text-stone-100 mb-6 flex items-center">
                    <CalendarIcon className="h-8 w-8 mr-3 text-amber-400" />
                    Select Date & Time
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <Label className="text-stone-300 mb-3 block">Choose a date</Label>
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => date < new Date() || date.getDay() === 0}
                        className="rounded-xl border-stone-700 bg-stone-800/50"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-light text-stone-100 mb-6">Available Times</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? "default" : "outline"}
                        onClick={() => setSelectedTime(time)}
                        className={`h-12 ${
                          selectedTime === time
                            ? "bg-gradient-to-r from-amber-400 to-amber-500 text-stone-900 hover:from-amber-500 hover:to-amber-600"
                            : "border-stone-600 text-stone-300 hover:bg-stone-800 hover:border-stone-500"
                        }`}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>

                  {selectedDate && selectedTime && (
                    <div className="mt-8 p-4 bg-amber-400/10 rounded-xl border border-amber-400/30">
                      <h5 className="text-amber-200 font-medium mb-2">Your Appointment</h5>
                      <p className="text-stone-300">
                        {selectedService} on {selectedDate.toLocaleDateString()} at {selectedTime}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-light text-stone-100 mb-4 flex items-center justify-center">
                    <User className="h-8 w-8 mr-3 text-amber-400" />
                    Your Information
                  </h3>
                  <p className="text-stone-400">Tell us about yourself and your project</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-stone-300">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-stone-800/50 border-stone-600 text-stone-100 focus:border-amber-400"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-stone-300">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-stone-800/50 border-stone-600 text-stone-100 focus:border-amber-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone" className="text-stone-300">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-stone-800/50 border-stone-600 text-stone-100 focus:border-amber-400"
                    placeholder="+44 7XXX XXXXXX"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-stone-300">
                    Tell us about your project
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-stone-800/50 border-stone-600 text-stone-100 focus:border-amber-400 min-h-[120px]"
                    placeholder="Describe your vision, style preferences, budget range, and any specific requirements..."
                  />
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="text-center space-y-8">
                <div className="w-20 h-20 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-light text-stone-100 mb-4">Consultation Booked!</h3>
                  <p className="text-stone-300 text-lg">
                    Thank you for choosing HOB Studio. We'll send you a confirmation email shortly with all the details.
                  </p>
                </div>
                <div className="bg-stone-800/50 rounded-2xl p-6 max-w-md mx-auto">
                  <h4 className="text-amber-200 font-medium mb-4">Appointment Summary</h4>
                  <div className="space-y-2 text-stone-300">
                    <p>
                      <strong>Service:</strong> {selectedService}
                    </p>
                    <p>
                      <strong>Date:</strong> {selectedDate?.toLocaleDateString()}
                    </p>
                    <p>
                      <strong>Time:</strong> {selectedTime}
                    </p>
                    <p>
                      <strong>Contact:</strong> {formData.email}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            {step < 4 && (
              <div className="flex justify-between mt-12">
                <Button
                  onClick={prevStep}
                  disabled={step === 1}
                  variant="outline"
                  className="border-stone-600 text-stone-300 hover:bg-stone-800 disabled:opacity-50"
                >
                  Previous
                </Button>

                <Button
                  onClick={step === 3 ? handleSubmit : nextStep}
                  disabled={
                    (step === 1 && !selectedService) ||
                    (step === 2 && (!selectedDate || !selectedTime)) ||
                    (step === 3 && (!formData.name || !formData.email))
                  }
                  className="bg-gradient-to-r from-amber-400 to-amber-500 text-stone-900 hover:from-amber-500 hover:to-amber-600 disabled:opacity-50"
                >
                  {step === 3 ? "Book Consultation" : "Continue"}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
