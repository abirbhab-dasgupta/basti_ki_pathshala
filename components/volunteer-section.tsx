"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { useState } from "react"

interface FormData {
  fullName: string
  email: string
  phone: string
  interests: string[]
  availability: string
  experience: string
  motivation: string
}

interface FormErrors {
  fullName?: string
  email?: string
  phone?: string
  availability?: string
  interests?: string
}

export default function VolunteerSection() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    interests: [],
    availability: "",
    experience: "",
    motivation: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [submitMessage, setSubmitMessage] = useState("")

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Required field validations
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.availability) {
      newErrors.availability = "Please select your availability"
    }

    if (formData.interests.length === 0) {
      newErrors.interests = "Please select at least one area of interest"
    }

    if (formData.phone && !/^[+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid phone number"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInterestChange = (interest: string, checked: boolean) => {
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        interests: [...prev.interests, interest],
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        interests: prev.interests.filter((i) => i !== interest),
      }))
    }

    // Clear interests error when user selects an interest
    if (checked && errors.interests) {
      setErrors((prev) => ({ ...prev, interests: undefined }))
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))

    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Here you would typically send the data to your backend
      console.log("Form submitted:", formData)

      setSubmitStatus("success")
      setSubmitMessage("Thank you for your application! We'll review it and get back to you within 5-7 business days.")

      // Reset form after successful submission
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        interests: [],
        availability: "",
        experience: "",
        motivation: "",
      })
    } catch (error) {
      setSubmitStatus("error")
      setSubmitMessage("Sorry, there was an error submitting your application. Please try again.")
      console.error("Submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const interestOptions = [
    "Teaching & Tutoring",
    "Meal Programs",
    "Event Organization",
    "Administrative Support",
    "Fundraising",
    "Mentorship",
    "Technology Support",
    "Creative Arts",
  ]

  return (
    <section id="volunteer" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Become a <span className="text-[#FF6B35]">Volunteer</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join our community of changemakers and help us create lasting impact in education. Your skills and passion
            can transform lives.
          </p>
        </div>

        <Card className="p-8 bg-[#FDF6E3] border-0 shadow-xl">
          <CardContent className="p-0">
            {submitStatus === "success" ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
                <h3 className="text-2xl font-bold text-gray-900">Application Submitted!</h3>
                <p className="text-gray-600 max-w-md mx-auto">{submitMessage}</p>
                <Button onClick={() => setSubmitStatus("idle")} className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white">
                  Submit Another Application
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-900">
                      Full Name <span className="text-[#FF6B35]">*</span>
                    </label>
                    <Input
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      className={`bg-white border-gray-300 focus:border-[#FF6B35] focus:ring-[#FF6B35] ${
                        errors.fullName ? "border-red-500" : ""
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-900">
                      Email Address <span className="text-[#FF6B35]">*</span>
                    </label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={`bg-white border-gray-300 focus:border-[#FF6B35] focus:ring-[#FF6B35] ${
                        errors.email ? "border-red-500" : ""
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-900">Phone Number</label>
                  <Input
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className={`bg-white border-gray-300 focus:border-[#FF6B35] focus:ring-[#FF6B35] ${
                      errors.phone ? "border-red-500" : ""
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div className="space-y-4">
                  <label className="text-sm font-semibold text-gray-900">
                    Areas of Interest <span className="text-[#FF6B35]">*</span> (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {interestOptions.map((interest) => (
                      <div key={interest} className="flex items-center space-x-3">
                        <Checkbox
                          id={interest}
                          checked={formData.interests.includes(interest)}
                          onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                          className="border-gray-400 data-[state=checked]:bg-[#FF6B35] data-[state=checked]:border-[#FF6B35]"
                        />
                        <label htmlFor={interest} className="text-gray-700 cursor-pointer">
                          {interest}
                        </label>
                      </div>
                    ))}
                  </div>
                  {errors.interests && (
                    <p className="text-red-500 text-sm flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.interests}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-900">
                    Availability <span className="text-[#FF6B35]">*</span>
                  </label>
                  <Select
                    value={formData.availability}
                    onValueChange={(value) => handleInputChange("availability", value)}
                  >
                    <SelectTrigger
                      className={`bg-white border-gray-300 focus:border-[#FF6B35] focus:ring-[#FF6B35] ${
                        errors.availability ? "border-red-500" : ""
                      }`}
                    >
                      <SelectValue placeholder="Select your availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weekends">Weekends</SelectItem>
                      <SelectItem value="weekdays">Weekdays</SelectItem>
                      <SelectItem value="evenings">Evenings</SelectItem>
                      <SelectItem value="mornings">Mornings</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.availability && (
                    <p className="text-red-500 text-sm flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.availability}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-900">Relevant Experience</label>
                  <Textarea
                    placeholder="Tell us about any relevant experience you have..."
                    value={formData.experience}
                    onChange={(e) => handleInputChange("experience", e.target.value)}
                    className="bg-white border-gray-300 focus:border-[#FF6B35] focus:ring-[#FF6B35] min-h-[100px]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-900">Why do you want to volunteer with us?</label>
                  <Textarea
                    placeholder="Share your motivation and how you'd like to contribute..."
                    value={formData.motivation}
                    onChange={(e) => handleInputChange("motivation", e.target.value)}
                    className="bg-white border-gray-300 focus:border-[#FF6B35] focus:ring-[#FF6B35] min-h-[100px]"
                  />
                </div>

                {submitStatus === "error" && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center">
                      <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                      <p className="text-red-700">{submitMessage}</p>
                    </div>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#FF6B35] hover:bg-[#E55A2B] text-white py-4 text-lg font-semibold rounded-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting Application...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Submit Application
                    </>
                  )}
                </Button>

                <p className="text-center text-gray-600 text-sm">
                  {"We'll"} review your application and get back to you within 5-7 business days.
                </p>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
