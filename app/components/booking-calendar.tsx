"use client"

import type React from "react"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock, User } from "lucide-react"

export function BookingCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  })

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ]

  const projectTypes = [
    "Full Home Design",
    "Single Room Design",
    "Color Consultation",
    "Furniture Selection",
    "Commercial Space",
    "Other",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would integrate with Calendly API
    console.log("Booking submitted:", {
      date: selectedDate,
      time: selectedTime,
      ...formData,
    })
    alert("Consultation booked successfully! We will contact you shortly to confirm.")
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Calendar Section */}
        <Card className="border-stone-200">
          <CardHeader>
            <CardTitle className="text-2xl font-light text-stone-800 flex items-center gap-2">
              <Clock className="h-6 w-6" />
              Select Date & Time
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label className="text-stone-700 mb-2 block">Choose a date</Label>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={(date) => date < new Date() || date.getDay() === 0}
                className="rounded-md border border-stone-200"
              />
            </div>

            {selectedDate && (
              <div>
                <Label className="text-stone-700 mb-2 block">Available times</Label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((time) => (
                    <Button
                      key={time}
                      variant={selectedTime === time ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedTime(time)}
                      className={
                        selectedTime === time
                          ? "bg-stone-800 hover:bg-stone-700"
                          : "border-stone-300 text-stone-700 hover:bg-stone-50"
                      }
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Contact Form Section */}
        <Card className="border-stone-200">
          <CardHeader>
            <CardTitle className="text-2xl font-light text-stone-800 flex items-center gap-2">
              <User className="h-6 w-6" />
              Your Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-stone-700">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border-stone-300 focus:border-stone-500"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-stone-700">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border-stone-300 focus:border-stone-500"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone" className="text-stone-700">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="border-stone-300 focus:border-stone-500"
                />
              </div>

              <div>
                <Label htmlFor="projectType" className="text-stone-700">
                  Project Type
                </Label>
                <Select onValueChange={(value) => setFormData({ ...formData, projectType: value })}>
                  <SelectTrigger className="border-stone-300 focus:border-stone-500">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    {projectTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message" className="text-stone-700">
                  Tell us about your project
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="border-stone-300 focus:border-stone-500 min-h-[100px]"
                  placeholder="Describe your vision, style preferences, budget range, and any specific requirements..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-stone-800 hover:bg-stone-700 text-white py-3"
                disabled={!selectedDate || !selectedTime || !formData.name || !formData.email}
              >
                Book Consultation
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
