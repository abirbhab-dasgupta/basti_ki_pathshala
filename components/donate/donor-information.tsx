"use client"

import { Input } from "@/components/ui/input"

interface DonorInfo {
  donorName: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  pincode: string
  panNumber: string
}

interface DonorInformationProps {
  donorInfo: DonorInfo
  onInfoChange: (field: keyof DonorInfo, value: string) => void
}

export default function DonorInformation({ donorInfo, onInfoChange }: DonorInformationProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-gray-900">Donor Information</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-900">Full Name *</label>
          <Input
            placeholder="Enter your full name"
            value={donorInfo.donorName}
            onChange={(e) => onInfoChange("donorName", e.target.value)}
            className="bg-white border-gray-300 focus:border-[#FF6B35] focus:ring-[#FF6B35]"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-900">Email Address *</label>
          <Input
            type="email"
            placeholder="Enter your email"
            value={donorInfo.email}
            onChange={(e) => onInfoChange("email", e.target.value)}
            className="bg-white border-gray-300 focus:border-[#FF6B35] focus:ring-[#FF6B35]"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-900">Phone Number *</label>
          <Input
            placeholder="Enter your phone number"
            value={donorInfo.phone}
            onChange={(e) => onInfoChange("phone", e.target.value)}
            className="bg-white border-gray-300 focus:border-[#FF6B35] focus:ring-[#FF6B35]"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-900">PAN Number (for 80G receipt)</label>
          <Input
            placeholder="Enter PAN number"
            value={donorInfo.panNumber}
            onChange={(e) => onInfoChange("panNumber", e.target.value.toUpperCase())}
            className="bg-white border-gray-300 focus:border-[#FF6B35] focus:ring-[#FF6B35]"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-900">Address</label>
        <Input
          placeholder="Enter your address"
          value={donorInfo.address}
          onChange={(e) => onInfoChange("address", e.target.value)}
          className="bg-white border-gray-300 focus:border-[#FF6B35] focus:ring-[#FF6B35]"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-900">City</label>
          <Input
            placeholder="City"
            value={donorInfo.city}
            onChange={(e) => onInfoChange("city", e.target.value)}
            className="bg-white border-gray-300 focus:border-[#FF6B35] focus:ring-[#FF6B35]"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-900">State</label>
          <Input
            placeholder="State"
            value={donorInfo.state}
            onChange={(e) => onInfoChange("state", e.target.value)}
            className="bg-white border-gray-300 focus:border-[#FF6B35] focus:ring-[#FF6B35]"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-900">PIN Code</label>
          <Input
            placeholder="PIN Code"
            value={donorInfo.pincode}
            onChange={(e) => onInfoChange("pincode", e.target.value)}
            className="bg-white border-gray-300 focus:border-[#FF6B35] focus:ring-[#FF6B35]"
          />
        </div>
      </div>
    </div>
  )
}
