import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light tracking-wide text-stone-800 mb-8">About HOB</h2>
            <div className="w-24 h-px bg-stone-400 mb-8"></div>
            <div className="space-y-6 text-stone-600 leading-relaxed">
              <p>
                Founded with a passion for creating extraordinary living spaces, Haus of Banstead has been transforming
                homes and commercial spaces for over a decade. Our approach combines timeless design principles with
                contemporary innovation.
              </p>
              <p>
                We believe that great design should be both beautiful and functional, reflecting the unique personality
                and lifestyle of each client. Every project is a collaborative journey where your vision meets our
                expertise.
              </p>
              <p>
                Our team of experienced designers brings together diverse backgrounds in architecture, fine arts, and
                interior design to create spaces that are not just visually stunning, but truly livable.
              </p>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/placeholder.svg?height=600&width=500"
              alt="Interior design studio"
              width={500}
              height={600}
              className="w-full h-96 lg:h-[500px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
