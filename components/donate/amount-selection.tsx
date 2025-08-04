"use client"

import { Input } from "@/components/ui/input"

interface AmountSelectionProps {
  selectedAmount: string
  customAmount: string
  onAmountSelect: (amount: string) => void
  onCustomAmountChange: (value: string) => void
}

export default function AmountSelection({
  selectedAmount,
  customAmount,
  onAmountSelect,
  onCustomAmountChange,
}: AmountSelectionProps) {
  const predefinedAmounts = [
    { amount: "500", impact: "Provides books for 2 children" },
    { amount: "1000", impact: "Sponsors meals for 10 children" },
    { amount: "2500", impact: "Funds a teacher for 1 week" },
    { amount: "5000", impact: "Supports a classroom for 1 month" },
    { amount: "10000", impact: "Sponsors education for 5 children" },
    { amount: "25000", impact: "Funds a complete learning center" },
  ]

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {predefinedAmounts.map((item) => (
          <button
            key={item.amount}
            type="button"
            onClick={() => onAmountSelect(item.amount)}
            className={`p-4 rounded-lg border-2 text-left transition-all ${
              selectedAmount === item.amount
                ? "border-[#FF6B35] bg-[#FF6B35]/10"
                : "border-gray-200 hover:border-[#FF6B35]/50"
            }`}
          >
            <div className="text-2xl font-bold text-[#FF6B35] mb-1">₹{item.amount}</div>
            <div className="text-xs text-gray-600">{item.impact}</div>
          </button>
        ))}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-900">Custom Amount</label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
          <Input
            type="number"
            placeholder="Enter amount"
            value={customAmount}
            onChange={(e) => onCustomAmountChange(e.target.value)}
            className="pl-8 bg-white border-gray-300 focus:border-[#FF6B35] focus:ring-[#FF6B35]"
          />
        </div>
      </div>
    </div>
  )
}
