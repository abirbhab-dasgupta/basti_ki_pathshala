"use client"

import { Button } from "@/components/ui/button"
import { Heart, HandHeart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-yellow-50 to-orange-50 min-h-screen flex items-center"
    >
      <div className="absolute inset-0 bg-white/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                We Work Together—
                <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  Empowering Every Child to Thrive
                </span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
                At Basti Ki Pathshala Foundation, our mission is to break the barriers of education in underserved
                communities by providing quality education to children living in slum areas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("volunteer")}
                size="lg"
                className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white px-8 py-4 text-lg font-medium transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <HandHeart className="mr-2 h-5 w-5" />
                Become a Volunteer
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white px-8 py-4 text-lg font-medium transform hover:scale-105 transition-all duration-200 bg-transparent"
              >
                <Heart className="mr-2 h-5 w-5" />
                <Link href="/donate">
             Donate Now
             </Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">31K+</div>
                <div className="text-sm text-gray-600">Lives Changed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600">29K+</div>
                <div className="text-sm text-gray-600">Meals Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">19K+</div>
                <div className="text-sm text-gray-600">Interns</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600">10K+</div>
                <div className="text-sm text-gray-600">Supporters</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/heroImage.jpg"
                alt="Children learning together"
                width={600}
                height={500}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-white rounded-lg p-4 shadow-lg transform -rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Education Active</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white rounded-lg p-4 shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-xs">Commitment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
