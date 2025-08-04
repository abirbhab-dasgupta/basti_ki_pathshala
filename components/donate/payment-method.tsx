"use client"

import { CreditCard, Smartphone, Building } from "lucide-react"

interface PaymentMethodProps {
  selectedMethod: string
  onMethodChange: (method: string) => void
}

export default function PaymentMethod({ selectedMethod, onMethodChange }: PaymentMethodProps) {
  const methods = [
    { value: "card", label: "Credit/Debit Card", icon: CreditCard },
    { value: "upi", label: "UPI", icon: Smartphone },
    { value: "netbanking", label: "Net Banking", icon: Building },
  ]

  return (
    <div className="space-y-4">
      <label className="text-sm font-semibold text-gray-900">Payment Method</label>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {methods.map((method) => (
          <button
            key={method.value}
            type="button"
            onClick={() => onMethodChange(method.value)}
            className={`p-4 rounded-lg border-2 text-center transition-all ${
              selectedMethod === method.value
                ? "border-[#FF6B35] bg-[#FF6B35]/10"
                : "border-gray-200 hover:border-[#FF6B35]/50"
            }`}
          >
            <method.icon className="h-6 w-6 mx-auto mb-2 text-[#FF6B35]" />
            <div className="font-medium text-sm">{method.label}</div>
          </button>
        ))}
      </div>
    </div>
  )
}
