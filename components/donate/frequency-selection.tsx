"use client"

import { Gift, Heart, Star } from "lucide-react"

interface FrequencySelectionProps {
  selectedFrequency: string
  onFrequencyChange: (frequency: string) => void
}

export default function FrequencySelection({ selectedFrequency, onFrequencyChange }: FrequencySelectionProps) {
  const frequencies = [
    { value: "one-time", label: "One Time", icon: Gift },
    { value: "monthly", label: "Monthly", icon: Heart },
    { value: "yearly", label: "Yearly", icon: Star },
  ]

  return (
    <div className="space-y-4">
      <label className="text-sm font-semibold text-gray-900">Donation Frequency</label>
      <div className="grid grid-cols-3 gap-4">
        {frequencies.map((freq) => (
          <button
            key={freq.value}
            type="button"
            onClick={() => onFrequencyChange(freq.value)}
            className={`p-4 rounded-lg border-2 text-center transition-all ${
              selectedFrequency === freq.value
                ? "border-[#FF6B35] bg-[#FF6B35]/10"
                : "border-gray-200 hover:border-[#FF6B35]/50"
            }`}
          >
            <freq.icon className="h-6 w-6 mx-auto mb-2 text-[#FF6B35]" />
            <div className="font-medium">{freq.label}</div>
          </button>
        ))}
      </div>
    </div>
  )
}
