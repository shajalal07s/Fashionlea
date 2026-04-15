"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Lightbulb, Users, Zap } from "lucide-react";

export default function CompanyProfilePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Fashionlea</h1>
          <p className="text-lg md:text-xl text-gray-300">
            Your Ultimate Destination for Fashion & Beauty Products
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 md:py-16 px-5 md:px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">About Fashionlea</h2>
            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
              Fashionlea is Bangladesh's premier online shopping destination for fashion and beauty enthusiasts. Founded with a vision to bring quality beauty and fashion products within everyone's reach, we have grown into a trusted brand serving thousands of customers across the country.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our mission is to provide authentic, high-quality products at competitive prices with exceptional customer service. We believe in making shopping convenient, affordable, and enjoyable for every customer.
            </p>
          </div>
          <div className="relative h-96 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-5xl font-bold mb-2">৳</h3>
                <p className="text-xl font-semibold">Quality Products</p>
                <p className="text-sm">Best Prices</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-12 md:py-16 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
            Our Mission & Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Lightbulb className="w-10 h-10 text-yellow-500 mr-3" />
                <h3 className="text-2xl font-bold text-black">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To deliver premium fashion and beauty products to every corner of Bangladesh, providing an unparalleled shopping experience with complete transparency, quick delivery, and exceptional customer support.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Zap className="w-10 h-10 text-yellow-500 mr-3" />
                <h3 className="text-2xl font-bold text-black">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To become the most trusted and innovative online beauty and fashion retailer in South Asia, known for quality products, affordable prices, and customer-centric service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 px-5 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
          Why Choose Fashionlea?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: CheckCircle,
              title: "Authentic Products",
              description: "100% genuine and quality-assured beauty and fashion items",
            },
            {
              icon: Users,
              title: "Customer First",
              description: "24/7 customer support ready to assist with any queries",
            },
            {
              icon: Zap,
              title: "Fast Delivery",
              description: "Swift delivery across Bangladesh with multiple payment options",
            },
            {
              icon: CheckCircle,
              title: "Best Prices",
              description: "Competitive pricing with regular discounts and exclusive offers",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-yellow-500">
              <item.icon className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-black mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products Categories */}
      <section className="bg-gray-50 py-12 md:py-16 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
            Our Product Categories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Makeup", emoji: "💄", link: "/makeup" },
              { name: "Skincare", emoji: "🧴", link: "/skin-care" },
              { name: "Haircare", emoji: "💇", link: "/hair-care" },
              { name: "Oral Care", emoji: "🪥", link: "/oral-care" },
              { name: "Home Care", emoji: "🧹", link: "/home-care" },
              { name: "Special Offers", emoji: "🎉", link: "/sale" },
            ].map((category) => (
              <Link
                key={category.name}
                href={category.link}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center group"
              >
                <p className="text-4xl mb-3">{category.emoji}</p>
                <h3 className="text-xl font-bold text-black group-hover:text-yellow-500 transition-colors">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-black text-white py-12 md:py-16 px-5 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          {[
            { number: "10K+", label: "Happy Customers" },
            { number: "500+", label: "Products Available" },
            { number: "24/7", label: "Customer Support" },
            { number: "৳", label: "Best Prices Guaranteed" },
          ].map((stat, index) => (
            <div key={index}>
              <p className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">
                {stat.number}
              </p>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 px-5 md:px-8 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Ready to Shop?
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Explore our wide range of fashion and beauty products today!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/shop"
            className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-600 transition-colors"
          >
            Shop Now
          </Link>
          <Link
            href="/contact-us"
            className="bg-black text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors border border-black"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
