import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-stone-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-wide text-stone-800 mb-4">Get In Touch</h2>
          <div className="w-24 h-px bg-stone-400 mx-auto mb-8"></div>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Ready to start your design journey? We'd love to hear from you and discuss how we can bring your vision to
            life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <Mail className="h-8 w-8 text-stone-600 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-stone-800 mb-2">Email</h3>
            <p className="text-stone-600">hello@hausofbanstead.com</p>
          </div>

          <div className="text-center">
            <Phone className="h-8 w-8 text-stone-600 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-stone-800 mb-2">Phone</h3>
            <p className="text-stone-600">+1 (555) 123-4567</p>
          </div>

          <div className="text-center">
            <MapPin className="h-8 w-8 text-stone-600 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-stone-800 mb-2">Studio</h3>
            <p className="text-stone-600">Banstead, Surrey, UK</p>
          </div>
        </div>

        <div className="text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-stone-600 hover:text-stone-800 transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-stone-600 hover:text-stone-800 transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-stone-600 hover:text-stone-800 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>

          <div className="w-32 h-px bg-stone-400 mx-auto mb-8"></div>

          <p className="text-stone-500 text-sm">© 2024 Haus of Banstead. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
