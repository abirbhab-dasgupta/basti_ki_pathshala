"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

interface NavigationProps {
  scrollToSection: (sectionId: string) => void
}

export default function Navigation({ scrollToSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-[#FDF6E3] py-4 px-6 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="Basti Ki Pathshala Foundation Logo"
            width={50}
            height={50}
            className="rounded-lg"
          />
          <div className="text-2xl font-bold text-[#FF6B35]">Basti Ki Pathshala</div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <button
            onClick={() => scrollToSection("home")}
            className="text-gray-700 hover:text-[#FF6B35] transition-colors font-medium"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-700 hover:text-[#FF6B35] transition-colors font-medium"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection("impact")}
            className="text-gray-700 hover:text-[#FF6B35] transition-colors font-medium"
          >
            Impact
          </button>
          <button
            onClick={() => scrollToSection("volunteer")}
            className="text-gray-700 hover:text-[#FF6B35] transition-colors font-medium"
          >
            Volunteer
          </button>
          <Button className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white px-6 py-2 rounded-lg">
          <Link href="/donate">
             Donate
             </Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-[#FF6B35]">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 py-4 mt-4">
          <div className="flex flex-col space-y--dasgupta4">
            <button
              onClick={() => {
                scrollToSection("home")
                setIsMenuOpen(false)
              }}
              className="text-gray-700 hover:text-[#FF6B35] transition-colors font-medium text-left"
            >
              Home
            </button>
            <button
              onClick={() => {
                scrollToSection("about")
                setIsMenuOpen(false)
              }}
              className="text-gray-700 hover:text-[#FF6B35] transition-colors font-medium text-left"
            >
              About Us
            </button>
            <button
              onClick={() => {
                scrollToSection("impact")
                setIsMenuOpen(false)
              }}
              className="text-gray-700 hover:text-[#FF6B35] transition-colors font-medium text-left"
            >
              Our Impact
            </button>
            <button
              onClick={() => {
                scrollToSection("volunteer")
                setIsMenuOpen(false)
              }}
              className="text-gray-700 hover:text-[#FF6B35] transition-colors font-medium text-left"
            >
              Volunteer
            </button>
            <Button className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white px-6 py-2 rounded-lg w-fit">
             <Link href="/donate">
             Donate Now
             </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
