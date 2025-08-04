"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Heart } from "lucide-react"
import { useState } from "react"

import AmountSelection from "./amount-selection"
import FrequencySelection from "./frequency-selection"
import DonorInformation from "./donor-information"
import PaymentMethod from "./payment-method"

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

interface DonationFormProps {
  onAmountChange: (amount: string) => void
  onFrequencyChange: (frequency: "one-time" | "monthly" | "yearly") => void
}

export default function DonationForm({ onAmountChange, onFrequencyChange }: DonationFormProps) {
  const [selectedAmount, setSelectedAmount] = useState("")
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

  const handleAmountSelect = (amount: string) => {
    setSelectedAmount(amount)
    setFormData((prev) => ({ ...prev, amount, customAmount: "" }))
    onAmountChange(amount)
  }

  const handleCustomAmount = (value: string) => {
    setSelectedAmount("custom")
    setFormData((prev) => ({ ...prev, customAmount: value, amount: "" }))
    onAmountChange(value)
  }

  const handleFrequencyChange = (frequency: string) => {
    setFormData((prev) => ({ ...prev, frequency: frequency as any }))
    onFrequencyChange(frequency as "one-time" | "monthly" | "yearly")
  }

  const handleInputChange = (field: keyof DonationFormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleDonorInfoChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
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
    return selectedAmount === "custom" ? formData.customAmount : formData.amount
  }

  return (
    <Card className="p-8 shadow-xl border-0">
      <CardContent className="p-0">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Donation Amount</h2>
          <p className="text-gray-600">Select an amount or enter a custom donation</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Amount Selection */}
          <AmountSelection
            selectedAmount={selectedAmount}
            customAmount={formData.customAmount}
            onAmountSelect={handleAmountSelect}
            onCustomAmountChange={handleCustomAmount}
          />

          {/* Frequency Selection */}
          <FrequencySelection selectedFrequency={formData.frequency} onFrequencyChange={handleFrequencyChange} />

          {/* Donor Information */}
          <DonorInformation
            donorInfo={{
              donorName: formData.donorName,
              email: formData.email,
              phone: formData.phone,
              address: formData.address,
              city: formData.city,
              state: formData.state,
              pincode: formData.pincode,
              panNumber: formData.panNumber,
            }}
            onInfoChange={handleDonorInfoChange}
          />

          {/* Payment Method */}
          <PaymentMethod
            selectedMethod={formData.paymentMethod}
            onMethodChange={(method) => handleInputChange("paymentMethod", method)}
          />

          {/* Checkboxes */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Checkbox
                id="anonymous"
                checked={formData.isAnonymous}
                onCheckedChange={(checked) => handleInputChange("isAnonymous", checked as boolean)}
                className="border-gray-400 data-[state=checked]:bg-[#FF6B35] data-[state=checked]:border-[#FF6B35]"
              />
              <label htmlFor="anonymous" className="text-gray-700 cursor-pointer">
                Make this donation anonymous
              </label>
            </div>

            <div className="flex items-center space-x-3">
              <Checkbox
                id="terms"
                checked={formData.agreeToTerms}
                onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                className="border-gray-400 data-[state=checked]:bg-[#FF6B35] data-[state=checked]:border-[#FF6B35]"
              />
              <label htmlFor="terms" className="text-gray-700 cursor-pointer">
                I agree to the terms and conditions and privacy policy
              </label>
            </div>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting || !getCurrentAmount() || !formData.agreeToTerms}
            className="w-full bg-[#FF6B35] hover:bg-[#E55A2B] text-white py-4 text-lg font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Processing Donation...
              </>
            ) : (
              <>
                <Heart className="mr-2 h-5 w-5" />
                Donate ₹{getCurrentAmount()} {formData.frequency !== "one-time" && `(${formData.frequency})`}
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
