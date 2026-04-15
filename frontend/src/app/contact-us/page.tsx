"use client";

import { Mail, Phone, MapPin, Facebook } from "lucide-react";

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-5 md:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-black mb-4 text-center">Contact Us</h1>
        <p className="text-gray-600 text-lg mb-8 text-center">
          We’re here to help! Reach out to us with any questions, feedback, or support needs.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <h2 className="text-xl font-bold text-black mb-3 flex items-center gap-2">
              <Mail className="w-6 h-6 text-yellow-500" /> Email
            </h2>
            <p className="text-gray-700 mb-4">support@fashionlea.com</p>
            <h2 className="text-xl font-bold text-black mb-3 flex items-center gap-2">
              <Phone className="w-6 h-6 text-yellow-500" /> Phone
            </h2>
            <p className="text-gray-700 mb-4">+880 1234-567890</p>
            <h2 className="text-xl font-bold text-black mb-3 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-yellow-500" /> Address
            </h2>
            <p className="text-gray-700">Dhaka, Bangladesh</p>
          </div>
          <div>
            <form className="space-y-5">
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Name</label>
                <input type="text" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-yellow-500" placeholder="Your Name" required />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Email</label>
                <input type="email" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-yellow-500" placeholder="you@email.com" required />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Message</label>
                <textarea className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-yellow-500" rows={4} placeholder="How can we help you?" required />
              </div>
              <button type="submit" className="w-full bg-yellow-500 text-black font-bold py-2 rounded hover:bg-yellow-600 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="text-center mt-8">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-2.5 rounded-full transition-colors"
          >
            <Facebook className="w-5 h-5" /> Facebook
          </a>
        </div>
      </div>
    </div>
  );
}
