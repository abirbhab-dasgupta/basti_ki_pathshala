"use client"

import React, { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import DonationHero from "@/components/donate/donation-hero"
import DonationForm from "@/components/donate/donation-form"
import DonationSummary from "@/components/donate/donation-summary"

interface DonationFormData {
  amount: string
  customAmount: string
  frequency: "one-time" | "monthly" | "yearly"
  donorName: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  pincode: string
  panNumber: string
  paymentMethod: string
  isAnonymous: boolean
  agreeToTerms: boolean
}

export default function DonatePage() {
  const [currentAmount, setCurrentAmount] = useState("")
  const [currentFrequency, setCurrentFrequency] = useState<"one-time" | "monthly" | "yearly">("one-time")
  const [formData, setFormData] = useState<DonationFormData>({
    amount: "",
    customAmount: "",
    frequency: "one-time",
    donorName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    panNumber: "",
    paymentMethod: "",
    isAnonymous: false,
    agreeToTerms: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const predefinedAmounts = [
    { amount: "500", impact: "Provides books for 2 children" },
    { amount: "1000", impact: "Sponsors meals for 10 children" },
    { amount: "2500", impact: "Funds a teacher for 1 week" },
    { amount: "5000", impact: "Supports a classroom for 1 month" },
    { amount: "10000", impact: "Sponsors education for 5 children" },
    { amount: "25000", impact: "Funds a complete learning center" },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleAmountSelect = (amount: string) => {
    setCurrentAmount(amount)
    setFormData((prev) => ({ ...prev, amount, customAmount: "" }))
  }

  const handleCustomAmount = (value: string) => {
    setCurrentAmount("custom")
    setFormData((prev) => ({ ...prev, customAmount: value, amount: "" }))
  }

  const handleInputChange = (field: keyof DonationFormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  // Wrapper for frequency change
  const handleFrequencyChange = (value: "one-time" | "monthly" | "yearly") => {
    handleInputChange("frequency", value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000))
      console.log("Donation submitted:", formData)
      // Here you would integrate with payment gateway
      alert("Thank you for your donation! Redirecting to payment gateway...")
    } catch (error) {
      console.error("Donation error:", error)
      alert("There was an error processing your donation. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const getCurrentAmount = () => {
    return currentAmount === "custom" ? formData.customAmount : formData.amount
  }

  return (
    <div className="min-h-screen bg-[#FDF6E3]">
      <Navigation scrollToSection={scrollToSection} />

      <DonationHero />

      {/* Donation Form Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Donation Form */}
            <div className="lg:col-span-2">
              <DonationForm
                onAmountChange={handleAmountSelect}
                onFrequencyChange={handleFrequencyChange}
              />
            </div>

            {/* Donation Summary & Trust Indicators */}
            <div>
              <DonationSummary amount={getCurrentAmount()} frequency={formData.frequency} />
            </div>
          </div>
        </div>
      </section>

      <Footer scrollToSection={scrollToSection} />
    </div>
  )
}
