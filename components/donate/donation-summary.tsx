import { Card, CardContent } from "@/components/ui/card"
import { Shield, CheckCircle } from "lucide-react"

interface DonationSummaryProps {
  amount: string
  frequency: string
}

export default function DonationSummary({ amount, frequency }: DonationSummaryProps) {
  return (
    <div className="space-y-6">
      {/* Donation Summary */}
      <Card className="p-6 bg-[#FDF6E3] border-0 shadow-lg sticky top-6">
        <CardContent className="p-0 space-y-4">
          <h3 className="text-xl font-bold text-gray-900">Donation Summary</h3>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Amount:</span>
              <span className="font-semibold">₹{amount || "0"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Frequency:</span>
              <span className="font-semibold capitalize">{frequency.replace("-", " ")}</span>
            </div>
            <div className="border-t pt-3">
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span className="text-[#FF6B35]">₹{amount || "0"}</span>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <div className="flex items-center text-green-700 mb-2">
              <Shield className="h-4 w-4 mr-2" />
              <span className="font-semibold">80G Tax Benefit</span>
            </div>
            <p className="text-green-600 text-sm">
              Your donation is eligible for 50% tax deduction under Section 80G of the Income Tax Act.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Trust Indicators */}
      <Card className="p-6 border-0 shadow-lg">
        <CardContent className="p-0 space-y-4">
          <h3 className="text-lg font-bold text-gray-900">Why Donate With Us?</h3>

          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <div>
                <div className="font-semibold text-gray-900">100% Transparency</div>
                <div className="text-sm text-gray-600">Track how your donation is used</div>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <div>
                <div className="font-semibold text-gray-900">Secure Payments</div>
                <div className="text-sm text-gray-600">SSL encrypted & PCI compliant</div>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <div>
                <div className="font-semibold text-gray-900">Tax Benefits</div>
                <div className="text-sm text-gray-600">80G certified for tax deductions</div>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <div>
                <div className="font-semibold text-gray-900">Direct Impact</div>
                <div className="text-sm text-gray-600">Funds go directly to programs</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
