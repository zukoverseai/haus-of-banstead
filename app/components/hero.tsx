import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="text-center max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-light tracking-wider text-stone-800 mb-4">HOB</h1>
          <div className="text-lg md:text-xl tracking-widest text-stone-600 mb-8">HAUS OF BANSTEAD</div>
          <div className="text-sm tracking-widest text-stone-500 mb-12">INTERIOR DESIGN STUDIO</div>
        </div>

        <div className="w-32 h-px bg-stone-400 mx-auto mb-12"></div>

        <p className="text-lg md:text-xl text-stone-700 leading-relaxed mb-12 max-w-2xl mx-auto">
          Creating timeless interiors that reflect your unique story. Where luxury meets functionality in perfect
          harmony.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-stone-800 hover:bg-stone-700 text-stone-50 px-8 py-3 tracking-wide">
            <a href="#booking">Book Consultation</a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-stone-400 text-stone-700 hover:bg-stone-100 px-8 py-3 tracking-wide"
          >
            <a href="#portfolio">View Portfolio</a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-stone-400" />
      </div>
    </section>
  )
}
