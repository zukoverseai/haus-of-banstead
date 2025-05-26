import { BookingCalendar } from "./booking-calendar"

export function BookingSection() {
  return (
    <section id="booking" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-wide text-stone-800 mb-4">Book Your Consultation</h2>
          <div className="w-24 h-px bg-stone-400 mx-auto mb-8"></div>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Ready to transform your space? Schedule a consultation with our design experts to discuss your vision and
            explore the possibilities.
          </p>
        </div>

        <BookingCalendar />
      </div>
    </section>
  )
}
