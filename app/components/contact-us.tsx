"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone } from "lucide-react"
import { CalendlyInline } from "./CalendlyInline"
import SocialLinks from "./SocialLinks"

export default function ContactUs() {
    return (
        <div id="contact-us" className="w-full bg-gradient-to-br from-stone-50 to-amber-50/30 py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-wide text-brand">Get In Touch</h2>

                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Contact Information */}
                    <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                        <CardContent className="p-8">

                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center">
                                        <Phone className="w-5 h-5 text-stone-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-stone-500 uppercase tracking-wide">Phone</p>
                                        <p className="text-lg text-stone-800 font-medium">+1 (647) 949-2526</p>
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
                                <SocialLinks />
                                <div className="mt-6 text-sm text-brand font-medium">
                                    <span className="hidden md:inline-block">Book a Consultation 👉</span>
                                    <span className="inline-block md:hidden">Book a Consultation 👇</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Calendly Inline Embed */}
                    <CalendlyInline url="https://calendly.com/designconsultation_hausofbanstead/30min" />
                </div>


            </div>
        </div>
    )
} 