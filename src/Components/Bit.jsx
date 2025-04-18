

import { Menu, X, MapPin, Phone, Mail, Clock, Facebook, Twitter, LinkedinIcon as LinkedIn } from "lucide-react"


import { useState } from "react"
function Bit() {
   // Mock product data
   const [isMenuOpen, setIsMenuOpen] = useState(false)
  

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">NARANG MACHINERY STORE</h1>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-yellow-400">
            Home
          </a>
          <a href="#products" className="hover:text-yellow-400">
            Products
          </a>
          <a href="#about" className="hover:text-yellow-400">
            About Us
          </a>
          <a href="#contact" className="hover:text-yellow-400">
            Contact
          </a>
        </nav>
        <button variant="ghost" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white p-4">
          <nav className="flex flex-col space-y-2">
            <a href="#" className="hover:text-yellow-400">
              Home
            </a>
            <a href="#products" className="hover:text-yellow-400">
              Products
            </a>
            <a href="#about" className="hover:text-yellow-400">
              About Us
            </a>
            <a href="#contact" className="hover:text-yellow-400">
              Contact
            </a>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-gray-800 text-white py-20 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">NBC BEARINGS & GREASE</h2>
            <p className="mb-6">Your trusted partner for high-quality industrial bearings and grease solutions.</p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black">Learn More</button>
          </div>
          <div className="md:w-1/2">
            <img src="/placeholder.svg" alt="NBC Bearing" width={500} height={500} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section id="products" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {["Ball Bearings", "Roller Bearings", "Industrial Grease", "Maintenance Products"].map((product) => (
              <div key={product} className="bg-white rounded-lg shadow-md p-6">
                <img src="/placeholder.svg" alt={product} width={200} height={200} className="mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">{product}</h3>
                <p className="text-gray-600 mb-4">High-quality {product.toLowerCase()} for industrial applications.</p>
                <button variant="outline">View Details</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Genuine NBC Products",
                icon: <img src="/placeholder.svg" alt="Genuine" width={50} height={50} />,
              },
              {
                title: "Wide Range of Bearings",
                icon: <img src="/placeholder.svg" alt="Wide Range" width={50} height={50} />,
              },
              {
                title: "Expert Technical Support",
                icon: <img src="/placeholder.svg" alt="Support" width={50} height={50} />,
              },
              { title: "Quick Delivery", icon: <img src="/placeholder.svg" alt="Delivery" width={50} height={50} /> },
            ].map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">We ensure the best quality and service for our customers.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="bg-gray-800 text-white py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">About Narang Machinery Store</h2>
          <p className="text-center mb-10">
            With over 20 years of experience, Narang Machinery Store has been a leading supplier of NBC Bearings and
            industrial grease products. Our commitment to quality and customer satisfaction has made us a trusted
            partner in the industry.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">20+ Years</h3>
              <p>of Industry Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">1000+</h3>
              <p>Satisfied Customers</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">100%</h3>
              <p>Quality Assurance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <form className="space-y-4">
                <input placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <input placeholder="Subject" />
                <input placeholder="Your Message" />
                <button className="w-full">Send Message</button>
              </form>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="mr-2" />
                <p>123 Machinery Street, Industrial Area, City, Country</p>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2" />
                <p>+1 234 567 8900</p>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2" />
                <p>info@narangmachinery.com</p>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2" />
                <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
              </div>
              <div className="h-64 bg-gray-300 rounded-lg">
                {/* Replace with actual map component */}
                <p className="text-center pt-20">Map goes here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Narang Machinery Store</h3>
            <p>Your one-stop shop for NBC Bearings and industrial grease solutions.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="hover:text-yellow-400">
                Home
              </a>
              <a href="#products" className="hover:text-yellow-400">
                Products
              </a>
              <a href="#about" className="hover:text-yellow-400">
                About Us
              </a>
              <a href="#contact" className="hover:text-yellow-400">
                Contact
              </a>
            </nav>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p>123 Machinery Street, Industrial Area, City, Country</p>
            <p>Phone: +1 234 567 8900</p>
            <p>Email: info@narangmachinery.com</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-400">
                <Facebook />
              </a>
              <a href="#" className="hover:text-yellow-400">
                <Twitter />
              </a>
              <a href="#" className="hover:text-yellow-400">
                <LinkedIn />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 Narang Machinery Store. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Bit