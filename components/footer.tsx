"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  CheckCircle,
  Mail,
  Phone,
  Target,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
  AlertCircle,
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface FooterProps {
  scrollToSection: (sectionId: string) => void
}

export default function Footer({ scrollToSection }: FooterProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email.trim()) {
      setErrorMessage("Email address is required")
      setSubmitStatus("error")
      return
    }

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address")
      setSubmitStatus("error")
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Here you would typically send the email to your backend
      console.log("Newsletter subscription:", email)

      setSubmitStatus("success")
      setEmail("") // Clear the input

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitStatus("idle")
      }, 3000)
    } catch (error) {
      setSubmitStatus("error")
      setErrorMessage("Failed to subscribe. Please try again.")
      console.error("Newsletter subscription error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="Basti Ki Pathshala Foundation Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <h3 className="text-2xl font-bold text-[#FF6B35]">Basti Ki Pathshala Foundation</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering every child to thrive through quality education and community support in underserved areas.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <CheckCircle className="h-4 w-4 text-[#FF6B35]" />
              <span>Registered under Indian Societies Act, 1860</span>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#FF6B35]">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button onClick={() => scrollToSection("home")} className="hover:text-[#FF6B35] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")} className="hover:text-[#FF6B35] transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("impact")} className="hover:text-[#FF6B35] transition-colors">
                  Our Impact
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("volunteer")} className="hover:text-[#FF6B35] transition-colors">
                  Volunteer
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF6B35] transition-colors">
                  Programs
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#FF6B35]">Contact Us</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#FF6B35]" />
                <span>info@bastikipathshala.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#FF6B35]" />
                <span>+91 1234567890</span>
              </div>
              <div className="flex items-start space-x-2">
                <Target className="h-4 w-4 text-[#FF6B35] mt-1" />
                <div>
                  <div>123 NGO Office</div>
                  <div>New Delhi, India 110001</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#FF6B35]">Connect With Us</h4>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-[#FF6B35] cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-[#FF6B35] cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-[#FF6B35] cursor-pointer transition-colors" />
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-[#FF6B35] cursor-pointer transition-colors" />
            </div>

            <div className="space-y-3">
              <div className="text-sm font-semibold">Stay Updated</div>
              <p className="text-xs text-gray-400">
                Get our monthly newsletter with impact stories and volunteer opportunities.
              </p>

              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="flex">
                  <Input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      if (submitStatus === "error") {
                        setSubmitStatus("idle")
                        setErrorMessage("")
                      }
                    }}
                    className={`bg-gray-800 border-gray-700 text-white placeholder-gray-400 rounded-r-none focus:border-[#FF6B35] ${
                      submitStatus === "error" ? "border-red-500" : ""
                    }`}
                    disabled={isSubmitting}
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting || !email.trim()}
                    className="bg-[#FF6B35] hover:bg-[#E55A2B] rounded-l-none disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                  </Button>
                </div>

                {submitStatus === "error" && (
                  <div className="flex items-center text-red-400 text-xs">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    {errorMessage}
                  </div>
                )}

                {submitStatus === "success" && (
                  <div className="flex items-center text-green-400 text-xs">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Successfully subscribed to our newsletter!
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              Copyright © 2025 - Basti Ki Pathshala Foundation. All rights reserved. Making education accessible for
              all.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-[#FF6B35] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#FF6B35] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#FF6B35] transition-colors">
                Transparency
              </a>
            </div>
          </div>

          <div className="text-center mt-6 text-gray-500 text-sm italic">
            {`"Education is the most powerful weapon which you can use to change the world." - Nelson Mandela`}
          </div>

          {/* Disclaimer */}
          <div className="text-center mt-6 pt-6 border-t border-gray-800">
            <p className="text-gray-500 text-sm italic">
              This is an assignment project, this is not the original website of the NGO
            </p>
          </div>
          {/* Creator Information */}
          <div className="text-center mt-4 pt-4 border-t border-gray-800">
            <p className="text-gray-400 text-sm mb-3">
              Created by <span className="text-[#FF6B35] font-semibold">Abirbhab Dasgupta</span>
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/abirbhab-dasgupta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#FF6B35] transition-colors flex items-center space-x-1"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/abirbhab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#FF6B35] transition-colors flex items-center space-x-1"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:abirbhab00dasgupta@gmail.com"
                className="text-gray-400 hover:text-[#FF6B35] transition-colors flex items-center space-x-1"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.749L12 10.724l9.615-6.903h.749c.904 0 1.636.732 1.636 1.636z" />
                </svg>
                <span>Gmail</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
